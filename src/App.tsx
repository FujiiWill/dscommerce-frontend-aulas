import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Productdetails from "./routs/ClientHome/ProductDetails";
import ClientHome from "./routs/ClientHome";
import Catalog from "./routs/ClientHome/Catalog";
import Cart from "./routs/ClientHome/Cart";
import { useState } from "react";
import { ContextCartCount } from "./utils/context-cart";
import Login from "./routs/ClientHome/Login";
import Admin from "./routs/Admin";
import AdminHome from "./routs/Admin/AdminHome";

export default function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider
      value={{ contextCartCount, setContextCartCount }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route
              path="product-details/:productId"
              element={<Productdetails />}
            />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/admin/" element={<Admin />}>
            <Route index element={<AdminHome />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ContextCartCount.Provider>
  );
}
