import { Outlet } from "react-router-dom";
import { Header } from "./widgets/header/header";
import { Container } from "./ui/shared/container/container";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
