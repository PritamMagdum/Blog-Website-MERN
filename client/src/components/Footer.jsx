import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className="bg-gray-100">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="logo mt-5 ">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white">
                Magdum
              </span>
              Blog
            </Link>
            <div className="flex gap-3 mt-6">
              <Footer.Icon
                href="https://www.linkedin.com/in/pritam-magdum-63b242221/"
                target="_blank"
                icon={BsLinkedin}
              />
              <Footer.Icon
                href="https://github.com/PritamMagdum"
                target="_blank"
                icon={BsGithub}
              />
              <Footer.Icon
                href="https://twitter.com/pritam1622"
                target="_blank"
                icon={BsTwitter}
              />
              <Footer.Icon
                href="https://www.instagram.com/pritam_magdum_72_12/"
                target="_blank"
                icon={BsInstagram}
              />
              <Footer.Icon
                href="https://www.facebook.com/pritam.magdumpm"
                target="_blank"
                icon={BsFacebook}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">More Info</Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.linkedin.com/in/pritam-magdum-63b242221/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/PritamMagdum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex items-center justify-center">
          <Footer.Copyright
            href="/"
            className="text-md"
            color="white"
            by="Magdum Blog"
            year={new Date().getFullYear()}
          />

          <div className="developer-section mx-1 text-gray-500 dark:text-gray-400">
            || Developer -{" "}
            <a
              href="https://www.linkedin.com/in/pritam-magdum-63b242221/"
              target="_"
              className="developer text-gray-50 bg-gray-500 dark:text-black dark:bg-white font-medium p-2 rounded-md hover:bg-gray-600 hover:text-gray-50 dark:hover:bg-gray-300"
            >
              Pritam Magdum
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
}
