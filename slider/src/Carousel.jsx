import React, { useEffect, useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((currentPerson - 1 + people.length) % people.length);
  };
  const nextSlide = () => {
    setCurrentPerson((currentPerson + 1) % people.length);
  };

  useEffect(() => {
    let slideId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(slideId);
    };
  }, [currentPerson]);
  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <artical
            className="slide"
            style={{
              transform: `translateX(${200 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>

            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </artical>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
