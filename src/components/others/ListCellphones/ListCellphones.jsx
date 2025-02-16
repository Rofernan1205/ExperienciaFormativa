import { useContext } from "react";
import { motion } from "motion/react";
import CellphonesContext from "../../../context/context.client/CellphonesContext";
export const ListCellphones = () => {
  const { cellphones } = useContext(CellphonesContext);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      {cellphones && (
        <div className="row">
          {cellphones.map((cellphone, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-around "
              key={index}
            >
              <motion.div
                variants={animationVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.6 }}
                className="card text-center mb-4 flex-column justify-content-end  h-60"
                style={{ width: "250px" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dshgodujh/" + cellphone.imagen
                  }
                  className="card-img-top"
                  alt={cellphone.nombre}
                />
                <div className="card-body">
                  <span className="text-uppercase text-muted">
                    {cellphone.marca}
                  </span>
                  <h5 className="card-title">{cellphone.nombre}</h5>
                  <p className="card-text text-danger fw-bold">
                    S/ {cellphone.precio}
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
