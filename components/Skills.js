import React from "react";
import Image from "next/legacy/image";
import html from "../public/html.png";
import javaScript from "../public/javascript.png";
import css from "../public/css3.png";
import tailwind from "../public/tailwind.png";
import mongodb from "../public/mongo.png";
import reactjs from "../public/reactjs.png";
import bootstrap from "../public/bootstrap.png";
import jquery from "../public/jquery.png";
import ruby from "../public/ruby-rails.png";
import stimulus from "../public/Stimulus.png";
import postgresql from "../public/postgresql.png";
import node from "../public/node.png";
import rails from "../public/Rails.png";
import heroku from "../public/heroku.png";
import express from "../public/express.png";
import github from "../public/github.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="mt-20 text-3xl py-1 dark:text-white">
        <h2 className="text-3xl py-1 mt-10 inline border-b-4 border-teal-500 dark:text-white">Skills</h2>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
        <div className="overflow-hidden">
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={html} alt="HTML" />
              <p >HTML</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={css} alt="CSS3" />
              <p>CSS3</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={tailwind} alt="Tailwind CSS" />
              <p>Tailwind</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={bootstrap} alt="Bootstrap" />
              <p>Bootstrap</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={javaScript} alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={reactjs} alt="React" />
              <p>React</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={node} alt="Nodejs" />
              <p>Nodejs</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={jquery} alt="JQuery" />
              <p>JQuery</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={express} alt="Express" />
              <p>Express</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={mongodb} alt="MongoDB" />
              <p>MongoDB</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={postgresql} alt="Postgresql" />
              <p>Postgresql</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={ruby} alt="Ruby" />
              <p>Ruby</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={rails} alt="Ruby on Rails" />
              <p>Ruby on Rails</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={stimulus} alt="Stimulus" />
              <p>Stimulus</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={heroku} alt="Heroku" />
              <p>Heroku</p>
            </div>
            <div className="logo rounded-xl py-4 shadow-md dark:bg-gray-100 hover:scale-110 duration-500">
              <Image className='w-20 mx-auto' src={github} alt="Github" />
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
