import Image from "next/image";
import CopyrightFooter from "/components/footer/common-footer/CopyrightFooter";
// import FooterApps from "../footer/FooterApps";
import FooterContent3 from "/components/footer/FooterContent3";
import SearchForm2 from "/components/footer/SearchForm2";

const Footer = () => {
  return (
    <footer
      className="main-footer style-three"
      style={{ backgroundImage: "url(/images/background/footerdown.jpg)" }}
    >
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="newsletter-form wow fadeInUp">
            <div className="sec-title light text-center">
              <h2>Subscribe Our Job Portal Newsletter</h2>
              <div className="text">We don’t send spam so don’t worry.</div>
            </div>
            <SearchForm2 />
          </div>
          {/* End .newsletter-form */}

          <div className="row">
            <div className="big-column col-xl-3 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <a href="#">
                    <Image
                      width={154}
                      height={50}
                      src="/images-rotaract/ri3150-logo.png"
                      alt="SRIPTO"
                    />
                  </a>
                </div>
                <p className="phone-num">
                  <span>Reach us </span>
                  <a href="mailto:sriyt113@gmail.com">srivardhan.yeluri@gmail.com</a>
                </p>
                <p className="address">
                  Rotaract 3150 - Job Portal
                  <br /> Telangana, Andhra Pradesh <br />
                  India.
                  
                </p>
              </div>
            </div>
            {/* End footer address left widget */}

            <div className="big-column col-xl-9 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent3 />

                {/* <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget">
                    <h4 className="widget-title">Mobile Apps</h4>
                    <FooterApps />
                  </div>
                </div> */}
              </div>
              {/* End .row */}
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default Footer;
