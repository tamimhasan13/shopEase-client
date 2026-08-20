import { MessageSquare } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h3 className="mb-5 text-[19px] font-semibold text-gray-900">
        Contact us
      </h3>

      <div className="space-y-3 text-[14px] leading-6 text-gray-600">
        <p>
          Classyshop - Mega Super Store
          <br />
          507-Union Trade Centre France
        </p>

        <p className="pt-2">sales@yourcompany.com</p>
      </div>

      {/* Phone */}
      <a
        href="tel:+919876543210"
        className="mt-4 block text-[21px] font-semibold text-red-500 transition hover:text-red-600"
      >
        (+91) 9876-543-210
      </a>

      {/* Online Chat */}
      <div className="mt-6 flex items-center gap-3">
        <MessageSquare size={38} strokeWidth={1.5} className="text-red-500" />

        <div>
          <p className="text-[16px] font-semibold text-gray-900">Online Chat</p>

          <p className="text-[16px] font-semibold text-gray-900">
            Get Expert Help
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
