//imprtamos las librerias necesarias para la programacion 
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
})
// esperando el momento clik para desplegar el container
const ClipButton = ({ onPress, enabled }) => {
  const name = enabled ? 'star' : 'star-o';
  return (
    <TouchableOpacity onPress={ onPress } style={ styles.container }>
      <FontAwesome name={ name } size={ 35 } color="black" />
    </TouchableOpacity>
  )
}

export default ClipButton;