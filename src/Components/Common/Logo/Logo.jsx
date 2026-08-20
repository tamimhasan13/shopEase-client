import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex shrink-0 cursor-pointer items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-content">
        <ShoppingBag size={22} strokeWidth={2.2} />
      </div>

      <span className="text-xl font-pacifico font-bold tracking-tight sm:text-2xl">
        Shop<span className="text-primary">Ease</span>
      </span>
    </Link>
  );
};

export default Logo;
