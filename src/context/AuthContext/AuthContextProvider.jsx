import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";
import axios from "axios"

axios.defaults.withCredentials=true
axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [showUser, setShowUser] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  const currency = import.meta.env.VITE_CURRENCY;
  const Shipping_fee = 10;
  const Tax_rate = 0.02;
  const [cartItems, setCartItems] = useState({});
  // fetch user
  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await axios.get("/api/user/is-auth");

        if (data.success) {
          setUser(data.user);
          setCartItems(data.cartData || {});
        } else {
          setUser(null);
          setCartItems({});
        }
      } catch (error) {
        console.log(error);

        setUser(null);
        setCartItems({});
      } finally {
        setUserLoading(false);
      }
    };

    checkUser();
  }, []);
  //usrLogout
  const userLogout = async () => {
    try {
      const response = await axios.post("/api/user/logout");

      if (response.data.success) {
        setUser(null);
        setCartItems({});
        toast.success(response.data.message || "Logout successful");

      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };
  // fetch admin
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await axios.get("/api/admin/is-auth");

        if (response.data.success) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.log(error);
        setIsAdmin(false);
      } finally {
        setAdminLoading(false);
      }
    };

    checkAdmin();
  }, []);
  // Add product to cart

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size first");
      return;
    }

    try {
      // Backend এ cart save/update
      const { data } = await axios.post("/api/cart/add", {
        itemId,
        size,
      });

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      // UI  update
      setCartItems((cart) => ({
        ...cart,
        [itemId]: {
          ...cart[itemId],
          [size]: (cart[itemId]?.[size] || 0) + 1,
        },
      }));

      toast.success("Product added to cart");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Failed to add product to cart",
      );
    }
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
 const updateQuantity = async (itemId, size, quantity) => {
   if (quantity <= 0) {
     removeFromCart(itemId, size);
     return;
   }

   // UI update
   setCartItems((cart) => ({
     ...cart,
     [itemId]: {
       ...cart[itemId],
       [size]: quantity,
     },
   }));

   // Backend update
   if (!user) return;

   try {
     const { data } = await axios.post("/api/cart/update", {
       itemId,
       size,
       quantity,
     });

     if (!data.success) {
       toast.error(data.message);
       return;
     }
   } catch (error) {
     console.log(error);
     toast.error("Failed to update cart");
   }
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
      try {
        const response = await axios.get("/api/product/list");
        console.log(response.data);
        if (response.data.success) {
          setProducts(response.data.products);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || error.message);
      }
    };

    fetchProduct();
  }, []);
  const userInfo = {
    user,
    setUser,
    products,
    setProducts,
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
    adminLoading,
    axios,
    userLoading,
    userLogout,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};;;

export default AuthContextProvider;
