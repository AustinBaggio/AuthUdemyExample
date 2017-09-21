import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#0174DF',
    fontSize: 18,
    //fontFamily: 'sans-serif-thin',
    //fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10

  },
  buttonStyle: {
    flex: 1, //expand to fill content
    alignSelf: 'stretch', //position and stretch to fill limits
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#0174DF',
    marginLeft: 5,
    marginRight: 5

  }
};

export { Button };
