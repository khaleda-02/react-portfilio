import React from "react";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail","service_a7grycl",e.target,"EdWwp_aIq51WGH_Kg")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  }
  return (
    <div id="contact-in" class="contact">
      <div class="container">
        <div class="form">
          <div class="icon">
            <i class="fas fa-envelope"></i>
            <h2>get in touch with me!</h2>
          </div>
          <form onSubmit={sendEmail}>
            <div class="icon">
              <p>
                name<span>*</span>
              </p>
              <input type="text" name="name"/>
            </div>
            <div class="icon">
              <p>
                email<span>*</span>
              </p>
              <input type="email" name="email" />
            </div>
            <div class="icon">
              <p>subject</p>
              <input type="text" name="subject" />
            </div>
            <div class="icon start">
              <p>
                message<span>*</span>
              </p>
              <textarea id="" name="message"></textarea>
            </div>
            <div class="icon">
              <p></p>
              <input type="submit" class="submit" value="SUBMIT" />
            </div>
          </form>
        </div>
        <div class="address">
          <h2>Address and Phone</h2>
          <p class="name">khaled Ayman</p>
          <p>khaledalkhalili179405@gmail.com</p>
          <div class="info">
            <p class="name">El-zetone</p>
            <p class="name">Palestine ,gaza</p>
            <p>0597986135</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
