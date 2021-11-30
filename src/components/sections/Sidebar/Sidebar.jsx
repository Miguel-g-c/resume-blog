import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaResearchgate
} from "react-icons/fa";
import profile from "../../../images/profile.png";
import cv from "../../../files/resume.pdf";

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/Miguel-g-c",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/miguel-garcia-casas-b0b683145/",
  },
  {
    id: 3,
    icon: <FaResearchgate />,
    link: "https://www.researchgate.net/profile/Miguel-Garcia-Casas",
  },
  {
    id: 4,
    icon: <FaEnvelope />,
    link: "mailto:miguel.g.c.505@gmail.com",
  },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="miguelgc" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Miguel G. Casas</h1>
        <p className="text-sm text-gray-400 mb-3">
          Fullstack engineer at
          <a href="https://www.greendelta.com/" className="text-blue-600 pl-1">
            GreenDelta
          </a>
        </p>
        <a
          href={cv}
          className="inline-block mb-3 rounded bg-blue-600 text-center border-0 py-2 px-4 text-white leading-6 tracking-wide hover:bg-blue-800"
          download="MiguelResume"
        >
          Download Resume
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          Engineering expertise, software development and data analysis 
          used for contributing to progress and innovation, and for 
          improving sustainability.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-blue-100 rounded text-blue-800 flex items-center justify-center hover:text-white hover:bg-blue-600"
      >
        {icon}
      </a>
    </li>
  );
};
