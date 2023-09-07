import { useState, useRef } from "react";
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
        "6g0rq8vN720O74Ji5"
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
        }
      );
  }

  return (
    <section
      id="contact"
      className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 wide:py-12"
    >
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          This is where your journey to financial success begins. Feel free to
          reach out through the form below, and we&apos;ll be delighted to
          assist you on your path to financial well-being.
        </p>
      </div>
      <form
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        onSubmit={handleSubmit}
        ref={form}
      >
        <p className="mb-6 italic">Please fill all fields below</p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <FormInput
              labelName={"First Name"}
              type={"text"}
              idName={"firstName"}
              placeholder={"Jack"}
              changeState={(e) => setFirstName(e)}
              isValid={isFirstNameValid}
            />
          </div>
          <div>
            <FormInput
              labelName={"Last Name"}
              type={"text"}
              idName={"lastName"}
              placeholder={"Sparrow"}
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
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
