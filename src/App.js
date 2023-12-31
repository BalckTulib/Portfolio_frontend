import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Card } from "primereact/card";
import Sidebar from "./components/Sidebar";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Experiences from "./pages/Experiences";
import Formations from "./pages/Formations";
import Projects from "./pages/Projects";
import Nav from "./components/Nav";
import TinySlider from "tiny-slider-react";

function App() {
  return (
    <Router>
      <div className="background-image">
        <div className="container mb-5">
          {/* Navbar and Sidebar in the same row */}
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 col-md-4 mt-dynamic rp-md-0">
              <Sidebar />
              <div className="hidden-md w-100">
                <ContactForm />
              </div>
            </div>
            {/* Navbar */}
            <div className="col-lg-9 col-md-8 rp-md-0">
              <div className="glass-card bg-white mt-dynamic" id="res-nav">
                <Nav />
              </div>

              {/* Content area */}
              <div className="glass-card mt-4 content bg-white rm-md-0">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Formations" element={<Formations />} />
                  <Route path="/Experiences" element={<Experiences />} />
                  <Route path="/Projects" element={<Projects />} />
                  <Route path="/Skills" element={<Skills />} />
                  
                </Routes>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  const settings = {
    lazyload: true,
    nav: false,
    controls: false,
    items: 3,
    autoplay: true,
    loop: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    slideBy: 1,
    swipeAngle: false,
    speed: 400,
    responsive: {
      0: {
        items: 1,
      },
      990: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  };
  const cardStyle = {
    backgroundColor: "#f8f9fa" , // Alternating background colors
    
  };
  return (
    <section className="display-center text-center home-section">
      <Card style={cardStyle}>
        <div className="mx-5 ">
          <h1 className="brb-anim" data-aos="fade-up" data-aos-delay="300">
            Hello there!!
          </h1>
          <p
            className="mt-4 intro-p mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I'm <span className="font-weight-bold-white">Loubna</span>, student
            <span className="font-weight-bold"> programmer</span> currently working on a school{" "}
            <span className="font-weight-bold">project</span> .

          </p>
        </div>
      </Card>
      <Card>
        <section id="services" className="text-center bg-light pb-3">
          <p className="pt-5">What I can do</p>
          <h1
            className="brb-anim mb-5 mx-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="text-warning font-weight-bold mr-1">M</span>Y
            SERVICES
          </h1>
          <div className="row px-3">
            <div className="col-md">
              <div id="sliderSection">
                <TinySlider settings={settings}>
                  <div className="item noselect">
                    <Card className="card sh-s">
                      <div className="card-title">
                        <div className="icon-container">
                          <i className="ion-android-desktop text-lxx"></i>
                        </div>
                      </div>
                      <h3 className="mt-4 pb-2">Web Development</h3>
                      <p>
                        I create and develop website using modern frameworks
                        such as Wordpress, Laravel, Django, ReactJs, and Vue.
                      </p>
                    </Card>
                  </div>
                  <div className="item noselect">
                    <Card className="card sh-s">
                      <div className="card-title">
                        <div className="icon-container">
                          <i className="ion-gear-b text-lxx"></i>
                        </div>
                      </div>
                      <h3 className="mt-4 pb-2">UX / UI</h3>
                      <p>
                        I produce wonderful user interface with great user
                        experience by implementing fully responsive design and
                        materialize look and feel.
                      </p>
                    </Card>
                  </div>
                  <div className="item noselect">
                    <Card className="card sh-s">
                      <div className="card-title">
                        <div className="icon-container">
                          <i className="ion-android-phone-portrait text-lxx"></i>
                        </div>
                      </div>
                      <h3 className="mt-4 pb-2">Mobile Application</h3>
                      <p>
                        I build modern mobile application using Flutter
                        framework with custom design embeded with powerful
                        plugins.
                      </p>
                    </Card>
                  </div>
                  <div className="item noselect">
                    <Card className="card sh-s">
                      <div className="card-title">
                        <div className="icon-container">
                          <i className="ion-android-cloud text-lxx"></i>
                        </div>
                      </div>
                      <h3 className="mt-4 pb-2">Database</h3>
                      <p>
                        I am efficient in working with databases such as
                        Firebase, Mysql, Monggo DB, Postgres SQL, and Sqlite.
                      </p>
                    </Card>
                  </div>
                </TinySlider>
              </div>
            </div>
          </div>
        </section>
      </Card>
    </section>
  );
}

export default App;
