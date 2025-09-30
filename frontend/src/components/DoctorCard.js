import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';

const DoctorCard = ({ doctor, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.cardContent}>
    <Icon source="account-circle" size={45} color="#00796B" />
    <View style={styles.textContainer}>
    <Text style={styles.name}>{doctor.name}</Text>
    <Text style={styles.specialty}>{doctor.specialty}</Text>
    <Text style={styles.availability}>
        {`Available: ${doctor.availability}`}
    </Text>
    </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1, 
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#004D40',
  },
  specialty: {
    fontSize: 15,
    color: '#00695C',
    marginTop: 2,
  },
  availability: {
    fontSize: 13,
    color: '#00796B',
    marginTop: 8,
    fontStyle: 'italic',
  },
});

export default DoctorCard;