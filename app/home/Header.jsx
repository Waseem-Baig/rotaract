'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { pageItems } from "../../data/mainMenuData";
import { isActiveParent, isActiveLink, isActiveParentChaild } from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [bgColor, setBgColor] = useState("transparent"); // Initial background color is transparent
  const [boxShadow, setBoxShadow] = useState("none"); // No box shadow initially
  const pathname = usePathname(); // Used to determine the active route

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
      setBgColor("rgba(0, 0, 0, 0.3)"); // Transparent black background on scroll
      setBoxShadow("0px 4px 6px rgba(0, 0, 0, 0.1)"); // Box shadow on scroll
    } else {
      setNavbar(false);
      setBgColor("transparent"); // Transparent background when at the top
      setBoxShadow("none"); // Remove box shadow
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground); // Cleanup listener
  }, []);

  const shiningPinkStyle = {
    background: "linear-gradient(90deg, pink, white, silver)", // Gradient colors
    WebkitBackgroundClip: "text", // Clip gradient to text
    WebkitTextFillColor: "transparent", // Makes text fill transparent to show the gradient
    fontWeight: "bold", // Make text bold
    transition: "0.3s ease", // Smooth transition for hover effects
  };

  return (
<header
  className={`main-header -type-11 ${navbar ? "fixed-header animated slideInDown" : ""}`}
  style={{
    backgroundColor: bgColor, // Dynamic background color
    backdropFilter: navbar ? "blur(20px)" : "none", // Apply blur on scroll
    borderRadius: "15px", // Set border radius to 15px
    paddingTop: "-40px",
    paddingButton: "-40px", // 20px top padding to float the navbar
    paddingLeft: "0px", // 30px left padding
    paddingRight: "0px", // 30px right padding
    position: "fixed", // Fixed position for floating effect
    left: "20px", // Ensure it stays aligned to the left
    right: "20px", // Ensure it stays aligned to the right
    top: "20px",
    width: "auto",
    transition: "background-color 0.3s ease, backdrop-filter 0.3s ease", // Smooth transition
    zIndex: 1000, // Ensure it stays on top of other content
  }}
>


      <div className="main-box">
        {/* Logo Section */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <Image
                  width={154}
                  height={50}
                  src="/images-rotaract/ri3150-logo.png"
                  alt="ROTARACT3150 || SRIPTO"
                />
              </Link>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="nav main-menu">
            <ul className="navigation" id="navbar">
              {/* Home */}
              <li className={`${isActiveLink("/", pathname) ? "current" : ""}`}>
                <Link href="/" className="underline-animation">
                  Home
                </Link>
              </li>

              {/* Find Jobs */}
              <li className={`${isActiveLink("/find-jobs", pathname) ? "current" : ""}`}>
                <Link href="/job-list" className="underline-animation">
                  Find Jobs
                </Link>
              </li>

              {/* Employers */}
              <li className={`${isActiveLink("/", pathname) ? "current" : ""}`}>
                <Link href="/employers-dashboard" className="underline-animation">
                  Job Provider Dashboard
                </Link>
              </li>

              {/* Candidates */}
              <li className={`${isActiveLink("/", pathname) ? "current" : ""}`}>
                <Link href="/candidates-dashboard" className="underline-animation">
                  Job Seeker Dashboard
                </Link>
              </li>

              {/* Pages Dropdown */}
              <li
                className={`${
                  isActiveParentChaild(pageItems, pathname) ? "current" : ""
                } dropdown`}
              >
                <span className="">More</span>
                <ul>
                  {pageItems.map((item, i) => (
                    <li
                      className={isActiveLink(item.routePath, pathname) ? "current" : ""}
                      key={i}
                    >
                      <Link href={item.routePath} className="underline-animation">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        {/* Login/Register and Job Post Buttons */}
        <div className="outer-box">
          <div className="btn-box">
            <a
              href="/register"
              className="theme-btn btn-style-three btn-white-10 call-modal"
            >
              Login / Register
            </a>
            <Link
              href="/employers-dashboard/post-jobs"
              className="theme-btn btn-style-one btn-white"
            >
              Job Post
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
