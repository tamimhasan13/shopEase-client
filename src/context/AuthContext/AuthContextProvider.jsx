import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import{dummyProducts} from "../../assets/data"
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("user");
  const [products,setProducts]=useState([]);
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
    products
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthContextProvider;
