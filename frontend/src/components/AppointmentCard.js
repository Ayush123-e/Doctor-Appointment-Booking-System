import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, IconButton } from 'react-native-paper';

const AppointmentCard = ({ appointment, onCancel }) => {
  return (
    <View style={styles.card}>
    <View style={styles.cardContent}>
    <Icon source="clipboard-pulse-outline" size={40} color="#00796B" />
    <View style={styles.textContainer}>
    <Text style={styles.doctorName}>{appointment.doctorName}</Text>
    <Text style={styles.specialty}>{appointment.specialty}</Text>
    <Text style={styles.dateTime}>
      {`${appointment.date} at ${appointment.time}`}
     </Text>
        </View>
        <IconButton
          icon="close-circle"
          iconColor="#B71C1C"
          size={28}
          onPress={onCancel}
        />
    </View>
    </View>
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
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  doctorName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#004D40',
  },
  specialty: {
    fontSize: 15,
    color: '#00695C',
    marginTop: 2,
  },
  dateTime: {
    fontSize: 14,
    color: '#00796B',
    marginTop: 8,
    fontWeight: '500',
  },
});

export default AppointmentCard;