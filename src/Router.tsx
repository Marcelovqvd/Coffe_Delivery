import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout.tsx";
import { Order } from "./pages/Order/index.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Order />} />
      </Route>
    </Routes>
  );
}
