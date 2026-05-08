// Utility function for debouncing expensive operations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const context = this;
        const later = () => {
            clearTimeout(timeout);
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Mapeamento de marcas para modelos de carros
const carModels = {
    "Toyota": ["Corolla", "Camry", "Hilux", "Etios", "RAV4", "Yaris", "Prius", "SW4"],
    "Honda": ["Civic", "Fit", "City", "HR-V", "WR-V", "CR-V"],
    "Ford": ["Ka", "Fiesta", "Focus", "EcoSport", "Ranger", "Mustang"],
    "Chevrolet": ["Onix", "Prisma", "Cruze", "Tracker", "Spin", "S10"],
    "Volkswagen": ["Gol", "Polo", "Virtus", "T-Cross", "Nivus", "Jetta", "Golf"],
    "BMW": ["Série 1", "Série 3", "X1", "X3", "X5"],
    "Mercedes-Benz": ["Classe A", "Classe C", "Classe E", "GLA", "GLE"],
    "Audi": ["A1", "A3", "A4", "Q3", "Q5"],
    "Fiat": ["Uno", "Mobi", "Argo", "Cronos", "Toro", "Pulse"],
    "Renault": ["Kwid", "Sandero", "Logan", "Duster", "Captur"],
    "Peugeot": ["208", "308", "2008", "3008", "5008"],
    "Citroën": ["C3", "C4", "C4 Cactus", "Aircross"],
    "Mitsubishi": ["L200", "Pajero", "Outlander", "ASX"],
    "Nissan": ["March", "Versa", "Kicks", "Sentra", "Frontier"],
    "Hyundai": ["HB20", "Creta", "Tucson", "Santa Fe"],
    "Kia": ["Picanto", "Cerato", "Sportage", "Sorento"],
    "Volvo": ["XC40", "XC60", "XC90", "S60"],
    "Land Rover": ["Range Rover Evoque", "Discovery Sport", "Defender"],
    "Jeep": ["Compass", "Renegade", "Commander"],
    "Chrysler": ["300C", "Pacifica"],
    "Dodge": ["Journey", "Durango"],
    "Subaru": ["Forester", "Outback", "XV"],
    "Suzuki": ["Jimny", "Vitara", "S-Cross"],
    "Mazda": ["Mazda2", "Mazda3", "CX-30", "CX-5"],
    "Lexus": ["UX", "NX", "RX", "ES"],
    "Porsche": ["911", "Cayenne", "Macan", "Panamera"],
    "Infiniti": ["Q50", "QX50", "QX60"],
    "BYD": ["Han", "Tang", "Song"],
    "Tesla": ["Model 3", "Model Y", "Model S", "Model X"],
    "Lucid": ["Air"],
    "Polestar": ["2", "3"],
    "Cupra": ["Formentor", "Ateca", "Leon"],
    "DS": ["DS 3 Crossback", "DS 7 Crossback"],
    "Mini": ["Cooper", "Countryman", "Clubman"],
    "Alfa Romeo": ["Giulia", "Stelvio", "Tonale"],
    "Aston Martin": ["Vantage", "DB11", "DBS"],
    "Bentley": ["Continental GT", "Bentayga", "Flying Spur"],
    "Ferrari": ["488", "812", "Portofino", "Roma"],
    "Lamborghini": ["Huracan", "Urus", "Aventador"],
    "McLaren": ["720S", "Artura", "GT"],
    "Rolls-Royce": ["Ghost", "Dawn", "Cullinan"],
    "Opel": ["Corsa", "Astra", "Crossland", "Grandland"],
    "Saab": ["9-3", "9-5"],
    "Cadillac": ["XT4", "XT5", "XT6", "CT5"],
    "Buick": ["Enclave", "Encore GX"],
    "GMC": ["Terrain", "Acadia"],
    "Lincoln": ["Corsair", "Aviator", "Navigator"],
    "MG": ["ZS", "HS"],
    "Maxus": ["T60", "T70"],
    "JAC": ["T40", "T5", "T6", "T8"],
    "Chery": ["Tiggo 2", "Tiggo 5", "Tiggo 7", "Tiggo 8"],
    "Dongfeng": ["AX7", "IX5"],
    "FAW": ["Bestune T77", "Bestune T99"],
    "Great Wall": ["Haval H6", "Haval Jolion", "Pao"],
};

// Função para atualizar modelos baseado na marca selecionada
function updateCarModels() {
    const brandInput = document.getElementById('carBrand');
    const modelInput = document.getElementById('carModel');
    const modelDatalist = document.getElementById('modelList');

    if (brandInput && modelInput && modelDatalist) {
        const selectedBrand = brandInput.value;

        // Limpar opções anteriores
        modelDatalist.innerHTML = '';

        if (selectedBrand && carModels[selectedBrand]) {
            // Adicionar novas opções
            carModels[selectedBrand].forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                modelDatalist.appendChild(option);
            });

            // Limpar modelo selecionado se não pertencer à marca
            if (modelInput.value && !carModels[selectedBrand].includes(modelInput.value)) {
                modelInput.value = '';
            }

            // Atualizar placeholder
            modelInput.placeholder = 'Selecione um modelo...';
        } else {
            // Se nenhuma marca válida selecionada
            modelInput.placeholder = 'Selecione uma marca primeiro...';
            modelInput.value = '';
        }
    }
}

// Dados de exemplo para demonstração
const demoCars = [
    {
        id: 1,
        title: "Toyota Corolla 2022",
        brand: "Toyota",
        model: "Corolla",
        year: 2022,
        price: 125000,
        mileage: 35000,
        fuel: "Flex",
        transmission: "Automático",
        color: "Prata",
        description: "Corolla 2022 em excelente estado, único dono, revisões em dia na concessionária.",
        features: ["Ar-condicionado", "Vidro elétrico", "Trava elétrica", "Airbag", "ABS"],
        image: "https://images.unsplash.com/photo-1621217907727-2b5a74d3e2a9?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Honda Civic 2021",
        brand: "Honda",
        model: "Civic",
        year: 2021,
        price: 118000,
        mileage: 42000,
        fuel: "Flex",
        transmission: "Manual",
        color: "Preto",
        description: "Honda Civic 2021, completo, com sistema de som original e faróis de LED.",
        features: ["Ar-condicionado", "Vidro elétrico", "Piloto automático", "Som original"],
        image: "https://images.unsplash.com/photo-1590479678048-250d8c4c5d2e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Ford Ranger 2020",
        brand: "Ford",
        model: "Ranger",
        year: 2020,
        price: 185000,
        mileage: 58000,
        fuel: "Diesel",
        transmission: "Automático",
        color: "Branco",
        description: "Ford Ranger 2020 4x4, cabine dupla, ideal para trabalho e lazer.",
        features: ["4x4", "Cabine dupla", "Trailer brake", "Ar-condicionado digital"],
        image: "https://images.unsplash.com/photo-1583390786285-478a0b29e3fc?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Chevrolet Cruze 2019",
        brand: "Chevrolet",
        model: "Cruze",
        year: 2019,
        price: 95000,
        mileage: 65000,
        fuel: "Flex",
        transmission: "Automático",
        color: "Cinza",
        description: "Chevrolet Cruze 2019, sedan médio, econômico e confortável.",
        features: ["Ar-condicionado", "Computador de bordo", "Vidro elétrico"],
        image: "https://images.unsplash.com/photo-1549618295-5a0e76d8e9d2?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "Volkswagen Golf 2018",
        brand: "Volkswagen",
        model: "Golf",
        year: 2018,
        price: 105000,
        mileage: 72000,
        fuel: "Flex",
        transmission: "Manual",
        color: "Vermelho",
        description: "Volkswagen Golf 2018, hatch médio esportivo, desempenho e elegância.",
        features: ["Sport", "Ar-condicionado", "Direção elétrica", "Teto solar"],
        image: "https://images.unsplash.com/photo-1541447271487-2e70359d4131?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "BMW Série 3 2020",
        brand: "BMW",
        model: "Série 3",
        year: 2020,
        price: 245000,
        mileage: 38000,
        fuel: "Flex",
        transmission: "Automático",
        color: "Azul",
        description: "BMW Série 3 2020, sedan premium, acabamento de primeira qualidade.",
        features: ["Teto solar", "Banco de couro", "Piloto automático", "Navegação"],
        image: "https://images.unsplash.com/photo-1555216619-3decf8a245b7?auto=format&fit=crop&w=800&q=80"
    }
];

const demoHouses = [
    {
        id: 1,
        title: "Casa em Condomínio - Porto Alegre",
        type: "Casa",
        location: "Porto Alegre",
        price: 850000,
        bedrooms: 4,
        bathrooms: 3,
        area: 180,
        totalArea: 320,
        description: "Linda casa em condomínio fechado com amplo espaço e área de lazer.",
        features: ["Piscina", "Garagem para 3 carros", "Jardim", "Área gourmet"],
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Apartamento Centro - São Paulo",
        type: "Apartamento",
        location: "São Paulo",
        price: 1250000,
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        totalArea: 120,
        description: "Apartamento novo no centro, próximo a tudo que você precisa.",
        features: ["Vista panorâmica", "Elevador", "Segurança 24h", "Academia"],
        image: "https://images.unsplash.com/photo-1522706600309-4df2b2b1c0e8?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Sobrado Laje - Florianópolis",
        type: "Sobrado",
        location: "Florianópolis",
        price: 1100000,
        bedrooms: 4,
        bathrooms: 4,
        area: 200,
        totalArea: 250,
        description: "Sobrado em laje com vista para o mar, localização privilegiada.",
        features: ["Laje com churrasqueira", "Vista mar", "Garagem coberta"],
        image: "https://images.unsplash.com/photo-1600596542815-e281c4b2e5c8?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Terreno Urbano - Curitiba",
        type: "Terreno",
        location: "Curitiba",
        price: 350000,
        bedrooms: 0,
        bathrooms: 0,
        area: 500,
        totalArea: 500,
        description: "Terreno plano em área residencial, ideal para construir.",
        features: ["Plano", "Asfalto", "Linha de ônibus", "Supermercado próximo"],
        image: "https://images.unsplash.com/photo-1500382017468-9030d732e4da?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "Casa de Campo - Gramado",
        type: "Casa",
        location: "Gramado",
        price: 980000,
        bedrooms: 5,
        bathrooms: 4,
        area: 250,
        totalArea: 1000,
        description: "Casa de campo com lago e bosque, perfeita para lazer em família.",
        features: ["Lago", "Bosque", "Churrasqueira grande", "Perto do centro"],
        image: "https://images.unsplash.com/photo-1518759694708-36a7f31746c9?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "Flat Luxo - Balneário Camboriú",
        type: "Flat",
        location: "Balneário Camboriú",
        price: 750000,
        bedrooms: 2,
        bathrooms: 2,
        area: 95,
        totalArea: 95,
        description: "Flat decorado com vista para o mar, pronto para morar ou investir.",
        features: ["Vista mar", "Decorado", "Mobiliado", "Elevador"],
        image: "https://images.unsplash.com/photo-1502672260266-47c0c8b3a1a5?auto=format&fit=crop&w=800&q=80"
    }
];

