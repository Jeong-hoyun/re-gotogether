import Head from "next/head";
import Maincarousel from "../components/main/maincarousel";
import Maintheme from "../components/main/maintheme";
import Mainsearch from './../components/main/mainsearch';
import content from '../json/mainpage.content.json';
export default function Home() {
  return (
    <>
      <Head />
      <main className="max-w-7xl mx-auto">
       <Mainsearch />
       <Maintheme country={content.country} group={content.group} theme={content.theme}/>
       <Maincarousel/>        
      </main>
    </>
  );
}
