import { Outlet } from "react-router-dom";
import { Header } from "./widgets/header";
import { Container } from "./ui/shared/container/container";

function App() {
  return (
    <div className="app">
      <Container>
        <Header />
      </Container>
      <Outlet />
    </div>
  );
}

export default App;
