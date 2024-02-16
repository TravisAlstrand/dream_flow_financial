import { PopupWidget } from "react-calendly";

export default function CalendlyLink() {
  return (
    <PopupWidget
      url="https://calendly.com/dreamflowfinancial/financial-coaching-session"
      rootElement={document.getElementById("root")}
      text="Book Now"
      textColor="#ffffff"
      color="#D9A802"
      styles={"left: 0;"}
    />
  );
}
