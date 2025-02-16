import "./Tablets.css";
import { motion } from "motion/react";
import Banner from "../../../assets/Imagenes/img_Ipad/banner_principal.jpg";
import { ListTablets } from "../../../components/others";
import { TabletsProvider } from "../../../context/context.client/TabletsContext";
export const Tablets = () => {
  return (
    <div>
      <TabletsProvider>
        {/* Banner */}
        <div className="card text-bg-dark">
          <img className="card-img" src={Banner} alt="Logo" />
        </div>

        <section className="container-fluid p-0">
          <div className="productos bg-white d-flex flex-row justify-content-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="text-center text-success text-uppercase"
              >
                Tablets
              </motion.h2>
              <ListTablets />
            </div>
          </div>
        </section>

        {/* Nueva Sección */}
        <section className="conosenos container py-5">
          <h3 className="text-center mb-4">
            ¡Conoce más de Ipad de Apple aquí!
          </h3>

          <div className="row justify-content-center gap-3">
            <div className="col-lg-2 col-md-5 mb-4 bg-light rounded p-3">
              <h4>
                Adquiere tu Ipad con{" "}
                <strong className="text-warning">
                  tarjetas de crédito BBVA
                </strong>{" "}
                hasta 24 cuotas sin interés
              </h4>
              <p>
                ¿Estás pensando en adquirir un nuevo Ipad? Con las Tarjetas de
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
              <h4>Los Ipad más vendidos en el Perú</h4>
              <p>
                Los Ipad más vendidos en Perú destacan por su calidad y
                tecnología de vanguardia, y puedes encontrarlos en iShop.
              </p>
              <p>
                Desde potentes cámaras hasta un rendimiento excepcional, cada
                modelo ofrece una experiencia única. Descubre la preferencia de
                los usuarios peruanos en iShop hoy.
              </p>
            </div>

            <div className="col-lg-2 col-md-5 mb-4 bg-light rounded p-3">
              <h4>Accesorios para Ipad</h4>
              <p>
                iShop es tu destino exclusivo para adquirir accesorios para Ipad
                en el Perú.
              </p>
              <p>
                Con una amplia gama de opciones que incluyen fundas, cargadores
                y más, garantizamos calidad y variedad. Encuentra lo que
                necesitas para potenciar tu Ipad en iShop Perú.
              </p>
            </div>

            <div className="col-lg-2 col-md-5 mb-4 bg-light rounded p-3">
              <h4>¿Dónde comprar un Ipad en Perú?</h4>
              <p>
                iShop es tu destino confiable para adquirir un Ipad en Perú. Con
                una amplia gama de modelos y opciones, así como un servicio
                experto en tecnología, te garantizamos la mejor experiencia de
                compra.
              </p>
              <p>¡Encuentra tu Ipad perfecto en iShop Perú hoy mismo!</p>
            </div>
          </div>
        </section>
      </TabletsProvider>
    </div>
  );
};