// Armazenamento local
let cars, houses;

try {
    cars = JSON.parse(localStorage.getItem('cars')) || demoCars;
    houses = JSON.parse(localStorage.getItem('houses')) || demoHouses;

    // Validar dados carregados
    if (!Array.isArray(cars) || !Array.isArray(houses)) {
        throw new Error('Dados inválidos no localStorage');
    }

    // Verificar se cada item tem propriedades necessárias
    cars.forEach((car, index) => {
        if (!car.id || !car.title || !car.image) {
            throw new Error(`Carro ${index} tem dados inválidos`);
        }
    });

    houses.forEach((house, index) => {
        if (!house.id || !house.title || !house.image) {
            throw new Error(`Casa ${index} tem dados inválidos`);
        }
    });

} catch (error) {
    console.warn('Erro ao carregar dados do localStorage, usando dados demo:', error);
    cars = [...demoCars];
    houses = [...demoHouses];
    localStorage.setItem('cars', JSON.stringify(cars));
    localStorage.setItem('houses', JSON.stringify(houses));
}

// URLs do Worker (ALTERE ESTAS URLs APÓS O DEPLOY)
const WORKER_UPLOAD_URL = 'https://SEU-WORKER.workers.dev/upload';
const WORKER_AUTH_SECRET = 'CHANGE_THIS_SECRET_TO_A_STRONG_RANDOM_STRING'; // Mesmo valor do wrangler.toml

// Função para upload de imagem para o Worker
async function uploadImageToWorker(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(WORKER_UPLOAD_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${WORKER_AUTH_SECRET}`
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Upload failed: ${response.statusText}`);
        }

        const result = await response.json();
        return result.url;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
}

// Função para processar múltiplas imagens (upload para Worker)
async function processImagesForUpload(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return [];

    const imageItems = container.querySelectorAll('.image-upload-item');
    const uploadedUrls = [];

    for (const item of imageItems) {
        const input = item.querySelector('input[type="file"]');
        const preview = item.querySelector('img.image-preview');

        if (input && input.files && input.files[0]) {
            // Upload do arquivo
            try {
                const url = await uploadImageToWorker(input.files[0]);
                uploadedUrls.push(url);
            } catch (error) {
                console.error('Failed to upload image:', error);
                // Fallback para URL externa se disponível
                if (preview && preview.src && preview.src.startsWith('http') && !preview.src.includes('data:')) {
                    uploadedUrls.push(preview.src);
                }
            }
        } else if (preview && preview.src && preview.src.startsWith('http') && !preview.src.includes('data:')) {
            // URL externa já definida
            uploadedUrls.push(preview.src);
        }
    }

    return uploadedUrls;
}

// Função para resetar dados (debug)
function resetData() {
    localStorage.removeItem('cars');
    localStorage.removeItem('houses');
    cars = [...demoCars];
    houses = [...demoHouses];
    localStorage.setItem('cars', JSON.stringify(cars));
    localStorage.setItem('houses', JSON.stringify(houses));
    updateDashboardStats();
    if (typeof renderCarsGrid === 'function') renderCarsGrid();
    if (typeof renderHousesGrid === 'function') renderHousesGrid();
    if (typeof renderAdminCars === 'function') renderAdminCars();
    if (typeof renderAdminHouses === 'function') renderAdminHouses();
    alert('Dados resetados para demo!');
}

// Tornar função global para debug
window.resetData = resetData;

// Reusable formatter instance for better performance
const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

// Formata preço
function formatPrice(price) {
    return priceFormatter.format(price);
}

function isSold(item) {
    return !!(item && item.sold === true);
}

// Cria card de carro
function createCarCard(car) {
    const soldBadge = isSold(car) ? `<span class="sold-badge">Vendido</span>` : '';
    return `
        <div class="item-card" data-id="${car.id}">
            <div class="item-image">
                <a href="car-detail.html?id=${car.id}" aria-label="Ver detalhes de ${car.title}">
                    <img src="${car.image}" alt="${car.title}" loading="lazy">
                </a>
                ${soldBadge}
            </div>
            <div class="item-content">
                <h3>${car.title}</h3>
                <div class="item-features">
                    <span>${car.year}</span>
                    <span>${car.mileage.toLocaleString()} km</span>
                    <span>${car.transmission}</span>
                </div>
                <p class="item-price">${formatPrice(car.price)}</p>
                <a href="car-detail.html?id=${car.id}" class="item-link">
                    Ver detalhes <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
}

// Cria card de casa
function createHouseCard(house) {
    const soldBadge = isSold(house) ? `<span class="sold-badge">Vendido</span>` : '';
    return `
        <div class="item-card" data-id="${house.id}">
            <div class="item-image">
                <a href="house-detail.html?id=${house.id}" aria-label="Ver detalhes de ${house.title}">
                    <img src="${house.image}" alt="${house.title}" loading="lazy">
                </a>
                ${soldBadge}
            </div>
            <div class="item-content">
                <h3>${house.title}</h3>
                <div class="item-features">
                    <span>${house.bedrooms} quartos</span>
                    <span>${house.area}m²</span>
                    <span>${house.location}</span>
                </div>
                <p class="item-price">${formatPrice(house.price)}</p>
                <a href="house-detail.html?id=${house.id}" class="item-link">
                    Ver detalhes <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
}

// Renderiza itens na página inicial
function renderFeaturedItems() {
    const featuredContainer = document.getElementById('featuredItems');
    if (featuredContainer) {
        const allItems = [...demoCars.slice(0, 4), ...demoHouses.slice(0, 2)];
        let html = '';
        allItems.forEach(item => {
            if (item.brand) {
                html += createCarCard(item);
            } else {
                html += createHouseCard(item);
            }
        });
        featuredContainer.innerHTML = html;
    }
}

// Renderiza grade de carros
function renderCarsGrid(filteredCars = null) {
    const carsGrid = document.getElementById('carsGrid');
    if (carsGrid) {
        const carsToShow = filteredCars || cars;
        carsGrid.innerHTML = carsToShow.map(createCarCard).join('');
    }
}

// Renderiza grade de casas
function renderHousesGrid(filteredHouses = null) {
    const housesGrid = document.getElementById('housesGrid');
    if (housesGrid) {
        const housesToShow = filteredHouses || houses;
        housesGrid.innerHTML = housesToShow.map(createHouseCard).join('');
    }
}

// Renderiza detalhes do carro
function renderCarDetail() {
    const detailContainer = document.getElementById('productDetail');
    if (detailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const carId = parseInt(urlParams.get('id'));
        const car = cars.find(c => c.id === carId);

        if (car) {
            document.title = `${car.title} - MoisAuto Agenciador`;

            // Usar múltiplas imagens se disponíveis, senão usar a imagem principal
            const images = car.images && car.images.length > 0 ? car.images : [car.image];

            // Criar thumbnails dinamicamente
            const thumbsHtml = images.slice(0, 4).map(img => `<img src="${img}" alt="${car.title}" onclick="changeMainImage('${img}')">`).join('');

            const soldHtml = isSold(car)
                ? `<div class="sold-detail-badge">Vendido</div>`
                : '';

            const ctaHtml = isSold(car)
                ? `<div class="sold-cta">Este anúncio foi vendido.</div>`
                : `<a href="https://wa.me/5551980578310?text=Olá, estou interessado no ${car.title}" class="whatsapp-btn" target="_blank">
                        <i class="fab fa-whatsapp"></i> Fazer Oferta
                   </a>`;

            detailContainer.innerHTML = `
                <div class="container">
                    <div class="product-gallery">
                        <div class="gallery-main">
                            ${soldHtml}
                            <img id="mainImage" src="${images[0]}" alt="${car.title}">
                        </div>
                        <div class="gallery-thumbs">
                            ${thumbsHtml}
                        </div>
                    </div>
                    <div class="product-info">
                        <h2>${car.title}</h2>
                        <p class="product-price">${formatPrice(car.price)}</p>

                        <div class="ad-share-actions" style="margin: 10px 0 16px;">
                            <div style="font-weight:800; margin-bottom:8px;">Anunciar este carro</div>
                            <div style="display:flex; flex-wrap:wrap; gap:10px;">
                                <button class="btn-share" type="button" onclick="abrirCardModal()">
                                    <i class="fas fa-mobile-alt"></i> GERAR CARD STORIES (NOVO)
                                </button>
                                <button class="btn btn-primary" type="button" onclick="downloadAdPng('car', ${car.id}, '1080x1350')">
                                    <i class="fas fa-image"></i> INSTAGRAM / WHATS APP / THREADS
                                </button>
                                <button class="btn btn-secondary" type="button" onclick="downloadAdPng('car', ${car.id}, '1200x800')">
                                    <i class="fas fa-photo-video"></i> FEED FACEBOOK
                                </button>
                                <button class="btn btn-outline" type="button" onclick="copyAdText('car', ${car.id})">
                                    <i class="fas fa-copy"></i> Copiar texto (WhatsApp)
                                </button>
                            </div>
                        </div>

                        <div class="product-specs">
                            <div class="spec-item">
                                <span class="label">Ano</span>
                                <span class="value">${car.year}</span>
                            </div>
                            <div class="spec-item">
                                <span class="label">Quilometragem</span>
                                <span class="value">${car.mileage.toLocaleString()} km</span>
                            </div>
                            <div class="spec-item">
                                <span class="label">Combustível</span>
                                <span class="value">${car.fuel}</span>
                            </div>
                            <div class="spec-item">
                                <span class="label">Câmbio</span>
                                <span class="value">${car.transmission}</span>
                            </div>
                            <div class="spec-item">
                                <span class="label">Cor</span>
                                <span class="value">${car.color}</span>
                            </div>
                        </div>
                        <h3>Descrição</h3>
                        <p class="product-description">${car.description}</p>
                        <h3>Características</h3>
                        <div class="item-features">
                            ${car.features.map(f => `<span>${f}</span>`).join('')}
                        </div>
                        ${ctaHtml}
                    </div>
                </div>
            `;
        }
    }
}

