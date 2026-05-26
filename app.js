import { alimentos, recetas, consejos } from './data.js';

// ── REFERENCIAS DEL DOM ──
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const alimentosGrid = document.getElementById('alimentos-grid');
const recetasGrid = document.getElementById('recetas-grid');
const consejosGrid = document.getElementById('consejos-grid');

// ── RENDERIZAR ALIMENTOS ──
const renderAlimentos = (lista) => {
  alimentosGrid.innerHTML = lista.map(alimento => `
    <div class="card" data-categoria="${alimento.categoria}">
      <div class="card-emoji">${alimento.emoji}</div>
      <div class="card-info">
        <span class="card-categoria">${alimento.categoria}</span>
        <h3 class="card-nombre">${alimento.nombre}</h3>
        <p class="card-desc">${alimento.descripcion}</p>
      </div>
    </div>
  `).join('');
};

// ── RENDERIZAR RECETAS ──
const renderRecetas = () => {
  recetasGrid.innerHTML = recetas.map(receta => `
    <div class="receta-card">
      <div class="receta-emoji">${receta.emoji}</div>
      <h3 class="receta-nombre">${receta.nombre}</h3>
      <span class="receta-tiempo">⏱ ${receta.tiempo}</span>
      <div class="receta-detalle">
        <div class="receta-ingredientes">
          <h4>Ingredientes</h4>
          <ul>
            ${receta.ingredientes.map(i => `<li>${i}</li>`).join('')}
          </ul>
        </div>
        <div class="receta-pasos">
          <h4>Preparación</h4>
          <ol>
            ${receta.pasos.map(p => `<li>${p}</li>`).join('')}
          </ol>
        </div>
      </div>
    </div>
  `).join('');
};

// ── CARGAR CONSEJOS CON FETCH (AJAX) ──
const cargarConsejos = () => {
  // Simulamos una petición AJAX con fetch y una promesa resuelta
  const fetchConsejos = () => new Promise((resolve) => {
    setTimeout(() => resolve(consejos), 800);
  });

  consejosGrid.innerHTML = '<p class="loading">Cargando consejos...</p>';

  fetchConsejos().then(data => {
    consejosGrid.innerHTML = data.map(consejo => `
      <div class="consejo-card">
        <div class="consejo-emoji">${consejo.emoji}</div>
        <h3 class="consejo-titulo">${consejo.titulo}</h3>
        <p class="consejo-texto">${consejo.texto}</p>
      </div>
    `).join('');
  });
};

// ── BÚSQUEDA CON DISPLAY NONE ──
const buscarAlimentos = (termino) => {
  const cards = alimentosGrid.querySelectorAll('.card');
  cards.forEach(card => {
    const nombre = card.querySelector('.card-nombre').textContent.toLowerCase();
    if (nombre.includes(termino.toLowerCase())) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
};

// ── FILTROS POR CATEGORÍA ──
const filtrarPorCategoria = (categoria) => {
  const cards = alimentosGrid.querySelectorAll('.card');
  cards.forEach(card => {
    if (categoria === 'todos' || card.dataset.categoria === categoria) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
};

// ── DELEGACIÓN DE EVENTOS EN FILTROS ──
document.querySelector('.filters').addEventListener('click', (e) => {
  if (!e.target.classList.contains('filter-btn')) return;

  filterBtns.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  const categoria = e.target.dataset.categoria;
  filtrarPorCategoria(categoria);
  searchInput.value = '';
});

// ── PROPAGACIÓN DE EVENTO EN BÚSQUEDA ──
searchInput.addEventListener('input', function () {
  const termino = this.value;

  // Resetear filtros activos
  filterBtns.forEach(btn => btn.classList.remove('active'));
  document.querySelector('[data-categoria="todos"]').classList.add('active');

  buscarAlimentos(termino);
});

// ── INICIALIZAR ──
renderAlimentos(alimentos);
renderRecetas();
cargarConsejos();