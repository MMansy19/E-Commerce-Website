import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/mahmoud-mansy-a189a5232/"
            icon={BsLinkedin}
          />
          <Footer.Icon href="https://github.com/MMansy19/" icon={BsGithub} />
          <Footer.Icon
            href="mailto:mahmoud2abdalfattah@gmail.com"
            icon={BsEnvelope}
          />
          <Footer.Icon href="https://t.me/mah_moud_2003" icon={BsTelegram} />
          <Footer.Icon
            href="https://api.whatsapp.com/send/?phone=201010352387&text&type=phone_number&app_absent=0"
            icon={BsWhatsapp}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
