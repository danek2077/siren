import React from "react";
import s from "./home.module.scss";
import Presentation from "./ui/presentation/Presentation";
import ServiceFirst from "./ui/service-first/ServiceFirst";
import { Container } from "src/ui/shared/container/container";
export const Home: React.FC = () => {
  return (
    <div>
      <Presentation />
      <Container>
        <ServiceFirst />
      </Container>
      <div className={s.height}></div>
    </div>
  );
};
