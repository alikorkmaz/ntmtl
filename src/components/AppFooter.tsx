"use client";

import { Footer } from "flowbite-react";

export function AppFooter() {
  return (
    <Footer container className="mt-16 p-0 pb-6">
      <Footer.Copyright
        href="/"
        by="Net Stratejik Metal San. ve Tic. A.Ş.™"
        year={2024}
      />
      <Footer.LinkGroup className="hidden md:flex">
        <Footer.Link href="/about">Hakkımızda</Footer.Link>
        <Footer.Link href="/contact">İletişim</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
