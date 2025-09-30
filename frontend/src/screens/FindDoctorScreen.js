import React, { useContext } from 'react';
import { StyleSheet, FlatList, Alert, SafeAreaView, View,Text } from 'react-native';
import { Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import DoctorCard from '../components/DoctorCard';
import { AppointmentContext } from '../navigation/AppointmentContext';


const DOCTORS = [
  { id: '1', name: 'Dr. Anjali Sharma', specialty: 'Cardiologist', availability: 'Mon, Wed, Fri (9am - 5pm)' },
  { id: '2', name: 'Dr. Vikram Singh', specialty: 'Dermatologist', availability: 'Tue, Thu (10am - 6pm)' },
  { id: '3', name: 'Dr. Priya Patel', specialty: 'Pediatrician', availability: 'Mon - Fri (11am - 7pm)' },
  { id: '4', name: 'Dr. Rohan Joshi', specialty: 'Orthopedic Surgeon', availability: 'Wed, Sat (8am - 1pm)' },
  { id: '5', name: 'Dr. Meera Desai', specialty: 'Neurologist', availability: 'Mon, Tue (2pm - 8pm)' }  ,
  { id: '6', name: 'Dr. Ram Singh', specialty: 'Neurologist', availability: 'Wed, Thu (4pm - 8pm)' }
];
const FindDoctorScreen = () => {
const { bookAppointment } = useContext(AppointmentContext);
const handleSelectDoctor = (doctor) => {
    Alert.alert(
      'Book Appointment',
      `Proceed to book an appointment with ${doctor.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => bookAppointment(doctor) },
      ]
    );
  };

const renderDoctor = ({ item }) => (
  <DoctorCard doctor={item} onPress={() => handleSelectDoctor(item)} />
  );
  return (
  <SafeAreaView style={styles.wrapper}>
  <LinearGradient colors={['#f8f8f8ff', '#edf5f5ff']} style={styles.gradient}>
  <View style={styles.header}>
  <Title style={styles.title}>Find a Specialist</Title>
  <Text style={styles.text}>click on card to book the appointments</Text>
  </View>
        <FlatList
          data={DOCTORS}
          renderItem={renderDoctor}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
  </LinearGradient>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004D40',
  },
  listContent: {
    paddingBottom: 20,
  },
  text:{
    color:'#004D40'
  }
});

export default FindDoctorScreen;