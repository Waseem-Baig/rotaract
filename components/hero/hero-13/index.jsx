import SearchForm from "../../common/job-search/SearchForm";
import ImageBox from "./ImageBox";
import PopularSearch from "../PopularSearch";
import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <section className="banner-section -type-13">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div
              className="inner-column"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="title-box">
                <h3>
                  ROTARACT 3150 - JOB PORTAL
                  <br /> FOR YOU !
                </h3>
                <div className="text">
                  Find Jobs, Internships, Employment & Career Opportunities
                </div>
              </div>

              {/* <!-- Job Search Form --> */}
              <div
                className="job-search-form"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <SearchForm />
              </div>
              {/* <!-- Job Search Form --> */}

              {/* <!-- Popular Search --> */}
              <PopularSearch />
              {/* <!-- End Popular Search --> */}

              {/* <div className="bottom-box wow fadeInUp" data-wow-delay="1500ms">
                <div className="count-employers">
                  <span className="title">10k+ Candidates</span>
                  <Image
                    width={209}
                    height={54}
                    src="/images/resource/multi-peoples.png"
                    alt="resource"
                  />
                </div>
                <Link
                  href="/candidates-dashboard/cv-manager"
                  className="upload-cv"
                >
                  <span className="icon flaticon-file"></span> Upload your CV
                </Link>
              </div> */}
              {/* <!-- End Bottom Box --> */}
            </div>
          </div>
          {/* End .col */}

          <div className="image-column col-lg-5 col-md-12">
            <ImageBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
