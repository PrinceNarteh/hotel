import React from "react";
import { Footer } from "../components/footer/Footer";
import { Facts } from "../components/home/Facts";
import { FavouriteRooms } from "../components/home/FavouriteRooms";
import { Header } from "../components/home/Header";
import { Report } from "../components/home/Report";
import { Services } from "../components/home/Services";
import { Navbar } from "../components/navbar/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Facts />
      <Report />
      <FavouriteRooms />
      <Services />
      <Footer />
    </>
  );
};
