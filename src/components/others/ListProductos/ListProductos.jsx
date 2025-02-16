
import { useContext, useState } from "react";
import { motion } from "motion/react";
import ProductosContext from "../../../context/context.client/ProductosContext";

export const ListProductos = () => {
  const { productos } = useContext(ProductosContext);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const animationVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(2px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <>
      {productos && (
        <div className="row">
          {productos.map((producto, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-around"
              key={index}
            >
              <motion.div
                variants={animationVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.4 }}
                className="card text-center mb-4 d-flex flex-column justify-content-end h-60"
                style={{ width: "250px" }}
              >
                <img
                  src={"https://res.cloudinary.com/dshgodujh/" + producto.imagen}
                  className="card-img-top"
                  alt={producto.nombre}
                />
                <div className="card-body d-flex flex-column justify-content-end text-center h-60">
                  <span className="text-uppercase text-muted">
                    {producto.marca}
                  </span>
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text text-danger fw-bold">
                    S/ {producto.precio}
                  </p>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#detalleProductoModal"
                    onClick={() => setProductoSeleccionado(producto)}
                  >
                    Ver detalle
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de Bootstrap */}
      <div
        className="modal fade"
        id="detalleProductoModal"
        tabIndex="-1"
        aria-labelledby="detalleProductoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="detalleProductoLabel">
                {productoSeleccionado?.nombre}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              {productoSeleccionado && (
                <>
                  <img
                    src={`https://res.cloudinary.com/dshgodujh/${productoSeleccionado.imagen}`}
                    className="img-fluid mb-3"
                    alt={productoSeleccionado.nombre}
                  />
                  <p>
                    <strong>Marca:</strong> {productoSeleccionado.marca}
                  </p>
                  <p>
                    <strong>Precio:</strong> S/ {productoSeleccionado.precio}
                  </p>
                  <p>
                    <strong>Descripción:</strong>{" "}
                    {productoSeleccionado.descripcion}
                  </p>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

