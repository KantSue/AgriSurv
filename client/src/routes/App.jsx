import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LogIn } from "../Pages/Login";
import { SignIn } from "../Pages/Signup_page";
import { AcceuilPage } from "../Pages/Acceuil_page";
import { ConseilPage, GetTitle, GetAllByTitle } from "../Pages/ConseilPage";
import { MeteoPage } from "../Pages/Meteo_page";
import { CulturePage, ListOfMyVar } from "../Pages/CulturePage";
import { ActiviterPages } from "../Pages/Avtiviter_page";
import { AlertePage } from "../Pages/AlertePage";
import { Initial } from "../Pages/Initial_page";
import { FarmerLayout } from "../Components/FarmerLayout";
import { AdminLayout } from "../Components/AdminLayout";
import { AdminStats } from "../Pages/admin/AdminStats";
import { AdminCalendrier } from "../Pages/admin/AdminCalendrier";
import { AdminConseils } from "../Pages/admin/AdminConseils";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Culture/choice" element={<CulturePage />} />

        {/* Espace paysan : menu commun */}
        <Route element={<FarmerLayout />}>
          <Route path="/Acceuil" element={<AcceuilPage />} />
          <Route path="/Activiter" element={<ActiviterPages />} />
          <Route path="/Conseil/Type" element={<ConseilPage />} />
          <Route path="/Conseil/Type/:type" element={<GetTitle />} />
          <Route path="/Conseil/Type/Titre/:title" element={<GetAllByTitle />} />
          <Route path="/Meteo" element={<MeteoPage />} />
          <Route path="/culture/myVarieter" element={<ListOfMyVar />} />
          <Route path="/Alerte" element={<AlertePage />} />
        </Route>

        {/* Espace admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminStats />} />
          <Route path="calendrier" element={<AdminCalendrier />} />
          <Route path="torohevitra" element={<AdminConseils />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
