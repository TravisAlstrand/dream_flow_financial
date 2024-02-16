import FacebookIcon from "../assets/FacebookIcon";
import InstagramIcon from "../assets/InstagramIcon";
import YoutubeIcon from "../assets/YoutubeIcon";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center border-t-2 lg:flex-row">
      <div className="mb-6 flex flex-col items-center justify-center pt-6 lg:w-[50%]">
        <span className="mb-2">Follow me on my socials for updates!</span>
        <div className="flex gap-4">
          <FacebookIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>
      </div>
      <div className="flex flex-col items-center p-6 lg:w-[50%] lg:px-8">
        <a
          href="/"
          className="focus-styles mb-2 rounded-md focus-visible:outline-primary"
        >
          <span className="sr-only">Dream Flow Financial</span>
          <img
            className="h-12 w-12"
            src="images/DFF-Logo-250.png"
            alt="business logo"
          />
        </a>
        <span className="text-center">
          &copy; 2024 Dream Flow Financial. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
