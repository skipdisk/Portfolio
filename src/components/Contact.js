import instagramIcon from "../images/instagram-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";
import facebookIcon from "../images/facebook-icon.png";
import twitterIcon from "../images/twitter-icon.png";
import youtubeIcon from "../images/youtube-icon.png";
import Phone from "./Phone";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  PerspectiveCamera,
  PresentationControls,
} from "@react-three/drei";
import InteractiveMenu from "./InteractiveMenu";

const Contact = () => {
  return (
    <div className="p-10 mt-8  md:p-20 justify-center">
      <h1 className="drop-shadow-md text-primary md:text-[70px]">
        Get in Touch
      </h1>
      <h2 className="pt-2 text-primary">Let's Talk</h2>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <div className="justify-start flex flex-col">
          <p className="text-white pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis,
            justo accumsan dignissim ultrices, ante turpis pretium sapien, at
            hendrerit justo ipsum nec enim. Pellentesque sodales risus vel arcu
            lacinia accumsan. Nulla fringilla magna nec sodales efficitur. Cras
            a orci nisi. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc id erat sed nunc maximus interdum sed id dolor.
            Suspendisse fermentum elit eget feugiat ultrices. Proin eget mattis
            purus. Cras vitae metus blandit, tincidunt tellus eget, vulputate
            velit. Mauris dictum libero vel tincidunt cursus.
          </p>
          <div className="pt-[20px] text-start">
            <p className="text-primary text-[20px]">OfficialSlimic@gmail.com</p>
          </div>
          <div className="pt-[10px] text-start">
            <a href="">
              <img
                className="inline w-[40px] h-[40px] md:w-[40px] md:h-[40px]"
                src={instagramIcon}
                alt="Instagram Icon"
              />
            </a>
            <a href="">
              <img
                className="inline ml-[10px] w-[40px] h-[40px] md:w-[40px] md:h-[40px]"
                src={linkedinIcon}
                alt="linkedin Icon"
              />
            </a>
            <a href="">
              <img
                className="inline ml-[10px] w-[40px] h-[40px] md:w-[40px] md:h-[40px]"
                src={youtubeIcon}
                alt="youtube Icon"
              />
            </a>
          </div>
        </div>
        <div className="relative flex ">
          <InteractiveMenu menuItems={[]} isSocial scale={1.5} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
