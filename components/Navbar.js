import { getGeneration, getType } from "@/client/Pokemon";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavbarList from "./Navbar/NavbarList";
import { FaEllipsisH } from "react-icons/fa";
import Drawers from "./Navbar/Drawer";
import { usePathname } from "next/navigation";
import { shallow } from "zustand/shallow";
import useApp from "@/hooks/useApp";

const Navbar = ({ isJumbotron }) => {
  const pathname = usePathname();
  const activePath = pathname.slice(1, pathname.lastIndexOf("/"));
  const [generation, setGeneration, type, setType] = useApp(
    (store) => [
      store.generation,
      store.setGeneration,
      store.type,
      store.setType,
    ],
    shallow
  );
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer((prev) => !prev);
  };

  const _getData = async () => {
    const { data: dataGen } = await getGeneration();
    const { data: dataType } = await getType();
    if (dataGen) {
      setGeneration(dataGen?.results);
      localStorage.setItem("generation", JSON.stringify(dataGen));
    }
    if (dataType) {
      setType(dataType?.results);
      localStorage.setItem("type", JSON.stringify(dataType));
    }
  };

  const cekLocalStorage = () => {
    const dataGen = localStorage.getItem("generation") || null;
    const dataType = localStorage.getItem("type") || null;

    if (dataGen == null || dataType == null) {
      _getData();
    } else {
      const dataGens = JSON.parse(dataGen);
      const dataTypes = JSON.parse(dataType);
      setGeneration(dataGens?.results);
      setType(dataTypes?.results);
    }
  };

  useEffect(() => {
    cekLocalStorage();
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-20 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-900 font-semibold">
              <Link href={"/"}>
                <div className="w-28 cursor-pointer">
                  <img src="/img/pokeapi.png" alt="" className="object-cover" />
                </div>
              </Link>
            </span>
            <div
              className="w-8 h-8 rounded-lg bg-yellow-500 hover:bg-yellow-400 lg:hidden flex justify-center items-center text-white"
              onClick={handleDrawer}
            >
              <FaEllipsisH />
            </div>
            {isJumbotron == false ? (
              <div className={`lg:flex hidden space-x-8`}>
                {["generation", "type"]?.map((d, idx) => {
                  return (
                    <NavbarList
                      key={idx}
                      type={d}
                      data={d == "type" ? type : generation}
                      activePath={activePath}
                    />
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </nav>
      <div className="lg:hidden block">
        <Drawers
          open={drawer}
          handleDrawer={handleDrawer}
          generation={generation}
          type={type}
        />
      </div>
    </>
  );
};

export default Navbar;
