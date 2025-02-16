import "./Watches.css";
import { motion } from "motion/react";
import Banner from "../../../assets/Imagenes/img_Watch/banner-watches.jpg";
import { ListWatches } from "../../../components/others";
import { WatchesProvider } from "../../../context/context.client/WatchesContext";
export const Watches = () => {
  return (
    <div>
      <WatchesProvider>
        {/* Banner */}
        <div className="card text-bg-dark">
          <img className="card-img" src={Banner} alt="Logo" />
        </div>

        <section className="container-fluid p-0">
          <div className="productos bg-white d-flex flex-row justify-content-center">
            <div
              className="d-flex flex-wrap justify-content-center"
              style={{ maxWidth: "1200px" }}
            >
              <div>
                <div className="m-4">
                  <motion.h2
                    initial={{ opacity: 0, x: -300 }}
                    animate={{opacity: 1,x: 0,}}
                    transition={{ duration: 1.5 }}
                    className="text-center text-success text-uppercase"
                  >
                    Relojes
                  </motion.h2>
                </div>
                <ListWatches />
              </div>
            </div>
          </div>
        </section>

        {/* Nueva Sección */}
        <section className="conosenos container py-5">
          <h3 className="text-center mb-4">¡Conoce más de Watch aquí!</h3>

          <div className="row justify-content-center gap-3">
            <div className="col-lg-2 col-md-5 mb-4 bg-light rounded p-3">
              <h4>
                Adquiere tu Watch con{" "}
                <strong className="text-warning">
                  tarjetas de crédito BBVA
                </strong>{" "}
                hasta 24 cuotas sin interés
              </h4>
              <p>
                ¿Estás pensando en adquirir un nuevo Watch? Con las Tarjetas de
                crédito BBVA, tu sueño está a tu alcance.
              </p>
              <p>
                ¡No esperes más, haz clic{" "}
                <a href="#">
                  <strong className="text-warning">aquí</strong>
                </a>{" "}
                y empieza a disfrutar de la tecnología sin preocupaciones
                financieras!
              </p>
            </div>

            <div className="col-lg-2 col-md-5 mb-4 bg-light rounded p-3">
              <h4>Los Watch más vendidos en el Perú</h4>
              <p>
                Los Watch más vendidos en Perú destacan por su calidad y
                tecnología de vanguardia, y puedes encontrarlos en iShop.
              </p>
              <p>
                Una calidad buena hasta un rendimiento excepcional, cada modelo
                ofrece una experiencia única. Descubre la preferencia de los
                usuarios peruanos en iShop hoy.
              </p>
            </div>

            <div className="col-lg-2 col-md-5 mb-4 bg-light rounded p-3">
              <h4>Accesorios para Watch</h4>
              <p>
                iShop es tu destino exclusivo para adquirir accesorios para
                Watch en el Perú.
              </p>
              <p>
                Con una amplia gama de opciones que incluyen fundas, y más,
                garantizamos calidad y variedad. Encuentra lo que necesitas para
                potenciar tu Watch en iShop Perú.
              </p>
            </div>

            <div className="col-lg-2 col-md-5 mb-4 bg-light rounded p-3">
              <h4>¿Dónde comprar un Watch en Perú?</h4>
              <p>
                iShop es tu destino confiable para adquirir un Watch en Perú.
                Con una amplia gama de modelos y opciones, así como un servicio
                experto en tecnología, te garantizamos la mejor experiencia de
                compra.
              </p>
              <p>¡Encuentra tu Watch perfecto en iShop Perú hoy mismo!</p>
            </div>
          </div>
        </section>
      </WatchesProvider>
    </div>
  );
};
