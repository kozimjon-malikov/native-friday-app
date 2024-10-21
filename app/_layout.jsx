import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Main = () => {
  const [heart, setHeartIcon] = useState('heart-o');
  const toggleHeart = () => {
    setHeartIcon(prevIcon => (prevIcon === 'heart' ? 'heart-o' : 'heart'));
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="crimson" />
      <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="user"
          options={{
            title: 'Users',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
          }}
        />
        <Tabs.Screen onPress={toggleHeart}
          name="liked"
          options={{
            title: 'Liked',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome size={28} name={heart} color={color} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({});
