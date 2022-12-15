import type { NextApiResponse, NextApiRequest } from "next";

let data = {
  products: [
    {
      title: "와인 사랑인의 코카서스 3개국 18일",
      productId: 21,
      price: 1100000,
      images: [
        "https://cdn.imweb.me/thumbnail/20220803/90b39c880066f.png",
        "https://cdn.imweb.me/thumbnail/20220518/5b276d6a39928.png",
        "https://cdn.imweb.me/upload/S202107158604372051740/5353fef9d5a4d.jpg",
        "https://cdn.imweb.me/upload/S202107158604372051740/ea4fec789c8d9.jpg",
      ],
      startDates: ["20220511", "2022061"],
    },
    {
      title: "3040들만의 라운드 치앙마이 다색골프",
      productId: 23,
      price: 1200000,
      images: [
        "https://cdn.imweb.me/thumbnail/20220518/5b276d6a39928.png",
        "https://cdn.imweb.me/thumbnail/20220518/5b276d6a39928.png",
        "https://cdn.imweb.me/upload/S202107158604372051740/5353fef9d5a4d.jpg",
        "https://cdn.imweb.me/upload/S202107158604372051740/ea4fec789c8d9.jpg",
      ],
      startDates: ["20220511", "2022061"],
    },
    {
      title: "5070의 버킷리스트 중남미 8개국 34일",
      productId: 10,
      price: 1200000,
      images: [
        "https://cdn.imweb.me/thumbnail/20220803/9c2e3d5d7ff7e.png",
        "https://cdn.imweb.me/thumbnail/20220803/9c2e3d5d7ff7e.png",
        "https://cdn.imweb.me/upload/S202107158604372051740/6904c19f844a0.jpg",
        "https://cdn.imweb.me/upload/S202107158604372051740/e3995fef15a24.jpg",
        "https://cdn.imweb.me/upload/S202107158604372051740/b7cbfc2003b1f.jpg",
      ],
      startDates: ["20220511", "2022061"],
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const { total } = req.query;
    if (id) {
      const detailData = data.products.filter(
        (e) => e.productId === Number(id)
      );
      res.status(200).json(detailData);
    } else if (total) {
      res.status(200).json(data);
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
  }
}
