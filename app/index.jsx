import { FlatList, Pressable, SafeAreaView, StatusBar } from 'react-native';
import { Text, View, } from 'react-native';
import React, { useState } from 'react';
import motivations from '../assets/motivations'
const Index = () => {
    const [txt, setTxt] = useState('');
    const [data, setData] = useState(motivations)
    if (!data) return <Text>Loading....</Text>
    const Items = ({ details }) => {
        return (
            <View className='flex flex-row p-2 w-full shadow-md shadow-gray-400 my-2 bg-orange-50'>
                <Text className='text-black text-xl flex flex-col w-full relative'>
                    <Text className='text-2xl'>🎁</Text> {details.quote} <Text className='text-[12px]'>({details.author})</Text>
                </Text>
            </View>
        )
    }
    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#fd2ff3"
                barStyle={'default'} />
            <Text className=" text-4xl text-center my-5 text-fuchsia-500 shadow-2xl shadow-fuchsia-300">
                Daily Quotes
            </Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Items details={item} />}
            />
        </SafeAreaView>
    );
}

export default Index;
