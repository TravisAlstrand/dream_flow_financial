import { useState, useRef } from "react";
// import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";
import { ValidationAlert } from "./ValidationAlert";
import { SendingSpinner } from "./SendingSpinner";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(undefined);
  const [isLastNameValid, setIsLastNameValid] = useState(undefined);
  const [isEmailValid, setIsEmailValid] = useState(undefined);
  const [isPhoneValid, setIsPhoneValid] = useState(undefined);
  const [isMessageValid, setIsMessageValid] = useState(undefined);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState("");

  const form = useRef();
  // const ref = useRef(null);
  // const isInView = useInView(ref);

  function handleSubmit(e) {
    e.preventDefault();
    const allGood = validateFields();

    if (!allGood) {
      setEmailSent(false);
      setTimeout(() => {
        setEmailSent("");
      }, 5000);
    } else {
      setSendingEmail(true);
      sendEmail(e);
    }
  }

  function validateFields() {
    const firstNameValid = /^[a-z]+[\s]?[a-z]+?$/i.test(firstName);
    const lastNameValid = /^[a-z]+[\s]?[a-z]+?$/i.test(lastName);
    const emailValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
    const phoneValid =
      /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phoneNumber);
    const messageValid = message.trim() !== "";

    firstNameValid ? setIsFirstNameValid(true) : setIsFirstNameValid(false);
    lastNameValid ? setIsLastNameValid(true) : setIsLastNameValid(false);
    emailValid ? setIsEmailValid(true) : setIsEmailValid(false);
    phoneValid ? setIsPhoneValid(true) : setIsPhoneValid(false);
    messageValid ? setIsMessageValid(true) : setIsMessageValid(false);

    return (
      firstNameValid &&
      lastNameValid &&
      emailValid &&
      phoneValid &&
      messageValid
    );
  }

  function resetStates() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  }

  function sendEmail(e) {
    emailjs
      .sendForm(
        "service_3tvppwq",
        "template_zje0qa8",
        form.current,
        "6g0rq8vN720O74Ji5",
      )
      .then(
        (result) => {
          if (result.text === "OK");
          setSendingEmail(false);
          setEmailSent(true);
          e.target.reset();
          resetStates();
          setTimeout(() => {
            setEmailSent("");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  return (
    <section
      id="contact"
      className="relative isolate mx-auto flex max-w-7xl flex-col items-center bg-white px-6 pb-32 pt-24 font-standard lg:px-8 wide:py-12"
      // ref={ref}
      style={
        {
          // opacity: isInView ? 1 : 0,
          // transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }
      }
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-primary underline decoration-secondary sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-2 text-lg leading-8 text-ltrGray">
          This is where your journey to financial success begins. Feel free to
          reach out through the form below, and we&apos;ll be delighted to
          assist you on your path to financial well-being.
        </p>
      </div>
      <form
        className="mx-auto mt-16 w-full max-w-xl sm:mt-20"
        onSubmit={handleSubmit}
        ref={form}
      >
        <p className="mb-6 italic text-ltrGray-dark">
          Please fill all fields below
        </p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <FormInput
              labelName={"First Name"}
              type={"text"}
              idName={"firstName"}
              placeholder={"Jane"}
              changeState={(e) => setFirstName(e)}
              isValid={isFirstNameValid}
            />
          </div>
          <div>
            <FormInput
              labelName={"Last Name"}
              type={"text"}
              idName={"lastName"}
              placeholder={"Doe"}
              changeState={(e) => setLastName(e)}
              isValid={isLastNameValid}
            />
          </div>
          <div className="sm:col-span-2">
            <FormInput
              labelName={"Email"}
              type={"email"}
              idName={"email"}
              placeholder={"person@example.com"}
              changeState={(e) => setEmail(e)}
              isValid={isEmailValid}
            />
          </div>
          <div className="sm:col-span-2">
            <FormInput
              labelName={"Phone Number"}
              type={"tel"}
              idName={"phoneNumber"}
              placeholder={"555 123 4567"}
              changeState={(e) => setPhoneNumber(e)}
              isValid={isPhoneValid}
            />
          </div>
          <div className="sm:col-span-2">
            <FormTextArea
              labelName={"Message"}
              idName={"message"}
              placeholder={"How can I help?..."}
              changeState={(e) => setMessage(e)}
              isValid={isMessageValid}
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="focus-styles block w-full rounded-md bg-secondary px-3.5 py-2.5 text-center font-semibold text-ltrGray-dark shadow-sm transition-colors duration-300 hover:bg-secondary-light focus-visible:outline-primary"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
      {sendingEmail ? <SendingSpinner /> : <></>}
      {emailSent === "" ? <></> : <ValidationAlert isValid={emailSent} />}
    </section>
  );
}
