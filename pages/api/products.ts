import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getOrderBy, getContains } from "../../config";

const prisma = new PrismaClient();

async function getProducts() {
  try {
    const response = await prisma.products.findMany({});
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getProduct(id: number) {
  try {
    const response = await prisma.products.findUnique({
      where: {
        id: id,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function takeProduct({
  skip,
  take,
  category,
  filter,
  keyword,
}: {
  skip: number;
  take: number;
  category: number;
  filter: string;
  keyword: string;
}) {
  const contains = getContains(keyword);
  const where =
    category && category != -1
      ? {
          category_id: category,
          ...contains,
        }
      : contains
      ? contains
      : undefined;
  const orderBy = getOrderBy(filter);
  try {
    const response = await prisma.products.findMany({
      skip: skip,
      take: take,
      ...orderBy,
      where: where,
    });
    console.log(orderBy);
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function countProduct(keyword: string, category?: number) {
  const contains = getContains(keyword);
  const where =
    category && category != -1
      ? {
          category_id: category,
          ...contains,
        }
      : contains
      ? contains
      : undefined;
  try {
    const response = await prisma.products.count({ where: where });
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function updateProduct(productId: number, itemContents: string) {
  console.log(productId);
  try {
    const response = await prisma.products.update({
      where: {
        id: productId,
      },
      data: {
        contents: itemContents,
      },
    });
    return response;
  } catch (e) {
    console.error(e);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    item?: any;
    msg: string;
  }>,
) {
  try {
    const { id } = req.query;
    const { count, keyword } = req.query;
    const { category, filter, skip, take } = req.query;

    if (req.method === "POST") {
      const { productId, itemContents } = req.body;
      const product = await updateProduct(Number(productId), itemContents);
      res.status(200).json({ item: product, msg: "success" });
    } else if (count != null) {
      const response = await countProduct(String(category), Number(keyword));
      res.status(200).json({ item: response, msg: "success" });
    } else if (skip != null && take != null && category != null) {
      const response = await takeProduct({
        skip: Number(skip),
        take: Number(take),
        category: Number(category),
        filter: String(filter),
        keyword: String(keyword),
      });
      res.status(200).json({ item: response, msg: "success" });
    } else if (id != null) {
      const response = await getProduct(Number(id));
      if (response === null) {
        throw "상품이 존재하지 않습니다";
      }
      res.status(200).json({ item: response, msg: "success" });
    } else {
      const response = await getProducts();
      res.status(200).json({ item: response, msg: "success" });
    }
  } catch (error) {
    res.status(400).json({ msg: "Failed" });
  }
}
