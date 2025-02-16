import { AdminLayout } from "../layouts";
import { LoginAdmin, HomeAdmin } from "../pages/Admin";

const routerAdmin = [
  {
    path: "/loginAdmin",
    layout: AdminLayout,
    page: LoginAdmin,
  },
  {
    path: "/homeAdmin",
    layout: AdminLayout,
    page: HomeAdmin,
  },
];
export default routerAdmin;
