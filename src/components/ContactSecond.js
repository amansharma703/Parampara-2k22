import React, { useState } from "react";
import "../css/newContact.css";

// Importing toastify module
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
toast.configure();

const ContactSecond = () => {
  const [userData, setUserData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { name, subject, email, message } = userData;

    if (name && subject && email && message) {
      const res = fetch(
        "https://itm-parampara-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            subject,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          subject: "",
          email: "",
          message: "",
        });
        toast("Your message sends successfully!");
      } else {
        toast("plz fill the data correctly");
      }
    } else {
      toast("plz fill the data");
    }
  };

  return (
    <>
      <div className="contact-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div class="main-content">
                <div class="contact-page-map">
                  <iframe
                    title="itm-map"
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.0442062340717!2d83.27128811538417!3d26.742965373814215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6acb3de3508d%3A0x4595d733fd766bf9!2sITM%20college%20GIDA!5e0!3m2!1sen!2sin!4v1647809777961!5m2!1sen!2sin"
                    frameborder="0"
                    loading="lazy"
                  ></iframe>
                </div>

                <div class="contact-details">
                  <div class="container">
                    <div class="row">
                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="contact-medium d-flex align-items-center">
                          <figure class="contact-icon">
                            <img src="/img/shape/phone.jpg" alt="phone icon" />
                          </figure>

                          <div class="contact-content">
                            <div class="entry-title">Phone</div>
                            <div class="entry-content">
                              +91-8298742246
                              <br />
                              Ravi Prakash
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                        <div class="contact-medium d-flex align-items-center">
                          <figure class="contact-icon">
                            <img src="/img/shape/mail.jpg" alt="phone icon" />
                          </figure>

                          <div class="contact-content">
                            <div class="entry-title">E-mail</div>
                            <div class="entry-content">
                              itmgkp.parampara@gmail.com
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-4 mt-5 mt-lg-0">
                        <div class="contact-medium d-flex align-items-center">
                          <figure class="contact-icon">
                            <img src="/img/shape/place.jpg" alt="phone icon" />
                          </figure>

                          <div class="contact-content">
                            <div class="entry-title">Address</div>
                            <div class="entry-content">
                              AL-1, Sector 7, Gida
                              <br />
                              Gorakhpur - 273001
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="get-in-touch">
                  <div class="entry-header">
                    <div class="entry-title">
                      <p>JUST THE BEST</p>
                      <h2>Get in touch</h2>
                    </div>
                  </div>

                  <div class="entry-content">
                    <p>
                      The Institute is located on the Gorakhpur- Lucknow
                      National Highway at a distance of about 12 kms from
                      Gorakhpur city which is well connected by road and rail
                      and limited airways with all major cities of India
                      connecting with all major cities of India including
                      Lucknow, Varanasi, Patna, New Delhi.
                    </p>
                  </div>

                  <div class="contact-form">
                    <div class="row">
                      <div class="col-12 col-md-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={userData.name}
                          onChange={postUserData}
                        />
                      </div>

                      <div class="col-12 col-md-6">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>

                      <div class="col-12">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={userData.subject}
                          onChange={postUserData}
                        />
                      </div>

                      <div class="col-12">
                        <textarea
                          name="message"
                          rows="8"
                          cols="80"
                          value={userData.message}
                          onChange={postUserData}
                          placeholder="Enter your message"
                        ></textarea>
                      </div>

                      <div class="col-12 submit flex justify-content-center">
                        <button className="boxed-btn3 " onClick={submitData}>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSecond;
