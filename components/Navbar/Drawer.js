import { Drawer } from "antd";
import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";

const Drawers = ({ open, handleDrawer, generation, type }) => {
  return (
    <div className="lg:hidden text-white">
      <Drawer
        title={
          <div className="font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-950  text-xl">
            PokeApi
          </div>
        }
        placement="right"
        onClose={handleDrawer}
        open={open}
        closeIcon={<FaTimes size={20} style={{ color: "black" }} />}
        style={{ backgroundColor: "#1e3a8a", color: "#eab308" }}
        headerStyle={{ backgroundColor: "#eab308" }}
      >
        <div className="bg-blue-950 p-3 text-yellow-300 rounded-lg mb-4">
          Genaration
        </div>
        {generation?.map((d, idx) => {
          return (
            <Link href={`/generation/${d?.name}`} key={idx}>
              <div
                className="ms-4 bg-blue-950 p-3 text-yellow-300 rounded-lg mb-2 uppercase text-sm hover:bg-blue-950/50"
                onClick={handleDrawer}
              >
                {d?.name}
              </div>
            </Link>
          );
        })}
        <div className="bg-blue-950 p-3 text-yellow-300 rounded-lg my-4">
          Type
        </div>
        {type?.map((d, idx) => {
          return (
            <Link href={`/tyep/${d?.name}`} key={idx}>
              <div
                className="ms-4 bg-blue-950 p-3 text-yellow-300 rounded-lg mb-2 uppercase text-sm hover:bg-blue-950/50"
                onClick={handleDrawer}
              >
                {d?.name}
              </div>
            </Link>
          );
        })}
      </Drawer>
    </div>
  );
};

export default Drawers;
