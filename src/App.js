import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router} />;
      <Toaster />
    </div>
  );
}

export default App;
