import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://example.com/api/auth'; // Backend API URL

// Kullanıcı giriş yapma (JWT token alır)
const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });

    if (response.data.token) {
      await AsyncStorage.setItem('token', response.data.token); // JWT saklanıyor
      await AsyncStorage.setItem('refreshToken', response.data.refreshToken); // Refresh token saklanıyor
    }

    return response.data;
  } catch (error) {
    console.error('Login hatası:', error.response?.data || error.message);
    throw error;
  }
};

// Kullanıcı kayıt olma
const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Register hatası:', error.response?.data || error.message);
    throw error;
  }
};

// Çıkış yapma (Token’ı siler)
const logout = async () => {
  try {
    await AsyncStorage.removeItem('token'); // JWT'yi temizle
    await AsyncStorage.removeItem('refreshToken'); // Refresh token'ı temizle
  } catch (error) {
    console.error('Logout hatası:', error.message);
    throw error;
  }
};

// Token'ı al (Header'da kullanmak için)
const getToken = async () => {
  return await AsyncStorage.getItem('token');
};

// Token'ı backend'e ekleyerek yetkilendirilmiş istekler için `axios` instance oluştur
const authAxios = axios.create();

authAxios.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Token yenileme (Eğer backend Refresh Token destekliyorsa)
const refreshToken = async () => {
  try {
    const storedRefreshToken = await AsyncStorage.getItem('refreshToken');

    if (!storedRefreshToken) {
      throw new Error('Refresh token bulunamadı.');
    }

    const response = await axios.post(`${API_URL}/refresh-token`, { refreshToken: storedRefreshToken });

    if (response.data.token) {
      await AsyncStorage.setItem('token', response.data.token); // Yeni JWT saklanıyor
    }

    return response.data.token;
  } catch (error) {
    console.error('Token yenileme hatası:', error.response?.data || error.message);
    throw error;
  }
};

export default {
  login,
  register,
  logout,
  getToken,
  refreshToken,
  authAxios, // Token otomatik eklenmiş axios instance
};
