import React from "react";
import Navigation from "../components/Navigation";
import Header from "./Header";
import { CopyToClipboard } from "react-copy-to-clipboard"



const Contact = () => {

  return (
    <main>
      <form className="contact">
        <Header />
        <Navigation />
        <br />
        <br />
        {/* contact form */}
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue du code</p>
              <p>33000 Bordeaux</p>
            </div>
          </div>
        </div>
        <div className="phone">
          <div className="content">
            <h4>téléphone</h4>
            <CopyToClipboard text="0642844284" className="hover">
              <p
                style={{ cursor: "pointer" }}
                className="clipboard"
                onClick={() => {
                  alert("Téléphone copié !");
                }}
              >06 42 84 42 84</p>
            </CopyToClipboard>
          </div>
        </div>
        <div className="email">
          <div className="content">
            <h4>email</h4>
            <CopyToClipboard text="fsagency@gmail.com"
            className="hover">
              <p  style={{ cursor: "pointer" }}
              className="clipboard"
              onClick={() => {
                alert("Email copié !");
              }}
              > fsagency@gmail.com</p>
            </CopyToClipboard>
          </div>
        </div>
      </form>
    </main >
  );
};

export default Contact;
