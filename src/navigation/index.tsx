import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import MainNavigation from './mainNavigation'




function AppNavigation() { 
    return (
        <NavigationContainer>
                <MainNavigation />
        </NavigationContainer>
    );
}
export default AppNavigation;