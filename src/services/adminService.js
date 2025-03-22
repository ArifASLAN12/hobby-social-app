import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
  ADMIN_REGISTER_URL,
  ADMIN_LOGIN_URL,
  ADMIN_LOGOUT_URL,
  ADMIN_USER_URL,
  ADMIN_UPDATE_USER_URL,
  ADMIN_DELETE_USER_URL,
  ADMIN_DASHBOARD_URL,
  ADMIN_USERS_LIST_URL 
} from "react-native-dotenv"; // .env dosyasındaki admin API URL'lerini alıyoruz

// Admin için kayıt işlemi
const register = async (username, email, password) => {
  try {
    const response = await axios.post(ADMIN_REGISTER_URL, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Admin için giriş işlemi
const login = async (identifier, password) => {
  try {
    const response = await axios.post(ADMIN_LOGIN_URL, {
      identifier,
      password,
    });
    // Admin token'ını AsyncStorage'a kaydet
    await AsyncStorage.setItem("adminToken", response.data.token);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Admin için çıkış işlemi
const logout = async () => {
  // Admin token'ını AsyncStorage'dan sil
  await AsyncStorage.removeItem("adminToken");
  await axios.post(ADMIN_LOGOUT_URL);  // Admin çıkış işlemine istek gönderebiliriz
};

// Admin kullanıcı bilgilerini alma
const getUserDetails = async () => {
  try {
    const token = await AsyncStorage.getItem("adminToken");
    const response = await axios.get(ADMIN_USER_URL, {
      headers: {
        Authorization: `Bearer ${token}`, // Bearer token ile auth
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Admin kullanıcı bilgilerini güncelleme
const updateUser = async (userId, updatedData) => {
  try {
    const token = await AsyncStorage.getItem("adminToken");
    const response = await axios.put(`${ADMIN_UPDATE_USER_URL}/${userId}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Admin kullanıcı silme
const deleteUser = async (userId) => {
  try {
    const token = await AsyncStorage.getItem("adminToken");
    const response = await axios.delete(`${ADMIN_DELETE_USER_URL}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Admin paneline ait verileri alma (Dashboard)
const getDashboardData = async () => {
  try {
    const token = await AsyncStorage.getItem("adminToken");
    const response = await axios.get(ADMIN_DASHBOARD_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Admin kullanıcı listesini alma
const getUsersList = async () => {
  try {
    const token = await AsyncStorage.getItem("adminToken");
    const response = await axios.get(ADMIN_USERS_LIST_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export default {
  register,
  login,
  logout,
  getUserDetails,
  updateUser,
  deleteUser,
  getDashboardData,
  getUsersList,
};
