import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomeView from "../../pages/home/view/HomeView";
import Semana1View from "../../pages/semana1/view/Semana1View";    
import Semana2View from "../../pages/semana2/view/Semana2View";    
import Semana3View from "../../pages/semana3/view/Semana3View";    
import Semana4View from "../../pages/semana4/view/Semana4View";    
import Layout from "../layout/Layout";
import IdesView from "../../pages/ides/view/IdesView";

export const appRouter = createHashRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomeView />
      </Layout>
    ),
  },
  {
    path: "/semana1",
    element: (
      <Layout>
        <Semana1View />
      </Layout>
    ),
  },
  {
    path: "/semana2",
    element: (
      <Layout>
        <Semana2View />
      </Layout>
    ),
  },
  {
    path: "/semana3",
    element: (
      <Layout>
        <Semana3View />
      </Layout>
    ),
  },
  {
    path: "/semana4",
    element: (
      <Layout>
        <Semana4View />
      </Layout>
    ),
  },
  {
    path: "/ides",
    element: (
      <Layout>
        <IdesView />
      </Layout>
    ),
  },
]);
