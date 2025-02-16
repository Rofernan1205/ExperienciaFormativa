import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";
import routesError from "./routes.error";

const routes = [...routesAdmin, ...routesClient, ...routesError];
export default routes;
