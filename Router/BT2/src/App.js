
import router from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (

   <RouterProvider router={router} >
      <App/>
   </RouterProvider>

  );
}

export default App;
