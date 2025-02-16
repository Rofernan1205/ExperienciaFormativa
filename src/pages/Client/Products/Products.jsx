import { ListProductos } from "../../../components/others";
import { ProductosProvider } from "../../../context/context.client/ProductosContext";
import "./Products.css";
export const Products = () => {
  return (
    <div>
      <ProductosProvider>
        <div className="m-4">
          <h2>Lista de Productos</h2>
        </div>
        <ListProductos />
      </ProductosProvider>
    </div>
  );
};
