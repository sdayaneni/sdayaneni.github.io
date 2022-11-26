import React, { useState } from 'react';
import { ProjectData } from './ProjectData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Project from './Project';
import './Carousel.css'

const Carousel = ({ projects }) => {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(projects) || projects.length <= 0) {
    return null;
  }

  return (
    <div className='projects'>
        <p className = 'projects-header'>My Projects</p>
        <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {ProjectData.map((project, index) => {
            return (
            <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
            >
                {index === current && (
                <Project name = {project.name} img = {project.image} description = {project.description}/>
                )}
            </div>
            );
        })}
        </section>
    </div>
  );
};

export default Carousel;