import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
