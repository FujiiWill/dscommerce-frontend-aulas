import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Productdetails from "./routs/ClientHome/ProductDetails";
import ClientHome from "./routs/ClientHome";
import Catalog from "./routs/ClientHome/Catalog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Catalog />} />
          <Route path="catalog" element={<Catalog />} />
          <Route
            path="product-details/:productId"
            element={<Productdetails />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
