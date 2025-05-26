import { Navbar } from "./components/Navbar";
import AppRoutes from "./routes"; // Apenas importa

export default function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}
