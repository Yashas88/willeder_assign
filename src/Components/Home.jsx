import React from "react";
import "./home.css";

import union from "../images/Union.png";
import coding from "../images/Rectangle.png";
import fb from "../images/facebook.png";
import twitter from "../images/twitter.png";
import insta from "../images/instagram.png";
import tiktok from "../images/tiktok.png";

const Home = () => {
  return (
    <div>
      {/* Header Section------------------ */}
      <header>
        <div className="logo">
          <h2>
            <a href="#">
              {" "}
              <img src={union} /> LOGO
            </a>
          </h2>
        </div>
        <nav>
          <li>
            <a href="#">Tours</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </nav>
      </header>

      {/* Carousol area section 1------------------------ */}

      <section className="hero">
        <div className="background-image"></div>
        <div className="hero-content-area">
          <h1>
            {" "}
            <img src={union} /> Logo
          </h1>
          <h3>Unmissable Adventure Tours With Your Friends</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </p>
        </div>
      </section>

      {/* blue stripe ------------------- */}
      <div className="stripbody"></div>

      {/* Section 2---------------------- */}
      <section className="destinations">
        <div>
          <h3 className="title">Lorem</h3>
          <p>ipsum</p>
        </div>
        <ul className="grid">
          <li className="small image-1">
            <div>
              <h3>01</h3>
              <span>Lorem ipsum Lorem ipsum</span>
              <p>Reference site about Lorem Ipsum, giving information</p>
            </div>
          </li>
          <li className="large image-2">
            <div>
              <h3>02</h3>
              <span>Lorem ipsum Lorem ipsum</span>
              <p>Reference site about Lorem Ipsum, giving information</p>
            </div>
          </li>
          <li className="large image-3">
            <div>
              <h3>03</h3>
              <span>Lorem ipsum Lorem ipsum</span>
              <p>Reference site about Lorem Ipsum, giving information</p>
            </div>
          </li>
        </ul>
      </section>

      {/* section 3------------------------ */}
      <section className="packages">
        <ul className="grid">
          <li>
            {" "}
            <img src={coding} />{" "}
          </li>
          <li>
            <h4>Lorem Ipsum</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </li>
        </ul>
      </section>

      {/* logo animation----------- */}
      <section className="testimonials">
        <div className="square App-logo"></div>
      </section>

      {/* footer section---------------------- */}
      <footer className="contact-area" id="contact">
        <div className="contact-content text-center">
          <div className="footermenu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </div>

          <div className="contact-social">
            <ul>
              <li>
                {" "}
                <img src={fb} />
              </li>
              <li>
                {" "}
                <img src={twitter} />
              </li>
              <li>
                {" "}
                <img src={insta} />
              </li>
              <li>
                {" "}
                <img src={tiktok} />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
