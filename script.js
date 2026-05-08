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
        image: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/12/dscf2836.dng_-e1580396644879.jpg?quality=70&strip=info"
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
        image: "https://cdn.motor1.com/images/mgl/mBrOo/s1/honda-civic-exl-2020.webp"
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
        image: "https://webseminovos.blob.core.windows.net/anuncio-original/O_7950861.jpg"
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
        image: "https://s2-autoesporte.glbimg.com/YYr9PSii1RvecxtugHcOXySR9pk=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/t/i/kKYLxASseo83EMFewv8w/2019-12-16-cruzefrente.jpg"
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
        image: "https://i.ytimg.com/vi/amdAArbiMtw/maxresdefault.jpg"
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
        image: "https://img0.icarros.com/dbimg/imgadicionalnoticia/4/102118_1.jpg"
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
        image: "https://www.setin.com.br/storage/5a98ffa323915c8d415584e0e9ce37e7_cropped_2020-11-11_15h13m03s.jpg"
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
        image: "data:image/jpeg;base64,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"
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
        image: "data:image/jpeg;base64,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"
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
        image: "data:image/jpeg;base64,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"
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
        image: "data:image/jpeg;base64,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"
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

// ==================== SISTEMA JSON DE DADOS ====================

// URLs do Worker (ALTERE ESTAS URLs APÓS O DEPLOY)
const WORKER_UPLOAD_URL = 'https://SEU-WORKER.workers.dev/upload';
const WORKER_AUTH_SECRET = 'CHANGE_THIS_SECRET_TO_A_STRONG_RANDOM_STRING'; // Mesmo valor do wrangler.toml

// Cache dos dados JSON originais
let originalCarsData = null;
let originalHousesData = null;

// Dados atuais (modificáveis)
// cars e houses já foram declarados acima

// ==================== CARREGAMENTO DE DADOS ====================

// Carregar dados dos arquivos JSON
async function loadDataFromJSON() {
    try {
        // Se não houver URLs definidas, usar dados atuais como originais
        if (!originalCarsData) {
            originalCarsData = JSON.parse(JSON.stringify(cars));
        }
        if (!originalHousesData) {
            originalHousesData = JSON.parse(JSON.stringify(houses));
        }

        // Carregar modificações salvas do localStorage
        loadModificationsFromLocalStorage();

    } catch (error) {

        // Dados hardcoded dos carros
        const hardcodedCars = [
            {
                "id": 1,
                "titulo": "Toyota Corolla 2022",
                "brand": "Toyota",
                "model": "Corolla",
                "year": 2022,
                "price": 125000,
                "mileage": 35000,
                "fuel": "Flex",
                "transmission": "Automático",
                "color": "Prata",
                "description": "Corolla 2022 em excelente estado, único dono, revisões em dia na concessionária autorizada. Veículo completo com todos os opcionais.",
                "features": ["Ar-condicionado digital", "Vidro elétrico", "Trava elétrica", "Airbag duplo", "ABS"],
                "images": ["https://images.unsplash.com/photo-1621217907727-2b5a74d3e2a9?auto=format&fit=crop&w=800&q=80"],
                "createdAt": "2026-05-08T18:00:42-03:00",
                "updatedAt": "2026-05-08T18:00:42-03:00",
                "sold": false,
                "soldAt": null
            },
            {
                "id": 2,
                "titulo": "Honda Civic 2021",
                "brand": "Honda",
                "model": "Civic",
                "year": 2021,
                "price": 118000,
                "mileage": 42000,
                "fuel": "Flex",
                "transmission": "Manual",
                "color": "Preto",
                "description": "Honda Civic 2021, completo, com sistema de som original e faróis de LED. Veículo muito econômico e confortável.",
                "features": ["Ar-condicionado", "Vidro elétrico", "Piloto automático", "Som original", "Faróis de LED"],
                "images": ["https://images.unsplash.com/photo-1590479678048-250d8c4c5d2e?auto=format&fit=crop&w=800&q=80"],
                "createdAt": "2026-05-08T18:00:42-03:00",
                "updatedAt": "2026-05-08T18:00:42-03:00",
                "sold": false,
                "soldAt": null
            }
        ];

        // Dados hardcoded das casas
        const hardcodedHouses = [
            {
                "id": 1,
                "titulo": "Casa em Condomínio - Porto Alegre",
                "type": "Casa",
                "location": "Porto Alegre",
                "neighborhood": "Centro",
                "city": "Porto Alegre",
                "state": "RS",
                "zipCode": "90010-000",
                "price": 850000,
                "bedrooms": 4,
                "bathrooms": 3,
                "area": 180,
                "totalArea": 320,
                "description": "Linda casa em condomínio fechado com amplo espaço e área de lazer completa. Perfeita para famílias que buscam conforto e segurança.",
                "features": ["Piscina", "Garagem para 3 carros", "Jardim", "Área gourmet", "Segurança 24h"],
                "images": ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"],
                "createdAt": "2026-05-08T18:00:42-03:00",
                "updatedAt": "2026-05-08T18:00:42-03:00",
                "sold": false,
                "soldAt": null
            },
            {
                "id": 2,
                "titulo": "Apartamento Centro - São Paulo",
                "type": "Apartamento",
                "location": "Centro",
                "neighborhood": "Centro",
                "city": "São Paulo",
                "state": "SP",
                "zipCode": "01000-000",
                "price": 1250000,
                "bedrooms": 3,
                "bathrooms": 2,
                "area": 120,
                "totalArea": 120,
                "description": "Apartamento novo no centro de São Paulo, próximo a tudo que você precisa. Localização privilegiada com vista panorâmica.",
                "features": ["Vista panorâmica", "Elevador", "Segurança 24h", "Academia", "Salão de festas"],
                "images": ["https://images.unsplash.com/photo-1522706600309-4df2b2b1c0e8?auto=format&fit=crop&w=800&q=80"],
                "createdAt": "2026-05-08T18:00:42-03:00",
                "updatedAt": "2026-05-08T18:00:42-03:00",
                "sold": false,
                "soldAt": null
            }
        ];

        cars = [...hardcodedCars];
        houses = [...hardcodedHouses];
        originalCarsData = [...hardcodedCars];
        originalHousesData = [...hardcodedHouses];
    }
}

