import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Main = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
                animated={true}
                backgroundColor="#fd2ff3"
                barStyle={'default'} />
      <Tabs screenOptions={{ tabBarActiveTintColor: '#f835ee' }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen 
          name="weather"
          options={{
            title: 'Weather',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome size={28} name='cloud' color={color} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({});
