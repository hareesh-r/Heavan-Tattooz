import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/img/logo.png";
import title from "./assets/img/title.png";
import quote from "./assets/img/quote.jpeg";
import varun from "./assets/img/varun.jpeg";
import sneha from "./assets/img/sneha.PNG";
import db from "./firebase";

function App() {
  const [galleryImageURLList, setGalleryImageURLList] = useState([""]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [url, setURL] = useState("");

  const handleClick = (currentURL) => {
    if (
      window.confirm("Are you sure you want to post this image this image?")
    ) {
      db.collection("images")
        .add({
          url: currentURL,
        })
        .then((docRef) => {
          alert("Image Successfully Submitted");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    } else {
      alert("Image not added");
    }
  };

  useEffect(() => {
    var arr = [
      "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/girl.png?alt=media&token=23bedd55-5ad6-4ef2-bafb-d289ed0d5cf7",
      "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/girl.png?alt=media&token=23bedd55-5ad6-4ef2-bafb-d289ed0d5cf7",
      "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/girl.png?alt=media&token=23bedd55-5ad6-4ef2-bafb-d289ed0d5cf7",
      "https://firebasestorage.googleapis.com/v0/b/heaven-tattoo.appspot.com/o/girl.png?alt=media&token=23bedd55-5ad6-4ef2-bafb-d289ed0d5cf7",
    ];
    db.collection("images")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          arr.push(data.url);
          setGalleryImageURLList(arr);
          console.log(arr);
        });
      });
  }, []);

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
      {!showAdmin ? (
        <>
          <div className="top-line sticky"></div>
          <div id="triangle" className="top-line-tri sticky"></div>
          <div className="nav sticky flex row left">
            <div
              onClick={() => handleOnclick("home-link")}
              className="nav-item"
            >
              <a id="home-link" className="active" href="#home">
                Home
              </a>
            </div>
            <div
              onClick={() => handleOnclick("gallery-link")}
              className="nav-item"
            >
              <a id="gallery-link" className="inactive" href="#gallery">
                Gallery
              </a>
            </div>
            <div
              onClick={() => handleOnclick("info-link")}
              className="nav-item"
            >
              <a id="info-link" className="inactive" href="#info">
                Information
              </a>
            </div>
            <div
              onClick={() => handleOnclick("artist-link")}
              className="nav-item"
            >
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
            <img
              onClick={() => setShowAdmin(!showAdmin)}
              className="logo"
              src={logo}
              alt=""
            />
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
                <h1 className="artist-designation gold">
                  Lead Female Tattooist
                </h1>
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
        </>
      ) : (
        <div className="Admin">
          <h1>Admin Panel</h1>
          <div className="flex col sa">
            <div className="input-grp flex row sb">
              <div className="mr20">Please enter your Username</div>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="input-grp flex row sa">
              <div className="mr20">Please enter your Password</div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="back" onClick={()=>setShowAdmin(!setShowAdmin)}>Back</button>
          </div>
          
          {(UserName === "varun" && Password === "heaventattoozvarun") ||
          (UserName === "sneha" && Password === "heaventattoozsneha") ? (
            <div className="flex col sa">
              <div className="input-grp flex row sa">
                <label className="mr20">Please enter URL</label>
                <input
                  onChange={(e) => setURL(e.target.value)}
                  type="text"
                  placeholder="Image URL"
                />
                <button onClick={() => handleClick(url)}>Submit</button>
              </div>
            </div>
          ) : (
            <div className="flex mt20">
              Enter correct username and password to add image
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
