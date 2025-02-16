import { ClientLayout } from "../layouts";
import { Home, Products, Cellphones, Tablets, Audios, Watches} from "../pages/Client";

const routerClient = [
  {
    path: "/",
    layout: ClientLayout,
    page: Home,
  },
  {
    path: "/products",
    layout: ClientLayout,
    page: Products,
  },
  {
    path: "/cellphones",
    layout: ClientLayout,
    page: Cellphones,

  },
  {
    path: "/tablets",
    layout: ClientLayout,
    page: Tablets,

  },
  {
    path: "/audios",
    layout: ClientLayout,
    page: Audios,

  },
  {
    path: "/watches",
    layout: ClientLayout,
    page: Watches,

  },
];
export default routerClient;
