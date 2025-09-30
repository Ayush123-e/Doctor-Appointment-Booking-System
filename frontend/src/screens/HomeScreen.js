import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Title, Subheading, Button, Text, Card, Icon } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../navigation/AuthContext';

const HomeScreen = ({ navigation }) => {
const { signOut } = useContext(AuthContext);

  return (
  <SafeAreaView style={styles.wrapper}>
  <LinearGradient
        colors={['#fffffffb', '#fffffffb']}
        style={styles.gradient}
      >
        <View style={styles.container}>
        <View style={styles.header}>
        <Title style={styles.title}>Welcome!</Title>
        <Subheading style={styles.subtitle}>Let's get you started.</Subheading>
        </View>
        <View style={styles.menuContainer}>
        <Card style={styles.card} onPress={() => navigation.navigate('FindDoctor')}>
        <Card.Content style={styles.cardContent}>
        <Icon source="doctor" size={40} color="#00796B" />
        <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>Find a Doctor</Text>
        <Text style={styles.cardSubtitle}>Browse specialists and book</Text>
        </View>
        </Card.Content>
        </Card>
        <Card style={styles.card} onPress={() => navigation.navigate('MyAppointments')}>
        <Card.Content style={styles.cardContent}>
        <Icon source="calendar-check" size={40} color="#00796B" />
        <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>My Appointments</Text>
        <Text style={styles.cardSubtitle}>View upcoming and past visits</Text>
        </View>
        </Card.Content>
          </Card>
          </View>

          <Button
            mode="outlined"
            onPress={() => signOut()}
            style={styles.logoutButton}
            labelStyle={styles.logoutButtonLabel}
            icon="logout"
          >
            Log Out
          </Button>
        </View>
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
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#004D40', 
  },
  subtitle: {
    fontSize: 18,
    color: '#00695C', 
    marginTop: 5,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    borderRadius: 15,
    elevation: 8,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  cardTextContainer: {
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004D40',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#00695C',
    marginTop: 4,
  },
  logoutButton: {
    borderColor: '#087270fb',
    borderWidth: 1.5,
    paddingVertical: 6,
    marginBottom: 10,
  },
  logoutButtonLabel: {
    color: '#087270fb',
    fontWeight: 'bold',
  },
});

export default HomeScreen;