// Renderiza detalhes da casa
function renderHouseDetail() {
    const detailContainer = document.getElementById('houseDetail');
    if (detailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const houseId = parseInt(urlParams.get('id'));
        const house = houses.find(h => h.id === houseId);

        if (house) {
            document.title = `${house.title} - MoisAuto Agenciador`;

            // Usar múltiplas imagens se disponíveis, senão usar a imagem principal
            const images = house.images && house.images.length > 0 ? house.images : [house.image];

            // Criar thumbnails dinamicamente
            const thumbsHtml = images.slice(0, 4).map(img => `<img src="${img}" alt="${house.title}" onclick="changeMainImage('${img}')">`).join('');

            const soldHtml = isSold(house)
                ? `<div class="sold-detail-badge">Vendido</div>`
                : '';

            const ctaHtml = isSold(house)
                ? `<div class="sold-cta">Este anúncio foi vendido.</div>`
                : `<a href="https://wa.me/5551980578310?text=Olá, estou interessado na ${house.title}" class="whatsapp-btn" target="_blank">
                        <i class="fab fa-whatsapp"></i> Agendar Visita
                   </a>`;

            detailContainer.innerHTML = `
                <div class="container">
                    <div class="product-gallery">
                        <div class="gallery-main">
                            ${soldHtml}
                            <img id="mainImage" src="${images[0]}" alt="${house.title}">
                        </div>
                        <div class="gallery-thumbs">
                            ${thumbsHtml}
                        </div>
                    </div>
                    <div class="product-info">
                        <h2>${house.title}</h2>
                        <p class="product-price">${formatPrice(house.price)}</p>

                        <div class="ad-share-actions" style="margin: 10px 0 16px;">
                            <div style="font-weight:800; margin-bottom:8px;">Anunciar este imóvel</div>
                            <div style="display:flex; flex-wrap:wrap; gap:10px;">
                                <button class="btn-share" type="button" onclick="abrirCardModalHouse()">
                                    <i class="fas fa-mobile-alt"></i> GERAR CARD STORIES (NOVO)
                                </button>
                                <button class="btn btn-primary" type="button" onclick="downloadAdPng('house', ${house.id}, '1080x1350')">
                                    <i class="fas fa-image"></i> INSTAGRAM / WHATS APP / THREADS
                                </button>
                                <button class="btn btn-secondary" type="button" onclick="downloadAdPng('house', ${house.id}, '1200x800')">
                                    <i class="fas fa-photo-video"></i> FEED FACEBOOK
                                </button>
                                <button class="btn btn-outline" type="button" onclick="copyAdText('house', ${house.id})">
                                    <i class="fas fa-copy"></i> Copiar texto (WhatsApp)
                                </button>
                            </div>
                        </div>

                        <div class="product-specs">
                            <div class="spec-item">
                                <span class="label">Tipo</span>
                                <span class="value">${house.type}</span>
                            </div>
                            <div class="spec-item">
                                <span class="label">Quartos</span>
                                <span class="value">${house.bedrooms}</span>
                            </div>
                            <div class="spec-item">
                                <span class="label">Banheiros</span>
                                <span class="value">${house.bathrooms}</span>
                            </div>
                            <div class="spec-item">
                                <span class="label">Área</span>
                                <span class="value">${house.area}m²</span>
                            </div>
                            <div class="spec-item">
                                <span class="label">Localização</span>
                                <span class="value">${house.location}</span>
                            </div>
                        </div>
                        <h3>Descrição</h3>
                        <p class="product-description">${house.description}</p>
                        <h3>Características</h3>
                        <div class="item-features">
                            ${house.features.map(f => `<span>${f}</span>`).join('')}
                        </div>
                        ${ctaHtml}
                    </div>
                </div>
            `;
        }
    }
}

// Renderiza carros relacionados
function renderRelatedCars() {
    const relatedContainer = document.getElementById('relatedCars');
    if (relatedContainer) {
        const related = cars.slice(0, 3);
        relatedContainer.innerHTML = related.map(createCarCard).join('');
    }
}

// Renderiza casas relacionadas
function renderRelatedHouses() {
    const relatedContainer = document.getElementById('relatedHouses');
    if (relatedContainer) {
        const related = houses.slice(0, 3);
        relatedContainer.innerHTML = related.map(createHouseCard).join('');
    }
}

// Menu mobile
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    const menuToggle = document.getElementById('menuToggle');
    const icon = menuToggle ? menuToggle.querySelector('i') : null;

    if (navList) {
        const isActive = navList.classList.toggle('active');

        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', isActive);
            menuToggle.setAttribute('aria-label', isActive ? 'Fechar menu' : 'Abrir menu');

            if (icon) {
                if (isActive) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        }
    }
}

// Sistema de busca com autocomplete
const searchData = {
    cars: demoCars.map(c => ({ id: `car-${c.id}`, title: c.title, brand: c.brand, type: 'car', image: c.image })),
    houses: demoHouses.map(h => ({ id: `house-${h.id}`, title: h.title, location: h.location, type: 'house', image: h.image }))
};

function searchItems() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm) {
        // Filtra resultados
        const results = [...searchData.cars, ...searchData.houses].filter(item => 
            item.title.toLowerCase().includes(searchTerm) ||
            (item.brand && item.brand.toLowerCase().includes(searchTerm)) ||
            (item.location && item.location.toLowerCase().includes(searchTerm))
        );
        
        // Se temos resultados, redireciona para página apropriada
        if (results.length > 0) {
            const first = results[0];
            if (first.type === 'car') {
                window.location.href = `car-detail.html?id=${first.id.split('-')[1]}`;
            } else {
                window.location.href = `house-detail.html?id=${first.id.split('-')[1]}`;
            }
        }
        // Se não tem resultados, não faz nada (não mostra popup)
    }
}

// Autocomplete para busca
function setupSearchAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const autocompleteContainer = document.createElement('div');
    autocompleteContainer.className = 'search-autocomplete hidden';
    autocompleteContainer.id = 'searchAutocomplete';
    
    const searchExpanded = document.getElementById('searchExpanded');
    if (searchExpanded) {
        searchExpanded.parentNode.insertBefore(autocompleteContainer, searchExpanded.nextSibling);
    }
    
    searchInput.addEventListener('input', debounce(function() {
        const term = this.value.toLowerCase().trim();
        if (term.length < 2) {
            autocompleteContainer.classList.add('hidden');
            return;
        }
        
        const results = [...searchData.cars, ...searchData.houses]
            .filter(item => item.title.toLowerCase().includes(term) || 
                          (item.brand && item.brand.toLowerCase().includes(term)) ||
                          (item.location && item.location.toLowerCase().includes(term)))
            .slice(0, 5);
        
        if (results.length > 0) {
            autocompleteContainer.innerHTML = results.map(item => `
                <div class="autocomplete-item" onclick="goToItem('${item.type}', ${item.id.split('-')[1]})">
                    <img src="${item.image}" alt="${item.title}" style="height: 24px; width: auto;">
                    <span>${item.title}</span>
                </div>
            `).join('');
            autocompleteContainer.classList.remove('hidden');
        } else {
            autocompleteContainer.classList.add('hidden');
        }
    }, 300));
    
    document.addEventListener('click', e => {
        if (!e.target.closest('.search-box')) {
            autocompleteContainer.classList.add('hidden');
        }
    });
}

function goToItem(type, id) {
    if (type === 'car') {
        window.location.href = `car-detail.html?id=${id}`;
    } else {
        window.location.href = `house-detail.html?id=${id}`;
    }
}

// Evento para quando o input de busca receber foco (para animação do logo)
function setupSearchFocusEffect() {
    const searchInput = document.getElementById('searchInput');
    const logo = document.querySelector('.logo');
    
    if (searchInput && logo) {
        searchInput.addEventListener('focus', function() {
            logo.classList.add('search-active');
        });
        
        searchInput.addEventListener('blur', function() {
            logo.classList.remove('search-active');
        });
    }
}

/**
 * Admin - Múltiplas imagens (upload local ou URL)
 * Observação: este projeto é front-only. Upload local é convertido em preview (DataURL via FileReader)
 * e imagens por URL são persistidas como URL.
 */

// Adiciona um item de imagem baseado em URL (multiimagens)
function addImageFromUrl(type, containerId, url) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const safeUrl = (url || '').trim();
    if (!safeUrl) return;

    const inputClass = type === 'car' ? 'car-image-input' : 'house-image-input';

    const item = document.createElement('div');
    item.className = 'image-upload-item';
    item.innerHTML = `
        <input type="file" class="${inputClass}" accept=".jpg,.jpeg,.png">
        <img class="image-preview" src="${safeUrl}" alt="Preview">
        <button type="button" class="remove-image-btn" title="Remover imagem">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Preview já vem pronta (por URL), então não fica hidden
    const preview = item.querySelector('img.image-preview');
    if (preview) preview.classList.remove('hidden');

    item.querySelector('.remove-image-btn')?.addEventListener('click', () => {
        item.remove();
        // Atualiza "hidden" dos remove buttons para manter ao menos 1 item
        const items = container.querySelectorAll('.image-upload-item');
        items.forEach((it) => {
            const btn = it.querySelector('.remove-image-btn');
            if (!btn) return;
            if (items.length > 1) btn.classList.remove('hidden');
            else btn.classList.add('hidden');
        });
    });

    container.appendChild(item);

    // Ajusta botões remover
    const items = container.querySelectorAll('.image-upload-item');
    items.forEach((it) => {
        const btn = it.querySelector('.remove-image-btn');
        if (!btn) return;
        if (items.length > 1) btn.classList.remove('hidden');
        else btn.classList.add('hidden');
    });
}

// Admin functions
function showCarForm(id = null) {
    const modal = document.getElementById('carModal');
    const form = document.getElementById('carForm');
    const title = document.getElementById('carFormTitle');

    const carImagesContainer = document.getElementById('carImagesContainer');

    if (id) {
        const car = cars.find(c => c.id === id);
        if (car) {
            // marca modo edição para evitar duplicar no salvar
            form.dataset.editId = String(id);

            document.getElementById('carTitle').value = car.title;
            document.getElementById('carBrand').value = car.brand;
            document.getElementById('carModel').value = car.model;
            document.getElementById('carYear').value = car.year;
            document.getElementById('carPrice').value = car.price;
            document.getElementById('carMileage').value = car.mileage;
            document.getElementById('carFuel').value = car.fuel;
            document.getElementById('carTransmission').value = car.transmission;
            document.getElementById('carColor').value = car.color;
            document.getElementById('carDescription').value = car.description;
            document.getElementById('carFeatures').value = car.features.join(', ');

            // Pré-carrega imagens no sistema multi
            if (carImagesContainer) {
                const images = (car.images && car.images.length > 0) ? car.images : [car.image].filter(Boolean);

                carImagesContainer.innerHTML = images.length
                    ? images.map(img => `
                        <div class="image-upload-item">
                            <input type="file" class="car-image-input" accept=".jpg,.jpeg,.png">
                            <img class="image-preview" src="${img}" alt="Preview">
                            <button type="button" class="remove-image-btn" title="Remover imagem">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    `).join('')
                    : `
                        <div class="image-upload-item">
                            <input type="file" class="car-image-input" accept=".jpg,.jpeg,.png">
                            <img class="image-preview hidden" alt="Preview">
                            <button type="button" class="remove-image-btn hidden" title="Remover imagem">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    `;

                // Ajusta visibilidade dos remove buttons
                const items = carImagesContainer.querySelectorAll('.image-upload-item');
                items.forEach((item) => {
                    const removeBtn = item.querySelector('.remove-image-btn');
                    if (items.length > 1) removeBtn.classList.remove('hidden');
                    else removeBtn.classList.add('hidden');

                    // Habilita preview ao selecionar um novo arquivo
                    const input = item.querySelector('.car-image-input');
                    const preview = item.querySelector('.image-preview');
                    if (input && preview) {
                        input.addEventListener('change', function(e) {
                            const file = e.target.files && e.target.files[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = function(evt) {
                                    preview.src = evt.target.result;
                                    preview.classList.remove('hidden');
                                };
                                reader.readAsDataURL(file);
                            }
                        });
                    }

                    const removeBtnEl = item.querySelector('.remove-image-btn');
                    if (removeBtnEl) {
                        removeBtnEl.addEventListener('click', function() {
                            item.remove();
                            // Recalcula botões hidden
                            const remaining = carImagesContainer.querySelectorAll('.image-upload-item');
                            remaining.forEach((it) => {
                                const btn = it.querySelector('.remove-image-btn');
                                if (remaining.length > 1) btn.classList.remove('hidden');
                                else btn.classList.add('hidden');
                            });
                        });
                    }
                });
            }

            title.textContent = 'Editar Carro';
        }
    } else {
        // modo criar: remove editId
        form.dataset.editId = '';

        form.reset();
        title.textContent = 'Adicionar Novo Carro';

        if (carImagesContainer) {
            carImagesContainer.innerHTML = `
                <div class="image-upload-item">
                    <input type="file" class="car-image-input" accept=".jpg,.jpeg,.png" required>
                    <img class="image-preview hidden" alt="Preview">
                    <button type="button" class="remove-image-btn hidden" title="Remover imagem">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            // A attach do preview ocorre via initializeMultipleImages (DOM loaded) ou no submit quando reseta
        }
    }

    modal.classList.remove('hidden');
}

