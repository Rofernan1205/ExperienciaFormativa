import { useContext } from "react";
import { motion } from "motion/react";
import TabletsContext from "../../../context/context.client/TabletsContext";
export const ListTablets = () => {
  const { tablets } = useContext(TabletsContext);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {tablets && (
        <div className="row">
          {tablets.map((tablet, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-around"
              key={index}
            >
              <motion.div
                variants={animationVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.6 }}
                className="card text-center mb-4 d-flex flex-column justify-content-end  h-60"
                style={{ width: "250px" }}
              >
                <img
                  src={"https://res.cloudinary.com/dshgodujh/" + tablet.imagen}
                  className="card-img-top"
                  alt={tablet.nombre}
                />
                {/* Card Body: Centrado abajo */}
                <div className="card-body d-flex flex-column justify-content-end text-center h-60">
                  <span className="text-uppercase text-muted">
                    {tablet.marca}
                  </span>
                  <h5 className="card-title">{tablet.nombre}</h5>
                  <p className="card-text text-danger fw-bold">
                    S/ {tablet.precio}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Ver detalle
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
