import axios from "axios";
import Config from "react-native-config";  // react-native-config import edildi

const API_URL = Config.USER_CATEGORIES_URL || "http://localhost:5001/user/categories";

/**
 * Kategorileri getirir, doğrudan API'den çeker.
 */
export const getCategories = async () => {
  try {
    // API'den kategorileri çek
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Kategori yükleme hatası:", error);
    return [];
  }
};
