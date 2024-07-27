import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Imge from "../assets/products/1.png";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <div className="hero">
          <div className="left">
            <h3>Empowering You with Cutting-Edge Gadget</h3>
            <p>
              Discover innovative tech solutions designed to elevate your
              digital lifestyle effortlessly.
            </p>
            <button>
              <Link to="/shop"> Shop </Link>
            </button>
          </div>
          <div className="right">
            <img src={Imge} alt="" />
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about">
          <h2>About Us</h2>
          <p>
            Welcome to Ali Sami's Shop, your ultimate destination for the latest
            and most innovative tech products. Our mission is to empower you
            with cutting-edge gadgets that enhance your digital lifestyle,
            providing you with the tools to stay ahead in a rapidly evolving
            world. <br /> <br /> At Ali Sami's Shop, we meticulously curate a diverse range of
            high-quality tech products, from the newest smartphones and laptops
            to smart home devices, wearable technology, and more. Each product
            in our catalog is selected for its advanced features, superior
            performance, and ability to make your life more convenient,
            connected, and enjoyable. <br /> <br /> We believe in offering more than just
            products; we offer solutions that integrate seamlessly into your
            daily routine, elevating your productivity, entertainment, and
            overall quality of life. Our team of tech enthusiasts is dedicated
            to providing exceptional customer service, ensuring that you find
            the perfect gadgets to meet your needs and preferences.
          </p>
        </div>
      </section>

      <section id="contact">
        <div className="contact">
            <h2>For any inquiries, please feel free to contact us</h2>
            <form action="">
                <input type="text" placeholder="Enter Your Name" />
                <input type="email" placeholder="Enter Your Email" />
                <textarea name="" id="" placeholder="Enter Your Message"></textarea>
                <button>Submit</button>
                
            </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
