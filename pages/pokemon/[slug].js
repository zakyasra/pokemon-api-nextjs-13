import { getDetailPokemon } from "@/client/Pokemon";
import { imgUrl } from "@/utils/imgURL";
import { useRouter } from "next/router";
import React from "react";
import { FaChevronLeft, FaLock } from "react-icons/fa";

const Index = ({ res, slug }) => {
  const router = useRouter();

  return (
    <div className="bg-[#F5F8FC] min-h-screen w-screen p-4">
      <div className="max-w-7xl mx-auto mb-6 my-2">
        <div
          className="cursor-pointer w-fit flex items-center gap-2 font-extrabold text-yellow-500 hover:scale-110 duration-300"
          onClick={() => router.back()}
        >
          <FaChevronLeft />
          <span>Back</span>
        </div>
      </div>
      <div className="bg-white h-full max-w-7xl mx-auto rounded-3xl overflow-hidden lg:flex">
        <div className="lg:h-full lg:w-full w-1/2 h-1/2 flex content-center justify-center p-4">
          <img
            src={`${imgUrl}${slug}.jpg`}
            className="w-2/3 h-2/3 object-contain"
            alt=""
          />
        </div>
        <div className="bg-yellow-100 h-full w-full p-3">
          <p className="md:text-6xl text-4xl font-extrabold text-zinc-800 text-center mt-10 capitalize">
            <span className="text-transparent md:text-4xl text-2xl bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
              #{res?.order}
            </span>
            {" - "}
            {res?.name}
          </p>
          <div className="flex justify-center items-center gap-2 mt-4">
            {res?.types?.map((d, idx) => {
              const bg =
                d?.type?.name == "fire"
                  ? "bg-red-600"
                  : d?.type?.name == "electric"
                  ? "bg-yellow-400"
                  : d?.type?.name == "grass"
                  ? "bg-emerald-400"
                  : d?.type?.name == "poison"
                  ? "bg-violet-600"
                  : d?.type?.name == "normal"
                  ? "bg-slate-400"
                  : d?.type?.name == "flying"
                  ? "bg-sky-400"
                  : d?.type?.name == "fighting"
                  ? "bg-rose-700/80"
                  : d?.type?.name == "ground"
                  ? "bg-amber-300"
                  : d?.type?.name == "rock"
                  ? "bg-amber-900/80"
                  : d?.type?.name == "bug"
                  ? "bg-green-600"
                  : d?.type?.name == "ghost"
                  ? "bg-indigo-600"
                  : d?.type?.name == "steel"
                  ? "bg-slate-300"
                  : d?.type?.name == "water"
                  ? "bg-blue-400"
                  : d?.type?.name == "psychic"
                  ? "bg-teal-200"
                  : d?.type?.name == "ice"
                  ? "bg-blue-200"
                  : d?.type?.name == "dragon"
                  ? "bg-teal-400"
                  : d?.type?.name == "dark"
                  ? "bg-neutral-600/80"
                  : "bg-pink-600";
              return (
                <span
                  key={idx}
                  className={`uppercase py-1 px-4 hover:scale-110 duration-300 text-zinc-800 font-extrabold rounded ${bg}`}
                >
                  {d?.type?.name}
                </span>
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-4 px-8">
            <div className="">
              <div className="flex justify-center items-center gap-2 mt-9 md:text-2xl text-xl font-extrabold tracking-wider uppercase">
                Height
              </div>
              <div className="flex justify-center items-center bg-yellow-200 p-2 rounded-2xl mt-2">
                <div className="font-extrabold text-zinc-800">
                  {res?.height / 10} m
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center gap-2 mt-9 md:text-2xl text-xl font-extrabold tracking-wider uppercase">
                Weight
              </div>
              <div className="flex justify-center items-center bg-yellow-200 p-2 rounded-2xl mt-2">
                <div className="font-extrabold text-zinc-800">
                  {res?.weight / 10} kg
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 mt-9 md:text-2xl text-xl font-extrabold tracking-wider uppercase">
            Abilities
          </div>
          <div className="grid grid-cols-2 gap-4 px-8 mt-6">
            {res?.abilities?.map((d, idx) => {
              return (
                <div
                  className="flex justify-between items-center bg-yellow-200 p-2 rounded-2xl"
                  key={idx}
                >
                  <div className="font-extrabold text-zinc-800 capitalize">
                    {d?.ability?.name}
                  </div>
                  {d?.isHidden ? (
                    <div className="text-sm w-8 h-8 bg-orange-400 rounded-full flex justify-center items-center text-white font-extrabold">
                      <FaLock />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-2 mt-9 md:text-2xl text-xl font-extrabold tracking-wider uppercase">
            Stats
          </div>
          <div className="grid grid-cols-2 gap-4 px-8 mt-6">
            {res?.stats?.map((d, idx) => {
              return (
                <div
                  className="flex justify-between items-center bg-yellow-200 p-2 rounded-2xl"
                  key={idx}
                >
                  <div
                    className={`text-[12px] w-8 h-8 ${
                      d?.stat?.name == "defense"
                        ? "bg-yellow-400"
                        : d?.stat?.name == "special-defense"
                        ? "bg-green-400"
                        : d?.stat?.name == "attack"
                        ? "bg-red-600"
                        : d?.stat?.name == "special-attack"
                        ? "bg-sky-400"
                        : d?.stat?.name == "speed"
                        ? "bg-pink-400"
                        : "bg-orange-400"
                    } rounded-full flex justify-center items-center text-white font-extrabold`}
                  >
                    {d?.stat?.name == "defense"
                      ? "DEF"
                      : d?.stat?.name == "special-defense"
                      ? "SpD"
                      : d?.stat?.name == "attack"
                      ? "ATT"
                      : d?.stat?.name == "special-attack"
                      ? "SpA"
                      : d?.stat?.name == "speed"
                      ? "SPD"
                      : "HP"}
                  </div>
                  <div className="font-extrabold">{d?.baseStat}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

export const getServerSideProps = async ({ params: slug }) => {
  const { data } = await getDetailPokemon(slug?.slug);

  return {
    props: {
      slug: slug?.slug,
      res: data || null,
    },
  };
};
