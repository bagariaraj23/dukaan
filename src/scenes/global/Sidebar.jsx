import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { useMediaQuery } from 'react-responsive';

import Home from "../../svg/Home";
import Orders from "../../svg/Orders";
import Products from "../../svg/Products";
import Delivery from "../../svg/Delivery";
import Marketing from "../../svg/Marketing";
import Analytics from "../../svg/Analytics";
import Payments from "../../svg/Payments";
import Tools from "../../svg/Tools";
import Discounts from "../../svg/Discounts";
import Audience from "../../svg/Audience";
import Appearance from "../../svg/Appearance";
import Plugins from "../../svg/Plugins";
import ArrowDown from "../../svg/ArrowDown";
import Wallet from "../../svg/Wallet";

export const pages = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Orders",
    path: "/orders",
    element: <Orders />,
  },
  {
    name: "Products",
    path: "/products",
    element: <Products />,
  },
  {
    name: "Delivery",
    path: "/delivery",
    element: <Delivery />,
  },
  {
    name: "Marketing",
    path: "/marketing",
    element: <Marketing />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    element: <Analytics />,
  },
  {
    name: "Payments",
    path: "/payments",
    element: <Payments />,
  },
  {
    name: "Tools",
    path: "/tools",
    element: <Tools />,
  },
  {
    name: "Discounts",
    path: "/discounts",
    element: <Discounts />,
  },
  {
    name: "Audience",
    path: "/audience",
    element: <Audience />,
  },
  {
    name: "Appearance",
    path: "/appearance",
    element: <Appearance />,
  },
  {
    name: "Plugins",
    path: "/plugins",
    element: <Plugins />,
  },
];

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const [selected, setSelected] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState("false");
  const isSmallScreen = useMediaQuery({ maxWidth: 720 });

  console.log(isSmallScreen)

  useEffect(() => {
    setIsCollapsed(isSmallScreen);
  }, [isSmallScreen]);

  return (
    <Box
      sx={{
        "& .pro-sidebar": {
          width: !isCollapsed ? "224px !important":"51px !important",
          minWidth: !isCollapsed ? "224px !important" : "51px !important",
        },
        "& .pro-sidebar-inner": {
          background: "#1E2640 !important",
          width: !isCollapsed ? "224px !important" : "51px !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "3px 15px 3px 15px !important",
        },
        "& .pro-inner-item:hover": {
          backgroundColor: "rgba(255,255,255,0.1) !important",
          borderRadius: "4px",
          margin: "0 5px",
        },
        "& .pro-menu-item.active": {
          backgroundColor: "rgba(255,255,255,0.1) !important",
          borderRadius: "4px",
          margin: "0 5px",
        },
      }}
    >
      {isCollapsed ?
        <ProSidebar sx={{}}>
          <Menu>
            <Box
              sx={{
                height: "97vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Box>
                  {pages &&
                    pages.map((page) => {
                      return (
                        <Item
                          title={page.name}
                          to={page.path}
                          icon={page.element}
                          selected={selected}
                          setSelected={setSelected}
                        />
                      );
                    })}
                </Box>
              </Box>
            </Box>
          </Menu>
        </ProSidebar>
        : <>
          <ProSidebar>
          <Menu>
            <Box
              sx={{
                height: "97vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      alt="profile-user"
                      width="50px"
                      height="50px"
                      src={`https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbXTfDpbx17Dm1UyWrCahHzqo902mog-y7REyL1EVX~ssIEzwHiEcj6MiIHeiOkbDRFcMpt3V-MvddqZyRBHDd-J3LkmTahxCv-UGtnU09Z3J2BfloJvJ7n8-My8RcF0WYqZ6UDqdBSium9I8xL4YyFvx4xreX-agyTnc8DLipLOn6ZANnuZqbZvpSsvyo6nPQr02YzgWu2BYAX~IzuUpJyPWDgjMwbgfHvQm7gpqsVVRXVoDqHJITXGmx4iYGsyfrawR5P-RLJ4ZNnwLYic-E7LCK2GbM-tOGgZf5OIKoUZwQMm35-HaH8YZ-MFzxSXKu~EwjGP9buXyfGZwoPdMg__`}
                      style={{ cursor: "pointer", borderRadius: "4px" }}
                    />
                    <Box sx={{ paddingLeft: "1rem" }}>
                      <Typography variant="h6" sx={{ color: "#ffffff" }}>
                        Nishyan
                      </Typography>
                      <a>
                        <Typography
                          variant="h8"
                          sx={{ textDecoration: "underline" }}
                        >
                          Visit Store
                        </Typography>
                      </a>
                    </Box>
                  </Box>
                  <ArrowDown />
                </Box>
                <Box>
                  {pages &&
                    pages.map((page) => {
                      return (
                        <Item
                          title={page.name}
                          to={page.path}
                          icon={page.element}
                          selected={selected}
                          setSelected={setSelected}
                        />
                      );
                    })}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  margin: "1rem",
                  padding: ".5rem",
                  backgroundColor: "#353C53",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(255,255,255,.1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "4px",
                  }}
                >
                  <Wallet />
                </Box>
                <Box sx={{ paddingLeft: "12px" }}>
                  <Typography variant="h8" sx={{ color: "rgba(255,255,255,.8)" }}>
                    Available Credits
                  </Typography>
                  <br />
                  <Typography variant="h7" sx={{ color: "#fff" }}>
                    222.10
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Menu>
          </ProSidebar>
        </>}
    </Box>
  );
};

export default Sidebar;
