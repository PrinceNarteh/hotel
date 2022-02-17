import React from "react";
import { Facts } from "../components/home/Facts";
import { FavouriteRooms } from "../components/home/FavouriteRooms";
import { Header } from "../components/home/Header";
import { Report } from "../components/home/Report";
import { Navbar } from "../components/navbar/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Facts />
      <Report />
      <FavouriteRooms />
    </>
  );
};
