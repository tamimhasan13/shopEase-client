import ServiceFeatures from "./ServiceFeatures";
import ContactInfo from "./ContactInfo";
import FooterLinkColumn from "./FooterLinkColumn";
import Newsletter from "./Newsletter";
import FooterBottom from "./FooterBottom";

import { productLinks, companyLinks } from "../../data/footerData";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/*  Features  */}
      <ServiceFeatures />

      {/* Main Footer */}
      <div className="mx-auto container px-5 py-10 sm:px-8 lg:px-10 lg:py-9">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Contact */}
          <ContactInfo />

          {/* Products */}
          <FooterLinkColumn title="Products" links={productLinks} />

          {/* Company */}
          <FooterLinkColumn title="Our company" links={companyLinks} />

          {/* Newsletter */}
          <Newsletter />
        </div>
      </div>

      {/*  Bottom */}
      <FooterBottom />
    </footer>
  );
};

export default Footer;
