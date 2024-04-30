import React, { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import { Box, Breadcrumbs } from "@mantine/core";
import Header from "../components/Header.component";
import NavBar from "../components/NavBar.component";
import Footer from "../components/Footer.component";
import classes from "./../styles/layout.module.css";
import classe from "./../styles/common.module.css";
import BreadCrumbsIcon from "./../assets/icons/breakcrumb-arrow.svg?react";
//type Props = {};
import LINK from "../utils/LinkApp";
import "./../styles/common.css";

function flattenObject(obj: typeof LINK) {
  let result = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function flattenHelper(obj: { [x: string]: any }, parentPath: string) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        flattenHelper(obj[key], parentPath + obj[key].path);
      } else if (key === "path") {
        result = { [obj[key]]: obj["name"], ...result };
      }
    }
  }

  flattenHelper(obj, "");
  return result;
}

//type Props = {};
function Layout() {
  const location = useLocation();
  const { pathname } = location;
  let NavMap: { [x: string]: string } = {};
  NavMap = flattenObject(LINK);
  const blackListBreakcrumb = [
    LINK.SHOP.DETAILS.name,
    LINK.CONTACT.name,
    LINK.FAQ.name,
  ];
  const [paths, setPaths] = useState<string[]>([]);
  useMemo(() => {
    const pathSegments = pathname.split("/").filter((s) => s !== "");
    const pathLink: string[] = ["/"];
    let skip = "";
    for (let i = 0; i < pathSegments.length; i++) {
      const path =
        pathLink[i] +
        skip +
        (pathLink[i]?.charAt(pathLink[i].length - 1) !== "/" ? "/" : "") +
        pathSegments[i];

      if (!blackListBreakcrumb.includes(pathSegments[i])) {
        pathLink.push(path);
      } else {
        skip = "/" + pathSegments.join("/");
      }
    }
    setPaths(pathLink);
  }, [pathname]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  /*pathBreak[0] = "/";
  pathBreak.pop();
  const items = [
    { title: LINK.HOME.name, href: LINK.HOME.path },
    { title: LINK.SHOP.name, href: LINK.SHOP.path },
    { title: LINK.DETAILS.name, href: LINK.DETAILS.path },
  ];
  if (!location.pathname.includes("Detail")) {
    items.pop();
  }
  const links = items.map((item, index) => (
    <NavLink
      to={
        !items[index].title.includes("Detail") ? item?.href : location.pathname
      }
      key={index}
      className={classe["b-link"]}
      end
    >
      {item?.title}
    </NavLink>
  ));*/
  return (
    <div>
      <Header />
      <NavBar />
      {paths.length > 1 && (
        <Box className="container-with-padding inner">
          <Breadcrumbs
            separator={<BreadCrumbsIcon />}
            my="20px"
            className={classe.breadcrump}
          >
            {paths.map((c, i) => {
              return (
                <NavLink
                  to={c.includes('undefined')?c.replace('/undefined','/') : c}
                  //to={!items[c].title.includes("Detail") ? c?.href : location.pathname}
                  //key={index}
                  className={classe["b-link"]}
                  key={i}
                  end
                >
                  {!c.includes(LINK.SHOP.DETAILS.path)
                    ? NavMap[c] == undefined
                      ? location.pathname.includes(
                          LINK.USERACCOUNT.DASHBOARD.ORDERHISTORY.path
                        )
                        ? LINK.USERACCOUNT.DASHBOARD.ORDERHISTORY.DETAILS.name
                        : LINK.NOTFOUND.name
                      : NavMap[c]
                    : LINK.SHOP.DETAILS.name}
                </NavLink>
              );
            })}
          </Breadcrumbs>
        </Box>
      )}
      <main className={classes.container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