// Carregar modificações salvas no localStorage
function loadModificationsFromLocalStorage() {
    try {
        const savedCars = localStorage.getItem('cars_modifications');
        const savedHouses = localStorage.getItem('houses_modifications');

        if (savedCars) {
            const modifications = JSON.parse(savedCars);
            applyModifications(cars, modifications);
        }

        if (savedHouses) {
            const modifications = JSON.parse(savedHouses);
            applyModifications(houses, modifications);
        }
    } catch (error) {
        console.warn('Erro ao carregar modificações do localStorage:', error);
    }
}

// Aplicar modificações aos dados originais
function applyModifications(dataArray, modifications) {
    // Adicionar novos itens
    if (modifications.added) {
        modifications.added.forEach(item => {
            if (!dataArray.find(existing => existing.id === item.id)) {
                dataArray.push(item);
            }
        });
    }

    // Atualizar itens existentes
    if (modifications.updated) {
        modifications.updated.forEach(update => {
            const index = dataArray.findIndex(item => item.id === update.id);
            if (index !== -1) {
                dataArray[index] = { ...dataArray[index], ...update };
            }
        });
    }

    // Remover itens deletados
    if (modifications.deleted) {
        modifications.deleted.forEach(id => {
            const index = dataArray.findIndex(item => item.id === id);
            if (index !== -1) {
                dataArray.splice(index, 1);
            }
        });
    }
}

// ==================== PERSISTÊNCIA DE MODIFICAÇÕES ====================

// Salvar modificações no localStorage
function saveModificationsToLocalStorage() {
    try {
        // Comparar com dados originais e identificar modificações
        const carsModifications = getModifications(originalCarsData, cars);
        const housesModifications = getModifications(originalHousesData, houses);

        if (Object.keys(carsModifications).length > 0) {
            localStorage.setItem('cars_modifications', JSON.stringify(carsModifications));
        }

        if (Object.keys(housesModifications).length > 0) {
            localStorage.setItem('houses_modifications', JSON.stringify(housesModifications));
        }

        console.log('Modificações salvas no localStorage');
    } catch (error) {
        console.error('Erro ao salvar modificações:', error);
    }
}

