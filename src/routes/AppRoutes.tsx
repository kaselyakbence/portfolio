import { Route, Routes } from "react-router";
import RootRedirect from "./RootRedirect";
import LocaleLayout from "./LocaleLayout";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<RootRedirect />} />
    <Route path="/:lang/*" element={<LocaleLayout />} />
  </Routes>
);

export default AppRoutes;
