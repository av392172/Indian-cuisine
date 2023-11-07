import React from "react";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constants";

function Footer() {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          {/* Link */}
          <h4 className="text-2xl font-bold text-red-500 mb-10">Recipe</h4>
          {/* <Link */}
          <div className="flex flex-wrap gap-10 flex-1 justify-between">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    // <Link
                    <p key={link}>{link}</p>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  // Link
                  <div key={link.label} className="flex gap-4">
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul>
                  {SOCIALS.links.map((link) => (
                    // Link add---- remove div
                    <div>
                      <img src={link} alt="logo" height={24} width={24} />
                    </div>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2023 Recipes | All rights reserved
        </p>
      </div>
    </footer>
  );
}

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
