import banner_1 from '../../../assets/Imagenes/banner_2.jpeg';
import "./Home.css";


export const Home = () => {


  return (
    <>
   
      <section className="container-fluid d-flex justify-content-between">
        <div className="banner d-flex align-items-center justify-content-center flex-column p-5">
          <div className="banner-title">
            <span  className="fw-bold fs-2 text-success">app</span>
            <span className="R fw-bold fs-2 fst-italic">R</span>
            <br />
            <span className="fw-semibold week fs-1">week</span>
            <p className="rounded-pill border border-3 text-secondary">
              nueva temporada
            </p>
          </div>

          <div className="banner-finance rounded p-2 border border-3">
            <div className="d-flex flex-row p-0 text-secondary">
              <div>
                <span>10 meses</span>
                <br />
                <span >sin interés</span>
                <br />
              </div>
              <div>
                <span className="fw-bold fs-2 fst-italic p-2 text-white-50">
                  R
                </span>
              </div>
            </div>
            <p className="p-0 text-light m-0">_______________</p>
            <br />
            <p className="p-0 m-0 fw-semibold text-light">
              productos <br /> seleccionados
            </p>
          </div>

          <div className="banner-promotion rounded border border-0 p-2 m-2 d-flex align-items-center justify-content-center flex-column">
            <p className="text-light fs-5 m-0">usa tu cupón :</p>
            <p className="text-light fw-semibold fs-4 m-0">ELECTROAPP</p>
            <p className="text-light m-0">ver legales</p>
          </div>

          <a className="text-decoration-underline text-white-50" href="/cellphones">
            ver <span className="text-light">productos +</span>
            <br />
          </a>
        </div>

        {/* Sección de Productos */}
        <div className="productos bg-white d-flex flex-row justify-content-center">
          <div
            className="d-flex flex-wrap justify-content-center"
            style={{ maxWidth: "1200px" }}
          >





          </div>
        </div>
      </section>

      <section className="container-fluid p-0">
        <div className="seccion_2 d-flex align-items-center justify-content-around">
          <div className="banner-finance rounded p-2 border border-3 d-flex flex-row">
            <div>
              <div className="d-flex flex-row p-0">
                <div>
                  <span className="fw-bold fs-5 text-light">10 meses</span>
                  <br />
                  <span className="fw-bold fs-5 text-light">sin interés</span>
                  <br />
                </div>
                <div>
                  <span className="fw-bold fs-1 fst-italic p-2 text-white-50">
                    R
                  </span>
                </div>
              </div>
              <p className="p-0 m-0 fw-semibold text-light">
                productos seleccionados
              </p>
            </div>
            <div>
              <div className="line-vertical"></div>
            </div>
            <div className="d-flex align-items-center">
              <p className="fw-bold fs-1 m-2">celulares</p>
            </div>
          </div>
          <div className="logo rounded-pill border border-3 text-light bg-light d-flex align-items-center justify-content-center">
            <h2 className="m-2 text-dark">SAMSUNG</h2>
          </div>
        </div>

        <div className="ofertas d-flex align-items-center justify-content-around bg-white">
         
        </div>
      </section>

      {/* Nueva sección agregada */}

      <section className="container-fluid p-0">
        <div className="seccion_3 d-flex flex-column align-items-center justify-content-center bg-white">
          <h2>NUESTROS PRODUCTOS DE MODA</h2>
        </div>
        <div className="productos bg-white d-flex flex-wrap justify-content-center">
          <div className="d-flex flex-wrap justify-content-center" style={{ maxWidth: "1200px" }}>
         
          </div>
        </div>
      </section>

      <section className="container-fluid p-0">
        <div className="banner_Apple w-100">
          <img src={banner_1} className="img-fluid" alt="Banner" />
        </div>
      </section>

      <section className="container-fluid p-0">
          <div className="productos bg-white d-flex flex-wrap justify-content-center p-5">
            <div className="d-flex flex-wrap justify-content-center" style={{ maxWidth: '1600px' }}>
   
           </div>
        </div>
    </section> 
    </>
  );
};
