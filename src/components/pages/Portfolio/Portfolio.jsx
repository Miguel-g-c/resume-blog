import React from "react";
import infiniteImg from "../../../images/portfolio/infinite.png";
import eco2desImg from "../../../images/portfolio/eco2des.png";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 2,
    image: infiniteImg,
    title: "Infinite LCA service",
    link: "https://infinite.greendelta.com/redoc",
    description:
      "REST API for carrying out LCA of building renovation kits. Tech: FastAPI, Javalin, Traefik, Docker Swarm.",
  },
  {
    id: 1,
    image: eco2desImg,
    title: "eco2des",
    link: "https://www.sciencedirect.com/science/article/abs/pii/B9780128233771503323",
    description:
      "An object-oriented Python framework for sustainability-based optimization of industrial processes.",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.reverse().map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
