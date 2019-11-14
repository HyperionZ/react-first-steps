import React from "react";
import "./styles/styles.scss";
import Curso from "./Curso";
const App = () => (
  <>
    <div
      className="main-banner img-container dark-color l-section"
      id="main-banner"
    >
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img
            className="main-banner__img"
            alt="banner"
            src="https://66.media.tumblr.com/19784e7793fe765a00b24df4c2700495/9ac679399d8115fc-c5/s540x810/258c50ddab8d2826200613d6daaef9d13ac1dbc1.jpg"
          />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Mentores</p>
            <p> ¿No sabes por dónde empezar?</p>
            <a href="https://www.amd.com/en" className="button">
              Suscribite
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
  </>
);

export default App;

// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver un solo elemento
//3: Apoyarse de los fragment cuando necesito devolver 2 lementos.
//4: Fragment => <> hijos </>
//5: img siempre se cierra
//6: class => className
//7 for => en jsx pasa a ser htmlFor
