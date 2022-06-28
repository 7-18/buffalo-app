import React from "react";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUserAsync } from "../redux/actions/actionUser";
import Avatar from "@mui/material/Avatar";
import { HomeDiv, Menu } from "../styles/HomeStyles";
import { ReactComponent as Bell } from "../assets/images/Notification.svg";
import { Banners } from "../components/Banners";
import { TabsFilters } from "../components/TabsFilters";

export const Home = () => {
  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();
  const [tabFilters, setTabFilters] = useState("discover");

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setProfile(user);
    }
  }, []);

  const updateFilter = (filter) => {
    setTabFilters(filter);
  };

  return (
    <HomeDiv>
      <Menu>
        <div>
          <Avatar src={profile?.photoURL} alt={profile?.displayName} />
          <div>
            <span>Hi!</span>
            <span>{profile?.displayName}</span>
          </div>
        </div>
        <Bell />
      </Menu>
      <Banners />
      <TabsFilters updateFilter={updateFilter} tabFilters={tabFilters} />
      <button onClick={() => dispatch(logoutUserAsync())}>Logout</button>
    </HomeDiv>
  );
};
