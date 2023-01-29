import { Routes, Route } from "react-router-dom";

import { Menu } from "antd";
import CardImagem from "../components/CardImagem";
import Layout from "../components/Layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/layout" element={<Layout />} />
      <Route path="/cardimagem" element={<CardImagem />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}
