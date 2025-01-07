import { Outlet } from "react-router-dom";
import { Header } from "./widgets/header/header";
import { Footer } from "./widgets/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
