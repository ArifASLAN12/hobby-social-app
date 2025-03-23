import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "react-native-config";  // react-native-config'i import ettik

// Admin için kayıt işlemi
const register = async (username, email, password) => {
  try {
    const response = await axios.post(Config.ADMIN_REGISTER_URL, {  // Config üzerinden URL'yi alıyoruz
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
    const response = await axios.post(Config.ADMIN_LOGIN_URL, {  // Config üzerinden URL'yi alıyoruz
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
  await axios.post(Config.ADMIN_LOGOUT_URL);  // Admin çıkış işlemine istek gönderebiliriz
};

// Admin kullanıcı bilgilerini alma
const getUserDetails = async () => {
  try {
    const token = await AsyncStorage.getItem("adminToken");
    const response = await axios.get(Config.ADMIN_USER_URL, {  // Config üzerinden URL'yi alıyoruz
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
    const response = await axios.put(`${Config.ADMIN_UPDATE_USER_URL}/${userId}`, updatedData, {  // Config üzerinden URL'yi alıyoruz
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
    const response = await axios.delete(`${Config.ADMIN_DELETE_USER_URL}/${userId}`, {  // Config üzerinden URL'yi alıyoruz
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
    const response = await axios.get(Config.ADMIN_DASHBOARD_URL, {  // Config üzerinden URL'yi alıyoruz
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
    const response = await axios.get(Config.ADMIN_USERS_LIST_URL, {  // Config üzerinden URL'yi alıyoruz
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
