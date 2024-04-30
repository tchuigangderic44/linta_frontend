import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { nprogress } from "@mantine/nprogress";
import { useLocation } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductInfo from "./pages/ProductInfo";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import FAQ from "./pages/FAQ";
import OTP from "./pages/OTP";
import ForgetPassword from "./pages/ForgetPassword";
import LoginSignIn from "./pages/LoginSignIn";
import ResetPassword from "./pages/ResetPassword";

//user-sign-in-page
import Dashboard from "./pages/user/Dashboard";
import OrderHistory from "./pages/user/OrderHistory";
import OrderHistoryDetail from "./pages/user/OrderHistoryDetail";
import Setting from "./pages/user/Setting";
import ShopCard from "./pages/user/ShopCard";

//Layout
import Layout from "./layouts/Layout";
import CartLayout from "./layouts/CartLayout";
import UserAccountLayout from "./layouts/UserAccountLayout";
import OrderLayout from "./layouts/OrderLayout";

//links
import LINK from "./utils/LinkApp";

//Auth-routes
import ProtectedRoute from "./Auth/ProtectedRoute";

function App() {
  const location = useLocation();

  useEffect(() => {
    const start = () => {
      nprogress.start();
      setTimeout(() => {
        done();
      }, 250);
    };

    const done = () => {
      nprogress.complete();
    };
    start();
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path={LINK.HOME.shortlink} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={LINK.CONTACT.shortlink} element={<Contact />} />
          <Route path={LINK.FAQ.shortlink} element={<FAQ />} />
          <Route path={LINK.SHOP.shortlink}>
            <Route index element={<Shop />} />
            <Route
              path={LINK.SHOP.DETAILS.shortlink + "/:id"}
              element={<ProductInfo />}
            />
          </Route>
          <Route path={LINK.CART.shortlink} element={<CartLayout />}>
            <Route index element={<Cart />} />
            <Route
              path={LINK.CART.CHECKOUT.shortlink}
              element={<CheckoutPage />}
            />
          </Route>
          <Route path={LINK.USERACCOUNT.shortlink} element={<ProtectedRoute />}>
            <Route
              path={LINK.USERACCOUNT.LOGIN.shortlink}
              element={<LoginSignIn />}
            />
            <Route
              path={LINK.USERACCOUNT.SIGNIN.shortlink}
              element={<LoginSignIn />}
            />
            <Route path={LINK.USERACCOUNT.OTP.shortlink} element={<OTP />} />
            <Route
              path={LINK.USERACCOUNT.FORGETPASSWORD.shortlink}
              element={<ForgetPassword />}
            />
            <Route
              path={LINK.USERACCOUNT.RESETPASSWORD.shortlink}
              element={<ResetPassword />}
            />
            <Route
              path={LINK.USERACCOUNT.DASHBOARD.shortlink}
              element={<UserAccountLayout />}
            >
              <Route index element={<Dashboard />} />
              <Route
                path={LINK.USERACCOUNT.DASHBOARD.SETTING.shortlink}
                element={<Setting />}
              />
              <Route
                path={LINK.USERACCOUNT.DASHBOARD.CART.shortlink}
                element={<ShopCard />}
              />
              <Route
                path={LINK.USERACCOUNT.DASHBOARD.ORDERHISTORY.shortlink}
                element={<OrderLayout />}
              >
                <Route index element={<OrderHistory />} />
                <Route path={":id"} element={<OrderHistoryDetail />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
