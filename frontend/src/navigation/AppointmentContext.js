import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

export const AppointmentContext = createContext();
export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const bookAppointment = (doctor) => {
    const newAppointment = {
      id: Math.random().toString(), 
      doctorName: doctor.name,
      specialty: doctor.specialty,
      date: 'October 5, 2025',
      time: '10:30 AM',
      status: 'Upcoming',
    };
    setAppointments(prevAppointments => [...prevAppointments, newAppointment]);
    Alert.alert('Success', `Appointment with ${doctor.name} has been booked!`);
  };

  const cancelAppointment = (appointmentId) => {
    setAppointments(prevAppointments =>
      prevAppointments.filter(app => app.id !== appointmentId)
    );
  };
  return (
    <AppointmentContext.Provider value={{ appointments, bookAppointment, cancelAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};