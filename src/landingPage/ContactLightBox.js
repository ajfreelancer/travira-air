import axios from "axios";
import React, { useRef, useState } from "react";

const ContactLightBox = ({hideContactForm}) => {
  const finalMessage = useRef(null);
  const contactForm = useRef(null);
  const congratsBox = useRef(null);
  const parentContainer = useRef(null);

  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "https://formbold.com/s/ob183",
      data: inputs,
    })
      .then((r) => {
        finalMessage.current.value =
          "Thank you so much for reaching out to us! We'll get back to you soon.";
        congratsBox.current.className = congratsBox.current.className.replace(
          " hidden",
          ""
        );
        contactForm.current.className += " hidden";
      })
      .catch((r) => {
        finalMessage.current.value = "Error: " + r;
        congratsBox.current.className = congratsBox.current.className.replace(
          " hidden",
          ""
        );
        contactForm.current.className += " hidden";
      });
  };

  const exit = () => {
    hideContactForm();
  };

  return (
    <section
      ref={parentContainer}
      className="fixed w-screen h-screen bg-darkblue/95 z-[999] top-0 flex items-center"
    >
      <div className="absolute w-5 top-10 right-12" id="exit" onClick={exit}>
        <svg
          className="cursor-pointer fill-white hover:fill-lightblue"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M599.062 86.3797L513.62 0.9375L300 214.558L86.3797 0.9375L0.9375 86.3797L214.558 300L0.9375 513.62L86.3797 599.062L300 385.442L513.62 599.062L599.062 513.62L385.442 300L599.062 86.3797Z" />
        </svg>
      </div>
      <div className="mx-auto bg-white w-fit rounded-[2em]" ref={contactForm}>
        <div class="flex items-center justify-center p-12">
          <div class="mx-auto w-full max-w-[550px] md:w-[550px]">
            <form onSubmit={handleOnSubmit} method="POST">
              <div class="mb-5">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-darkblue"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  onChange={handleOnChange}
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-darkblue outline-none focus:border-lightblue focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="mb-3 block text-base font-medium text-darkblue"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  onChange={handleOnChange}
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-darkblue outline-none focus:border-lightblue focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="subject"
                  class="mb-3 block text-base font-medium text-darkblue"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  onChange={handleOnChange}
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="message"
                  class="mb-3 block text-base font-medium text-darkblue"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  onChange={handleOnChange}
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  class="hover:shadow-form rounded-md bg-lightblue py-3 px-8 text-base font-semibold hover:bg-darkblue text-white outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="bg-white w-[90%] sm:w-[400px] text-center py-10 rounded-3xl px-8 font-bold tracking-tight text-[1.5rem] mx-auto hidden"
        ref={congratsBox}
      >
        <h2 ref={finalMessage} id="finalMessage">
          Thank you so much for reaching out to us! We'll get back to you soon.
        </h2>
      </div>
    </section>
  );
};

export default ContactLightBox;
