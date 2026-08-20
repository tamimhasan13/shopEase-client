import { socialLinks, paymentMethods } from "../../data/footerData";

const FooterBottom = () => {
  return (
    <div className="border-t border-gray-200">
      <div className="mx-auto flex container flex-col items-center justify-between gap-5 px-5 py-4 sm:px-8 md:flex-row lg:px-10">
        {/* Social Icons */}
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-red-500 hover:text-red-500"
              >
                <Icon size={17} />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-center text-[13px] text-gray-500">
          © 2024 - Ecommerce Template
        </p>

        <div className="flex items-center gap-2">
          {paymentMethods.map((payment) => (
            <div
              key={payment.id}
              className="flex h-8 13.75 items-center justify-center rounded border border-gray-200 bg-white px-2"
            >
              <img
                src={payment.image}
                alt={payment.name}
                className="max-h-6 max-w-12.5 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
