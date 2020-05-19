import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Features from "./Components/Features";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
//import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="wrapper">
          <h2 style={{ textAlign: "center" }}>
            Handcrafted,home-made masterpieces
          </h2>
          <Form />
          <div id="features">
            <Features
              icon="&#xf0d1;"
              header="Fast Shipping"
              parag="We make sure you recieve your trombones as soon as we have finishied making it.We also provide free returns if you are not satisfied."
            />
            <Features
              icon="&#xf06d;"
              header="Premium Materials"
              parag="Our trombones use the shiniest brass which is sourced locally.This will increase the longevity of your purchase"
            />
            <Features
              icon="&#xf240;"
              header="Quality Assurance"
              parag="For every purchase you make,we will ensure there are no damages or faults and we will check and test the pitch of your instrument."
            />
          </div>
          <iframe
            id="video"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0"
            frameBorder="0"
            allowFullScreen=""
          ></iframe>
          <div id="pricing">
            <Products />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