function showHouseForm(id = null) {
    const modal = document.getElementById('houseModal');
    const form = document.getElementById('houseForm');
    const title = document.getElementById('houseFormTitle');

    const houseImagesContainer = document.getElementById('houseImagesContainer');

    if (id) {
        const house = houses.find(h => h.id === id);
        if (house) {
            // modo edição para evitar duplicidade no salvar
            form.dataset.editId = String(id);

            // Preenche campos
            document.getElementById('houseTitle').value = house.title;
            document.getElementById('houseType').value = house.type || '';
            document.getElementById('houseLocation').value = house.location || '';
            document.getElementById('housePrice').value = house.price ?? '';
            document.getElementById('houseBedrooms').value = house.bedrooms ?? 0;
            document.getElementById('houseBathrooms').value = house.bathrooms ?? 0;
            document.getElementById('houseArea').value = house.area ?? 0;
            document.getElementById('houseTotalArea').value = house.totalArea ?? '';
            document.getElementById('houseDescription').value = house.description || '';
            document.getElementById('houseFeatures').value = (house.features || []).join(', ');

            // Pré-carrega imagens no sistema multi
            if (houseImagesContainer) {
                const images = (house.images && house.images.length > 0) ? house.images : [house.image].filter(Boolean);

                houseImagesContainer.innerHTML = images.length
                    ? images.map(img => `
                        <div class="image-upload-item">
                            <input type="file" class="house-image-input" accept=".jpg,.jpeg,.png">
                            <img class="image-preview" src="${img}" alt="Preview">
                            <button type="button" class="remove-image-btn" title="Remover imagem">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    `).join('')
                    : `
                        <div class="image-upload-item">
                            <input type="file" class="house-image-input" accept=".jpg,.jpeg,.png">
                            <img class="image-preview hidden" alt="Preview">
                            <button type="button" class="remove-image-btn hidden" title="Remover imagem">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    `;

                const items = houseImagesContainer.querySelectorAll('.image-upload-item');
                items.forEach((item) => {
                    const removeBtn = item.querySelector('.remove-image-btn');
                    if (items.length > 1) removeBtn.classList.remove('hidden');
                    else removeBtn.classList.add('hidden');

                    const input = item.querySelector('.house-image-input');
                    const preview = item.querySelector('.image-preview');

                    if (input && preview) {
                        input.addEventListener('change', function(e) {
                            const file = e.target.files && e.target.files[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = function(evt) {
                                    preview.src = evt.target.result;
                                    preview.classList.remove('hidden');
                                };
                                reader.readAsDataURL(file);
                            }
                        });
                    }

                    const removeBtnEl = item.querySelector('.remove-image-btn');
                    if (removeBtnEl) {
                        removeBtnEl.addEventListener('click', function() {
                            item.remove();
                            const remaining = houseImagesContainer.querySelectorAll('.image-upload-item');
                            remaining.forEach((it) => {
                                const btn = it.querySelector('.remove-image-btn');
                                if (remaining.length > 1) btn.classList.remove('hidden');
                                else btn.classList.add('hidden');
                            });
                        });
                    }
                });
            }

            title.textContent = 'Editar Casa';
        }
    } else {
        // modo criar
        form.dataset.editId = '';

        form.reset();
        title.textContent = 'Adicionar Nova Casa';

        if (houseImagesContainer) {
            houseImagesContainer.innerHTML = `
                <div class="image-upload-item">
                    <input type="file" class="house-image-input" accept=".jpg,.jpeg,.png" required>
                    <img class="image-preview hidden" alt="Preview">
                    <button type="button" class="remove-image-btn hidden" title="Remover imagem">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        }
    }

    modal.classList.remove('hidden');
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
}

/**
 * Admin CRUD (carros e casas) + status vendido
 * - Persistência: localStorage (cars/houses)
 * - UI: tabelas admin.html (#carsTable / #housesTable)
 */

// Helpers CRUD
function deleteCar(id) {
    cars = cars.filter(c => c.id !== id);
    localStorage.setItem('cars', JSON.stringify(cars));
    updateDashboardStats();
    renderAdminCars();
}

function deleteHouse(id) {
    houses = houses.filter(h => h.id !== id);
    localStorage.setItem('houses', JSON.stringify(houses));
    updateDashboardStats();
    renderAdminHouses();
}

function toggleSoldCar(id) {
    cars = cars.map(c => {
        if (c.id !== id) return c;
        const nextSold = !isSold(c);
        return { ...c, sold: nextSold, soldAt: nextSold ? Date.now() : null };
    });
    localStorage.setItem('cars', JSON.stringify(cars));
    updateDashboardStats();
    renderAdminCars();
    // também atualiza grade no caso do usuário estar na mesma aba
    if (typeof renderCarsGrid === 'function') renderCarsGrid();
}

function toggleSoldHouse(id) {
    houses = houses.map(h => {
        if (h.id !== id) return h;
        const nextSold = !isSold(h);
        return { ...h, sold: nextSold, soldAt: nextSold ? Date.now() : null };
    });
    localStorage.setItem('houses', JSON.stringify(houses));
    updateDashboardStats();
    renderAdminHouses();
    if (typeof renderHousesGrid === 'function') renderHousesGrid();
}

// Render da tabela + cards Admin
function renderAdminCars() {
    // Desktop table
    const tbody = document.getElementById('carsTable');
    if (tbody) {
        const rows = cars
            .slice()
            .sort((a, b) => b.id - a.id)
            .map(car => {
                const soldText = isSold(car) ? 'Vendido' : 'Ativo';
                const btnSoldText = isSold(car) ? 'Marcar como ativo' : 'Marcar como vendido';

                return `
                    <tr data-id="${car.id}">
                        <td>${car.id}</td>
                        <td>
                            <img src="${car.image}" alt="${car.title}" style="width: 50px; height: 35px; object-fit: cover;">
                            ${isSold(car) ? `<div style="color:#d9534f; font-weight:700; margin-top:4px;">${soldText}</div>` : ''}
                        </td>
                        <td>${car.title}</td>
                        <td>${formatPrice(car.price)}</td>
                        <td>${car.year}</td>
                        <td>
                            <button class="btn btn-outline" type="button" onclick="setCarEditing(${car.id}); showCarForm(${car.id})">
                                <i class="fas fa-pen"></i> Editar
                            </button>
                            <button class="btn btn-danger" type="button" onclick="deleteCar(${car.id})" style="margin-left:8px;">
                                <i class="fas fa-trash"></i> Excluir
                            </button>
                            <button class="btn btn-secondary" type="button" onclick="toggleSoldCar(${car.id})" style="margin-left:8px;">
                                <i class="fas fa-tag"></i> ${btnSoldText}
                            </button>
                        </td>
                    </tr>
                `;
            })
            .join('');

        tbody.innerHTML = rows || '';
    }

    // Mobile cards
    const cardsContainer = document.getElementById('carsCards');
    if (cardsContainer) {
        const cardsHtml = cars
            .slice()
            .sort((a, b) => b.id - a.id)
            .map(car => {
                const soldText = isSold(car) ? 'Vendido' : 'Ativo';
                const btnSoldText = isSold(car) ? 'Marcar como ativo' : 'Marcar como vendido';
                const badgeHtml = isSold(car)
                    ? `<span class="admin-sold-badge sold">Vendido</span>`
                    : `<span class="admin-sold-badge active">Ativo</span>`;

                return `
                    <div class="admin-card" data-id="${car.id}">
                        <div class="admin-card-top">
                            <img class="admin-card-img" src="${car.image}" alt="${car.title}">
                            <div class="admin-card-meta">
                                <div class="admin-card-title">${car.title}</div>
                                <div class="admin-card-sub">${formatPrice(car.price)}</div>
                                <div class="admin-card-sub">${car.year}</div>
                                ${badgeHtml}
                            </div>
                        </div>

                        <div class="admin-card-actions">
                            <button class="btn btn-outline" type="button" onclick="setCarEditing(${car.id}); showCarForm(${car.id})">
                                <i class="fas fa-pen"></i> Editar
                            </button>
                            <button class="btn btn-danger" type="button" onclick="deleteCar(${car.id})">
                                <i class="fas fa-trash"></i> Excluir
                            </button>
                            <button class="btn btn-secondary" type="button" onclick="toggleSoldCar(${car.id})">
                                <i class="fas fa-tag"></i> ${btnSoldText}
                            </button>
                        </div>
                    </div>
                `;
            })
            .join('');

        cardsContainer.innerHTML = cardsHtml || '';
        cardsContainer.classList.remove('hidden');
    }
}

function renderAdminHouses() {
    // Desktop table
    const tbody = document.getElementById('housesTable');
    if (tbody) {
        const rows = houses
            .slice()
            .sort((a, b) => b.id - a.id)
            .map(house => {
                const soldText = isSold(house) ? 'Vendido' : 'Ativo';
                const btnSoldText = isSold(house) ? 'Marcar como ativo' : 'Marcar como vendido';

                return `
                    <tr data-id="${house.id}">
                        <td>${house.id}</td>
                        <td>
                            <img src="${house.image}" alt="${house.title}" style="width: 50px; height: 35px; object-fit: cover;">
                            ${isSold(house) ? `<div style="color:#d9534f; font-weight:700; margin-top:4px;">${soldText}</div>` : ''}
                        </td>
                        <td>${house.title}</td>
                        <td>${formatPrice(house.price)}</td>
                        <td>${house.location}</td>
                        <td>
                            <button class="btn btn-outline" type="button" onclick="setHouseEditing(${house.id}); showHouseForm(${house.id})">
                                <i class="fas fa-pen"></i> Editar
                            </button>
                            <button class="btn btn-danger" type="button" onclick="deleteHouse(${house.id})" style="margin-left:8px;">
                                <i class="fas fa-trash"></i> Excluir
                            </button>
                            <button class="btn btn-secondary" type="button" onclick="toggleSoldHouse(${house.id})" style="margin-left:8px;">
                                <i class="fas fa-tag"></i> ${btnSoldText}
                            </button>
                        </td>
                    </tr>
                `;
            })
            .join('');

        tbody.innerHTML = rows || '';
    }

    // Mobile cards
    const cardsContainer = document.getElementById('housesCards');
    if (cardsContainer) {
        const cardsHtml = houses
            .slice()
            .sort((a, b) => b.id - a.id)
            .map(house => {
                const btnSoldText = isSold(house) ? 'Marcar como ativo' : 'Marcar como vendido';
                const badgeHtml = isSold(house)
                    ? `<span class="admin-sold-badge sold">Vendido</span>`
                    : `<span class="admin-sold-badge active">Ativo</span>`;

                return `
                    <div class="admin-card" data-id="${house.id}">
                        <div class="admin-card-top">
                            <img class="admin-card-img" src="${house.image}" alt="${house.title}">
                            <div class="admin-card-meta">
                                <div class="admin-card-title">${house.title}</div>
                                <div class="admin-card-sub">${formatPrice(house.price)}</div>
                                <div class="admin-card-sub">${house.location}</div>
                                ${badgeHtml}
                            </div>
                        </div>

                        <div class="admin-card-actions">
                            <button class="btn btn-outline" type="button" onclick="setHouseEditing(${house.id}); showHouseForm(${house.id})">
                                <i class="fas fa-pen"></i> Editar
                            </button>
                            <button class="btn btn-danger" type="button" onclick="deleteHouse(${house.id})">
                                <i class="fas fa-trash"></i> Excluir
                            </button>
                            <button class="btn btn-secondary" type="button" onclick="toggleSoldHouse(${house.id})">
                                <i class="fas fa-tag"></i> ${btnSoldText}
                            </button>
                        </div>
                    </div>
                `;
            })
            .join('');

        cardsContainer.innerHTML = cardsHtml || '';
        cardsContainer.classList.remove('hidden');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedItems();
    renderCarsGrid();
    renderHousesGrid();
    renderCarDetail();
    renderHouseDetail();
    renderRelatedCars();
    renderRelatedHouses();
    
    // Menu toggle
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Search
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', searchItems);
    }
    
    // Mobile search toggle
    const searchToggle = document.getElementById('searchToggle');
    const searchExpanded = document.getElementById('searchExpanded');
    if (searchToggle && searchExpanded) {
        searchToggle.addEventListener('click', () => {
            searchExpanded.classList.toggle('hidden');
            // Focus on input when opened
            if (!searchExpanded.classList.contains('hidden')) {
                searchInput.focus();
            }
        });
    }
    
    // Search autocomplete
    setupSearchAutocomplete();
    
    // Search focus effect
    setupSearchFocusEffect();
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', e => {
            if (e.key === 'Enter') searchItems();
        });
    }
    
    // Admin forms com upload de imagem
    const carForm = document.getElementById('carForm');
    if (carForm) {
        carForm.addEventListener('submit', async e => {
            e.preventDefault();

            // Mostrar loading
            const submitBtn = carForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Salvando...';
            submitBtn.disabled = true;

            try {
                // Criar objeto com dados do formulário
                const formData = {
                    title: document.getElementById('carTitle').value,
                    brand: document.getElementById('carBrand').value,
                    model: document.getElementById('carModel').value,
                    year: document.getElementById('carYear').value,
                    price: document.getElementById('carPrice').value,
                    mileage: document.getElementById('carMileage').value,
                    fuel: document.getElementById('carFuel').value,
                    transmission: document.getElementById('carTransmission').value,
                    color: document.getElementById('carColor').value,
                    description: document.getElementById('carDescription').value,
                    features: document.getElementById('carFeatures').value
                };

                const editId = carForm.dataset.editId ? Number(carForm.dataset.editId) : null;

                // Salvar carro (criar ou editar)
                const newCar = await saveCar(formData, editId);
                console.log('Carro salvo:', newCar);

                hideModal('carModal');
                carForm.reset();

                // Limpar múltiplas imagens
                const container = document.getElementById('carImagesContainer');
                if (container) {
                    container.innerHTML = `
                        <div class="image-upload-item">
                            <input type="file" class="car-image-input" accept=".jpg,.jpeg,.png" required>
                            <img class="image-preview hidden" alt="Preview">
                            <button type="button" class="remove-image-btn hidden" title="Remover imagem">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    `;
                    initializeMultipleImages('car', 'carImagesContainer', 'addCarImageBtn');
                }

                // Limpar modelos quando o formulário for resetado
                const modelDatalist = document.getElementById('modelList');
                if (modelDatalist) {
                    modelDatalist.innerHTML = '';
                }

            } catch (error) {
                console.error('Error saving car:', error);
                alert('Erro ao salvar carro. Tente novamente.');
            } finally {
                // Restaurar botão
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    // Botões para adicionar imagem via URL (sem servidor)
    const addCarImageUrlBtn = document.getElementById('addCarImageUrlBtn');
    const carImageUrlInput = document.getElementById('carImageUrlInput');
    if (addCarImageUrlBtn && carImageUrlInput) {
        addCarImageUrlBtn.addEventListener('click', () => {
            const url = carImageUrlInput.value;
            addImageFromUrl('car', 'carImagesContainer', url);
            carImageUrlInput.value = '';
        });
    }

    const addHouseImageUrlBtn = document.getElementById('addHouseImageUrlBtn');
    const houseImageUrlInput = document.getElementById('houseImageUrlInput');
    if (addHouseImageUrlBtn && houseImageUrlInput) {
        addHouseImageUrlBtn.addEventListener('click', () => {
            const url = houseImageUrlInput.value;
            addImageFromUrl('house', 'houseImagesContainer', url);
            houseImageUrlInput.value = '';
        });
    }

    const houseForm = document.getElementById('houseForm');
    if (houseForm) {
        houseForm.addEventListener('submit', async e => {
            e.preventDefault();

            // Mostrar loading
            const submitBtn = houseForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Salvando...';
            submitBtn.disabled = true;

            try {
                // Criar objeto com dados do formulário
                const formData = {
                    title: document.getElementById('houseTitle').value,
                    type: document.getElementById('houseType').value,
                    location: document.getElementById('houseLocation').value,
                    neighborhood: document.getElementById('houseNeighborhood')?.value || '',
                    city: document.getElementById('houseCity')?.value || '',
                    state: document.getElementById('houseState')?.value || '',
                    zipCode: document.getElementById('houseZipCode')?.value || '',
                    price: document.getElementById('housePrice').value,
                    bedrooms: document.getElementById('houseBedrooms').value,
                    bathrooms: document.getElementById('houseBathrooms').value,
                    area: document.getElementById('houseArea').value,
                    totalArea: document.getElementById('houseTotalArea').value || '',
                    description: document.getElementById('houseDescription').value,
                    features: document.getElementById('houseFeatures').value
                };

                const editId = houseForm.dataset.editId ? Number(houseForm.dataset.editId) : null;

                // Salvar casa (criar ou editar)
                const newHouse = await saveHouse(formData, editId);
                console.log('Casa salva:', newHouse);

                hideModal('houseModal');
                houseForm.reset();

                // Limpar múltiplas imagens
                const container = document.getElementById('houseImagesContainer');
                if (container) {
                    container.innerHTML = `
                        <div class="image-upload-item">
                            <input type="file" class="house-image-input" accept=".jpg,.jpeg,.png" required>
                            <img class="image-preview hidden" alt="Preview">
                            <button type="button" class="remove-image-btn hidden" title="Remover imagem">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    `;
                    initializeMultipleImages('house', 'houseImagesContainer', 'addHouseImageBtn');
                }

            } catch (error) {
                console.error('Error saving house:', error);
                alert('Erro ao salvar casa. Tente novamente.');
            } finally {
                // Restaurar botão
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Event listener para o campo CEP
    const houseZipCodeInput = document.getElementById('houseZipCode');
    if (houseZipCodeInput) {
        houseZipCodeInput.addEventListener('blur', () => {
            const cep = houseZipCodeInput.value;
            if (cep) {
                autoPreencherEndereco();
            }
        });

        // Formatação automática do CEP
        houseZipCodeInput.addEventListener('input', (e) => {
            e.target.value = formatarCEP(e.target.value);
        });
    }
    
    // Sistema de múltiplas imagens para carros
    initializeMultipleImages('car', 'carImagesContainer', 'addCarImageBtn');

    // Atualização automática de modelos baseado na marca selecionada
    const carBrandInput = document.getElementById('carBrand');
    if (carBrandInput) {
        carBrandInput.addEventListener('input', updateCarModels);
        carBrandInput.addEventListener('change', updateCarModels);
    }
    
    // Sistema de múltiplas imagens para casas
    initializeMultipleImages('house', 'houseImagesContainer', 'addHouseImageBtn');
    
    // Admin tabela (CRUD sold/excluir/editar)
    if (document.getElementById('carsTable')) renderAdminCars();
    if (document.getElementById('housesTable')) renderAdminHouses();

    // Admin navigation
    const adminNavLinks = document.querySelectorAll('.admin-nav a');
    adminNavLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1);
            
            document.querySelectorAll('.admin-content').forEach(section => {
                section.classList.add('hidden');
            });
            
            const targetSection = document.getElementById(target);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
            
            adminNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

// Função para consultar CEP via ViaCEP API
async function consultarCEP(cep) {
    // Remove caracteres não numéricos
    cep = cep.replace(/\D/g, '');

    // Verifica se o CEP tem 8 dígitos
    if (cep.length !== 8) {
        return null;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            throw new Error('CEP não encontrado');
        }

        return data;
    } catch (error) {
        console.error('Erro ao consultar CEP:', error);
        return null;
    }
}

// Função para formatar CEP
function formatarCEP(cep) {
    cep = cep.replace(/\D/g, '');
    if (cep.length > 5) {
        cep = cep.substring(0, 5) + '-' + cep.substring(5, 9);
    }
    return cep;
}

// Função para autopreencher endereço baseado no CEP
async function autoPreencherEndereco() {
    const cepInput = document.getElementById('houseZipCode');
    const locationInput = document.getElementById('houseLocation');
    const neighborhoodInput = document.getElementById('houseNeighborhood');
    const cityInput = document.getElementById('houseCity');
    const stateInput = document.getElementById('houseState');

    if (!cepInput || !locationInput) return;

    const cep = cepInput.value.replace(/\D/g, '');

    if (cep.length === 8) {
        const endereco = await consultarCEP(cep);

        if (endereco) {
            // Preenche os campos
            if (endereco.logradouro && endereco.bairro) {
                locationInput.value = `${endereco.logradouro}, ${endereco.bairro}`;
            } else if (endereco.logradouro) {
                locationInput.value = endereco.logradouro;
            }

            if (neighborhoodInput && endereco.bairro) {
                neighborhoodInput.value = endereco.bairro;
            }

            if (cityInput && endereco.localidade) {
                cityInput.value = endereco.localidade;
            }

            if (stateInput && endereco.uf) {
                stateInput.value = endereco.uf;
            }
        } else {
            // CEP não encontrado
            alert('CEP não encontrado. Verifique se o CEP está correto.');
        }
    }
}

// Função para atualizar estatísticas do dashboard
function updateDashboardStats() {
    const carCount = document.getElementById('carCount');
    const houseCount = document.getElementById('houseCount');
    const totalCount = document.getElementById('totalCount');
    const totalCarValue = document.getElementById('totalCarValue');
    const totalHouseValue = document.getElementById('totalHouseValue');
    const totalValue = document.getElementById('totalValue');

    // Contadores
    if (carCount) carCount.textContent = cars.length;
    if (houseCount) houseCount.textContent = houses.length;
    if (totalCount) totalCount.textContent = cars.length + houses.length;

    // Valores totais
    const carTotalValue = cars.reduce((sum, car) => sum + car.price, 0);
    const houseTotalValue = houses.reduce((sum, house) => sum + house.price, 0);
    const grandTotal = carTotalValue + houseTotalValue;

    if (totalCarValue) totalCarValue.textContent = formatPrice(carTotalValue);
    if (totalHouseValue) totalHouseValue.textContent = formatPrice(houseTotalValue);
    if (totalValue) totalValue.textContent = formatPrice(grandTotal);

    // Itens recentes
    updateRecentItems();
}

// Função para atualizar lista de itens recentes
function updateRecentItems() {
    const recentCars = document.getElementById('recentCars');
    const recentHouses = document.getElementById('recentHouses');

    if (recentCars) {
        const latestCars = cars.slice(-3).reverse(); // Últimos 3 carros
        recentCars.innerHTML = latestCars.map(car => `
            <div class="recent-item">
                <img src="${car.image}" alt="${car.title}">
                <div class="info">
                    <h4>${car.title}</h4>
                    <p>${formatPrice(car.price)}</p>
                </div>
            </div>
        `).join('');
    }

    if (recentHouses) {
        const latestHouses = houses.slice(-3).reverse(); // Últimas 3 casas
        recentHouses.innerHTML = latestHouses.map(house => `
            <div class="recent-item">
                <img src="${house.image}" alt="${house.title}">
                <div class="info">
                    <h4>${house.title}</h4>
                    <p>${formatPrice(house.price)}</p>
                </div>
            </div>
        `).join('');
    }
}

// Função para filtrar carros
function filterCars() {
    const carSearch = document.getElementById('carSearch')?.value.toLowerCase() || '';
    const brandFilter = document.getElementById('brandFilter')?.value || '';
    const priceFilter = document.getElementById('priceFilter')?.value || '';
    const yearFilter = document.getElementById('yearFilter')?.value || '';

    let filteredCars = [...cars];

    // Filtro por busca de texto
    if (carSearch) {
        filteredCars = filteredCars.filter(car =>
            car.title.toLowerCase().includes(carSearch) ||
            car.brand.toLowerCase().includes(carSearch) ||
            car.model.toLowerCase().includes(carSearch) ||
            car.description.toLowerCase().includes(carSearch)
        );
    }

    // Filtro por marca
    if (brandFilter) {
        filteredCars = filteredCars.filter(car => car.brand === brandFilter);
    }

    // Filtro por preço
    if (priceFilter) {
        filteredCars = filteredCars.filter(car => {
            const price = car.price;
            switch (priceFilter) {
                case '0-30000': return price <= 30000;
                case '30000-50000': return price > 30000 && price <= 50000;
                case '50000-80000': return price > 50000 && price <= 80000;
                case '80000-150000': return price > 80000 && price <= 150000;
                case '150000+': return price > 150000;
                default: return true;
            }
        });
    }

    // Filtro por ano
    if (yearFilter) {
        filteredCars = filteredCars.filter(car => {
            const year = car.year;
            switch (yearFilter) {
                case '2020-2024': return year >= 2020 && year <= 2024;
                case '2015-2019': return year >= 2015 && year <= 2019;
                case '2010-2014': return year >= 2010 && year <= 2014;
                case '2000-2009': return year >= 2000 && year <= 2009;
                default: return true;
            }
        });
    }

    renderCarsGrid(filteredCars);
}

// Função para filtrar casas
function filterHouses() {
    const houseSearch = document.getElementById('houseSearch')?.value.toLowerCase() || '';
    const typeFilter = document.getElementById('typeFilter')?.value || '';
    const locationFilter = document.getElementById('locationFilter')?.value || '';
    const locationSearch = document.getElementById('locationSearch')?.value.toLowerCase() || '';
    const priceFilter = document.getElementById('priceFilter')?.value || '';

    let filteredHouses = [...houses];

    // Filtro por busca de texto
    if (houseSearch) {
        filteredHouses = filteredHouses.filter(house =>
            house.title.toLowerCase().includes(houseSearch) ||
            house.location.toLowerCase().includes(houseSearch) ||
            house.description.toLowerCase().includes(houseSearch) ||
            house.type.toLowerCase().includes(houseSearch)
        );
    }

    // Filtro por tipo
    if (typeFilter) {
        filteredHouses = filteredHouses.filter(house => house.type === typeFilter);
    }

    // Filtro por localização (select)
    if (locationFilter) {
        filteredHouses = filteredHouses.filter(house => house.location === locationFilter);
    }

    // Filtro por busca de localização (input text)
    if (locationSearch) {
        filteredHouses = filteredHouses.filter(house =>
            house.location.toLowerCase().includes(locationSearch.toLowerCase())
        );
    }

    // Filtro por preço
    if (priceFilter) {
        filteredHouses = filteredHouses.filter(house => {
            const price = house.price;
            switch (priceFilter) {
                case '0-200000': return price <= 200000;
                case '200000-400000': return price > 200000 && price <= 400000;
                case '400000-700000': return price > 400000 && price <= 700000;
                case '700000-1000000': return price > 700000 && price <= 1000000;
                case '1000000+': return price > 1000000;
                default: return true;
            }
        });
    }

    renderHousesGrid(filteredHouses);
}

// Função para inicializar filtros de carros
function initializeCarFilters() {
    const carSearch = document.getElementById('carSearch');
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');
    const yearFilter = document.getElementById('yearFilter');
    const clearFilters = document.getElementById('clearFilters');

    const debouncedFilterCars = debounce(filterCars, 300);

    if (carSearch) carSearch.addEventListener('input', debouncedFilterCars);
    if (brandFilter) brandFilter.addEventListener('change', filterCars);
    if (priceFilter) priceFilter.addEventListener('change', filterCars);
    if (yearFilter) yearFilter.addEventListener('change', filterCars);
    if (clearFilters) clearFilters.addEventListener('click', () => {
        if (carSearch) carSearch.value = '';
        if (brandFilter) brandFilter.value = '';
        if (priceFilter) priceFilter.value = '';
        if (yearFilter) yearFilter.value = '';
        renderCarsGrid();
    });
}

// Função para inicializar filtros de casas
function initializeHouseFilters() {
    const houseSearch = document.getElementById('houseSearch');
    const typeFilter = document.getElementById('typeFilter');
    const locationFilter = document.getElementById('locationFilter');
    const locationSearch = document.getElementById('locationSearch');
    const priceFilter = document.getElementById('priceFilter');
    const clearFilters = document.getElementById('clearFilters');

    const debouncedFilterHouses = debounce(filterHouses, 300);

    if (houseSearch) houseSearch.addEventListener('input', debouncedFilterHouses);
    if (typeFilter) typeFilter.addEventListener('change', filterHouses);
    if (locationFilter) locationFilter.addEventListener('change', filterHouses);
    if (locationSearch) locationSearch.addEventListener('input', debouncedFilterHouses);
    if (priceFilter) priceFilter.addEventListener('change', filterHouses);
    if (clearFilters) clearFilters.addEventListener('click', () => {
        if (houseSearch) houseSearch.value = '';
        if (typeFilter) typeFilter.value = '';
        if (locationFilter) locationFilter.value = '';
        if (locationSearch) locationSearch.value = '';
        if (priceFilter) priceFilter.value = '';
        renderHousesGrid();
    });
}

// Função para inicializar sistema de múltiplas imagens
function initializeMultipleImages(type, containerId, addButtonId) {
    const container = document.getElementById(containerId);
    const addButton = document.getElementById(addButtonId);

    if (!container || !addButton) return;

    // Função para adicionar nova imagem
    function addImageInput() {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-upload-item';
        imageItem.innerHTML = `
            <input type="file" class="${type}-image-input" accept=".jpg,.jpeg,.png">
            <img class="image-preview hidden" alt="Preview">
            <button type="button" class="remove-image-btn" title="Remover imagem">
                <i class="fas fa-times"></i>
            </button>
        `;

        container.appendChild(imageItem);
        updateRemoveButtons();
        attachImagePreview(imageItem);
    }

    // Função para atualizar botões de remover
    function updateRemoveButtons() {
        const items = container.querySelectorAll('.image-upload-item');
        items.forEach((item, index) => {
            const removeBtn = item.querySelector('.remove-image-btn');
            if (items.length > 1) {
                removeBtn.classList.remove('hidden');
            } else {
                removeBtn.classList.add('hidden');
            }
        });
    }

    // Função para anexar preview de imagem
    function attachImagePreview(item) {
        const input = item.querySelector(`.${type}-image-input`);
        const preview = item.querySelector('.image-preview');
        const removeBtn = item.querySelector('.remove-image-btn');

        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.classList.remove('hidden');
                };
                reader.readAsDataURL(file);
            }
        });

        removeBtn.addEventListener('click', function() {
            item.remove();
            updateRemoveButtons();
        });
    }

    // Event listener para adicionar imagem
    addButton.addEventListener('click', addImageInput);

    // Inicializar primeira imagem
    const firstItem = container.querySelector('.image-upload-item');
    if (firstItem) {
        attachImagePreview(firstItem);
        updateRemoveButtons();
    }
}

// Função para inicializar formulário de contato
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simular envio (em produção, isso seria enviado para um servidor)
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            console.log('Mensagem enviada:', formData);

            // Feedback para o usuário
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');

            // Limpar formulário
            contactForm.reset();
        });
    }
}

// Função para exportar dados
function exportData() {
    const data = {
        cars: cars,
        houses: houses,
        exportedAt: new Date().toISOString(),
        totalCars: cars.length,
        totalHouses: houses.length,
        totalValue: cars.reduce((sum, car) => sum + car.price, 0) + houses.reduce((sum, house) => sum + house.price, 0)
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `dados-moisauto-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

// Função para salvar casa
async function saveHouse(formData, editId = null) {
    // Processar upload das imagens
    let finalImages = [];
    try {
        finalImages = await processImagesForUpload('houseImagesContainer');
    } catch (error) {
        console.error('Error processing house images:', error);
        // Fallback para placeholder
        finalImages = ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'];
    }

    if (finalImages.length === 0) {
        finalImages = ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'];
    }

    const newHouse = {
        id: editId != null ? editId : Date.now(),
        title: formData.title,
        type: formData.type,
        location: formData.location,
        neighborhood: formData.neighborhood || '',
        city: formData.city || '',
        state: formData.state || '',
        zipCode: formData.zipCode || '',
        price: parseFloat(formData.price),
        bedrooms: parseInt(formData.bedrooms),
        bathrooms: parseInt(formData.bathrooms),
        area: parseFloat(formData.area),
        totalArea: parseFloat(formData.totalArea) || 0,
        description: formData.description,
        features: formData.features ? formData.features.split(',').map(f => f.trim()).filter(Boolean) : [],
        image: finalImages[0],
        images: finalImages
    };

    if (editId != null) {
        houses = houses.map(h => (h.id === editId ? newHouse : h));
    } else {
        houses.push(newHouse);
    }
    localStorage.setItem('houses', JSON.stringify(houses));
    updateDashboardStats();

    if (typeof renderHousesGrid === 'function') {
        renderHousesGrid();
    }

    return newHouse;
}

// Função para salvar carro
async function saveCar(formData, editId = null) {
    // Processar upload das imagens
    let finalImages = [];
    try {
        finalImages = await processImagesForUpload('carImagesContainer');
    } catch (error) {
        console.error('Error processing car images:', error);
        // Fallback para placeholder
        finalImages = ['https://images.unsplash.com/photo-1583390786285-478a0b29e3fc?auto=format&fit=crop&w=800&q=80'];
    }

    if (finalImages.length === 0) {
        finalImages = ['https://images.unsplash.com/photo-1583390786285-478a0b29e3fc?auto=format&fit=crop&w=800&q=80'];
    }

    const newCar = {
        id: editId != null ? editId : Date.now(),
        title: formData.title,
        brand: formData.brand,
        model: formData.model,
        year: parseInt(formData.year),
        price: parseFloat(formData.price),
        mileage: parseInt(formData.mileage),
        fuel: formData.fuel,
        transmission: formData.transmission,
        color: formData.color,
        description: formData.description,
        features: formData.features ? formData.features.split(',').map(f => f.trim()).filter(Boolean) : [],
        image: finalImages[0],
        images: finalImages
    };

    if (editId != null) {
        cars = cars.map(c => (c.id === editId ? newCar : c));
    } else {
        cars.push(newCar);
    }
    localStorage.setItem('cars', JSON.stringify(cars));
    updateDashboardStats();

    if (typeof renderCarsGrid === 'function') {
        renderCarsGrid();
    }

    return newCar;
}

    // Inicializar estatísticas do dashboard
    updateDashboardStats();

    // Inicializar filtros
    initializeCarFilters();
    initializeHouseFilters();

    // Inicializar formulário de contato
    initializeContactForm();

// Função para trocar imagem principal na galeria
function changeMainImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
}

// ===== Anúncio profissional (PNG via canvas) =====
function getAdItem(type, id) {
    const itemId = Number(id);
    if (type === 'car') return cars.find(c => c.id === itemId);
    if (type === 'house') return houses.find(h => h.id === itemId);
    return null;
}

function getAdTitle(type, item) {
    return item?.title || '';
}

function getAdPrice(type, item) {
    if (!item) return '';
    return formatPrice(item.price);
}

function getAdSubtitle(type, item) {
    if (!item) return '';
    if (type === 'car') {
        return `${item.year} • ${item.mileage?.toLocaleString?.('pt-BR') || item.mileage} km • ${item.transmission} • ${item.fuel}`;
    }
    return `${item.type} • ${item.bedrooms} quartos • ${item.area}m² • ${item.location}`;
}

function getAdWhatsAppText(type, item) {
    const title = getAdTitle(type, item);
    const price = getAdPrice(type, item);
    const subtitle = getAdSubtitle(type, item);
    const url = type === 'car'
        ? `${location.origin}/car-detail.html?id=${item.id}`
        : `${location.origin}/house-detail.html?id=${item.id}`;

    return `📌 ${title}\n💰 ${price}\n${subtitle}\n\n🔗 Link: ${url}\n\nInteresse? Me chame no WhatsApp!`;
}

function copyAdText(type, id) {
    const item = getAdItem(type, id);
    if (!item) return;

    const text = getAdWhatsAppText(type, item);

    if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Texto copiado! Agora é só colar no WhatsApp.');
        }).catch(() => {
            prompt('Copie o texto abaixo:', text);
        });
    } else {
        prompt('Copie o texto abaixo:', text);
    }
}

