// Archivo único para Header y Footer (HTML, CSS y JS juntos)
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. INYECCIÓN DE ESTILOS CSS
  const estilosGlobales = document.createElement("style");
  estilosGlobales.textContent = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    
    /* SOLUCIÓN 1: Forzar al contenedor padre a manejar alturas de forma estricta */
    body {
      display: flex !important;
      flex-direction: column !important;
      min-height: 100vh !important;
      background-color: #0b0b0d; 
      color: #f5f5f7;
    }

    /* SOLUCIÓN 2: Forzar al área de contenido a absorber el espacio y no colapsar */
    main, .main-content {
      display: block !important;
      flex: 1 0 auto !important; 
      width: 100%;
      min-height: 65vh !important; 
      box-sizing: border-box;
    }

    /* --- ESTILOS DEL HEADER PREMIUM --- */
    .custom-header {
      background: rgba(18, 18, 22, 0.75); 
      backdrop-filter: blur(20px); 
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      padding: 18px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 1000;
      transition: all 0.3s ease;
      flex-shrink: 0 !important;
    }
    
    .custom-header.scrolled {
      background: rgba(11, 11, 13, 0.9);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .header-logo a {
      font-size: 1.8em;
      font-weight: 800;
      letter-spacing: -0.5px;
      text-decoration: none;
      background: linear-gradient(135deg, #fff 0%, #e5b842 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: opacity 0.3s;
    }
    
    .header-logo a:hover {
      opacity: 0.9;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 32px;
      align-items: center;
    }

    .nav-item a {
      color: #9ca3af;
      text-decoration: none;
      font-size: 0.95em;
      font-weight: 500;
      letter-spacing: 0.2px;
      transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s ease;
      position: relative;
      padding: 6px 0;
    }

    .nav-item a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #ffcc00, #e5b842);
      transition: width 0.25s ease, left 0.25s ease;
    }

    .nav-item a:hover {
      color: #ffffff;
    }

    .nav-item a:hover::after {
      width: 100%;
      left: 0;
    }

    /* Botón Hamburguesa Premium Animado */
    .menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 22px;
      height: 16px;
      background: none;
      border: none;
      cursor: pointer;
    }

    .menu-toggle span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: #ffffff;
      border-radius: 4px;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, background-color 0.3s ease;
    }

    /* Animación activa del menú hamburguesa */
    .menu-toggle.open span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
      background-color: #ffcc00;
    }
    .menu-toggle.open span:nth-child(2) {
      opacity: 0;
    }
    .menu-toggle.open span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
      background-color: #ffcc00;
    }

    /* --- ESTILOS DEL FOOTER PREMIUM (FIJO SIN SALTOS) --- */
    .custom-footer {
      background-color: #0b0b0d;
      color: #ffffff;
      padding: 40px 20px;
      margin-top: auto !important; /* Empuja al fondo de manera estricta */
      border-top: 1px solid rgba(255, 255, 255, 0.04);
      width: 100%;
      flex-shrink: 0 !important; /* SOLUCIÓN 3: Prohíbe que el contenido de arriba lo aplaste */
      height: auto;
      position: relative;
      z-index: 10;
    }
    
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .footer-content p {
      font-size: 0.85em;
      color: #636366; 
      letter-spacing: 0.1px;
    }

    .footer-links {
      display: flex;
      justify-content: center;
      gap: 24px;
      list-style: none;
    }

    .footer-links a {
      color: #8e8e93;
      text-decoration: none;
      font-size: 0.85em;
      font-weight: 400;
      transition: color 0.25s ease;
    }

    .footer-links a:hover {
      color: #ffcc00;
    }

    .oculto {
      display: none !important;
    }

    /* --- RESPONSIVO --- */
    @media (max-width: 768px) {
      .custom-header {
        padding: 16px 24px;
      }
      
      .menu-toggle {
        display: flex;
      }

      .nav-menu {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(18, 18, 22, 0.98);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        padding: 30px 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        gap: 24px;
        transform: translateY(-10px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }

      .nav-menu.active {
        display: flex;
        transform: translateY(0);
        opacity: 1;
      }
      
      .nav-item a::after {
        display: none; 
      }
      
      /* Ajuste responsivo del footer para celulares */
      .footer-content {
        gap: 16px;
      }

      .footer-links {
        flex-direction: column;
        gap: 12px;
        text-align: center;
        width: 100%;
      }
    }
  `;
  document.head.appendChild(estilosGlobales);

  // 2. CREACIÓN E INYECCIÓN DEL HEADER HTML
  const headerContainer = document.createElement("header");
  headerContainer.className = "custom-header";
  headerContainer.innerHTML = `
    <div class="header-logo">
      <a href="#">Pelicries</a>
    </div>
    <button class="menu-toggle" aria-label="Abrir menú">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="nav-menu">
      <li class="nav-item"><a href="/index">Inicio</a></li>
      <li class="nav-item"><a href="/Peliculas">Películas</a></li>
      <li class="nav-item"><a href="#/Series">Series</a></li>
    </ul>
  `;
  document.body.insertBefore(headerContainer, document.body.firstChild);

  // 3. CREACIÓN E INYECCIÓN DEL FOOTER HTML
  const footerContainer = document.createElement("footer");
  footerContainer.className = "custom-footer";
  footerContainer.innerHTML = `
    <div class="footer-content">
      <ul class="footer-links">
        <li><a href="/Terminos_uso">Términos de uso</a></li>
        <li><a href="/Politicas_privacidad">Política de privacidad</a></li>
        <li><a href="/Politicas_cookies">Políticas de cookies</a></li>
      </ul>
      <p>&copy; ${new Date().getFullYear()} Pelicries. Todos los derechos reservados.</p>
    </div>
  `;
  document.body.appendChild(footerContainer);

  // 4. LÓGICA DEL MENÚ RESPONSIVO INTERACTIVO
  const menuToggle = headerContainer.querySelector('.menu-toggle');
  const navMenu = headerContainer.querySelector('.nav-menu');

  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    menuToggle.classList.toggle('open', isOpen);
  });

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener('click', (event) => {
    if (!headerContainer.contains(event.target) && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('open');
    }
  });

  // Efecto visual sólido al hacer scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      headerContainer.classList.add('scrolled');
    } else {
      headerContainer.classList.remove('scrolled');
    }
  });
});
