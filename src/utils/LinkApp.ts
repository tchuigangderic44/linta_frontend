const LINK = {
  HOME: {
    shortlink: "",
    path: "/",
    name: "Home",
  },
  ABOUT: {
    shortlink: "About",
    path: "/About",
    name: "About",
  },
  SHOP: {
    shortlink: "Shop",
    path: "/Shop",
    name: "Shop",
    DETAILS: {
      shortlink: "Detail",
      path: "/Shop/Detail",
      name: "Detail",
    },
  },
  FAQ: {
    shortlink: "FAQ",
    path: "/FAQ",
    name: "FAQ",
  },
  CONTACT: {
    shortlink: "Contact",
    path: "/Contact",
    name: "Contact",
  },
  CART: {
    shortlink: "ShoppingCart",
    path: "/ShoppingCart",
    name: "Shopping Cart",
    CHECKOUT: {
      shortlink: "Checkout",
      path: "/ShoppingCart/Checkout",
      name: "Checkout",
    },
  },
  USERACCOUNT: {
    shortlink: "UserAccount",
    path: "/UserAccount",
    name: "User Account",
    FORGETPASSWORD: {
      shortlink: "ForgetPassword",
      path: "/UserAccount/ForgetPassword",
      name: "Forget Password",
    },
    RESETPASSWORD: {
      shortlink: "ResetPassword",
      path: "/UserAccount/ResetPassword",
      name: "Reset Password",
    },
    OTP: {
      shortlink: "Verification",
      path: "/UserAccount/Verification",
      name: "Verification",
    },
    SIGNIN: {
      shortlink: "SignIn",
      path: "/UserAccount/SignIn",
      name: "Sign In",
      COMPLETION: {
        shortlink: "Profile",
        path: "/UserAccount/SignIn/Profile",
        name: "Profile",
      },
    },
    LOGIN: {
      shortlink: "logIn",
      path: "/UserAccount/LogIn",
      name: "Log In",
    },
    DASHBOARD: {
      shortlink: "Dashboard",
      path: "/UserAccount/Dashboard",
      name: "Dashboard",
      ORDERHISTORY: {
        shortlink: "OrderHistory",
        path: "/UserAccount/Dashboard/OrderHistory",
        name: "Order History",
        DETAILS: {
          name: "Order Details",
        },
      },
      CART: {
        shortlink: "Cart",
        path: "/UserAccount/Dashboard/Cart",
        name: "Shopping Cart",
      },
      SETTING: {
        shortlink: "Setting",
        path: "/UserAccount/Dashboard/Setting",
        name: "Setting",
      },
    },
  },
  NOTFOUND: {
    name: "Not Found Page",
  },
};
export default LINK;
