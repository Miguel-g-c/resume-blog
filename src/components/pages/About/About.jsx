import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-3xl text-gray-800 font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              I am an energy engineer and a PhD student in Industrial Technologies 
              for improving sustainability, with deep IT development and data analysis 
              skills.
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              I started my professional career in 
              <a href="https://www.hexcel.com/" className="text-blue-500 pl-1">HEXCEL</a>, 
              optimizing one of its composite material manufacturing processes, the measures 
              proposed reduced more than a 50 % the primary energy consumption of the plant. 
              Then, I worked in an additive manufacturing start-up, but after completing my Msc, 
              I found my passion in simulation and programming. For this reason, I traveled to 
              France to work in one of the most prestigious laboratories in computational fluid 
              dynamics, <a href="https://www.coria.fr/en/" className="text-blue-500 pl-1">CORIA</a>, 
              developing in OpenFOAM (C++) a dynamic rotating mesh solver for turbines.
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              I returned to Spain to work as simulation engineer and business developer for an ESCO, 
              <a href="https://www.e4e-soluciones.com/" className="text-blue-500 pl-1">E4e Solutions</a>, 
              building tools for resource and financial modelling of large self-consumption photovoltaic 
              plants, as well as dynamic energy simulation of buildings. Then, I was accepted in the 
              Industrial PhD program of the Community of Madrid, so I started my studies as doctor in 
              <a href="https://contactica.es/en/" className="text-blue-500 px-1">Contactica</a> 
              and <a href="https://www.energy.imdea.org/" className="text-blue-500 pl-1">IMDEA Energy</a>, 
              developing a new eco-design software for sustainability-based optimization of industrial 
              processes.

            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              Nowadays, I am happy to join my passion and my expertise working as Fullstack engineer at 
              <a href="https://www.greendelta.com/" className="text-blue-500 pl-1">GreenDelta</a>. 
              Building tools for improving the sustainability using a life cycle thinking methodology.
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