async function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Falha ao carregar imagem: ' + src));
        img.src = src;
    });
}

const AD_CARD_TEMPLATE_URL = 'example.png';

async function generateAdCardPng(type, id, variant) {
    const item = getAdItem(type, id);
    if (!item) throw new Error('Item não encontrado');

    const dims = variant === '1200x800'
        ? { w: 1200, h: 800 }
        : { w: 1080, h: 1350 };

    const canvas = document.createElement('canvas');
    canvas.width = dims.w;
    canvas.height = dims.h;

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas indisponível');

    // Background (template do example, se carregar por CORS)
    let usedTemplate = false;
    try {
        const template = await loadImage(AD_CARD_TEMPLATE_URL);
        // cover fill
        const tAspect = template.width / template.height;
        const targetAspect = dims.w / dims.h;

        let sx = 0, sy = 0, sw = template.width, sh = template.height;
        if (tAspect > targetAspect) {
            // template é mais largo: cortar por largura
            sw = Math.round(template.height * targetAspect);
            sx = Math.round((template.width - sw) / 2);
        } else {
            // template é mais alto: cortar por altura
            sh = Math.round(template.width / targetAspect);
            sy = Math.round((template.height - sh) / 2);
        }

        ctx.drawImage(template, sx, sy, sw, sh, 0, 0, dims.w, dims.h);
        usedTemplate = true;
    } catch (_) {
        // fallback visual
        ctx.fillStyle = '#0b1220';
        ctx.fillRect(0, 0, dims.w, dims.h);

        const grad = ctx.createLinearGradient(0, 0, dims.w, dims.h);
        grad.addColorStop(0, '#1d4ed8'); // blue
        grad.addColorStop(1, '#7c3aed'); // purple
        ctx.globalAlpha = 0.22;
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, dims.w, dims.h);
        ctx.globalAlpha = 1;
    }

    // Se o template foi usado, mantemos o resto com transparências leves.
    // (os textos e foto já serão desenhados por cima)

    // Padding
    const pad = Math.round(dims.w * 0.06);

    // Logo
    const logoUrl = 'assets/logo.png';
    let logoImg = null;
    try {
        logoImg = await loadImage(logoUrl);
    } catch (_) {}

    if (logoImg) {
        const logoW = Math.round(dims.w * 0.18);
        const logoH = Math.round((logoW * logoImg.height) / logoImg.width);
        ctx.drawImage(logoImg, pad, pad, logoW, logoH);
    }

    // Foto principal (use item.images[0] if exists)
    const mainImgSrc = (item.images && item.images.length > 0) ? item.images[0] : item.image;
    const photo = await loadImage(mainImgSrc);

    // Foto área
    const photoX = pad;
    const photoY = Math.round(dims.h * 0.22);
    const photoW = dims.w - pad * 2;
    const photoH = Math.round(dims.h * (variant === '1200x800' ? 0.45 : 0.48));

    // Cover draw
    const imgAspect = photo.width / photo.height;
    const targetAspect = photoW / photoH;
    let drawW = photoW, drawH = photoH, sx = 0, sy = 0, sw = photo.width, sh = photo.height;

    if (imgAspect > targetAspect) {
        // wider
        sh = photo.height;
        sw = Math.round(photo.height * targetAspect);
        sx = Math.round((photo.width - sw) / 2);
    } else {
        // taller
        sw = photo.width;
        sh = Math.round(photo.width / targetAspect);
        sy = Math.round((photo.height - sh) / 2);
    }

    // Rounded rect behind image
    const radius = Math.round(Math.min(photoW, photoH) * 0.03);
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath();
    ctx.moveTo(photoX + radius, photoY);
    ctx.arcTo(photoX + photoW, photoY, photoX + photoW, photoY + photoH, radius);
    ctx.arcTo(photoX + photoW, photoY + photoH, photoX, photoY + photoH, radius);
    ctx.arcTo(photoX, photoY + photoH, photoX, photoY, radius);
    ctx.arcTo(photoX, photoY, photoX + photoW, photoY, radius);
    ctx.closePath();
    ctx.fill();

    ctx.save();
    // clip
    ctx.beginPath();
    ctx.moveTo(photoX + radius, photoY);
    ctx.arcTo(photoX + photoW, photoY, photoX + photoW, photoY + photoH, radius);
    ctx.arcTo(photoX + photoW, photoY + photoH, photoX, photoY + photoH, radius);
    ctx.arcTo(photoX, photoY + photoH, photoX, photoY, radius);
    ctx.arcTo(photoX, photoY, photoX + photoW, photoY, radius);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(photo, sx, sy, sw, sh, photoX, photoY, photoW, photoH);
    ctx.restore();

    // Text box
    const boxX = pad;
    const boxY = photoY + photoH + Math.round(dims.h * 0.03);
    const boxW = dims.w - pad * 2;
    const boxH = dims.h - boxY - pad;

    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath();
    ctx.roundRect?.(boxX, boxY, boxW, boxH, Math.round(boxW * 0.04));
    if (!ctx.roundRect) {
        // fallback basic rect
        ctx.rect(boxX, boxY, boxW, boxH);
    }
    ctx.fill();

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = variant === '1200x800' ? `800 ${Math.round(dims.w * 0.04)}px system-ui, sans-serif` : `900 ${Math.round(dims.w * 0.048)}px system-ui, sans-serif`;
    ctx.textBaseline = 'top';

    const title = getAdTitle(type, item);
    wrapText(ctx, title, boxX + Math.round(dims.w * 0.02), boxY + Math.round(dims.h * 0.03), boxW - Math.round(dims.w * 0.04), variant === '1200x800' ? 2 : 3, Math.round(dims.w * 0.055));

    // Price
    ctx.fillStyle = '#22c55e';
    ctx.font = variant === '1200x800' ? `900 ${Math.round(dims.w * 0.052)}px system-ui, sans-serif` : `1000 ${Math.round(dims.w * 0.06)}px system-ui, sans-serif`;
    const priceY = boxY + Math.round(dims.h * 0.22);
    ctx.fillText(getAdPrice(type, item), boxX + Math.round(dims.w * 0.02), priceY);

    // Subtitle
    ctx.fillStyle = '#e5e7eb';
    ctx.font = variant === '1200x800' ? `700 ${Math.round(dims.w * 0.028)}px system-ui, sans-serif` : `800 ${Math.round(dims.w * 0.03)}px system-ui, sans-serif`;
    const subtitle = getAdSubtitle(type, item);
    const subtitleY = priceY + Math.round(dims.w * 0.035);
    const maxSubWidth = boxW - Math.round(dims.w * 0.04);
    wrapTextAny(ctx, subtitle, boxX + Math.round(dims.w * 0.02), subtitleY, maxSubWidth, variant === '1200x800' ? 3 : 4, Math.round(dims.w * 0.033));

    // Footer / CTA
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.font = `800 ${Math.round(dims.w * 0.02)}px system-ui, sans-serif`;
    const footerText = 'MoisAuto Agenciador • Anúncio profissional';
    ctx.fillText(footerText, boxX + Math.round(dims.w * 0.02), boxY + boxH - Math.round(dims.h * 0.04));

    // Sold badge
    if (isSold(item)) {
        ctx.fillStyle = '#dc2626';
        ctx.font = `900 ${Math.round(dims.w * 0.03)}px system-ui, sans-serif`;
        ctx.fillText('Vendido', pad, pad + (logoImg ? (logoImg.height + Math.round(dims.w * 0.02)) : Math.round(dims.w * 0.12)));
    }

    return canvas;
}

