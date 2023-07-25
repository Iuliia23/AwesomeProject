import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import LoginScreen from './components/LoginScreen';
import RegistrationScreen from './components/RegistrationScreen';

export default function App() {
  const [page, setPage] = useState('registration');

  const changePage = data => {
    setPage(data);
  };

  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    (page == 'registration' && (
      <RegistrationScreen changePage={() => changePage('login')} />
    )) ||
    (page == 'login' && (
      <LoginScreen setPage changePage={() => changePage('registration')} />
    ))
  );
}