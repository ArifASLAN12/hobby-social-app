import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "react-native-config";  // react-native-config import edildi

const USER_REGISTER_URL = Config.USER_REGISTER_URL;
const USER_LOGIN_URL = Config.USER_LOGIN_URL;
const USER_PROFILE_URL = Config.USER_PROFILE_URL;
const USER_UPDATE_PROFILE_URL = Config.USER_UPDATE_PROFILE_URL;
const USER_CHANGE_PASSWORD_URL = Config.USER_CHANGE_PASSWORD_URL;
const USER_CATEGORIES_URL = Config.USER_CATEGORIES_URL;
const USER_LOGOUT_URL = Config.USER_LOGOUT_URL;
const USER_EMAIL_VERIFICATION_URL = Config.USER_EMAIL_VERIFICATION_URL;
const USER_PASSWORD_RESET_URL = Config.USER_PASSWORD_RESET_URL;

// Kullanıcı kaydını yapma
const register = async (username, firstName, lastName, email, password, gender, birthday, location, bio, photo) => {
  try {
    const response = await axios.post(USER_REGISTER_URL, {
      username,
      firstName,
      lastName,
      email,
      password,
      gender,
      birthday,
      location,
      bio,
      photo, // Fotoğraf da dahil ediliyor
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Kullanıcı girişi (email veya kullanıcı adı ile)
const login = async (identifier, password) => {
  try {
    const response = await axios.post(USER_LOGIN_URL, {
      identifier,  // Bu parametre email ya da kullanıcı adı olabilir
      password,
    });
    // Kullanıcı token'ını AsyncStorage'a kaydet
    await AsyncStorage.setItem("userToken", response.data.token);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Kullanıcı profil bilgilerini alma
const getUserProfile = async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    const response = await axios.get(USER_PROFILE_URL, {
      headers: {
        Authorization: `Bearer ${token}`, // Bearer token ile auth
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Kullanıcı profilini güncelleme
const updateUserProfile = async (updatedData) => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    const response = await axios.put(USER_UPDATE_PROFILE_URL, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`, // Bearer token ile auth
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Kullanıcı şifresini değiştirme
const changePassword = async (currentPassword, newPassword) => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    const response = await axios.put(USER_CHANGE_PASSWORD_URL, {
      currentPassword,
      newPassword,
    }, {
      headers: {
        Authorization: `Bearer ${token}`, // Bearer token ile auth
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Kullanıcı kategorilerini alma (giriş yaptıktan sonra)
const getUserCategories = async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    const response = await axios.get(USER_CATEGORIES_URL, {
      headers: {
        Authorization: `Bearer ${token}`, // Bearer token ile auth
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Kullanıcı çıkışı (Logout)
const logout = async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    await AsyncStorage.removeItem("userToken");
    const response = await axios.post(USER_LOGOUT_URL, {}, {
      headers: {
        Authorization: `Bearer ${token}`, // Bearer token ile auth
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// E-posta doğrulama (Kayıt sonrası e-posta doğrulaması)
const emailVerification = async (token) => {
  try {
    const response = await axios.get(`${USER_EMAIL_VERIFICATION_URL}?token=${token}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Şifre sıfırlama (Şifremi unuttum)
const resetPassword = async (email) => {
  try {
    const response = await axios.post(USER_PASSWORD_RESET_URL, { email });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export default {
  register,
  login,
  getUserProfile,
  updateUserProfile,
  changePassword,
  getUserCategories,
  logout,
  emailVerification,
  resetPassword,
};
