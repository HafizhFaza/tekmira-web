import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarFix from "../../components/Navbar/NavbarFix";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import "./DetailBerita.css";
import NewsBanner from "../../pic/Image-Asset/newsDetail/news1.png";
import Sosmed from "../../pic/Image-Asset/newsDetail/sosmed.png";

const DetailBerita = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="detail-berita-container">
      <NavbarFix />
      <div className="news" data-aos="fade-down">
        <img src={NewsBanner} />
      </div>
      <div className="news-sosmed-and-content">
        <div className="news-content" data-aos="fade-up">
          <p>
            Monday, August 29, 2022 at*09.00 - 11.00 WITA / 08.00 - 10.00 WIB
            Jakarta Time (UTC+7), upcoming G20 Event Series, “Coal Biomass
            Cofiring Technologies to Accelerate Energy Transitions
            <br />
            <br />
            As we are moving towards energy transitions goals, coal-fired power
            plants can implement CO2 emission reduction as part of the net zero
            emission policy. Biomass-coal co-firing is one of the integral parts
            in the energy transition phase towards the implementation of net
            zero emission in coal-fired power plants.
            <br />
            <br />
            In this regard, we would like to invite you to attend our upcoming
            G20 Event Series, “Coal Biomass Cofiring Technologies to Accelerate
            Energy Transitions” In this webinar, we are going to discuss about
            how coal biomass cofiring technologies could be an alternative
            solution for energy transition at Southeast Asia, especially in
            Indonesia for all sectors. To join the event, you may please
            register through the following link: https://bit.ly/CofiringWebinar
            <br />
            <br />
            The webinar will be conducted in virtual meeting via Zoom Zoom
            Meeting ID: 842 2800 1542 Passcode: cofiring
            <br />
            <br />
            on *Monday, August 29, 2022 at*09.00 - 11.00 WITA / 08.00 - 10.00
            WIB Jakarta Time (UTC+7).
            <br />
            <br />
            The event will be hosted by the TEKMIRA – Directorate General of
            Mineral and Coal MEMR, and present speakers from the reputable
            national and international organization.
            <br />
            <br />
            Please do not hesitate to contact us at info.tekmira@esdm.go.id and
            kerjasama.tekmira@esdm.go.id for further information. The invitation
            letter will also send to you via those emails. Thank you very much
            for your attention, and we look forward to your active participation
            on August 29, 2022!
            <br />
            <br />
            Best Regards, The Committee of Cofiring Webinar
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetailBerita;
