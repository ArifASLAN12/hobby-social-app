import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { menuItems } from './menuItems'; // Burada menuItems'ı import ediyoruz

const Sidebar = ({ navigation }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {menuItems.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              style={[styles.menuItem, item.subMenu.length > 0 && styles.hasSubMenu]}
              onPress={() =>
                item.subMenu.length > 0 ? toggleSubMenu(index) : navigation.navigate(item.route)
              }
            >
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>

            {openMenu === index && item.subMenu.length > 0 && (
              <View style={styles.subMenuContainer}>
                {item.subMenu.map((subItem, subIndex) => (
                  <TouchableOpacity
                    key={subIndex}
                    style={styles.subMenuItem}
                    onPress={() => navigation.navigate(subItem.route)}
                  >
                    <Text style={styles.subMenuText}>{subItem.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2C3E50', // Koyu tema sidebar
      paddingTop: 50,
      width: 270, // Sidebar genişliği biraz artırıldı
      borderRightWidth: 1,
      borderRightColor: '#1A252F',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 2, height: 0 },
      shadowRadius: 5,
      elevation: 5, // Android için gölge
    },
    menuItem: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.1)', // Şeffaf çizgi
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    menuText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#ECF0F1', // Açık metin rengi
      letterSpacing: 0.5,
    },
    hasSubMenu: {
      backgroundColor: '#34495E', // Açılır menü için vurgulu renk
    },
    subMenuContainer: {
      backgroundColor: '#1A252F', // Daha koyu ton
      paddingLeft: 25,
      paddingVertical: 5,
      borderLeftWidth: 2,
      borderLeftColor: '#2980B9', // Mavi vurgu
    },
    subMenuItem: {
      paddingVertical: 12,
      paddingHorizontal: 15,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.08)',
      flexDirection: 'row',
      alignItems: 'center',
    },
    subMenuText: {
      fontSize: 16,
      fontWeight: '400',
      color: '#BDC3C7', // Açık gri tonlu metin
      letterSpacing: 0.3,
    },
  });
  

export default Sidebar;
