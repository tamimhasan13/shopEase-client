import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import{dummyProducts} from "../../assets/data"
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("user");
  const [products,setProducts]=useState([]);
  const currency = import.meta.env.VITE_CURRENCY;
  // const navigate=useNavigate();
  //fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await Promise.resolve(dummyProducts);
      setProducts(data);
    };

    fetchProduct();
  }, []);
  const userInfo = {
    user,
    setUser,
    products,
    currency,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthContextProvider;
