// Todo el código agrupado en un solo archivo JavaScript (.js)
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. INYECCIÓN DE ESTILOS CSS
  const estilos = document.createElement("style");
  estilos.textContent = `
    .title_categories {
      text-align: center;
      font-size: 2.5em;
      margin-bottom: 20px;
      color: #ffcc00;
      text-shadow: 0 0 10px rgba(255,204,0,0.4);
    }
    #buscador {
      display: block;
      margin: 0 auto 25px auto;
      padding: 14px 20px;
      width: 60%;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 1.1em;
      background-color: #121216;
      color: #fff;
      box-shadow: 0 4px 15px rgba(0,0,0,0.5);
      outline: none;
      transition: border-color 0.3s;
    }
    #buscador:focus {
      border-color: #ffcc00;
    }
    .categorias {
      text-align: center;
      margin-bottom: 35px;
    }
    .categorias button {
      margin: 5px;
      padding: 10px 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      background: #121216;
      color: #9ca3af;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
    }
    .categorias button:hover, .categorias button.active {
      background: #ffcc00;
      color: #1c1c1c;
      border-color: #ffcc00;
      box-shadow: 0 4px 12px rgba(255,204,0,0.3);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 30px;
      max-width: 1400px;
      margin: 0 auto;
    }
    .card_categories {
      position: relative;
      overflow: hidden;
      border-radius: 14px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.6);
      transition: transform 0.3s style, box-shadow 0.3s;
      background: #121216;
      border: 1px solid rgba(255,255,255,0.03);
    }
    .card_categories:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 25px rgba(0,0,0,0.8);
    }
    .card_categories:hover img {
      transform: scale(1.05);
    }
    .card_categories img {
      width: 100%;
      height: 450px; /* Reducido un poco para balance de pantalla */
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(11,11,13,0.95) 0%, rgba(11,11,13,0.7) 70%, transparent 100%);
      color: #fff;
      padding: 20px;
    }
    .badge {
      position: absolute;
      top: 15px;
      left: 15px;
      background: #ffcc00;
      color: #1c1c1c;
      padding: 6px 12px;
      border-radius: 6px;
      font-weight: bold;
      font-size: 0.85em;
    }
 .badge-tipo {
      position: absolute;
      top: 10px;
      right: 10px;
      background: red;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: bold;
      font-size: 0.85em;
    }
    .card_categories h2 {
      margin: 0 0 8px 0;
      font-size: 1.4em;
      color: #ffffff;
    }
    .card_categories p {
      margin: 0 0 18px 0;
      font-size: 0.95em;
      color: #9ca3af;
      line-height: 1.4;
    }
    .btn_categories {
      display: inline-block;
      padding: 10px 18px;
      background: #ffcc00;
      color: #1c1c1c;
      font-weight: bold;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    .btn_categories:hover {
      background: #e6b800;
      transform: scale(1.02);
    }
    .oculto {
      display: none !important;
    }
  `;
  document.head.appendChild(estilos);

  // 2. CREACIÓN DE LA ESTRUCTURA HTML EN MEMORIA
  const contenedorComponente = document.createElement("div");
  contenedorComponente.className = "contenedor-peliculas-app"; // Clase identificadora opcional
  contenedorComponente.innerHTML = `
    <h1 class="title_categories">Categorias</h1>
    <input type="text" id="buscador" placeholder="Buscar por título o categoría...">

    <div class="categorias">
      <button data-filter="all">Todas</button>
      <button data-filter="Acción">Acción</button>
      <button data-filter="Comedia">Comedia</button>
      <button data-filter="Drama">Drama</button>

    </div>

    <div class="grid">
      <div class="card_categories" data-categoria="Acción">
        <img src="https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000" alt="Acción">
        <div class="badge">Acción</div>
        <div class="badge-tipo">Series</div>
        <div class="overlay">
        <h2>No disponible -Titulo</h2>
          <p>No disponible - Descripción.</p>
          <a href="/No_disponible" class="btn_categories">Ver película</a>
        </div>
      </div>

      <div class="card_categories" data-categoria="Comedia">
        <img src="https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000" alt="Comedia">
        <div class="badge">Comedia</div>
        <div class="badge-tipo">Series</div>
        <div class="overlay">
        <h2>No disponible -Titulo</h2>
          <p>No disponible - Descripción.</p>
          <a href="/No_disponible" class="btn_categories">Ver película</a>
        </div>
      </div>

      <div class="card_categories" data-categoria="Drama">
        <img src="https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000" alt="Drama">
        <div class="badge">Drama</div>
        <div class="badge-tipo">Series</div>
        <div class="overlay">
        <h2>No disponible -Titulo</h2>
          <p>No disponible - Descripción.</p>
          <a href="/No_disponible" class="btn_categories">Ver película</a>
        </div>
      </div>

      <div class="card_categories" data-categoria="Drama">
        <img src="https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000" alt="Drama">
        <div class="badge">Drama</div>
        <div class="badge-tipo">Series</div>
        <div class="overlay">
        <h2>No disponible -Titulo</h2>
          <p>No disponible - Descripción.</p>
          <a href="/No_disponible" class="btn_categories">Ver película</a>
        </div>
      </div>

      <div class="card_categories" data-categoria="Drama">
        <img src="https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000" alt="Drama">
        <div class="badge">Drama</div>
        <div class="badge-tipo">Series</div>
        <div class="overlay">
        <h2>No disponible -Titulo</h2>
          <p>No disponible - Descripción.</p>
          <a href="/No_disponible" class="btn_categories">Ver película</a>
        </div>
      </div>

      <div class="card_categories" data-categoria="Drama">
        <img src="https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000" alt="Drama">
        <div class="badge">Drama</div>
        <div class="badge-tipo">Series</div>
        <div class="overlay">
        <h2>No disponible -Titulo</h2>
          <p>No disponible - Descripción.</p>
          <a href="/No_disponible" class="btn_categories">Ver película</a>
        </div>
      </div>

      <div class="card_categories" data-categoria="Drama">
        <img src="https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000" alt="Drama">
        <div class="badge">Drama</div>
        <div class="badge-tipo">Series</div>
        <div class="overlay">
        <h2>No disponible -Titulo</h2>
          <p>No disponible - Descripción.</p>
          <a href="/No_disponible" class="btn_categories">Ver película</a>
        </div>
      </div>

      <div class="card_categories" data-categoria="Drama">
        <img src="https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000" alt="Drama">
        <div class="badge">Drama</div>
        <div class="badge-tipo">Series</div>
        <div class="overlay">
        <h2>No disponible -Titulo</h2>
          <p>No disponible - Descripción.</p>
          <a href="/No_disponible" class="btn_categories">Ver película</a>
        </div>
      </div>
    </div>
  `;
  
  // INYECCIÓN EXACTA EN LA ETIQUETA <main>
  const mainHTML = document.querySelector("main");
  if (mainHTML) {
    mainHTML.appendChild(contenedorComponente);
  } else {
    document.body.appendChild(contenedorComponente); // Respaldo por si acaso
  }

  // 3. LÓGICA DE FILTRADO (JAVASCRIPT)
  const buscador = document.getElementById('buscador');
  const cards = document.querySelectorAll('.card_categories');
  const botones = document.querySelectorAll('.categorias button');

  // Buscador por escritura
  buscador.addEventListener('keyup', () => {
    const texto = buscador.value.toLowerCase().trim();
    
    cards.forEach(card => {
      const titulo = card.querySelector('h2').textContent.toLowerCase();
      const categoria = card.dataset.categoria.toLowerCase();
      
      if (titulo.includes(texto) || categoria.includes(texto)) {
        card.classList.remove('oculto');
      } else {
        card.classList.add('oculto');
      }
    });
  });

  // Filtro mediante clics en botones
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const filtro = boton.dataset.filter.toLowerCase().trim();
      buscador.value = ''; // Limpia el texto ingresado

      cards.forEach(card => {
        const categoria = card.dataset.categoria.toLowerCase();
        
        if (filtro === 'all' || categoria === filtro) {
          card.classList.remove('oculto');
        } else {
          card.classList.add('oculto');
        }
      });
    });
  });
});
