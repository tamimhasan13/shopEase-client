import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import{dummyProducts} from "../../assets/data"
import toast from "react-hot-toast";
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [products, setProducts] = useState([]);
  const [showUser, setShowUser] = useState();
  const [isAdmin,setIsAdmin]=useState(false);
  const currency = import.meta.env.VITE_CURRENCY;
  const Shipping_fee = 10;
  const Tax_rate = 0.02;
  // const navigate=useNavigate();
  const [cartItems, setCartItems] = useState({});

  // Add product to cart
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Please select a size first");
      return;
    }

    setCartItems((cart) => ({
      ...cart,
      [itemId]: {
        ...cart[itemId],
        [size]: (cart[itemId]?.[size] || 0) + 1,
      },
    }));

    toast.success("Product added to cart");
  };
  //card count
  const getCartCount = () => {
    let count = 0;

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        count += cartItems[itemId][size];
      }
    }

    return count;
  };
  //update cart quantity
  const updateQuantity = (itemId, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId, size);
      return;
    }

    setCartItems((cart) => ({
      ...cart,
      [itemId]: {
        ...cart[itemId],
        [size]: quantity,
      },
    }));
  };

  // Remove product from cart
  const removeFromCart = (itemId, size) => {
    setCartItems((cart) => {
      const updatedCart = { ...cart };

      if (!updatedCart[itemId]) {
        return updatedCart;
      }

      updatedCart[itemId] = {
        ...updatedCart[itemId],
      };

      delete updatedCart[itemId][size];

      //  size not  product-remove
      if (Object.keys(updatedCart[itemId]).length === 0) {
        delete updatedCart[itemId];
      }

      return updatedCart;
    });

    toast.success("Product removed from cart");
  };

  // card amount
  const getCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
      const product = products.find((item) => item._id === itemId);

      if (!product) return total;

      const productTotal = Object.values(sizes).reduce(
        (sum, quantity) => sum + product.offerPrice * quantity,
        0,
      );

      return total + productTotal;
    }, 0);
  };
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
    showUser,
    setShowUser,
    addToCart,
    cartItems,
    setCartItems,
    getCartCount,
    getCartAmount,
    updateQuantity,
    Shipping_fee,
    Tax_rate,
    removeFromCart,
    setIsAdmin,
    isAdmin,
    
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};;

export default AuthContextProvider;
