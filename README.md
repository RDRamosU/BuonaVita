# Buena Vida Nutrición

Página web de nutrición construida con HTML, CSS y JavaScript puro. Desarrollada para practicar conceptos fundamentales de JavaScript como funciones, eventos, módulos, display none y peticiones AJAX.

---

## ¿Qué es?

Buena Vida Nutrición es una página web estática con temática de nutrición que cubre tres secciones principales: alimentación con tarjetas por grupo alimenticio, recetas saludables fáciles de preparar y consejos nutricionales cargados mediante una petición AJAX simulada.

---

## ¿Cómo funciona?

```
Usuario abre la página
        ↓
JavaScript renderiza las tarjetas de alimentos y recetas desde data.js
        ↓
Los consejos se cargan con fetch simulando una petición AJAX
        ↓
Usuario busca un alimento o selecciona una categoría
        ↓
JavaScript aplica display none a las tarjetas que no coinciden
        ↓
El layout se reorganiza automáticamente con Flexbox
```

---

## Estructura del proyecto

```
BuonaVita/
├── index.html    # Estructura y contenido de la página
├── style.css     # Estilos y layout con Flexbox
├── app.js        # Lógica principal, eventos y renderizado
├── data.js       # Datos de alimentos, recetas y consejos
└── README.md
```

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica de la página |
| CSS3 / Flexbox | Layout responsivo y diseño de tarjetas |
| JavaScript ES6+ | Lógica, eventos y renderizado dinámico |
| Google Fonts | Tipografía Inter |

---

## Conceptos practicados

- **Módulos ES6** — separación de responsabilidades con `import` y `export`
- **Funciones declaradas y anónimas** — uso de ambas según el contexto
- **Delegación de eventos** — un solo listener en el contenedor de filtros
- **Propagación de eventos** — manejo del evento `input` en la búsqueda
- **display none** — ocultar y mostrar tarjetas según búsqueda o filtro
- **Fetch / AJAX** — carga simulada de consejos con `Promise` y `setTimeout`
- **Flexbox** — layout responsivo sin frameworks externos

---

## Secciones

**Alimentación**
- 12 tarjetas organizadas en 4 grupos: frutas, verduras, proteínas y cereales
- Buscador en tiempo real por nombre de alimento
- Filtros por categoría con delegación de eventos

**Recetas Saludables**
- 3 recetas con ingredientes y pasos de preparación
- Bowl de avena con frutas, ensalada de espinaca y huevo, pechuga con brócoli

**Consejos Nutricionales**
- 6 consejos cargados con fetch simulando una petición AJAX
- Hidratación, porciones, variedad, horarios, movimiento y descanso

---

## Instalación

No requiere instalación ni dependencias. Clona el repositorio y sirve los archivos con un servidor local:

```bash
git clone https://github.com/RDRamosU/Buena-Vida-Nutricion
cd BuonaVita
npx serve .
```

Abre la URL que aparece en la terminal en tu navegador.

---

## Autor

Ruben Dario — [rubendario.dev](https://rubendario.dev)
