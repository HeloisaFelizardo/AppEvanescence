import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, MaterialCommunityIcons  } from '@expo/vector-icons';

import TelaHome from './componentes/TelaHome';
import TelaSobre from './componentes/TelaSobre';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
			<Tabs.Navigator 
				screenOptions={{
					headerStyle: { 
						backgroundColor: '#000',
					},
					
					headerTitleStyle: { 
						color: '#fff', 
						fontWeight: 'bold',
            fontSize: 22
					},

          tabBarStyle: {
						backgroundColor: "#fff",
					},
					tabBarActiveBackgroundColor: "#000",
					tabBarActiveTintColor: "#fff",
				}}
			>
        <Tabs.Screen
          name="Evanescense"
          component={TelaHome}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Sobre a banda"
          component={TelaSobre}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="guitar-electric" size={24} color={ color } />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
