/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";

// Images
import searchIcon from "../images/searchIcon.svg";
import chooseImg from "../images/chooseImg.svg";
import discoverImg from "../images/discoverImg.svg";
import bookImg from "../images/bookImg.svg";
import firstTestimonialPic from "../images/firstTestimonialPic.png";
import secondTestimonialPic from "../images/secondTestimonialPic.png";
import thirdTestimonialPic from "../images/thirdTestimonialPic.png";

// CSS
import "../css/LandingPage.css";

const LandingPage = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="landing-hero">
        <h2>Discover & Book In-Store Beauty Services</h2>
        <div className="landing-hero-overlay" />
        <div className="landing-hero-search-div">
          <div className="landing-hero-search-items">
            <div className="landing-hero-search-item">
              <span> DATE </span>
              <input type="date" value="2019-02-22" required="required" />
            </div>
            <div className="landing-hero-search-item">
              <span> TIME </span>
              <input type="time" value="13:00" required="required" />
            </div>
            <div className="landing-hero-search-item">
              <span> BRAND </span>
              <select>
                <option value="Chanel" selected>
                  Chanel
                </option>
                <option value="Gucci">Gucci</option>
              </select>
            </div>
            <div className="landing-hero-search-item">
              <span> SERVICE </span>
              <select>
                <option value="Makeup" selected>
                  Makeup
                </option>
              </select>
            </div>
          </div>
          <button type="button" className="red-btn">
            <img src={searchIcon} alt="search" />
          </button>
          <p>
            It seems you&#39;re not in New York. Not correct?
            <a href="#">
              <i className="fas fa-location-arrow" />
              Get correct location
            </a>
          </p>
        </div>
      </section>
      <section className="landing-steps">
        <h3> Blushup is the easiest way to book in-store beauty services</h3>
        <div className="three-split">
          <div className="landing-steps-item three-split-item">
            <h4> Choose </h4>
            <img src={chooseImg} alt="blushup choose" />
            <p>
              Brand, date, time, and/or location. 24/7 mobile acess to more than
              300 beauty retailers in NY and NJ
            </p>
          </div>
          <div className="landing-steps-item three-split-item">
            <h4> Discover </h4>
            <img src={discoverImg} alt="blushup discover" />
            <p>
              Make up and skincare services for any types of event by trusted
              professionals from the best beauty brands
            </p>
          </div>
          <div className="landing-steps-item three-split-item">
            <h4> Book </h4>
            <img src={bookImg} alt="blushup book" />
            <p>
              Memorable Blushup experience that is quick, fun, and affordable!
              Payments are made in-store after appointment.
            </p>
          </div>
        </div>
        <div className="landing-steps-book">
          Book and earn $20 for your next appointment
          <button type="button" className="red-btn">
            Book Now
          </button>
        </div>
      </section>
      <section className="landing-carousels">
        <div className="landing-carousel-item">
          <h4>Top-rated makeup services near you</h4>
          <p>The best beauty counters for your perfect makeup look</p>
          <div className="three-split">
            <div className="three-split-item">
              <img src="https://placehold.it/100" alt="blushup item" />
              <i className="far fa-heart" />
              <span>Sakz Fifth Avenue . 754 5th Avenue, NY</span>
              <h4>Dior</h4>
              <p>1 Product purchase required</p>
              <div className="carousel-item-stars">
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                (40)
              </div>
            </div>
            <div className="three-split-item">
              <img src="https://placehold.it/100" alt="blushup item" />
              <i className="far fa-heart" />
              <span>Sakz Fifth Avenue . 754 5th Avenue, NY</span>
              <h4>Dior</h4>
              <p>1 Product purchase required</p>
              <div className="carousel-item-stars">
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                (40)
              </div>
            </div>
            <div className="three-split-item">
              <img src="https://placehold.it/100" alt="blushup item" />
              <i className="far fa-heart" />
              <span>Sakz Fifth Avenue . 754 5th Avenue, NY</span>
              <h4>Dior</h4>
              <p>1 Product purchase required</p>
              <div className="carousel-item-stars">
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                (40)
              </div>
            </div>
          </div>
        </div>
        <div className="landing-carousel-item">
          <h4>Exciting beauty events coming up</h4>
          <p>
            Meet national makeup artists, take makeup classes, earn gifts and
            more
          </p>
          <div className="three-split">
            <div className="three-split-item">
              <img src="https://placehold.it/100" alt="blushup item" />
              <i className="far fa-heart" />
              <span>Sakz Fifth Avenue . 754 5th Avenue, NY</span>
              <h4>Beginners Makeup Class</h4>
              <p>Thu,Feb27, 6:30 - 8:00 PM</p>
              <p>$ 40 per person</p>
              <div className="carousel-item-stars">
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                (40)
              </div>
            </div>
            <div className="three-split-item">
              <img src="https://placehold.it/100" alt="blushup item" />
              <i className="far fa-heart" />
              <span>Sakz Fifth Avenue . 754 5th Avenue, NY</span>
              <h4>Beginners Makeup Class</h4>
              <p>Thu,Feb27, 6:30 - 8:00 PM</p>
              <p>$ 40 per person</p>
              <div className="carousel-item-stars">
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                (40)
              </div>
            </div>
            <div className="three-split-item">
              <img src="https://placehold.it/100" alt="blushup item" />
              <i className="far fa-heart" />
              <span>Sakz Fifth Avenue . 754 5th Avenue, NY</span>
              <h4>Beginners Makeup Class</h4>
              <p>Thu,Feb27, 6:30 - 8:00 PM</p>
              <p>$ 40 per person</p>
              <div className="carousel-item-stars">
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                (40)
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-testimonials">
        <h3>What people are saying</h3>
        <div className="three-split">
          <div className="three-split-item">
            <img src={firstTestimonialPic} alt="blushup testimonial Jen" />
            <h5>Jen</h5>
            <i className="fas fa-quote-left" />
            <p>
              Finally we have an easy way to locate beauty counters nearby
              without the hassle of making phone calls to stores
            </p>
          </div>
          <div className="three-split-item">
            <img src={secondTestimonialPic} alt="blushup testimonial Jen" />
            <h5>Ana</h5>
            <i className="fas fa-quote-left" />
            <p>
              I used Blushup for my entire pre-wedding photoshoots, trials,
              engagement and bridal party
            </p>
          </div>
          <div className="three-split-item">
            <img src={thirdTestimonialPic} alt="blushup testimonial Jen" />
            <h5>Ana</h5>
            <i className="fas fa-quote-left" />
            <p>
              Especially after a long day of work, Blushup is my goto when I
              want to impress my date
            </p>
          </div>
        </div>
      </section>
      <section className="landing-more">
        <div className="landing-more-overlay" />
        <h2>Blushup helps brands and retailers connect with customers</h2>
        <button className="red-btn" type="button">
          Find Out More
        </button>
      </section>
      <footer className="landing-footer">
        <section className="landing-footer-section">
          <h5>Company</h5>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms and Conditions</Link>
        </section>
        <section className="landing-footer-section">
          <h5>Brand & Retailers</h5>
          <Link to="/partner">Partner with Us</Link>
          <Link to="/login">Login</Link>
        </section>
        <section className="landing-footer-section">
          <h5>Follow Us</h5>
          <div className="landing-footer-socials">
            <button type="button">
              <i className="fab fa-twitter" />
            </button>
            <button type="button">
              <i className="fab fa-facebook-f" />
            </button>
            <button type="button">
              <i className="fab fa-instagram" />
            </button>
            <button type="button">
              <i className="fab fa-linkedin-in" />
            </button>
          </div>
        </section>
      </footer>
    </Fragment>
  );
};

export default LandingPage;
