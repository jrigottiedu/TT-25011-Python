import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/router/AppRouter";
import RootProvider from "./core/provider/RootProvider";

function App() {
  return (
    <RootProvider>
      <RouterProvider router={appRouter} />
    </RootProvider>
  );
}

export default App;
