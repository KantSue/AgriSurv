

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LogIn } from "../Pages/Login";
import { SignIn } from "../Pages/Signup_page";
import { AcceuilPage } from "../Pages/Acceuil_page";
import { ConseilPage } from "../Pages/ConseilPage";
import{GetTitle} from "../Pages/ConseilPage";
import { GetAllByTitle } from "../Pages/ConseilPage";
import { MeteoPage } from "../Pages/Meteo_page";
import { CulturePage} from "../Pages/CulturePage";
import { ActiviterPages} from "../Pages/Avtiviter_page";
import { AlertePage } from "../Pages/AlertePage";
import { ListOfMyVar } from "../Pages/CulturePage";
import { Initial } from "../Pages/Initial_page";
import BarNav from "../Components/header"

export default function App() {
  return (
    <div>   
      <BrowserRouter>
      <AppContenu/>
       
      </BrowserRouter>
    </div>
  );
}
function AppContenu(){
  const location=useLocation();
  const hideNavbar=location.pathname==="/login"|| location.pathname==="/Signin"|| location.pathname==="/"||location.pathname==="/Culture/choice"
  return(
    <>

      {!hideNavbar && <BarNav/>}
       <Routes>
       
          <Route path="/login" element={<LogIn />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="" element={<Initial />} />
          <Route path="/Acceuil" element={<AcceuilPage/>} />
          <Route path="/Conseil/Type" element={<ConseilPage/>}/>
          <Route path="/Conseil/Type/:type" element={<GetTitle/>}/>
          <Route path="/Conseil/Type/Titre/:title" element={<GetAllByTitle/>}/>
          <Route path="/Meteo" element={<MeteoPage/>}/>
          <Route path="/Culture/choice" element={<CulturePage/>}/>
          <Route path="/Activiter" element={<ActiviterPages/>}/>
          {/* <Route path="/Activiter/enCours" element={<ActiviterenCours/>}/>
          <Route path="/Activiter/Passer" element={<ActiviterPasses/>}/>
          <Route path="/Activiter/Future" element={<ActiviterFuture/>}/> */}
          <Route path="/culture/myVarieter" element={<ListOfMyVar/>}/>
        
          <Route path="/Alerte" element={<AlertePage/>}/>
          
          
          {/* <Route path="/Culture/choice/varieter/:id_culture" element={<AllVarity/>}/>
          <Route path="/Culture/choice/varieter/cycle/:id_varieter" element={<AllCylcle/>}/>
          <Route path="/Culture/choice/varieter/cycle/categorie:id_cycle" element={<AllCatego/>}/>
          */}
       </Routes> 

    </>
  )

}
