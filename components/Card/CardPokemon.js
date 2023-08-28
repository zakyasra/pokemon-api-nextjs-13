import { imgUrl } from "@/utils/imgURL";
import Link from "next/link";
import React from "react";

const CardPokemon = ({ data }) => {
  return (
    <Link href={`/pokemon/${data?.name}`}>
      <div className="lg:h-72 h-64 bg-gray-100 relative group border border-gray-100 shadow-card rounded-lg">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0 group-hover:brightness-50 duration-300 rounded-lg"
          style={{
            backgroundImage: `url('${imgUrl}${data?.name}.jpg')`,
          }}
        ></div>
        <div className="break-words opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-start items-end md:text-4xl text-3xl text-white font-semibold p-4 capitalize">
          {data?.name}
        </div>
      </div>
    </Link>
  );
};

export default CardPokemon;
