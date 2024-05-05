/* eslint-disable react/prop-types */
import StatsCardExported from "../components/About/StatsCard.jsx";
import TeamMembers from "../components/About/TeamMembers";
import Services from "../components/common/components/Services.jsx";
import ActiveLastBreadcrumb from "../components/common/components/Link.jsx";
const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start md:ml-40 mt-48">
        <ActiveLastBreadcrumb path="Home/About" />
        <div className="flex justify-center md:justify-end items-center md:mt-10  mb-36 md:gap-32 ">
          <div className="flex flex-col gap-10 items-start justify-center max-w-lg mx-4 md:mx-0">
            <h1 className="text-5xl font-bold font-inter ">Our Story</h1>
            <p className="text-sm md:text-base">
              {" "}
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="text-sm md:text-base">
              {" "}
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.{" "}
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

      <div className="flex flex-col items-center justify-center gap-8 mb-24 ">
        <StatsCardExported />
      </div>

      <div className="flex flex-col items-center justify-center gap-8 mt-24 ">
        <TeamMembers />
      </div>
      <Services />
    </>
  );
};
export default About;
