// ── DATOS DE ALIMENTOS ──
export const alimentos = [
    { id: 1, nombre: 'Manzana', categoria: 'fruta', emoji: '🍎', descripcion: 'Rica en fibra y antioxidantes. Ideal para media mañana.' },
    { id: 2, nombre: 'Banano', categoria: 'fruta', emoji: '🍌', descripcion: 'Fuente de potasio y energía rápida. Perfecto antes de ejercitar.' },
    { id: 3, nombre: 'Fresas', categoria: 'fruta', emoji: '🍓', descripcion: 'Alta en vitamina C y antioxidantes. Baja en calorías.' },
    { id: 4, nombre: 'Brócoli', categoria: 'verdura', emoji: '🥦', descripcion: 'Rico en vitamina K, C y fibra. Excelente para la salud ósea.' },
    { id: 5, nombre: 'Zanahoria', categoria: 'verdura', emoji: '🥕', descripcion: 'Alta en betacaroteno y vitamina A. Buena para la visión.' },
    { id: 6, nombre: 'Espinaca', categoria: 'verdura', emoji: '🥬', descripcion: 'Rica en hierro, calcio y vitaminas. Ideal en ensaladas.' },
    { id: 7, nombre: 'Pollo', categoria: 'proteina', emoji: '🍗', descripcion: 'Proteína magra de alta calidad. Bajo en grasa saturada.' },
    { id: 8, nombre: 'Huevo', categoria: 'proteina', emoji: '🥚', descripcion: 'Proteína completa con todos los aminoácidos esenciales.' },
    { id: 9, nombre: 'Lentejas', categoria: 'proteina', emoji: '🫘', descripcion: 'Proteína vegetal rica en hierro y fibra.' },
    { id: 10, nombre: 'Avena', categoria: 'cereal', emoji: '🌾', descripcion: 'Carbohidrato complejo con fibra soluble. Reduce el colesterol.' },
    { id: 11, nombre: 'Arroz integral', categoria: 'cereal', emoji: '🍚', descripcion: 'Más nutritivo que el arroz blanco. Rico en fibra y minerales.' },
    { id: 12, nombre: 'Quinoa', categoria: 'cereal', emoji: '🌿', descripcion: 'Cereal completo con proteínas, fibra y minerales esenciales.' }
];

// ── DATOS DE RECETAS ──
export const recetas = [
    {
        id: 1,
        nombre: 'Bowl de avena con frutas',
        emoji: '🥣',
        tiempo: '10 min',
        ingredientes: ['1 taza de avena', '1 plátano', 'Fresas al gusto', '1 taza de leche o bebida vegetal', 'Miel al gusto'],
        pasos: [
            'Cocina la avena con la leche a fuego medio por 5 minutos.',
            'Vierte en un bowl y deja enfriar un poco.',
            'Agrega el plátano en rodajas y las fresas.',
            'Añade un toque de miel y sirve.'
        ]
    },
    {
        id: 2,
        nombre: 'Ensalada de espinaca y huevo',
        emoji: '🥗',
        tiempo: '15 min',
        ingredientes: ['2 tazas de espinaca', '2 huevos duros', '1 zanahoria rallada', 'Aceite de oliva', 'Limón y sal al gusto'],
        pasos: [
            'Cocina los huevos en agua hirviendo por 10 minutos.',
            'Lava y seca la espinaca.',
            'Ralla la zanahoria.',
            'Mezcla todo en un bowl y aliña con aceite de oliva y limón.'
        ]
    },
    {
        id: 3,
        nombre: 'Pechuga de pollo con brócoli',
        emoji: '🍽️',
        tiempo: '25 min',
        ingredientes: ['1 pechuga de pollo', '1 taza de brócoli', 'Ajo al gusto', 'Aceite de oliva', 'Sal y pimienta'],
        pasos: [
            'Sazona el pollo con ajo, sal y pimienta.',
            'Cocina a fuego medio con aceite de oliva por 10 minutos por lado.',
            'Cocina el brócoli al vapor por 5 minutos.',
            'Sirve el pollo junto al brócoli.'
        ]
    }
];

// ── DATOS DE CONSEJOS (simulando respuesta AJAX) ──
export const consejos = [
    { id: 1, emoji: '💧', titulo: 'Hidratación', texto: 'Bebe al menos 8 vasos de agua al día. La hidratación es clave para el metabolismo y la energía.' },
    { id: 2, emoji: '🍽️', titulo: 'Porciones', texto: 'Come en platos más pequeños. Esto ayuda a controlar las porciones sin sentir privación.' },
    { id: 3, emoji: '🥦', titulo: 'Variedad', texto: 'Incluye al menos 5 colores de frutas y verduras en tu día. Cada color aporta nutrientes distintos.' },
    { id: 4, emoji: '⏰', titulo: 'Horarios', texto: 'Intenta comer a horarios regulares. El cuerpo funciona mejor con rutinas establecidas.' },
    { id: 5, emoji: '🚶', titulo: 'Movimiento', texto: 'Camina al menos 30 minutos al día. El ejercicio moderado complementa una buena alimentación.' },
    { id: 6, emoji: '😴', titulo: 'Descanso', texto: 'Duerme entre 7 y 8 horas. La falta de sueño aumenta el apetito y afecta las decisiones alimentarias.' }
];