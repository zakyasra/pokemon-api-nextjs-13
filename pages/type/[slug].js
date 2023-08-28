import { getPokemonByType } from "@/client/Pokemon";
import CardPokemon from "@/components/Card/CardPokemon";
import Layout from "@/components/Layout";
import { Empty } from "antd";
import React, { useState } from "react";

const Type = ({ res, slug }) => {
  const [sliced, setSliced] = useState(20);

  return (
    <Layout>
      <div className="min-h-screen max-w-6xl p-4 mx-auto">
        <div className="mb-8 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
          Pokemon tipe
          <span className="underline decoration-red-600 capitalize">
            {" "}
            {res?.name}
          </span>
        </div>
        {res?.pokemon?.length ? (
          <>
            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
              {res?.pokemon?.slice(0, sliced)?.map((d, idx) => {
                return <CardPokemon data={d?.pokemon} key={idx} />;
              })}
            </div>
            <div className="flex justify-center items-center mt-12">
              <button
                className="px-8 py-2 hover:bg-yellow-500 rounded-full bg-yellow-400 text-sm hover:text-lg text-white font-extrabold duration-300"
                onClick={() => setSliced((prev) => prev + 20)}
              >
                Load More...
              </button>
            </div>
          </>
        ) : (
          <Empty />
        )}
      </div>
    </Layout>
  );
};

export default Type;

export const getServerSideProps = async ({ params: slug }) => {
  const { data } = await getPokemonByType(slug?.slug);

  return {
    props: {
      slug: slug?.slug,
      res: data || null,
    },
  };
};
