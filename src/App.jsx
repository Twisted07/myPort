import resume from "../src/assets/resume.pdf"
import Card from "./components/card";
import { GiMoneyStack, GiPizzaSlice } from "react-icons/gi";
import { GiAirplaneDeparture } from "react-icons/gi";
import { FiMapPin } from "react-icons/fi";
import { BsGithub, BsLinkedin, BsPhone, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import logo from "./assets/T1.png"
import photo from "./assets/photo.jpg"

function App() {
  function smoothScroll(target, duration) {
    const targetData = document.querySelector(target);
    console.log(targetData, "target data");
    const targetPosition = targetData.getBoundingClientRect().top;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easing(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easing(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 *t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  function handleScroll(e) {
    smoothScroll('#contact-me', 800);
  }
  const iconColor = "rgb(252 165 165 / var(--tw-border-opacity))";

  const projects = [
    {
      title: "MS Gold",
      icon: <GiMoneyStack size={30} color={iconColor} />,
      summary: "This is a company's project I happened to be an active developer. It is an eCommerce web application for a precious metal and diamond selling company.",
      link: "https://msgold.online",
    },
    {
      title: "vacaytion",
      icon: <FiMapPin size={30} color="rgb(252 165 165 / var(--tw-border-opacity))" />,
      summary: "A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world",
      link: "https://vacaytion.vercel.app",
    },
    {
      title: "Pizza Planet",
      icon: <GiPizzaSlice size={30} color={iconColor} />,
      summary: "A place where pizza lovers get to order their favorite pizzas from the comfort of their homes, with an experience like they were there in person.",
      link: "https://twistedpizzaplanet.vercel.app",
    },
    {
      title: "Nature Tourists",
      icon: <GiAirplaneDeparture size={30} color={iconColor} />,
      summary: "An HTML and CSS based static landing page for an imaginary travels and tourism agency.",
      link: "https://naturetourist.vercel.app",
    },
    
    
  ]

  return (
    <>
      <section className="flex flex-col items-center justify-center py-56 text-center bg-gray-700 border-b-2 border-red-300 md:border-b-4">
        <h1 className="text-xs text-stone-200 md:text-md lg:text-lg">Hello, I am IDRIS ABDULLATEEF, a <span className="block text-2xl font-semibold text-red-300 md:text-4xl lg:text-6xl lg:font-bold">Software Developer</span></h1>
        <i className="mt-3 mb-8 lg:mt-5 lg:mb-10 text-stone-300 w-[50dvw] lg:w-[40dvw] md:text-md lg:text-lg text-xs">who Engineers Tomorrow's solutions, <span className="font-semibold text-red-300">TODAY.</span></i>

        <a href={resume} download={"Abdullateef_Idris_Resume"} className="px-5 py-2 text-xs text-red-300 border border-red-300 rounded-full lg:text-lg pop">Download My Resume</a>
      </section>

      <section className="flex flex-col items-center justify-center px-8 py-16 gap-14 md:px-16 lg:gap-56 lg:px-24 lg:py-24 lg:grid lg:grid-cols-3 lg:grid-flow-row bg-stone-200">
        <div alt="image" className="col-span-1 w-48 h-48 border-4 lg:w-[20rem] lg:h-[20rem] rounded-full border-red-300 lg:border-8" style={{backgroundImage: `url(${photo})`, backgroundPosition: "center", backgroundSize: "cover"}}></div>
        <div className="col-span-2 text-center lg:text-left">
          <h1 className="mb-5 text-2xl font-bold text-red-400 lg:text-3xl lg:mb-10">About Me</h1>
          <p className="mb-10 text-sm">
            I am a skilled Front-End Developer with over 2 years of experience crafting intuitive and visually appealing web applications. I create responsive designs, ensuring seamless user experiences across devices. I am also adept at debugging and optimizing code for performance. I have a strong collaboration skill with a knack for translating client needs into functional, attractive interfaces.
          </p>
          <div>
          <a href={resume} download={"Abdullateef_Idris_Resume"} className="px-5 py-2 text-sm font-semibold bg-red-400 border-2 border-red-400 rounded-full lg:mr-3 text-stone-100">Download My Resume</a>
          <button onClick={handleScroll} className="hidden px-5 py-2 text-sm font-semibold text-red-500 border-2 border-red-400 rounded-full lg:inline-block pop">Contact Me</button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 text-center bg-gray-700 border-red-300 border-y-2 lg:py-24 lg:border-y-4">
        <h1 className="mb-8 text-2xl font-bold lg:mb-16 text-stone-300">Projects</h1>
        <div className="flex flex-col flex-wrap items-center justify-center w-full gap-5 px-24 lg:gap-10 lg:flex-row">
          {
            projects.map((project) => (
            <Card
              title={project.title}
              icon={project.icon}
              summary={project.summary}
              link={project.link}
              key={project.title}
            />
          ))
          }
          
        </div>
      </section>

      <section className="pt-16 text-center pb-36 lg:pt-24 lg:pb-48 bg-stone-200">
        <h1 className="mb-16 text-2xl font-bold text-red-400 md:mb-20 lg:text-3xl">Contact Me</h1>
        <div className="flex items-center justify-center gap-5 md:gap-20">
          <a href="https://www.linkedin.com/in/abdullateef-idris-aa436b245" className="pop" aria-label="linkedin" target="_blank" rel="noopener noreferrer">
            <BsLinkedin className="text-red-500 size-8 lg:size-[3rem]" />
          </a>
          <a href="https://wa.me/8118536771" className="pop" target="_blank">
            <BsWhatsapp className="text-red-500 size-8 lg:size-[3rem]" />
          </a>
          <a href="https://www.github.com/twisted07" className="pop" id="contact-me">
            <BsGithub className="text-red-500 size-8 lg:size-[3rem]" />
          </a>
          <a href="tel:+2348118536771" className="pop" target="_blank">
            <BsPhone className="text-red-500 size-8 lg:size-[3rem]" />
          </a>
          <a href="mailto:iamtwisted07@gmail.com" className="pop" target="_blank">
            <BiLogoGmail className="text-red-500 size-8 lg:size-[3rem]" />
          </a>
        </div>
      </section>

      <footer className="flex justify-center py-10 text-center bg-gray-700 border-t-2 border-red-300 lg:border-t-4 text-stone-300">
        <img src={logo} alt="twisted logo" className="size-8 lg:size-[3rem]" />
      </footer>
    </>
  )
}

export default App
