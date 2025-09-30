import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from './AuthContext';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen'; 
import FindDoctorScreen from '../screens/FindDoctorScreen';
import MyAppointmentsScreen from '../screens/MyAppointmentsScreen';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
const { userToken } = useContext(AuthContext);
  return (
    <NavigationContainer>
    <Stack.Navigator>
    {userToken ? (
          <>
            <Stack.Screen
              name="Home" 
              component={HomeScreen} 
              options={{ title: 'My Dashboard' }}
            />
            <Stack.Screen
              name="FindDoctor"
              component={FindDoctorScreen}
              options={{ title: 'Find a Doctor' }}
            />
            <Stack.Screen
              name="MyAppointments"
              component={MyAppointmentsScreen}
              options={{ title: 'My Appointments' }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
    </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;