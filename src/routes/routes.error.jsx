import { ClientLayout } from "../layouts";
import { Error404 } from "../pages/Error/Error404";
const routerError = [
  {
    path: "*",
    layout: ClientLayout,
    page: Error404,
  },
];
export default routerError;
