import React, { useState } from "react";
import Documentation from "./Documentation";
import Mock, { MockType } from "./ui/mocks/Mock";
import { FaGithubAlt, FaGlobe, FaDesktop, FaAppStore } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { Mabe, Project } from "../state/types";
import { format } from "date-fns";
import Tag from "./Tag";
import Asset from "./ui/mocks/Asset";
/* import LanguageItem from "./Language"; */

function getImage(mabe: Mabe): string | undefined {
  if (mabe.assets_is_image) {
    return mabe.assets[mabe.assets_is_image.indexOf(true)];
  } else {
    return mabe.assets[0];
  }
}

function isMockVertical(mabe: Mabe, index: number): boolean {
  return (
    mabe.assets_is_vertical !== undefined &&
    mabe.assets_is_vertical.length > 0 &&
    mabe.assets_is_vertical[index]
  );
}

function isMockVideo(mabe: Mabe, index: number): boolean {
  return (
    mabe.assets_is_image !== undefined &&
    mabe.assets_is_image.length > 0 &&
    !mabe.assets_is_image[index]
  );
}

function getMockType(mabe: Mabe, index: number): MockType {
  if (mabe.assets_platform && mabe.assets_platform.length > 0) {
    if (mabe.assets_platform[index].toLowerCase() === "web")
      return MockType.WEB;
    else if (mabe.assets_platform[index].toLowerCase() === "desktop")
      return MockType.DESKTOP;
    else if (isMockVertical(mabe, index)) return MockType.MOBILE_Y;
    else return MockType.MOBILE_X;
  } else {
    if (mabe.platforms.includes("web")) return MockType.WEB;
    else if (mabe.platforms.includes("desktop")) return MockType.DESKTOP;
    else if (isMockVertical(mabe, index)) return MockType.MOBILE_Y;
    else return MockType.MOBILE_X;
  }
}

function RepositoryItem(props: Project & { reversed: boolean }) {
  const {
    name,
    descriptionHTML,
    url,
    /*   languages, */
    readme,
    mabe,
    reversed,
  } = props;
  const [open, setOpen] = useState(false);

  const isCodePublic: boolean =
    !mabe.private && url != null && url.includes("github");

  const readmeExists: boolean = readme != null && readme.length > 0;

  const hasAltLink: boolean = mabe.link != null && mabe.link_text != null;

  const hasFirstButton: boolean = readmeExists;
  const hasSecondButton: boolean = hasAltLink || isCodePublic;

  mabe.platforms = mabe.platforms.map((platform) => platform.toLowerCase());
  const isForWeb: boolean = mabe.platforms.includes("web");
  const isForAndroid: boolean = mabe.platforms.includes("android");
  const isForIOS: boolean = mabe.platforms.includes("ios");
  const isForDesktop: boolean = mabe.platforms.includes("desktop");

  return (
    <div className="flex flex-row justify-center items-center my-5 md:my-10">
      <div
        className={`flex flex-col px-10  md:w-3/4  ${
          !reversed ? "items-end text-right" : "items-start"
        }`}
      >
        <h3 className=" font-semibold text-gray-400">
          {format(Date.parse(props.createdAt), "MMMM yyyy")}
        </h3>
        <div className=" border-4 border-primary-blue w-1/4 my-4 rounded-full" />

        <div className="mb-6 flex flex-row items-center">
          <h1 className="inline">{mabe == null ? name : mabe.title} </h1>
          <div className="flex flex-grow">
            {isForWeb && <FaGlobe className="text-3xl inline-block ml-2" />}
            {isForAndroid && (
              <DiAndroid className="text-3xl inline-block ml-2" />
            )}
            {isForIOS && <FaAppStore className="text-3xl inline-block ml-2" />}
            {isForDesktop && (
              <FaDesktop className="text-3xl inline-block ml-2" />
            )}
          </div>
        </div>

        {/* <p className="my-2">
          {languages.map((language) => (
            <div className="mx-2 inline-block">
              <LanguageItem key={language.name} lang={language} />
            </div>
          ))}
        </p> */}

        <p
          className="text-xl"
          dangerouslySetInnerHTML={{ __html: descriptionHTML }}
        />

        <div className="block  lg:hidden self-center">
          <Mock type={getMockType(mabe, 0)} urlMock={mabe.url}>
            <Asset
              isVideo={isMockVideo(mabe, 0)}
              vertical={isMockVertical(mabe, 0)}
              url={mabe.assets[0]}
              image_backup={getImage(mabe)}
            />
          </Mock>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 my-1 md:my-0 self-center">
          {hasFirstButton && (
            <div>
              <a
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="btn btn-outline"
              >
                {open ? "See less" : "See more"}
              </a>
            </div>
          )}
          {hasSecondButton && hasFirstButton && <i>- or -</i>}
          {hasAltLink && (
            <a href={mabe.link} className="btn btn-primary bg-gradient">
              {mabe.link_text}
            </a>
          )}
          {!hasAltLink && isCodePublic && (
            <a href={url} className="btn btn-primary bg-gradient">
              Check on <FaGithubAlt className="inline-block ml-2" />
            </a>
          )}
        </div>

        {isCodePublic && (
          <div>
            <hr className="my-8" />
            <div className="mb-5">
              <div className={open ? "hidden" : ""}>
                <p className={`my-5 ${reversed ? "" : "text-right"}`}>
                  {mabe.tag_tools.map((tool) => (
                    <Tag key={tool} tag={tool} />
                  ))}
                </p>
                <p>
                  If you are interested in this project, or just want to show
                  appreciation for my work, consider starring the repository on
                  Github!
                </p>
              </div>
            </div>
          </div>
        )}

        {readmeExists && (
          <div /* in={open} */ className="mt-3">
            <div className={open ? "" : "hidden"}>
              <Documentation readme={readme} />
            </div>
          </div>
        )}
      </div>
      <div
        className={`hidden lg:flex flex-grow items-center justify-center ${
          reversed ? "order-first" : "order-last"
        }`}
      >
        <Mock type={getMockType(mabe, 0)} urlMock={mabe.url}>
          <Asset
            isVideo={isMockVideo(mabe, 0)}
            vertical={isMockVertical(mabe, 0)}
            url={mabe.assets[0]}
            image_backup={getImage(mabe)}
          />
        </Mock>
      </div>
    </div>
  );
}

export default RepositoryItem;
