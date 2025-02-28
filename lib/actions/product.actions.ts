// Import PrismaClient at the top
import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Reuse a single PrismaClient instance
const prisma = new PrismaClient();

// get latest products
export async function getLatestProducts() {
  try {
    // Use the Prisma Client instance to fetch the latest products
    const data = await prisma.product.findMany({
      take: LATEST_PRODUCTS_LIMIT,
      orderBy: { createdAt: "desc" },
    });

    // Convert to plain object and return the result
    return convertToPlainObject(data);
  } catch (error) {
    console.error("Error fetching latest products:", error);
    return [];
  }
}
