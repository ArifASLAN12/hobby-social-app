import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const statBoxWidth = (screenWidth - 64) / 2; // 64 = padding + spacing

const UserStats = () => {
  return (
    <View style={styles.container}>
      <Stat number="120" label="Gönderi" icon="image" style={styles.singleStat} />
      <View style={styles.row}>
        <Stat number="980" label="Takipçi" icon="account-group" />
        <Stat number="300" label="Takip" icon="account-plus" />
      </View>
      <View style={styles.row}>
        <Stat number="5" label="Katılan Hobi Grupları" icon="flower" />
        <Stat number="10" label="Katılan Etkinlik Sayısı" icon="calendar-check" />
      </View>
      <View style={styles.row}>
        <Stat number="3" label="Oluşturulan Hobi Sayısı" icon="plus-circle" />
        <Stat number="2" label="Oluşturulan Etkinlik Sayısı" icon="star-circle" />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Hobii v1.0.0</Text>
      </View>
    </View>
  );
};

const Stat = ({ number, label, icon, style }) => (
  <View style={[styles.stat, style]}>
    <View style={styles.iconRow}>
      <MaterialCommunityIcons name={icon} size={20} color="#fff" style={styles.icon} />
      <View style={styles.textWrapper}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.label} numberOfLines={2} ellipsizeMode="tail">{label}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  stat: {
    backgroundColor: '#1877F2',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    width: statBoxWidth,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 0.4,
    borderColor: '#E0E0E0',
  },
  singleStat: {
    width: '100%',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    marginTop: 2,
  },
  textWrapper: {
    flex: 1,
    flexShrink: 1,
  },
  number: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  label: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '400',
    flexWrap: 'wrap',
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
});

export default UserStats;
