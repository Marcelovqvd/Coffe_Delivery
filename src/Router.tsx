import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout.tsx";
import Order from "./pages/Order/index.tsx";
import Success from "./pages/Success/index.tsx";

import Home from "./pages/Home/index.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Order />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
