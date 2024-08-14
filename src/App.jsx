import resume from "../src/assets/resume.pdf"
import Card from "./components/card";
import { GiPizzaSlice } from "react-icons/gi";
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
    console.log(e);
  }

  return (
    <>
      <section className="bg-gray-700 text-center flex flex-col justify-center items-center py-56 border-b-4 border-red-300">
        <h1 className="text-stone-200">Hello, I am IDRIS ABDULLATEEF, a <span className="text-6xl font-bold text-red-300 block">Software Developer</span></h1>
        <i className="mt-5 mb-10 text-stone-300 w-[40dvw]">who Engineers Tomorrow's solutions, <span className="text-red-300 font-semibold">TODAY.</span></i>

        <a href={resume} download={"Abdullateef_Idris_Resume"} className="pop rounded-full border border-red-300 py-2 text-red-300 px-5">Download My Resume</a>
      </section>

      <section className="px-48 py-24 grid gap-20 grid-cols-3 grid-flow-row-dense bg-stone-200">
        <div alt="image" className="col-span-1 w-[20rem] h-[20rem] rounded-full border-red-300 border-8" style={{backgroundImage: `url(${photo})`, backgroundPosition: "center", backgroundSize: "cover"}}></div>
        <div className="col-span-2">
          <h1 className="text-3xl text-red-400 font-bold mb-10">About Me</h1>
          <p className="mb-10">
            I am a skilled Front-End Developer with over 2 years of experience crafting intuitive and visually appealing web applications. I create responsive designs, ensuring seamless user experiences across devices. I am also adept at debugging and optimizing code for performance. I have a strong collaboration skill with a knack for translating client needs into functional, attractive interfaces.
          </p>
          <div>
          <a href={resume} download={"Abdullateef_Idris_Resume"} className="font-semibold rounded-full border-2 bg-red-400 border-red-400 py-2 text-stone-100 px-5 mr-3">Download My Resume</a>
          <button onClick={handleScroll} className="pop font-semibold border-2 rounded-full border-red-400 px-5 py-2 text-red-500">Contact Me</button>
          </div>
        </div>
      </section>

      <section className="py-24 text-center bg-gray-700 border-y-4 border-red-300">
        <h1 className="font-bold text-stone-300 text-3xl mb-16">Projects</h1>
        <div className="flex justify-center items-center gap-10 wrap mx-24">
          <Card
            title={"vacaytion"}
            icon={<FiMapPin size={30} color="rgb(252 165 165 / var(--tw-border-opacity))" />}
            summary={"A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world"}
            link={"https://vacaytion.vercel.app"}
          />
          <Card
            title={"Pizza Planet"}
            icon={<GiPizzaSlice size={30} color="rgb(252 165 165 / var(--tw-border-opacity))" />}
            summary={"A place where pizza lovers get to order their favorite pizzas from the comfort of their homes, with an experience like they were there in person."}
            link={"https://twistedpizzaplanet.vercel.app"}
          />
          <Card
            title={"Nature Tourists"}
            icon={<GiAirplaneDeparture size={30} color="rgb(252 165 165 / var(--tw-border-opacity))" />}
            summary={"An HTML and CSS based static landing page for an imaginary travels and tourism agency."}
            link={"https://naturetourist.vercel.app"}
          />
        </div>
      </section>

      <section className="pt-24 pb-48 text-center bg-stone-200">
        <h1 className="font-bold text-red-400 text-3xl mb-20">Contact Me</h1>
        <div className="flex justify-center items-center gap-20">
          <a href="https://www.linkedin.com/in/abdullateef-idris-aa436b245" className="pop" aria-label="linkedin" target="_blank" rel="noopener noreferrer">
            <BsLinkedin className="text-red-500" size={50} />
          </a>
          <a href="https://wa.me/8118536771" className="pop" target="_blank">
            <BsWhatsapp className="text-red-500" size={50} />
          </a>
          <a href="https://www.github.com/twisted07" className="pop" id="contact-me">
            <BsGithub className="text-red-500" size={50} />
          </a>
          <a href="tel:+2348118536771" className="pop" target="_blank">
            <BsPhone className="text-red-500" size={50} />
          </a>
          <a href="mailto:iamtwisted07@gmail.com" className="pop" target="_blank">
            <BiLogoGmail className="text-red-500" size={50} />
          </a>
        </div>
      </section>

      <footer className="py-10 text-center border-t-4 border-red-300 bg-gray-700 text-stone-300 flex justify-center">
        <img src={logo} alt="twisted logo" width={50} height={50} />
      </footer>
    </>
  )
}

export default App
