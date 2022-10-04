import Head from "next/head";
import Slide from "../componenets/main/slide";
import Card from "./../componenets/main/card";

export default function Home() {
  return (
    <>
      <Head />
      <div className="mt-16">
        <div className="flex container mx-auto flex-col sm:flex-row">
          <Slide />
        </div>
        <div className="flex container mx-auto flex-col sm:flex-row">
          <Card />
        </div>
      </div>
    </>
  );
}
