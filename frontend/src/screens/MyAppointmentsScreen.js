import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { AppointmentContext } from '../navigation/AppointmentContext';
import AppointmentCard from '../components/AppointmentCard';

const MyAppointmentsScreen = () => {
  const { appointments, cancelAppointment } = useContext(AppointmentContext);
  if (appointments.length === 0) {
    return (
      <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>You have no upcoming appointments.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
    <AppointmentCard
            appointment={item}
            onCancel={() => cancelAppointment(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#6c757d',
  },
});

export default MyAppointmentsScreen;