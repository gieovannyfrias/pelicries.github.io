// lo mas visto.js
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const hijos = main.children; // todos los hijos directos de <main>
  const trendingSection = document.createElement("section");
  trendingSection.className = "trending";
  trendingSection.innerHTML = `
    <h2>Destacados</h2>
    <div class="carousel">
      ${[
        { 
          title: "Levantate", 
          genre: "Terror • 2026", 
          img: "https://lh3.googleusercontent.com/d/1VZE81X5w96wy-qEm_Ia2-j71KwlbXD7W=w1000",
          url: "/Levantate" 
        },
        { 
          title: "No disponible - Titulo", 
          genre: "Acción • 2014", 
          img: "https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000",
          url: "/No_disponible" 
        },
        { 
          title: "No disponible - Titulo", 
          genre: "Acción • 2015", 
          img: "https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000",
          url: "/No_disponible" 
        },
        { 
          title: "No disponible - Titulo", 
          genre: "Ciencia ficción • 2010", 
          img: "https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000",
          url: "/No_disponible" 
        },
        { 
          title: "No disponible - Titulo", 
          genre: "Ciencia ficción • 2014", 
          img: "https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000",
          url: "/No_disponible" 
        },
        { 
          title: "No disponible - Titulo", 
          genre: "Fantasía • 2009", 
          img: "https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000",
          url: "/No_disponible" 
        },
        { 
          title: "No disponible - Titulo", 
          genre: "Acción • 2008", 
          img: "https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000",
          url: "/No_disponible" 
        },
        { 
          title: "No disponible - Titulo", 
          genre: "Drama • 2000", 
          img: "https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000",
          url: "/No_disponible" 
        },
        { 
          title: "No disponible - Titulo", 
          genre: "Crimen • 1994", 
          img: "https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000",
          url: "/No_disponible" 
        },
        { 
          title: "No disponible - Titulo", 
          genre: "Drama • 1999", 
          img: "https://lh3.googleusercontent.com/d/1dygIwm4T9gP2QboxGVHouGm5i95KjjAe=w1000",
          url: "/No_disponible" 
        }
      ]
        .map(
          movie => `
          <div class="card">
            <!-- MODIFICADO: Ahora el src apunta a movie.img de manera individual -->
            <img src="${movie.img}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.genre}</p>
               <a href="${movie.url}" class="play-icon">▶</a>
          </div>
        `
        )
        .join("")}
    </div>
  `;

  main.insertBefore(trendingSection, hijos[5]);
  
  // Estilos dinámicos
  const style = document.createElement("style");
  style.textContent = `
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #111;
      color: #fff;
    }
    .header {
      text-align: center;
      padding: 20px;
      background: #000;
      border-bottom: 2px solid #ffcc00;
    }
    .trending {
      padding: 40px;
    }
    .trending h2 {
      color: #ffcc00;
      margin-bottom: 20px;
    }
    .carousel {
      display: flex;
      gap: 20px;
      overflow-x: auto;
      scroll-behavior: smooth;
      padding-bottom: 10px;
    }
    .carousel::-webkit-scrollbar {
      height: 8px;
    }
    .carousel::-webkit-scrollbar-thumb {
      background: #444;
      border-radius: 4px;
    }
    .card {
      position: relative;
      flex: 0 0 auto;
      width: 200px;
      background: #222;
      border-radius: 12px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.6);
      transition: transform 0.3s ease;
      text-align: center;
      overflow: hidden;
    }
    .card:hover {
      transform: scale(1.08);
    }
    
    /* MODIFICADO: Se fija una altura y un comportamiento de recorte para que todas las imágenes midan igual */
    .card img {
      width: 100%;
      height: 280px;
      object-fit: cover;
      border-radius: 12px 12px 0 0;
    }
    
    .card h3 {
      margin: 10px 0 5px;
      font-size: 1.1em;
    }
    .card p {
      font-size: 0.9em;
      color: #ccc;
      margin-bottom: 10px;
    }
    
    .play-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5em;
      color: #fff;
      background: radial-gradient(circle, #ffcc00 30%, #e6b800 100%);
      border-radius: 50%;
      text-decoration: none;
      box-shadow: 0 6px 15px rgba(0,0,0,0.6);
      transition: all 0.3s ease;
    }

    .card:hover .play-icon {
      opacity: 1;
    }

    .play-icon:hover {
      background: radial-gradient(circle, #ffd633 30%, #ffcc00 100%);
      color: #111;
      transform: translate(-50%, -50%) scale(1.2);
      box-shadow: 0 8px 20px rgba(255,204,0,0.8);
    }
  `;
  document.head.appendChild(style);
});
