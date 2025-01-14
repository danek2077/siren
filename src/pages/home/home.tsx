import React from "react";
import s from "./home.module.scss";
import Presentation from "./ui/presentation/Presentation";
import { Container } from "src/ui/shared/container/container";
import { ServiceFirst } from "./ui/service-first/ServiceFirst";
import { WhyUs } from "./ui/whyUs/WhyUs";
import Reviews from "./ui/leave-reviews/Reviews";

export const Home: React.FC = () => {
  return (
    <div>
      <Presentation />
      <Container>
        <ServiceFirst />
      </Container>
      <WhyUs />
      <Reviews/>
    </div>
  );
};
