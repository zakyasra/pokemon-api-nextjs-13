import Link from "next/link";
import React, { useState } from "react";

const NavbarList = ({ type, data, activePath }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="z-10 relative cursor-pointer"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div
        className={`text-lg hover:text-yellow-400 text-yellow-500 ${
          activePath == type ? "underline decoration-pink-400" : "no-underline"
        } font-extrabold capitalize`}
      >
        {type}
      </div>
      {open ? (
        <div className="absolute box-border border border-blue-950 bottom-[100] rounded-lg bg-blue-900 drop-shadow-xl h-52 overflow-scroll duration-500 w-48 right-[0] text-yellow-300">
          {data.map((d, idx) => {
            return (
              <Link
                key={idx}
                href={
                  type == "type" ? `/type/${d?.name}` : `/generation/${d?.name}`
                }
              >
                <div className="p-2 uppercase text-sm hover:bg-blue-950 border-2 border-blue-950">
                  {d?.name}
                </div>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default NavbarList;
