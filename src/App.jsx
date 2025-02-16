import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./routes";
import { Header, Footer } from "./components/common";
import { AuthProvider } from "./context/context.admin/AuthContext";
import { CellphonesProvider } from "./context/context.client/CellphonesContext";

export const App = () => {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Header />
          <Navigation />
          <Footer />
        </BrowserRouter>
    </AuthProvider>
  );
};