// Identificar modificações comparando arrays
function getModifications(originalData, currentData) {
    const modifications = {};

    // Encontrar itens adicionados (IDs que não existem no original)
    const originalIds = new Set(originalData.map(item => item.id));
    const added = currentData.filter(item => !originalIds.has(item.id));
    if (added.length > 0) {
        modifications.added = added;
    }

    // Encontrar itens atualizados
    const updated = [];
    currentData.forEach(currentItem => {
        const originalItem = originalData.find(item => item.id === currentItem.id);
        if (originalItem && JSON.stringify(originalItem) !== JSON.stringify(currentItem)) {
            updated.push(currentItem);
        }
    });
    if (updated.length > 0) {
        modifications.updated = updated;
    }

    // Encontrar itens deletados
    const currentIds = new Set(currentData.map(item => item.id));
    const deleted = originalData
        .filter(item => !currentIds.has(item.id))
        .map(item => item.id);
    if (deleted.length > 0) {
        modifications.deleted = deleted;
    }

    return modifications;
}

// ==================== UPLOAD DE IMAGENS ====================

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

// ==================== INICIALIZAÇÃO ====================

// Inicializar dados
async function initializeData() {
    await loadDataFromJSON();
}

// Forçar carregamento imediato de dados demo
function forceLoadDemoData() {
    cars = [...demoCars];
    houses = [...demoHouses];
    originalCarsData = [...demoCars];
    originalHousesData = [...demoHouses];
}

// Função para resetar dados para o original
function resetData() {
    if (confirm('Tem certeza que deseja resetar todos os dados para o estado original? Todas as modificações serão perdidas.')) {
        localStorage.removeItem('cars_modifications');
        localStorage.removeItem('houses_modifications');
        cars = JSON.parse(JSON.stringify(originalCarsData));
        houses = JSON.parse(JSON.stringify(originalHousesData));
        updateDashboardStats();
        if (typeof renderCarsGrid === 'function') renderCarsGrid();
        if (typeof renderHousesGrid === 'function') renderHousesGrid();
        if (typeof renderAdminCars === 'function') renderAdminCars();
        if (typeof renderAdminHouses === 'function') renderAdminHouses();
        alert('Dados resetados para o estado original!');
    }
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
    const title = car.title || car.titulo || 'Carro';
    const price = car.price || 0;
    const image = car.image || 'https://via.placeholder.com/300x200/ccc/666?text=Carro';
    const year = car.year || 'N/A';
    const mileage = car.mileage || 0;

    return `
        <div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; margin: 10px; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="height: 200px; overflow: hidden;">
                <img src="${image}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/300x200/ccc/666?text=Erro'">
            </div>
            <div style="padding: 15px;">
                <h3 style="margin: 0 0 10px 0; font-size: 18px; color: #333;">${title}</h3>
                <div style="display: flex; gap: 10px; margin-bottom: 10px; font-size: 14px; color: #666;">
                    <span>${year}</span>
                    <span>${mileage.toLocaleString()} km</span>
                </div>
                <p style="font-size: 20px; font-weight: bold; color: #e30613; margin: 10px 0;">R$ ${price.toLocaleString()}</p>
                <a href="car-detail.html?id=${car.id}" style="display: inline-block; padding: 8px 16px; background: #e30613; color: white; text-decoration: none; border-radius: 4px; font-size: 14px;">
                    Ver detalhes
                </a>
            </div>
        </div>
    `;
}

// Cria card de casa
function createHouseCard(house) {
    const title = house.title || house.titulo || 'Imóvel';
    const price = house.price || 0;
    const image = house.image || 'https://via.placeholder.com/300x200/ccc/666?text=Imovel';
    const location = house.location || 'N/A';
    const bedrooms = house.bedrooms || 0;
    const area = house.area || 0;

    return `
        <div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; margin: 10px; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="height: 200px; overflow: hidden;">
                <img src="${image}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/300x200/ccc/666?text=Erro'">
            </div>
            <div style="padding: 15px;">
                <h3 style="margin: 0 0 10px 0; font-size: 18px; color: #333;">${title}</h3>
                <div style="display: flex; gap: 10px; margin-bottom: 10px; font-size: 14px; color: #666;">
                    <span>${bedrooms} quartos</span>
                    <span>${area}m²</span>
                    <span>${location}</span>
                </div>
                <p style="font-size: 20px; font-weight: bold; color: #e30613; margin: 10px 0;">R$ ${price.toLocaleString()}</p>
                <a href="house-detail.html?id=${house.id}" style="display: inline-block; padding: 8px 16px; background: #e30613; color: white; text-decoration: none; border-radius: 4px; font-size: 14px;">
                    Ver detalhes
                </a>
            </div>
        </div>
    `;
}

