const FooterLinkColumn = ({ title, links }) => {
  return (
    <div>
      <h3 className="mb-5 text-[19px] font-semibold text-gray-900">{title}</h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="text-[15px] text-gray-600 transition hover:text-red-500"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;
