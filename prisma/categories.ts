import { PrismaClient, Prisma } from "@prisma/client";
import content from "@/json/mainpage.content.json";
const prisma = new PrismaClient();

const productData: Prisma.productsCreateInput[] = Array.apply(
  null,
  Array(1),
).map((_, index) => ({
  name: `인도로 가는 골프 여행`,
  contents: `인도로 가는 골프 여행`,
  category_id: 18,
  image_url: `https://cdn.imweb.me/thumbnail/20220518/5b276d6a39928.png`,
  price: Math.floor(Math.random() * (100000 - 20000) + 20000),
}));

async function main() {
  for (const x of productData) {
    const product = await prisma.products.create({
      data: x,
    });
    console.log(`create id :${product.id}`);
  }
}

main()
  .then(() => {
    async () => {
      await prisma.$disconnect();
    };
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
