import React from "react";
import FooterHome from "../components/FooterHome";
import Mock, { MockType } from "../components/ui/mocks/Mock";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import Asset from "../components/ui/mocks/Asset";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row flex-wrap md:flex-nowrap flex-grow justify-center max-w-screen-2xl">
        {/* SIDE QUOTE AND BUTTONS */}
        <div className="flex flex-col w-full md:w-1/2 justify-center space-y-10 md:space-y-24 items-center">
          <div className="w-2/3 dark:text-white flex flex-col">
            <h3 className="italic font-normal mb-3">
              {`"More than not achieving my goals,\nwhat frightens me the most is to stop having them"`}
            </h3>
            <h3 className="inline-block  text-right ">{`- unsigned`}</h3>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-full items-center justify-center space-x-0 md:space-x-6">
            <Link to="/about" className="btn btn-outline">
              learn about me
            </Link>
            <i>- or -</i>
            <Link
              to="/assets/CVRaulMateo.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              <FiDownload className="text-xl inline-block" />
              <span className="pl-2">Download CV</span>
            </Link>
          </div>
        </div>
        {/* MockUP */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <Mock type={MockType.MOBILE_Y}>
            <Link to="/projects" className="text-center p-0">
              <Asset
                image_backup="https://res.cloudinary.com/mabe-portfolio/image/upload/v1607359634/petsworld/portada_hme9c4.jpg"
                vertical={true}
                isVideo={true}
                url="https://res.cloudinary.com/mabe-portfolio/video/upload/v1607356140/petsworld/tfg_app_yi8cwz.webm"
              />
            </Link>
          </Mock>
        </div>
      </div>
      <div className="flex flex-col">
        <FooterHome />
      </div>
    </div>
  );
}

export default Home;
