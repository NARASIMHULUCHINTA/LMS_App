import * as React from 'react';

import AppNavigation from './src/navigation';
import ToastProvider from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';


export default function Main() {

  return (
    <>
      <AppNavigation />
      <ToastProvider />
    </>
      
    
  );
}