import logo from "./logo.svg";
import "./App.css";
import imagen from "./logo.png";
function App() {
  return (
    <div className="App">
      <body id="body">
        <nav>
          <div class="logo">
            <img src={imagen} />

            <li>
              <a href="#Nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#Noticias">Noticias</a>
            </li>
            <li>
              <a href="#Ayuda">Ayuda</a>
            </li>
          </div>
          <button id="modal-btn" class="button">
            INGRESAR
          </button>
        </nav>
        <div class="modalc">
          <div id="my-modal" class="modal">
            <div class="cierre-modal">
              <div class="image-grnade">
                <img
                  id="imgaenn"
                  src="./Materiales/imagen-modal.JPG"
                  height="100%
                "
                  alt=""
                />
              </div>
              <div class="registro">
                <div class="volver-atras">
                  <div id="div">
                    <span class="material-symbols-outlined"> arrow_back </span>

                    <p>Volver atras</p>
                  </div>
                  <p class="close">X</p>
                </div>
                <div class="registrar">
                  <h2>Registrar</h2>
                </div>
                <div class="organizacion">
                  <div class="contenedor">
                    <div class="sabor">
                      <img
                        src="./Materiales/icono-maletin.png"
                        width="40px"
                        alt=""
                      />
                    </div>
                    <div class="empresa-organizacion">
                      <h5>Mi Empresa</h5>
                      <p>
                        Breve explicacion a lo <br />
                        que nos <br />
                        referimos
                      </p>
                    </div>
                  </div>
                  <span class="arrow">
                    <img
                      src="./Materiales/icono-flecha.png"
                      width="20px"
                      alt=""
                    />
                  </span>
                </div>

                <div class="organizacion">
                  <div class="contenedor">
                    <div class="sabor">
                      <img
                        src="./Materiales/icono-persona.png"
                        width="40px"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5>Mi Organizacion</h5>
                      Estamos para ayudarlos
                    </div>
                  </div>
                  <span class="arrow">
                    <img
                      src="./Materiales/icono-flecha.png"
                      width="20px"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header>
          <h1>Actúa para cambiar el mundo</h1>
          <div class="h4">
            <h4>
              Fomentamos el vínculo entre empresas y oganizaciones civiles para
              generar un <br />
              impacto positivo en la sociedad <br />
              Descubri diferentes maneras de involuchar tu organizacion con la
              sociedad
            </h4>
          </div>
        </header>
      </body>
    </div>
  );
}

export default App;
