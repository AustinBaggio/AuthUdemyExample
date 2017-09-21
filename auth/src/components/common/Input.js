import React from 'react';
import { TextInput, View, Text } from 'react-native';

//label prop
const Input = ({ label }) => {
  return (
    <View>
      <Text>
        {label}
      </Text>
    </View>
   );
};

export { Input };
