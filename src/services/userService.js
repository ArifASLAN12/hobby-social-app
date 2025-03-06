import authService from './authService';

const API_URL = 'https://example.com/api/users'; // Kullanıcı API URL

// Kullanıcı profilini getir
const getUserProfile = async () => {
  try {
    const response = await authService.authAxios.get(`${API_URL}/profile`);
    return response.data;
  } catch (error) {
    console.error('Profil alma hatası:', error.response?.data || error.message);
    throw error;
  }
};

// Kullanıcı profilini güncelle
const updateProfile = async (userData) => {
  try {
    const response = await authService.authAxios.put(`${API_URL}/profile`, userData);
    return response.data;
  } catch (error) {
    console.error('Profil güncelleme hatası:', error.response?.data || error.message);
    throw error;
  }
};

// Kullanıcı listesini getir (Admin veya özel kullanım)
const getAllUsers = async () => {
  try {
    const response = await authService.authAxios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Kullanıcı listesi alınamadı:', error.response?.data || error.message);
    throw error;
  }
};

// Kullanıcıyı sil (Admin yetkisi gerektirir)
const deleteUser = async (userId) => {
  try {
    const response = await authService.authAxios.delete(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Kullanıcı silme hatası:', error.response?.data || error.message);
    throw error;
  }
};

export default {
  getUserProfile,
  updateProfile,
  getAllUsers,
  deleteUser,
};
