import React, { useState } from "react";
import Fondo from "../imgs/gluteos.jpg";

const faqData = [
  {
    question: "How do I know if a product is available in boutiques?",
    answer:
      "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.",
    introMessage: "Sentadillas (Squats)",
  },
  {
    question: "Instrucciones",
    answer:
      "Párate con los pies separados al ancho de los hombros.Mantén la espalda recta y baja el cuerpo como si te fueras a sentar en una silla, hasta que tus muslos estén paralelos al suelo.Vuelve a la posición inicial.",
    introMessage: " Sentadillas Búlgaras (Bulgarian Split Squats)",
  },
  {
    question: "How many collections come out every year?",
    answer:
      "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.",
    introMessage: "Patada de Glúteos (Donkey Kicks)",
  },
  {
    question: "Are all of the fashion collections featured on the website?",
    answer:
      "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.",
    introMessage: " Zancadas (Lunges)",
  },
  {
    question: "Where do I find products that I have seen in magazines or Social Media?",
    answer:
      "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.",
    introMessage: "Elevación Lateral de Pierna (Side-Lying Leg Raises)",
  },
];

const FAQItem = ({ question, answer, introMessage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:px-6">
      <div className="flex justify-between items-center w-full">
        <p className="flex items-center dark:text-white font-medium text-base leading-6 text-gray-800">
          {question}
        </p>
        <button
          aria-label="toggler"
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          <img
            className={`transform ${isOpen ? "rotate-180" : ""}`}
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
            alt="toggler"
          />
        </button>
      </div>
      <div className="mt-2 w-full">
        <p className="text-base leading-6 text-gray-600 dark:text-gray-700 font-normal">
          {introMessage}
        </p>
      </div>
      {isOpen && (
        <div className="mt-6 w-full">
          <p className="text-base leading-6 text-gray-600 dark:text-gray-400 font-normal">
            {answer}
          </p>
        </div>
      )}
      <hr className="w-full my-8" />
    </div>
  );
};

const AccordionEjercicios = () => {
  return (
    <div>
      <div className="relative w-full h-96">
        <img
          className="absolute h-full w-full object-cover object-center"
          src={Fondo}
          alt="glute training image"
        />
        <div className="absolute inset-0 h-full w-full bg-black/50"></div>
        <div className="relative pt-28 text-center">
          <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">
            Entrenamiento en casa
          </h2>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
            ¿Quieres tonificar tus glúteos desde la comodidad de tu hogar? ¡Te
            mostramos cómo!
          </p>
        </div>
      </div>
      <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
        
        <div className="lg:w-8/12 w-full mx-auto text-">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              introMessage={item.introMessage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionEjercicios;