function wrapText(ctx, text, x, y, maxWidth, maxLines, lineHeight) {
    const words = (text || '').split(' ');
    let line = '';
    let linesDrawn = 0;
    for (let i = 0; i < words.length; i++) {
        const testLine = line ? line + ' ' + words[i] : words[i];
        const metrics = ctx.measureText(testLine);
        const w = metrics.width;

        if (w > maxWidth && line) {
            ctx.fillText(line, x, y + linesDrawn * lineHeight);
            linesDrawn++;
            line = words[i];
            if (linesDrawn >= maxLines) {
                ctx.fillText(truncate(ctx, line, maxWidth) + '…', x, y + linesDrawn * lineHeight);
                return linesDrawn + 1;
            }
        } else {
            line = testLine;
        }
    }
    if (linesDrawn < maxLines && line) {
        ctx.fillText(line, x, y + linesDrawn * lineHeight);
        linesDrawn++;
    }
    return linesDrawn;
}

function truncate(ctx, text, maxWidth) {
    let out = text;
    while (out.length > 0 && ctx.measureText(out).width > maxWidth) {
        out = out.slice(0, -1);
    }
    return out;
}

function wrapTextAny(ctx, text, x, y, maxWidth, maxLines, lineHeight) {
    const words = (text || '').split(' ');
    let line = '';
    let linesDrawn = 0;

    for (let i = 0; i < words.length; i++) {
        const testLine = line ? line + ' ' + words[i] : words[i];
        if (ctx.measureText(testLine).width > maxWidth && line) {
            ctx.fillText(line, x, y + linesDrawn * lineHeight);
            linesDrawn++;
            line = words[i];
            if (linesDrawn >= maxLines) {
                ctx.fillText(truncate(ctx, line, maxWidth) + '…', x, y + linesDrawn * lineHeight);
                return;
            }
        } else {
            line = testLine;
        }
    }
    if (line && linesDrawn < maxLines) {
        ctx.fillText(line, x, y + linesDrawn * lineHeight);
    }
}

