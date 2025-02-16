import "./LoginAdmin.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import AuthContext from "../../../context/context.admin/AuthContext"

export const LoginAdmin = () => {
  const {login} = useContext(AuthContext);



  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Correo inválido.")
      .required("El correo es obligatorio."),
    password: Yup.string()
      .min(8, "Debe tener al menos 8 caracteres.")
      .required("La contraseña es obligatoria."),
  });

  return (
    <div className="login-admin d-flex justify-content-center align-items-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          login(values.email, values.password);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form method="post" onSubmit={handleSubmit}>
            <div className="m-3">
              <h1 className="text-center">Login Admin</h1>
            </div>
            <div className="m-3">
              <label className="form-label" htmlFor="email">
                Correo
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                autoComplete="email"
              />
              <div id="sms-email">
                {touched.email && errors.email ? (
                  <span className="sms-error">{errors.email}</span>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            <div className="m-3">
              <label className="form-label" htmlFor="password">
                Contraseña
              </label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <div id="sms-password">
                {touched.password && errors.password ? (
                  <span className="sms-error">{errors.password}</span>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            <div className="m-3 d-grid">
              <input
                className="btn btn-success"
                type="submit"
                value="Iniciar sesión"
              />
            </div>
            <div className="m-3 d-flex justify-content-center align-items-center">
              <a className="link-success" href="*">
                Restablecer contraseña
              </a>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
