import React from "react";
import axios from "axios";
import Head from "next/head";
import { API_URL } from "./../../config/index";

export const getStaticPaths = async () => {
  const post = await axios.get(`${API_URL}/api/products?&pageSize=100`);
  const posts = await post.data;
  return {
    paths: posts.products.map((item) => {
      return {
        params: {
          productId: item.productId.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await axios.get(
    `${API_URL}/api/products/${params.productId}`,
  );
  const post = await response.data;
  return {
    props: { post },
  };
};

const ProductId = ({ post }) => {
  const HeroImage = post?.images[0];
  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div>
              <div
                className="relative flex justify-center mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="flex flex-col justify-center">
                  <img
                    className="mx-auto"
                    src={HeroImage}
                    width="768"
                    height="432"
                    alt="Hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductId;
