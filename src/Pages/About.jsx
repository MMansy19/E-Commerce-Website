/* eslint-disable react/prop-types */
import StatsCardExported from "../components/About/StatsCard.jsx";
import TeamMembers from "../components/About/TeamMembers";
import Services from "../components/common/components/Services.jsx";
import ActiveLastBreadcrumb from "../components/common/components/Link.jsx";
import i18n from "../components/common/components/LangConfig";
const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start mt-48">
        <div className="md:mx-40">
          <ActiveLastBreadcrumb
            path={`${i18n.t("home")}/${i18n.t("aboutPage.title")}`}
          />
        </div>

        <div className="flex justify-center md:justify-between items-center md:mt-10 mx-auto my-24 md:mb-36 ">
          <div className="flex flex-col gap-10 items-center md:items-start justify-center max-w-lg mx-8 md:mx-40">
            <h1 className="text-5xl font-bold font-inter">
              {i18n.t("aboutPage.story")}
            </h1>
            <p className="text-base text-center md:text-start">
              {i18n.t("aboutPage.paragraph1")}
            </p>
            <p className="text-base text-center md:text-start">
              {i18n.t("aboutPage.paragraph2")}
            </p>
          </div>
          <svg
            className="md:flex hidden"
            width="705"
            height="609"
            viewBox="0 0 705 609"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_226_4548)">
              <path
                d="M0 3.99999C0 1.79085 1.79086 0 4 0H705V609H4.00001C1.79087 609 0 607.209 0 605V3.99999Z"
                fill="#EB7EA8"
              />
            </g>
            <defs>
              <clipPath id="clip0_226_4548">
                <path
                  d="M0 3.99999C0 1.79085 1.79086 0 4 0H705V609H4.00001C1.79087 609 0 607.209 0 605V3.99999Z"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <StatsCardExported />
      </div>

      <div className="flex flex-col items-center justify-center gap-8 my-36 ">
        <TeamMembers />
      </div>
      <Services />
    </>
  );
};
export default About;