async function downloadAdPng(type, id, variant) {
    try {
        const canvas = await generateAdCardPng(type, id, variant);
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            const safeVariant = variant === '1200x800' ? '1200x800' : '1080x1350';
            a.download = `moisauto-${type}-${id}-anuncio-${safeVariant}.png`;
            a.href = url;
            a.click();
            setTimeout(() => URL.revokeObjectURL(url), 3000);
        }, 'image/png');
    } catch (err) {
        console.error(err);
        alert('Não foi possível gerar o PNG. Verifique a imagem (pode estar bloqueada por CORS) e tente novamente.');
    }
}

// adiciona roundRect em browsers que não suportam
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
        const radius = typeof r === 'number' ? r : r;
        this.beginPath();
        this.moveTo(x + radius, y);
        this.arcTo(x + w, y, x + w, y + h, radius);
        this.arcTo(x + w, y + h, x, y + h, radius);
        this.arcTo(x, y + h, x, y, radius);
        this.arcTo(x, y, x + w, y, radius);
        this.closePath();
        return this;
    };
}

// Exporta para uso global
window.downloadAdPng = downloadAdPng;
window.copyAdText = copyAdText;

/* Exporta para uso global */
window.cars = cars;
window.houses = houses;
window.updateDashboardStats = updateDashboardStats;

