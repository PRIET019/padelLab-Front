import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import PalasPage from "../Pages/PalasPage";
import CamisetasPage from "../Pages/CamisetasPage";
import GorrasPage from "../Pages/GorrasPage";
import MochilasPage from "../Pages/MochilasPage";
import MunequerasPage from "../Pages/MunequerasPage";
import PantalonesPage from "../Pages/PantalonesPage";
import ZapatillasPage from "../Pages/ZapatillasPage";

export const router = createBrowserRouter([


  { path: "/", element: <Home /> },
  { path: "/camisetas", element: <CamisetasPage/>},
  { path: "/gorras", element: <GorrasPage />},
  { path: "/mochilas", element: <MochilasPage />},
  { path: "/munequeras", element: <MunequerasPage />},
  { path: "/palas", element: <PalasPage />},
  { path: "/pantalones", element: <PantalonesPage />},
  { path: "/zapatillas", element: <ZapatillasPage />},




])




