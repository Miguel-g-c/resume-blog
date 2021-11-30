import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "Python",
    percentage: "95%",
  },
  {
    id: 2,
    title: "JavaScript",
    percentage: "90%",
  },
  {
    id: 3,
    title: "TypeScript",
    percentage: "80%",
  },
  {
    id: 4,
    title: "Java",
    percentage: "80%",
  },
  {
    id: 5,
    title: "HTML, CSS",
    percentage: "85%",
  },
  {
    id: 6,
    title: "C++",
    percentage: "70%",
  },
  {
    id: 7,
    title: "SQL, noSQL",
    percentage: "70%",
  },
  {
    id: 8,
    title: "ReactJS",
    percentage: "80%",
  },
  {
    id: 9,
    title: "Django, Flask, FastAPI",
    percentage: "85%",
  },
  {
    id: 10,
    title: "Javalin",
    percentage: "75%",
  },
  {
    id: 11,
    title: "Docker",
    percentage: "80%",
  },
  {
    id: 12,
    title: "Linux",
    percentage: "80%",
  },
  {
    id: 13,
    title: "Git, Github",
    percentage: "90%",
  },
  {
    id: 14,
    title: "Scipy, Numpy, Pandas",
    percentage: "70%",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-3xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
