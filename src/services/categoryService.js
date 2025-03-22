import redis from "../config/redis.js";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const CATEGORY_CACHE_KEY = "categories";
const API_URL = process.env.USER_CATEGORIES_URL || "http://localhost:5001/user/categories";

/**
 * Kategorileri getirir, önce Redis'ten kontrol eder, yoksa API'den çeker.
 */
export const getCategories = async () => {
  try {
    // Redis'ten kategorileri kontrol et
    const cachedCategories = await redis.get(CATEGORY_CACHE_KEY);
    if (cachedCategories) {
      return JSON.parse(cachedCategories);
    }

    // API'den kategorileri çek
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Kategoriler yüklenemedi!");
    }

    const categories = await response.json();

    // Redis'e kaydet (1 saat süreyle)
    await redis.set(CATEGORY_CACHE_KEY, JSON.stringify(categories), "EX", 3600);

    return categories;
  } catch (error) {
    console.error("Kategori yükleme hatası:", error);
    return [];
  }
};

/**
 * Redis önbelleğini temizler.
 */
export const clearCategoryCache = async () => {
  try {
    await redis.del(CATEGORY_CACHE_KEY);
    console.log("Kategori önbelleği temizlendi.");
  } catch (error) {
    console.error("Önbellek temizleme hatası:", error);
  }
};
