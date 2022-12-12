import Head from "next/head";
import Maincarousel from "@/components/main/maincarousel";
import Maintheme from "@/components/main/maintheme";
import Mainsearch from "@/components/main/mainsearch";
import content from "../json/mainpage.content.json";
import { useAppStore } from "../rtk/store";
import Test from "./test";

export default function Home() {
  const loginUser = useAppStore((state) => state.login.login);
    return (
    <>
      <Head>
        <title>메인페이지|고투게더</title>
      </Head>
      <main className="max-w-full mx-auto">
        {loginUser?.username ? (
          <Test name={loginUser.username} />
        ) : (
          <Mainsearch />
        )}
        <Maintheme
          country={content.country}
          group={content.group}
          theme={content.theme}
        />
        <Maincarousel />
      </main>
    </>
  );
}
