import React from "react";
import TypedAboutMe from "../components/TypedAboutMe";
import { formatDistanceStrict } from "date-fns";
import SocialMedia from "../components/SocialMedia";
import ProfilePic from "../components/ProfilePic";

function About() {
  const myBirthday = new Date(1997, 8, 10, 2);
  const myYears = formatDistanceStrict(new Date(), myBirthday, {
    roundingMethod: "floor",
  });

  return (
    <div className="flex flex-col h-full space-y-14 md:space-y-24 mx-5 md:mx-10 ">
      <h1 className="inline-block text-center  uppercase font-normal">
        About
        <TypedAboutMe strings={["Me", "Apps", "Games", "web", "dev", "code"]} />
      </h1>
      <div className="flex flex-row">
        <div className="hidden md:flex flex-col space-y-32 items-center justify-center flex-grow ">
          <ProfilePic size="lg" />
          <SocialMedia />
        </div>
        <div className="flex flex-col md:px-10  md:w-2/3 items-center md:items-start">
          <div className="md:hidden my-2">
            <ProfilePic size="sm" />
          </div>
          <h3 className="text-center font-semibold">
            I am Raul Mateo Beneyto,
          </h3>
          <h4 className="text-center text-gray-400 my-5 font-medium tracking-widest uppercase">
            Software Engineer
          </h4>
          <p className="text-justify font-normal text-lg">
            Based in Barcelona, {`${myYears} old`}, recently graduated from
            Universitat Politècnica de Catalunya.
            <br />
            <br />I am a self-driven person who enjoys learning and creating all
            kinds of projects. Not only I relish working as a team as it
            requires communication and dedication, but also I have an open mind
            to new ideas and appreciate learning from others with more knowledge
            and experience. In addition, I am a positive person who enjoys
            maintaining the enthusiasm in a work environment. <br />
            <br />
            My expertise is composed of different types of projects, although I
            enjoy the most developing beautiful cross platform mobile apps based
            on the user experience, using{" "}
            <a href="https://flutter.dev/">Flutter</a>. I also have developed
            some cross platform games with the help of{" "}
            <a href="https://libgdx.badlogicgames.com/">libGDX</a>.
          </p>
        </div>
      </div>
      <div className="md:hidden text-center mb-5 pb-5">
        <SocialMedia />
      </div>
    </div>
  );
}

export default About;
