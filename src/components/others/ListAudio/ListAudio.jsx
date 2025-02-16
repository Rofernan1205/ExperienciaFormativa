import { useContext } from "react";
import { motion } from "motion/react";
import AudioContext from "../../../context/context.client/AudioContext";
export const ListAudio = () => {
  const { audios } = useContext(AudioContext);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {audios && (
        <div className="row">
          {audios.map((audio, index) => (
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
                  src={"https://res.cloudinary.com/dshgodujh/" + audio.imagen}
                  className="card-img-top"
                  alt={audio.nombre}
                />
                {/* Card Body: Centrado abajo */}
                <div className="card-body d-flex flex-column justify-content-end text-center h-60">
                  <span className="text-uppercase text-muted">
                    {audio.marca}
                  </span>
                  <h5 className="card-title">{audio.nombre}</h5>
                  <p className="card-text text-danger fw-bold">
                    S/ {audio.precio}
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
