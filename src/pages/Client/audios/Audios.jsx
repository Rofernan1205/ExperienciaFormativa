import { ListAudio } from "../../../components/others";
import { motion } from "motion/react";
import { AudiosProvider } from "../../../context/context.client/AudioContext";
import "./Audios.css";
import Banner from "../../../assets/Imagenes/img_Audio/banner_principal_audio.png";
export const Audios = () => {
  return (
    <div>
      <AudiosProvider>
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
                <motion.h2
                  initial={{ opacity: 0, x: -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className="text-center text-success text-uppercase"
                >
                  Audio
                </motion.h2>
                <ListAudio />
              </div>
            </div>
          </div>
        </section>

        {/* Nueva Sección */}
        <section className="conosenos container py-5">
          <h3 className="text-center mb-4">¡Conoce más de Audios aquí!</h3>

          <div className="row justify-content-center gap-3">
            <div className="col-lg-2 col-md-5 mb-4 bg-light rounded p-3">
              <h4>
                Adquiere tu Audios con{" "}
                <strong className="text-warning">
                  tarjetas de crédito BBVA
                </strong>{" "}
                hasta 24 cuotas sin interés
              </h4>
              <p>
                ¿Estás pensando en adquirir un nuevo Audio? Con las Tarjetas de
                crédito BBVA, tu sueño está a tu alcance.
              </p>
              <p>
                ¡No esperes más, haz clic{" "}
                <a href="#">
                  <strong className="text-warning">aquí</strong>
                </a>{" "}
                y empieza a disfrutar de la tecnología Apple sin preocupaciones
                financieras!
              </p>
            </div>

            <div className="col-lg-2 col-md-5 mb-4 bg-light rounded p-3">
              <h4>Los Audios más vendidos en el Perú</h4>
              <p>
                Los Audios más vendidos en Perú destacan por su calidad y
                tecnología de vanguardia, y puedes encontrarlos en iShop.
              </p>
              <p>
                Desde potentes cámaras hasta un rendimiento excepcional, cada
                modelo ofrece una experiencia única. Descubre la preferencia de
                los usuarios peruanos en iShop hoy.
              </p>
            </div>

            <div className="col-lg-2 col-md-5 mb-4 bg-light rounded p-3">
              <h4>Accesorios para Audios</h4>
              <p>
                iShop es tu destino exclusivo para adquirir accesorios para
                Audios en el Perú.
              </p>
              <p>
                garantizamos calidad y variedad. Encuentra lo que necesitas para
                potenciar tu iPhone en iShop Perú.
              </p>
            </div>

            <div className="col-lg-2 col-md-5 mb-4 bg-light rounded p-3">
              <h4>¿Dónde comprar un Audio en Perú?</h4>
              <p>
                iShop es tu destino confiable para adquirir un Audio en Perú.
                Con una amplia gama de modelos y opciones, así como un servicio
                experto en tecnología, te garantizamos la mejor experiencia de
                compra.
              </p>
              <p>¡Encuentra tu Audios perfecto en iShop Perú hoy mismo!</p>
            </div>
          </div>
        </section>
      </AudiosProvider>
    </div>
  );
};
