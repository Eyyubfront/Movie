import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import emailjs from "emailjs-com";
import allmovies from "../../assets/allmovies.jpg";
import Accardation from "../../components/Accardation/Accardation";
const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k9eoqaq",
        "template_66f1uus",
        formRef.current,
        "C1xv5SWMezEeAyo-K"
      )
      .then(
        (result) => {
          alert("Mesaj başarıyla gönderildi!");
        },
        (error) => {
          alert("Mesaj gönderilirken hata oluştu: " + error.text);
        }
      );

    setFormData({
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <h2 className="contact_name">Contact Us</h2>
      <div className="top__linksabout">
        <FaHome style={{ marginRight: "8px" }} />
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          Home
        </Link>
        <h4>/ Contact</h4>
      </div>
      <div className="page_description">
        <h4>Welcome to our support page!</h4>
        <p className="info_text">
          We're here to help you with any problems you my be having with our
          product.
        </p>
      </div>
      <div>
        <img className="allmovies" src={allmovies} alt="" />
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="contact_input">
          <label>Name:</label>
          <input
          className='input_text'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact_input">
          <label>Surname:</label>
          <input
            className="input_text"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact_input">
          <label>Email:</label>
          <input
            className="input_text"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact_input">
          <label>Phone:</label>
          <input
            className="input_text"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact_input">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className="send_button" type="submit">Send Message</button>
      </form>
      <Accardation/>
    </div>
  );
};

export default Contact;
``;
