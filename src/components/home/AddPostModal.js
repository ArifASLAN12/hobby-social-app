import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker"; // Görsel seçmek için Expo ImagePicker kullanıyoruz

const AddPostModal = ({ visible, onClose, onPostAdd }) => {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handlePost = () => {
    if (postText || image) {
      onPostAdd({ postText, image });
      setPostText("");
      setImage(null);
      onClose();
    } else {
      alert("Lütfen bir şeyler yazın veya görsel ekleyin!");
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Yeni Hobi Paylaş</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ne hakkında bir şeyler paylaşmak istersiniz?"
            multiline
            value={postText}
            onChangeText={setPostText}
            maxLength={300}
          />
          {image && <Image source={{ uri: image }} style={styles.previewImage} />}
          <TouchableOpacity style={styles.button} onPress={handlePickImage}>
            <Icon name="image" size={24} color="#fff" />
            <Text style={styles.buttonText}>Görsel Ekle</Text>
          </TouchableOpacity>

          <View style={styles.modalActions}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelText}>İptal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButton} onPress={handlePost}>
              <Text style={styles.postText}>Paylaş</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  textInput: {
    width: "100%",
    height: 100,
    padding: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    textAlignVertical: "top",
    fontSize: 16,
    color: "#333",
  },
  previewImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
  modalActions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: "#e74c3c",
    borderRadius: 25,
  },
  cancelText: {
    color: "#fff",
    fontSize: 16,
  },
  postButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: "#2ecc71",
    borderRadius: 25,
  },
  postText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default AddPostModal;
