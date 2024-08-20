import { View, Text, Image } from 'react-native';
import React from 'react'; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{ height: hp(60), paddingHorizontal: wp(5) }} className="space-y-4">
      <Text style={{ fontSize: wp(6.5), fontWeight: '600' }} className="text-gray-700">
        Features
      </Text>
      <View style={{ padding: wp(4), borderRadius: wp(2), marginBottom: wp(2) }} className="bg-emerald-200">
        <View className="flex-row items-center" style={{ marginBottom: wp(2) }}>
          <Image source={require('../../assets/images/chatgpticon.png')} style={{ height: hp(4), width: hp(4), marginRight: wp(2) }} />
          <Text style={{ fontSize: wp(4.8), fontWeight: '600' }} className="text-gray-700">ChatGPT</Text>
        </View>
        <Text style={{ fontSize: wp(3.8) }} className="text-gray-700 font-medium">
          ChatGPT can provide you with instant & knowledgeable responses, assist you with creative ideas on a wide range of topics.
        </Text>
      </View>

      <View style={{ padding: wp(4), borderRadius: wp(2), marginBottom: wp(2) }} className="bg-purple-200">
        <View className="flex-row items-center" style={{ marginBottom: wp(2) }}>
          <Image source={require('../../assets/images/dallicon.png')} style={{ height: hp(4), width: hp(4), marginRight: wp(2) }} />
          <Text style={{ fontSize: wp(4.8), fontWeight: '600' }} className="text-gray-700">DALL-E</Text>
        </View>
        <Text style={{ fontSize: wp(3.8) }} className="text-gray-700 font-medium">
          DALL-E can generate imaginative and diverse images from textual description, expanding the boundaries of visual creativity.
        </Text>
      </View>

      <View style={{ padding: wp(4), borderRadius: wp(2), marginBottom: wp(2) }} className="bg-cyan-200">
        <View className="flex-row items-center" style={{ marginBottom: wp(2) }}>
          <Image source={require('../../assets/images/smartaiicon.png')} style={{ height: hp(4), width: hp(4), marginRight: wp(2) }} />
          <Text style={{ fontSize: wp(4.8), fontWeight: '600' }} className="text-gray-700">Smart AI</Text>
        </View>
        <Text style={{ fontSize: wp(3.8) }} className="text-gray-700 font-medium">
          Smart AI is a powerful voice assistant with the abilities of ChatGPT and DALL-E, providing you the best of both worlds.
        </Text>
      </View>
    </View>
  );
}