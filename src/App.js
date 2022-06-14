import logo from "./logo.svg";
import "./App.css";
import imagen from "./logo.png";
import imagen2 from "./oficina.png";
import imagen3 from "./voluntariado.jpg";
import manos from "./imagenes/manos.jpg";
import icono from "./imagenes/icono-maletin.png";


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

        <main>
          <div id="Nosotros" class="container">
            <div class="empresas">
              <img class="image" src={imagen2} alt="" />
              <div class="soluciones">
                <h2>Soluciones para empresas</h2>
                <p>
                  Generamos un medio para que las empresas se involucren <br />{" "}
                  en la actividades de responsabilidad social. <br />
                  crea un grupo de voluntarios en tu organizacion y se parte del
                  <br /> cambio!.
                </p>
              </div>
            </div>
            <div class="empresa">
              <div class="solucione">
                <h2>Soluciones para organizaciones</h2>
                <p>
                  Apoyamos a las organizaciones sociales para que alcancen sus{" "}
                  <br /> objetivos.ponemos su disposicion una comunidad de
                  voluntarios
                  <br />
                  dispuestos a apoyarlas en sus necesidades.
                  <br /> Equipo de voluntarios para empresas dispuestos a
                  potenciar tu <br /> impacto en la sociedad.
                </p>
              </div>

              <img class="image" src={imagen3} alt="" />
            </div>
          </div>
        </main>
        <article>
          <h2 class="oportunidades">Encuentra las mejores oportunidades</h2>
          <p>
            La plataforma cuenta con gran variedad de proyectos
            locales(sociales,educativos y medioambientales),donde
            <br />
            encontraras el que mejor se adapte <br />
            a la experiencia que estas buscando. <br />
            Te ayudamos en la coordinacion con la organizacion de forma simple y
            rapida
          </p>

          <div class="cards">
            <div class="ser">
              <span class="mas">
                <img src="./Materiales/icono-mas.png" width="30px" alt="" />
              </span>
              <img
                class="imagen"
                src="./Materiales/icono-mano.png"
                width="40px"
                alt=""
              />
              <h4 class="texti">Ser voluntario</h4>
            </div>
            <div class="donar">
              <span class="mas">
                <img src="./Materiales/icono-mas.png" width="30px" alt="" />
              </span>
              <img
                class="imagen"
                src="./Materiales/icono-mano-corazon.png"
                width="80px"
                alt=""
              />
              <h4 class="texti">Donar</h4>
            </div>
            <div class="reciclar">
              <span class="mas">
                <img src="./Materiales/icono-mas.png" width="30px" alt="" />
              </span>
              <img
                class="imagen"
                src="./Materiales/icono-reciclar.png"
                width="80px"
                alt=""
              />
              <h4 class="texti">Reciclar</h4>
            </div>
            <div class="laborales">
              <div class="mas">
                <img src="./Materiales/icono-mas.png" width="30px" alt="" />
              </div>
              <img
                class="imagen"
                src="./Materiales/icono-maletin.png"
                width="60px"
                alt=""
              />
              <h4 class="texti">
                Llamados <br />
                laborales
              </h4>
            </div>
          </div>
        </article>
      </body>
    </div>
  );
}

export default App;
