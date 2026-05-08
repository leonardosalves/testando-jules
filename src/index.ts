export interface Env {
  IMAGES_BUCKET: R2Bucket;
  AUTH_SECRET: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // Upload image endpoint
    if (path === '/upload' && request.method === 'POST') {
      return handleUpload(request, env);
    }

    // Get image endpoint
    if (path.startsWith('/image/') && request.method === 'GET') {
      return handleGetImage(request, env);
    }

    return new Response('Not Found', { status: 404 });
  },
};

async function handleUpload(request: Request, env: Env): Promise<Response> {
  try {
    // Check authentication
    const auth = request.headers.get('Authorization');
    const expectedAuth = `Bearer ${env.AUTH_SECRET}`;
    if (!auth || auth !== expectedAuth) {
      return new Response('Unauthorized', { status: 401 });
    }

    const contentType = request.headers.get('Content-Type') || '';

    if (!contentType.includes('multipart/form-data')) {
      return new Response('Invalid content type', { status: 400 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return new Response('No file provided', { status: 400 });
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return new Response('Only image files are allowed', { status: 400 });
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return new Response('File size too large (max 10MB)', { status: 400 });
    }

    // Generate unique filename
    const fileExtension = file.type.split('/')[1];
    const uniqueFilename = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExtension}`;

    // Upload to R2
    await env.IMAGES_BUCKET.put(uniqueFilename, file.stream(), {
      httpMetadata: {
        contentType: file.type,
      },
    });

    // Return the URL
    const imageUrl = `${new URL(request.url).origin}/image/${uniqueFilename}`;

    return new Response(JSON.stringify({ url: imageUrl }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    console.error('Upload error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}

async function handleGetImage(request: Request, env: Env): Promise<Response> {
  try {
    const url = new URL(request.url);
    const filename = url.pathname.replace('/image/', '');

    const object = await env.IMAGES_BUCKET.get(filename);

    if (!object) {
      return new Response('Image not found', { status: 404 });
    }

    const headers = new Headers();
    headers.set('Content-Type', object.httpMetadata?.contentType || 'image/jpeg');
    headers.set('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year

    return new Response(object.body, { headers });

  } catch (error) {
    console.error('Get image error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}