window.saveHouse = saveHouse;
window.saveCar = saveCar;
window.exportData = exportData;
window.changeMainImage = changeMainImage;

function setCarEditing(id) {
    const form = document.getElementById('carForm');
    if (!form) return;
    form.dataset.editId = String(id);
}

function setHouseEditing(id) {
    const form = document.getElementById('houseForm');
    if (!form) return;
    form.dataset.editId = String(id);
}

// Admin global
window.deleteCar = deleteCar;
window.deleteHouse = deleteHouse;
window.toggleSoldCar = toggleSoldCar;
window.toggleSoldHouse = toggleSoldHouse;
window.setCarEditing = setCarEditing;
window.setHouseEditing = setHouseEditing;

// Novas funções para exportação de card com html2canvas e seleção de templates
let selectedTemplate = 0;
let currentExportType = 'car';

function openTemplateModal(type) {
    currentExportType = type;
    selectedTemplate = 0;

    const modal = document.getElementById('templateModal');
    if (modal) {
        modal.classList.remove('hidden');

        // Reset selection UI
        document.querySelectorAll('.template-option').forEach(opt => opt.classList.remove('selected'));
        const genBtn = document.getElementById('generateImageBtn');
        if (genBtn) {
            genBtn.disabled = true;
            // Garantir que o evento esteja anexado
            genBtn.onclick = () => exportProductAsImage(currentExportType);
        }
    }
}

function selectTemplate(index) {
    selectedTemplate = index;

    // UI feedback
    const options = document.querySelectorAll('.template-option');
    options.forEach((opt, idx) => {
        if (idx + 1 === index) opt.classList.add('selected');
        else opt.classList.remove('selected');
    });

    const genBtn = document.getElementById('generateImageBtn');
    if (genBtn) genBtn.disabled = false;
}

async function exportProductAsImage(type) {
    if (selectedTemplate === 0) return;

    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const item = type === 'car' ? cars.find(c => c.id === id) : houses.find(h => h.id === id);

    if (!item) return;

    // Feedback visual de carregamento
    const genBtn = document.getElementById('generateImageBtn');
    const originalText = genBtn.innerText;
    genBtn.innerText = 'Processando...';
    genBtn.disabled = true;

    const shareCard = document.getElementById('shareCard');
    const shareCardImage = document.getElementById('shareCardImage');
    const shareCardTitle = document.getElementById('shareCardTitle');
    const shareCardPrice = document.getElementById('shareCardPrice');
    const shareCardSpecs = document.getElementById('shareCardSpecs');

    // Aplicar Template selecionado como background
    shareCard.style.backgroundImage = `url('assets/template-${selectedTemplate}.png')`;
    shareCard.style.backgroundSize = 'cover';
    shareCard.style.backgroundPosition = 'center';

    // Preencher dados básicos
    shareCardTitle.innerText = item.title;
    shareCardPrice.innerText = formatPrice(item.price);

    // Usar a primeira imagem disponível
    const mainImg = (item.images && item.images.length > 0) ? item.images[0] : item.image;
    shareCardImage.src = mainImg;

    // Preencher especificações
    let specsHtml = '';
    if (type === 'car') {
        specsHtml = `
            <div class="share-card-spec-item">
                <i class="fas fa-calendar-alt"></i>
                <span>${item.year}</span>
            </div>
            <div class="share-card-spec-item">
                <i class="fas fa-tachometer-alt"></i>
                <span>${item.mileage.toLocaleString()} km</span>
            </div>
            <div class="share-card-spec-item">
                <i class="fas fa-gas-pump"></i>
                <span>${item.fuel}</span>
            </div>
            <div class="share-card-spec-item">
                <i class="fas fa-cog"></i>
                <span>${item.transmission}</span>
            </div>
        `;
    } else {
        specsHtml = `
            <div class="share-card-spec-item">
                <i class="fas fa-home"></i>
                <span>${item.type}</span>
            </div>
            <div class="share-card-spec-item">
                <i class="fas fa-expand-arrows-alt"></i>
                <span>${item.area} m²</span>
            </div>
            <div class="share-card-spec-item">
                <i class="fas fa-bed"></i>
                <span>${item.bedrooms} Quartos</span>
            </div>
            <div class="share-card-spec-item">
                <i class="fas fa-bath"></i>
                <span>${item.bathrooms} Banheiros</span>
            </div>
        `;
    }
    shareCardSpecs.innerHTML = specsHtml;

    try {
        // Aguardar o carregamento da imagem para o canvas capturar corretamente
        await new Promise((resolve, reject) => {
            if (shareCardImage.complete) resolve();
            else {
                shareCardImage.onload = resolve;
                shareCardImage.onerror = reject;
            }
        });

        // Usar html2canvas para gerar a imagem
        const canvas = await html2canvas(shareCard, {
            useCORS: true,
            scale: 2, // Melhor qualidade
            backgroundColor: null
        });

        const link = document.createElement('a');
        link.download = `moisauto-${type}-${id}-template${selectedTemplate}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();

        // Fechar modal após sucesso
        hideModal('templateModal');
    } catch (err) {
        console.error('Erro ao gerar imagem:', err);
        alert('Ocorreu um erro ao gerar a imagem. Verifique sua conexão e tente novamente.');
    } finally {
        genBtn.innerText = originalText;
        genBtn.disabled = false;
    }
}

window.openTemplateModal = openTemplateModal;
window.selectTemplate = selectTemplate;
window.exportProductAsImage = exportProductAsImage;
