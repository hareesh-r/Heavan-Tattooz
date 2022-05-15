import React, { useState } from "react";
import "./App.css";
import logo from "./assets/img/logo.png";
import title from "./assets/img/title.png";
import quote from "./assets/img/quote.jpeg";
import varun from "./assets/img/varun.jpeg";
import sneha from "./assets/img/sneha.PNG";

function App() {
  const [galleryImageURLList, setGalleryImageURLList] = useState([
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/243170819_117782853966443_1084189875318892950_n.jpg?alt=media&token=3ca0a650-3d41-4aa5-8f0e-bea13aa3d434",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/240446983_1857483884413029_7090633982480615246_n.jpg?alt=media&token=b483e7e7-3ad7-442d-8164-d9415fa02b5c",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/240338643_581961716141133_7201891540458121396_n.jpg?alt=media&token=103f9fbf-5746-4f7e-9e60-d21601d55029",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/240229360_4223454017749267_3978895926170855874_n.jpg?alt=media&token=7c6632cd-dad7-40a2-b6a0-215bcf8618f9",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/240111252_382058380051507_2652896964985804596_n.jpg?alt=media&token=66e6518a-b259-4c35-99c8-0c1bdb057d49",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/239662045_246369054010535_374104280886273195_n.jpg?alt=media&token=0a1c2be4-f37b-44da-8a69-2ba07a0050b6",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/239629760_356968529249046_489682444598649654_n.jpg?alt=media&token=8b007107-9fcd-4bd7-a4a7-3031daabaf45",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/230871392_795601804459738_5893987971165873900_n.jpg?alt=media&token=81cd0fb3-d4fa-49eb-a6ca-f2947bdf30b2",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/213582965_193176599316299_9076140851186245588_n.jpg?alt=media&token=5e3653ef-67df-4a7d-ad6a-ef8e31da7fc7",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/160058079_774663656792815_5763007212025251754_n.jpg?alt=media&token=4ffcf5ed-fcbc-44f1-ab6d-068cb28f1274",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/192169413_325674652406896_1923575219187121037_n.jpg?alt=media&token=bf2b7e81-2eab-40b3-833e-92f8098354f6",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/243170819_117782853966443_1084189875318892950_n.jpg?alt=media&token=3ca0a650-3d41-4aa5-8f0e-bea13aa3d434",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/240446983_1857483884413029_7090633982480615246_n.jpg?alt=media&token=b483e7e7-3ad7-442d-8164-d9415fa02b5c",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/240338643_581961716141133_7201891540458121396_n.jpg?alt=media&token=103f9fbf-5746-4f7e-9e60-d21601d55029",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/240229360_4223454017749267_3978895926170855874_n.jpg?alt=media&token=7c6632cd-dad7-40a2-b6a0-215bcf8618f9",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/240111252_382058380051507_2652896964985804596_n.jpg?alt=media&token=66e6518a-b259-4c35-99c8-0c1bdb057d49",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/239662045_246369054010535_374104280886273195_n.jpg?alt=media&token=0a1c2be4-f37b-44da-8a69-2ba07a0050b6",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/239629760_356968529249046_489682444598649654_n.jpg?alt=media&token=8b007107-9fcd-4bd7-a4a7-3031daabaf45",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/230871392_795601804459738_5893987971165873900_n.jpg?alt=media&token=81cd0fb3-d4fa-49eb-a6ca-f2947bdf30b2",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/213582965_193176599316299_9076140851186245588_n.jpg?alt=media&token=5e3653ef-67df-4a7d-ad6a-ef8e31da7fc7",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/160058079_774663656792815_5763007212025251754_n.jpg?alt=media&token=4ffcf5ed-fcbc-44f1-ab6d-068cb28f1274",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/192169413_325674652406896_1923575219187121037_n.jpg?alt=media&token=bf2b7e81-2eab-40b3-833e-92f8098354f6",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/WhatsApp%20Image%202022-05-15%20at%201.30.29%20AM.jpeg?alt=media&token=ea336e52-96d9-4601-b12f-36df59c5eb50",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/WhatsApp%20Image%202022-05-15%20at%201.29.53%20AM.jpeg?alt=media&token=a4fd15ce-8c50-40b9-830a-deb258ba9eae",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/WhatsApp%20Image%202022-05-15%20at%201.29.28%20AM.jpeg?alt=media&token=4e33a053-794b-4f6a-bfbc-44b2bf8feb8c",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/WhatsApp%20Image%202022-05-15%20at%201.27.27%20AM.jpeg?alt=media&token=70c1ebb1-bc21-453d-96e9-cc167fa1e19f",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/WhatsApp%20Image%202022-05-15%20at%201.27.27%20AM%20(1).jpeg?alt=media&token=40069278-39f8-4e11-afa3-37562dcedc17",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/WhatsApp%20Image%202022-05-15%20at%201.27.26%20AM%20(1).jpeg?alt=media&token=7385a95a-22da-4364-9543-a276e4a81e4b",
    "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/WhatsApp%20Image%202022-05-15%20at%201.27.26%20AM.jpeg?alt=media&token=a994f367-fdb6-48c0-a81a-44dedc728add",
    "",
  ]);
  const handleOnclick = (currentClass) => {
    const ourClassList = [
      "home-link",
      "gallery-link",
      "info-link",
      "artist-link",
      "bookings-link",
    ];
    document.getElementById("triangle").classList.remove("gallery-pointer");
    document.getElementById("triangle").classList.remove("info-pointer");
    document.getElementById("triangle").classList.remove("artist-pointer");
    document.getElementById("triangle").classList.remove("bookings-pointer");
    document.getElementById("triangle").classList.remove("home-pointer");
    for (var i = 0; i < ourClassList.length; i++) {
      if (currentClass === "gallery-link") {
        document.getElementById("triangle").classList.add("gallery-pointer");
      } else if (currentClass === "info-link") {
        document.getElementById("triangle").classList.add("info-pointer");
      } else if (currentClass === "artist-link") {
        document.getElementById("triangle").classList.add("artist-pointer");
      } else if (currentClass === "bookings-link") {
        document.getElementById("triangle").classList.add("bookings-pointer");
      } else if (currentClass === "home-link") {
        document.getElementById("triangle").classList.add("home-pointer");
      }
      if (ourClassList[i] == currentClass) {
        console.log(currentClass);
        var element = document.getElementById(currentClass);
        element.classList.add("active");
      } else {
        var element = document.getElementById(ourClassList[i]);
        element.classList.remove("active");
      }
    }
  };
  return (
    <div className="App">
      <div className="top-line sticky"></div>
      <div id="triangle" className="top-line-tri sticky"></div>
      <div className="nav sticky flex row left">
        <div onClick={() => handleOnclick("home-link")} className="nav-item">
          <a id="home-link" className="active" href="#home">
            Home
          </a>
        </div>
        <div onClick={() => handleOnclick("gallery-link")} className="nav-item">
          <a id="gallery-link" className="inactive" href="#gallery">
            Gallery
          </a>
        </div>
        <div onClick={() => handleOnclick("info-link")} className="nav-item">
          <a id="info-link" className="inactive" href="#info">
            Information
          </a>
        </div>
        <div onClick={() => handleOnclick("artist-link")} className="nav-item">
          <a id="artist-link" className="inactive" href="#artist">
            Artists
          </a>
        </div>
        <div
          onClick={() => handleOnclick("bookings-link")}
          className="nav-item"
        >
          <a id="bookings-link" className="inactive" href="#bookings">
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
              <p className="time lite-grey">10:00 AM-09:30 PM</p>
            </div>
            <div className="flex row">
              <strong>Sat-Sun</strong>
              <p className="time lite-grey">11:00 AM-06:00 PM</p>
            </div>
          </div>
          <div className="left-home flex col">
            <strong className="gold">Address</strong>
            <div className="left-home flex col">
              <strong>Thondiarpet , Chennai</strong>
              <p className="lite-grey">No 18/4 Kasipuram B Block</p>
            </div>
          </div>
          <div className="left-home flex col">
            <strong className="gold">Call</strong>
            <p>+91 73054 53997</p>
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
            <a href="#info">
              <button>Get a Quote</button>
            </a>
          </div>
        </div>
      </div>
      <div id="gallery" className="gallery flex col">
        <div className="side-title side-title-gallery">
          <h1>Galleries</h1>
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
        </div>
        <div className="black-box-top">
          <h1 className="gallery-title gold">Gallery</h1>
        </div>
        <div className="gallery-container flex">
          <div className="roww">
            {galleryImageURLList.map((imageURL, index) => (
              <div className="column">
                <img src={imageURL} />
              </div>
            ))}
          </div>
        </div>
        <div className="black-box"></div>
      </div>
      <div id="info" className="info flex col">
        <div className="side-title side-title-info">
          <h1>Information</h1>
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
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
      <div className="artist" id="artist">
        <div className="side-title side-title-artist">
          <h1>Artists</h1>
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
        </div>
        <div className="artist-container flex row">
          <div className="artist-card flex col right">
            <img src={varun} alt="" />
            <h1 className="artist-designation gold">Lead Male Tattooist</h1>
            <h2 className="artist-name">Varun</h2>
          </div>
          <div className="artist-card flex col left">
            <img src={sneha} alt="" />
            <h1 className="artist-designation gold">Lead Female Tattooist</h1>
            <h2 className="artist-name">Sneha</h2>
          </div>
        </div>
      </div>
      <div className="bookings flex col" id="bookings">
        <div className="side-title side-title-bookings">
          <h1>Bookings</h1>
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
        </div>
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
            <a
              className="flex col"
              target="_blank"
              href="https://www.instagram.com/heavan_tattooz/"
            >
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
