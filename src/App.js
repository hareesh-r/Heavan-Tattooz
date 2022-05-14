import React from "react";
import "./App.css";
import logo from "./assets/img/logo.png";
import title from "./assets/img/title.png";
import quote from "./assets/img/quote.jpeg";

function App() {
  return (
    <div className="App">
      <div className="top-line sticky"></div>
      <div className="top-line-tri sticky"></div>
      <div className="nav sticky flex row left">
        <div className="nav-item">
          <a className="active" href="#">
            Home
          </a>
        </div>
        <div className="nav-item">
          <a className="inactive" href="#gallery">
            Gallery
          </a>
        </div>
        <div className="nav-item">
          <a className="inactive" href="#info">
            Information
          </a>
        </div>
        <div className="nav-item">
          <a className="inactive" href="#bookings">
            Bookings
          </a>
        </div>
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="home flex row sa" id="home">
        <div className="left-home left-home-container flex col">
          <div className="left-home flex col">
            <strong className="gold">Hours</strong>
            <div className="flex row">
              <strong>Mon-Fri</strong>
              <p className="time lite-grey">8AM-7PM</p>
            </div>
            <div className="flex row">
              <strong>Sat-Sun</strong>
              <p className="time lite-grey">8AM-12AM</p>
            </div>
          </div>
          <div className="left-home flex col">
            <strong className="gold">Address</strong>
            <div className="left-home flex col">
              <strong>Area</strong>
              <p className="lite-grey">Specific</p>
            </div>
          </div>
          <div className="left-home flex col">
            <strong className="gold">Call</strong>
            <p>958647589</p>
          </div>
        </div>
        <div className="right-home flex col">
          <img className="title-img" src={title} alt="" />
          <p className="tag-line">TATTOO SHOP</p>
          <div className="underline"></div>
          <div className="quote">
            <img src={quote} alt="" />
            <div className="quote-title">VARUN</div>
            <div className="quote-description">
              Tattoos are the stories in your heart, written
              <br />
              on your skin... Let me help your story.
            </div>
          </div>
          <div className="button-grp flex row">
            <a href="#gallery">
              <button>View Galleries</button>
            </a>
            <a href="#bookings">
              <button>Get a Quote</button>
            </a>
          </div>
        </div>
      </div>
      <div id="gallery" className="gallery flex col">
        <div className="black-box-top">
          <h1 className="gallery-title gold">Gallery</h1>
        </div>
        <div className="gallery-container flex">
          <div class="roww">
            <div class="column">
              <img src="https://www.w3schools.com/w3images/wedding.jpg" />
              <img src="https://www.w3schools.com/w3images/rocks.jpg" />
              <img src="https://www.w3schools.com/w3images/falls2.jpg" />
              <img src="https://www.w3schools.com/w3images/paris.jpg" />
              <img src="https://www.w3schools.com/w3images/nature.jpg" />
              <img src="https://www.w3schools.com/w3images/mist.jpg" />
              <img src="https://www.w3schools.com/w3images/paris.jpg" />
            </div>
            <div class="column">
              <img src="https://www.w3schools.com/w3images/underwater.jpg" />
              <img src="https://www.w3schools.com/w3images/ocean.jpg" />
              <img src="https://www.w3schools.com/w3images/wedding.jpg" />
              <img src="https://www.w3schools.com/w3images/mountainskies.jpg" />
              <img src="https://www.w3schools.com/w3images/rocks.jpg" />
              <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            </div>
            <div class="column">
              <img src="https://www.w3schools.com/w3images/wedding.jpg" />
              <img src="https://www.w3schools.com/w3images/rocks.jpg" />
              <img src="https://www.w3schools.com/w3images/falls2.jpg" />
              <img src="https://www.w3schools.com/w3images/paris.jpg" />
              <img src="https://www.w3schools.com/w3images/nature.jpg" />
              <img src="https://www.w3schools.com/w3images/mist.jpg" />
              <img src="https://www.w3schools.com/w3images/paris.jpg" />
            </div>
            <div class="column">
              <img src="https://www.w3schools.com/w3images/underwater.jpg" />
              <img src="https://www.w3schools.com/w3images/ocean.jpg" />
              <img src="https://www.w3schools.com/w3images/wedding.jpg" />
              <img src="https://www.w3schools.com/w3images/mountainskies.jpg" />
              <img src="https://www.w3schools.com/w3images/rocks.jpg" />
              <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            </div>
          </div>
        </div>
        <div className="black-box"></div>
      </div>
      <div id="info" className="info flex col">
        <div className="info-container flex row">
          <a href="upi://pay?pa=heavantattooz@okhdfcbank&pn=Booking%20@%20heaventattooz&tn=Booking%20for%20tattoo&am=35000&cu=INR">
            <div className="card flex col">
              <img
                src="https://tattoo-ideas.com/wp-content/uploads/2016/04/Galaxy-Spiral-Golden-Ratio.jpg"
                alt=""
              />
              <h2 className="img-title">Black & Blue Tattoo</h2>
              <p className="price">₹35000</p>
            </div>
          </a>
          <a href="upi://pay?pa=heavantattooz@okhdfcbank&pn=Booking%20@%20heaventattooz&tn=Booking%20for%20tattoo&am=20000&cu=INR">
            <div className="card flex col">
              <img
                src="https://preview.redd.it/1h9dfu04ro181.jpg?auto=webp&s=a4ec0fc94197e505ed1dd1b9f74dd8f6219e3ea7"
                alt=""
              />
              <h2 className="img-title">Golden Ratio Tattoo</h2>
              <p className="price">₹20000</p>
            </div>
          </a>
          <a href="upi://pay?pa=heavantattooz@okhdfcbank&pn=Booking%20@%20heaventattooz&tn=Booking%20for%20tattoo&am=1000&cu=INR">
            <div className="card flex col">
              <img
                src="https://preview.redd.it/zgq6u2nli5851.jpg?auto=webp&s=f130cf64fe62f382b886390e57f7a2678b0f5e94"
                alt=""
              />
              <h2 className="img-title">Water Wave Tattoo</h2>
              <p className="price">₹1000</p>
            </div>
          </a>
        </div>
        <div className="info-container flex row">
          <a href="upi://pay?pa=heavantattooz@okhdfcbank&pn=Booking%20@%20heaventattooz&tn=Booking%20for%20tattoo&am=2000&cu=INR">
            <div className="card flex col">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHUYAWkP5fo3d4KqapssDzeAMArmZym-ZZw&usqp=CAU"
                alt=""
              />
              <h2 className="img-title">3D Tattoo</h2>
              <p className="price">₹2000</p>
            </div>
          </a>
          <a href="upi://pay?pa=heavantattooz@okhdfcbank&pn=Booking%20@%20heaventattooz&tn=Booking%20for%20tattoo&am=500&cu=INR">
            <div className="card flex col">
              <img
                src="https://m.media-amazon.com/images/I/614L0Z3JqyL._SX522_.jpg"
                alt=""
              />
              <h2 className="img-title">Letter Tattoo</h2>
              <p className="price">₹250 - ₹500</p>
            </div>
          </a>
          <a href="upi://pay?pa=heavantattooz@okhdfcbank&pn=Booking%20@%20heaventattooz&tn=Booking%20for%20tattoo&am=1000&cu=INR">
            <div className="card flex col">
              <img
                src="https://www.cuded.com/wp-content/uploads/2013/01/omerta_lettering600_490.jpg"
                alt=""
              />
              <h2 className="img-title">Back Tattoo</h2>
              <p className="price">₹1000</p>
            </div>
          </a>
        </div>
      </div>
      <div className="bookings flex col" id="bookings">
        <h1>Do the bookings via these methods</h1>
        <div className="bookings-container flex row">
          <div className="booking-item flex col sa">
            <a
              className="flex col"
              target="_blank"
              href="https://wa.me/7305453997?text=Hi%20Heaven%20Tattooz,%20I%20want%20to%20book%20an%20appointment%20for%20a%20tattoo."
            >
              <img
                src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"
                alt=""
              />
              <h3 className="gold-hover">Whatsapp</h3>
            </a>
          </div>
          <div className="booking-item flex col sa">
            <a
              className="flex col"
              href="upi://pay?pa=heavantattooz@okhdfcbank&pn=Booking%20@%20heaventattooz&tn=Booking%20for%20tattoo&am=100&cu=INR"
              target="_blank"
            >
              <img
                src="https://1000logos.net/wp-content/uploads/2020/04/Google-Pay-Logo.png"
                alt=""
              />
              <h3 className="gold-hover">GPay</h3>
            </a>
          </div>
          <div className="booking-item flex col sa">
            <a className="flex col" href="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                alt=""
              />
              <h3 className="gold-hover">Instagram</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