// Renderiza itens na página inicial
function renderFeaturedItems() {
    const featuredContainer = document.getElementById('featuredItems');
    if (featuredContainer) {
        const allItems = [...cars.slice(0, 4), ...houses.slice(0, 2)];
        let html = '';
        allItems.forEach(item => {
            if (item.brand || (item.titulo && (item.titulo.includes('Toyota') || item.titulo.includes('Honda') || item.titulo.includes('Ford') || item.titulo.includes('BMW') || item.titulo.includes('Chevrolet')))) {
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
    console.log('renderCarsGrid: elemento encontrado?', !!carsGrid);
    if (carsGrid) {
        const carsToShow = filteredCars || cars;
        console.log('renderCarsGrid: renderizando', carsToShow.length, 'carros');
        carsGrid.innerHTML = carsToShow.map(createCarCard).join('');
        console.log('renderCarsGrid: HTML definido');
    } else {
        console.log('renderCarsGrid: elemento carsGrid não encontrado na página');
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
            const title = car.titulo || car.title;
            document.title = `${title} - MoisAuto Agenciador`;

            // Usar múltiplas imagens se disponíveis, senão usar a imagem principal
            const images = car.images && car.images.length > 0 ? car.images : [car.image];

            // Criar thumbnails dinamicamente
            const thumbsHtml = images.slice(0, 4).map(img => `<img src="${img}" alt="${title}" onclick="changeMainImage('${img}')">`).join('');

            const soldHtml = isSold(car)
                ? `<div class="sold-detail-badge">Vendido</div>`
                : '';

            const ctaHtml = isSold(car)
                ? `<div class="sold-cta">Este anúncio foi vendido.</div>`
                : `<a href="https://wa.me/5551980578310?text=Olá, estou interessado no ${title}" class="whatsapp-btn" target="_blank">
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
            const title = house.titulo || house.title;
            document.title = `${title} - MoisAuto Agenciador`;

            // Usar múltiplas imagens se disponíveis, senão usar a imagem principal
            const images = house.images && house.images.length > 0 ? house.images : [house.image];

            // Criar thumbnails dinamicamente
            const thumbsHtml = images.slice(0, 4).map(img => `<img src="${img}" alt="${title}" onclick="changeMainImage('${img}')">`).join('');

            const soldHtml = isSold(house)
                ? `<div class="sold-detail-badge">Vendido</div>`
                : '';

            const ctaHtml = isSold(house)
                ? `<div class="sold-cta">Este anúncio foi vendido.</div>`
                : `<a href="https://wa.me/5551980578310?text=Olá, estou interessado na ${title}" class="whatsapp-btn" target="_blank">
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
    saveModificationsToLocalStorage();
    updateDashboardStats();
    renderAdminCars();
}

function deleteHouse(id) {
    houses = houses.filter(h => h.id !== id);
    saveModificationsToLocalStorage();
    updateDashboardStats();
    renderAdminHouses();
}

function toggleSoldCar(id) {
    cars = cars.map(c => {
        if (c.id !== id) return c;
        const nextSold = !isSold(c);
        return { ...c, sold: nextSold, soldAt: nextSold ? new Date().toISOString() : null, updatedAt: new Date().toISOString() };
    });
    saveModificationsToLocalStorage();
    updateDashboardStats();
    renderAdminCars();
    if (typeof renderCarsGrid === 'function') renderCarsGrid();
}

function toggleSoldHouse(id) {
    houses = houses.map(h => {
        if (h.id !== id) return h;
        const nextSold = !isSold(h);
        return { ...h, sold: nextSold, soldAt: nextSold ? new Date().toISOString() : null, updatedAt: new Date().toISOString() };
    });
    saveModificationsToLocalStorage();
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

                const title = car.titulo || car.title;
                const image = car.images && car.images.length > 0 ? car.images[0] : car.image;

                return `
                    <tr data-id="${car.id}">
                        <td>${car.id}</td>
                        <td>
                            <img src="${image}" alt="${title}" style="width: 50px; height: 35px; object-fit: cover;">
                            ${isSold(car) ? `<div style="color:#d9534f; font-weight:700; margin-top:4px;">${soldText}</div>` : ''}
                        </td>
                        <td>${title}</td>
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
                const title = car.titulo || car.title;
                const image = car.images && car.images.length > 0 ? car.images[0] : car.image;
                const soldText = isSold(car) ? 'Vendido' : 'Ativo';
                const btnSoldText = isSold(car) ? 'Marcar como ativo' : 'Marcar como vendido';
                const badgeHtml = isSold(car)
                    ? `<span class="admin-sold-badge sold">Vendido</span>`
                    : `<span class="admin-sold-badge active">Ativo</span>`;

                return `
                    <div class="admin-card" data-id="${car.id}">
                        <div class="admin-card-top">
                            <img class="admin-card-img" src="${image}" alt="${title}">
                            <div class="admin-card-meta">
                                <div class="admin-card-title">${title}</div>
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

                const title = house.titulo || house.title;
                const image = house.images && house.images.length > 0 ? house.images[0] : house.image;

                return `
                    <tr data-id="${house.id}">
                        <td>${house.id}</td>
                        <td>
                            <img src="${image}" alt="${title}" style="width: 50px; height: 35px; object-fit: cover;">
                            ${isSold(house) ? `<div style="color:#d9534f; font-weight:700; margin-top:4px;">${soldText}</div>` : ''}
                        </td>
                        <td>${title}</td>
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
                const title = house.titulo || house.title;
                const image = house.images && house.images.length > 0 ? house.images[0] : house.image;
                const btnSoldText = isSold(house) ? 'Marcar como ativo' : 'Marcar como vendido';
                const badgeHtml = isSold(house)
                    ? `<span class="admin-sold-badge sold">Vendido</span>`
                    : `<span class="admin-sold-badge active">Ativo</span>`;

                return `
                    <div class="admin-card" data-id="${house.id}">
                        <div class="admin-card-top">
                            <img class="admin-card-img" src="${image}" alt="${title}">
                            <div class="admin-card-meta">
                                <div class="admin-card-title">${title}</div>
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
    // Forçar carregamento imediato dos dados demo
    forceLoadDemoData();

    // Renderizar interface
    renderFeaturedItems();
    renderCarsGrid();
    renderHousesGrid();
    renderCarDetail();
    renderHouseDetail();
    renderRelatedCars();
    renderRelatedHouses();
    
    // Renderizar admin se estiver na página admin
    if (document.getElementById('carsTable')) renderAdminCars();
    if (document.getElementById('housesTable')) renderAdminHouses();
    
    // Inicializar dashboard
    updateDashboardStats();

    // Carregar dados JSON em background (não bloqueante)
    initializeData().then(() => {
        renderFeaturedItems();
        renderCarsGrid();
        renderHousesGrid();
        renderCarDetail();
        renderHouseDetail();
        renderRelatedCars();
        renderRelatedHouses();
        
        // Atualizar admin se estiver na página
        if (document.getElementById('carsTable')) renderAdminCars();
        if (document.getElementById('housesTable')) renderAdminHouses();
        
        // Atualizar dashboard
        updateDashboardStats();
    }).catch(() => {
        // Silenciar erros de carregamento JSON
    });
    
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

    const now = new Date().toISOString();

    const newHouse = {
        id: editId != null ? editId : Date.now(),
        titulo: formData.title,
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
        images: finalImages,
        createdAt: editId ? undefined : now, // Só definir se for novo
        updatedAt: now,
        sold: false,
        soldAt: null
    };

    if (editId != null) {
        // Atualizar casa existente
        const existingIndex = houses.findIndex(h => h.id === editId);
        if (existingIndex !== -1) {
            newHouse.createdAt = houses[existingIndex].createdAt; // Preservar data de criação
            houses[existingIndex] = newHouse;
        }
    } else {
        // Adicionar nova casa
        houses.push(newHouse);
    }

    // Salvar modificações
    saveModificationsToLocalStorage();
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

    const now = new Date().toISOString();

    const newCar = {
        id: editId != null ? editId : Date.now(),
        titulo: formData.title,
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
        images: finalImages,
        createdAt: editId ? undefined : now, // Só definir se for novo
        updatedAt: now,
        sold: false,
        soldAt: null
    };

    if (editId != null) {
        // Atualizar carro existente
        const existingIndex = cars.findIndex(c => c.id === editId);
        if (existingIndex !== -1) {
            newCar.createdAt = cars[existingIndex].createdAt; // Preservar data de criação
            cars[existingIndex] = newCar;
        }
    } else {
        // Adicionar novo carro
        cars.push(newCar);
    }

    // Salvar modificações
    saveModificationsToLocalStorage();
    updateDashboardStats();

    if (typeof renderCarsGrid === 'function') {
        renderCarsGrid();
    }

    return newCar;
}

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
