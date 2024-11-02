"use client";

import { useState, useEffect } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";

export function AppNavbar() {
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <>
      <div className="border-b border-gray-200 py-2 dark:border-gray-600">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-2/3">
              <ul className="flex space-x-4 text-sm ">
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>info@netmetal.net</span>
                </li>
                <li className="hidden items-center space-x-2 md:flex">
                  <FontAwesomeIcon icon={faMap} />
                  <span>İstim Sanayi Sitesi, No: 270 Tuzla/İstanbul</span>
                </li>
              </ul>
            </div>
            <div className="flex w-full justify-end md:w-1/3">
              <ul className="flex flex-nowrap space-x-4 ">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Navbar fluid rounded className="-mx-2 sm:px-2">
        <Navbar.Brand href="/">
          <img
            src="/logo.svg"
            className="mr-6 h-9 sm:h-12"
            alt="NET Metal Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            NET Metal
          </span>
          <DarkThemeToggle />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={activeLink === "/"}>
            Ana Sayfa
          </Navbar.Link>
          <Navbar.Link href="/about" active={activeLink === "/about"}>
            Hakkımızda
          </Navbar.Link>
          <Navbar.Link href="/products" active={activeLink === "/products"}>
            Ürünler
          </Navbar.Link>
          <Navbar.Link href="/qualities" active={activeLink === "/qualities"}>
            Kaliteler
          </Navbar.Link>
          <Navbar.Link href="/sectors" active={activeLink === "/sectors"}>
            Sektörler
          </Navbar.Link>
          <Navbar.Link href="/contact" active={activeLink === "/contact"}>
            İletişim
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
