import { Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null); // State for weather data
    const [location, setLocation] = useState('Fergana'); // State for the location
    const my_api = '79b0f9958f3c444dae450950220607';

    // Fetch weather data whenever the location changes
    useEffect(() => {
        const fetchWeatherData = async () => {
            const base_url = `https://api.weatherapi.com/v1/current.json?key=${my_api}&q=${location}&aqi=no`;
            try {
                const response = await fetch(base_url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setWeatherData(null);
            }
        };

        fetchWeatherData();
    }, [location]);

    const updateWeather = (txt) => {
        setLocation(txt);
    };

    const handleSearch = () => {
        if (location.trim()) {
            setWeatherData(null);
        }
    };

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#f835ee"
                barStyle={'default'}
            />
            <View>
                <Text className="text-4xl text-center my-5 text-fuchsia-600 shadow-2xl">Weather</Text>
            </View>
            <View className='flex items-center p-4 flex-row border-b border-fuchsia-500 w-full py-2'>
                <TextInput
                    className='appearance-none bg-transparent w-9/12 text-md border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                    placeholder='Search weather...'
                    value={location}
                    onChangeText={(txt) => updateWeather(txt)}
                />
                <Pressable onPress={handleSearch} className='flex-shrink-0 bg-fuchsia-500 hover:bg-fuchsia-700 border-fuchsia-500 hover:border-fuchsia-700 text-sm border-4 text-white py-1 px-2 rounded'>
                    <Text className='text-white'>Search</Text>
                </Pressable>
            </View>
            <View className='my-10'>
                {weatherData ? (
                    <View>
                        <Text className='text-[18px] my-1 mx-3'><Text className='font-bold'>Location:</Text>{weatherData.location?.name}, {weatherData.location?.country}</Text>
                        <Text className='text-[18px] my-1 mx-3'><Text className='font-bold'>Temperature:</Text>{weatherData.current?.temp_c}°C</Text>
                        <Text className='text-[18px] my-1 mx-3'><Text className='font-bold'>Condition:</Text>{weatherData.current?.condition?.text}</Text>
                        <Image
                            source={{ uri: `https:${weatherData.current?.condition?.icon}` }}
                            style={{ width: 100, height: 100,objectFit:'cover' }}
                        />
                    </View>
                ) : (
                    <Text>Loading...</Text>
                )}
            </View>
        </SafeAreaView>
    );
};

export default Weather;

const styles = StyleSheet.create({});
