import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/navigation/AuthContext';
import { AppointmentProvider } from './src/navigation/AppointmentContext';

export default function App() {
  return (
    <AuthProvider>
      <AppointmentProvider>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </AppointmentProvider>
    </AuthProvider>
  );
}