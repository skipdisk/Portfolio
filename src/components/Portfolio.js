import InteractiveMenu from "./InteractiveMenu";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Visualizer from "../visualizer/Visualizer";
import Art from "./Art";
const menuItems = [
  {
    label: "About Me",
    content: <About />,
  },
  {
    label: "My Work",
    content: <Work />,
  },
  {
    label: "Get in Touch",
    content: <Contact />,
  },
  { label: "Music", content: <Visualizer /> },
  { label: "Art", content: <Art /> },
];

const Portfolio = () => {
  return (
    <>
      <div className="absolute top-[20px] left-[20px] md:top-[60px] md:left-[100px]">
        <h1 className="drop-shadow-md text-primary md:text-[90px]">
          <span className="text-[30px] font-normal">Hello,</span>
          <br />I am Slimic
        </h1>
        <p className="text-white mt-8 text-[20px]">I am a Frontend Developer</p>
      </div>

      <InteractiveMenu menuItems={menuItems} />
    </>
  );
};

export default Portfolio;
