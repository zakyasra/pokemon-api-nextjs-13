import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import CardPokemon from "@/components/Card/CardPokemon";
import { getAllPokemon } from "@/client/Pokemon";
import { Pagination, Select } from "antd";
import useApp from "@/hooks/useApp";
import { shallow } from "zustand/shallow";

const Index = ({ res, offset, limit }) => {
  const router = useRouter();
  const [generation, type] = useApp(
    (store) => [store.generation, store.type],
    shallow
  );

  return (
    <Layout isJumbotron>
      <div className="min-h-screen max-w-6xl p-4 mx-auto" id="poke">
        <div className="md:text-4xl text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 mt-12 md:mb-14 mb-10">
          My Custom Pokémon API App!
        </div>
        <div className="flex gap-2 md:mb-8 mb-6">
          <Select
            className="w-full"
            showSearch
            placeholder="Search Pokemon by Generation"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={generation?.map((d) => {
              return {
                label: d?.name,
                value: d?.name,
              };
            })}
            onChange={(e)=> router.push(`generation/${e}`)}
          ></Select>
          <Select
            className="w-full"
            showSearch
            placeholder="Search Pokemon by Type"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={type?.map((d) => {
              return {
                label: d?.name,
                value: d?.name,
              };
            })}
            onChange={(e)=> router.push(`type/${e}`)}
          ></Select>
        </div>
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {res?.results?.map((d, idx) => {
            return <CardPokemon data={d} key={idx} />;
          })}
        </div>
        <div className="flex justify-center items-center mt-12">
          <Pagination
            total={res?.count}
            showSizeChanger={false}
            current={offset / 20 + 1 || 1}
            pageSize={25}
            onChange={(e) => router.push(`/?offset=${(e - 1) * 20}&limit=20`)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export const getServerSideProps = async ({ query: { offset, limit } }) => {
  const { data } = await getAllPokemon({ offset: offset, limit: limit });

  return {
    props: {
      res: data,
      offset: offset || 0,
      limit: 20,
    },
  };
};
