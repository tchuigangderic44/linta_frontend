import React, { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
//import Loader from "../components/Loader.component";
import { Context } from "../context/context";
import LINK from "../utils/LinkApp";

function ProtectedRoute() {
  const navigate = useNavigate();
  const d = useContext(Context);
  //const [loading, setLoading] = useState(true);
  useEffect(() => {
    //onAuthStateChanged(auth, (user) => {
    if (!d?.auth) {
      if (
        location.pathname === LINK.USERACCOUNT.path ||
        location.pathname.includes(LINK.USERACCOUNT.DASHBOARD.name)
      ) {
        navigate(LINK.USERACCOUNT.LOGIN.path, {
          replace: true,
        });
      }
      //setLoading(false);
    } else {
      //setLoading(false);
      if (!location.pathname.includes(LINK.USERACCOUNT.DASHBOARD.name)) {
        navigate(LINK.USERACCOUNT.DASHBOARD.path, {
          replace: true,
        });
      }
    }
  }, [location.pathname, d?.auth]);
  /*if (loading) {
    return <Loader />;
  }*/
  return (
    <div className="w-full container-with-padding ">
      <Outlet />
    </div>
  );
}

export default ProtectedRoute;
