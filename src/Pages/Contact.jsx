import ActiveLastBreadcrumb from "../components/common/components/Link";
import RedButton from "../components/common/components/RedButton";
import i18n from "../components/common/components/LangConfig";
const Contact = () => {
  return (
    <div className="flex flex-col mx-4 xl:ml-36 mt-48 gap-20">
      <ActiveLastBreadcrumb
        path={`${i18n.t("home")}/${i18n.t("footer.Contact")}`}
      />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="shadow  w-full lg:w-[340px] h-[457px] flex flex-col gap-8 py-10 px-8 rounded">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row  gap-4  items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path
                  d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base font-medium">
                {i18n.t("contactPage.call")}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm">{i18n.t("contactPage.available")}</p>
              <p className="text-sm">
                {i18n.t("contactPage.phone")}: +8801611112222
              </p>
            </div>
          </div>
          <hr className="mx-full border-gray-400" />
          <div className="flex flex-col gap-6">
            <div className="flex flex-row  gap-4  items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path
                  d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-base font-medium">
                {i18n.t("contactPage.write")}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm">{i18n.t("contactPage.fillForm")}</p>

              <p className="text-sm">
                {i18n.t("contactPage.emails")}: customer@exclusive.com
              </p>
              <p className="text-sm">
                {i18n.t("contactPage.emails")}: support@exclusive.com
              </p>
            </div>
          </div>
        </div>
        <div className="shadow w-[full] flex flex-col py-10 px-4 lg:px-8 rounded">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder={i18n.t("contactPage.yourName")}
                required
                className="lg:w-[235px] rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
              />
              <input
                type="email"
                placeholder={i18n.t("contactPage.yourEmail")}
                required
                className="lg:w-[235px] rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
              />
              <input
                type="tel"
                placeholder={i18n.t("contactPage.yourPhone")}
                required
                className="lg:w-[235px] rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
              />
            </div>
            <textarea
              placeholder={i18n.t("contactPage.yourMessage")}
              required
              className="min-h-[50px] h-[207px] rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
            />
            <div className="ml-auto">
              <RedButton name={i18n.t("redButtons.sendMassage")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
