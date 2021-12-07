// importando librerias
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';//importando imagenes,textos, y el view desde index

const styles = StyleSheet.create({
  
  itemContainer: {
    height: 90,
    width: '100%',
    borderColor: 'white',
    borderWidth: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row-reverse" //* Horizontalmente // * columna Verticalmente
  },
  leftContainer: {
    width: 90
  },
  rightContainer: {
    flex: 1, //* Usa espacio
    padding: 10, 
    justifyContent: "space-between", //* Abre una brecha
  },
  text:{
    fontSize: 16,//tamaño de la letra principal dela rticulo (titulo)
    color: 'white'
  },
  subText: {
    fontSize: 12,//tamaño d letra del autor
    color: 'white'
  }
 
});


// * Operador de extensión de objeto
// * props Enviar datos de padre a hijo
const ListItem = ({ imageUrl, title, author, onPress }) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={onPress}> 
        <View style={styles.leftContainer}>
          {!! imageUrl &&( 
            <Image
              style={{ width: 100, height: 80 }}
              source={{uri: imageUrl}} //url de imagen de cada seccion 
            />
          )}
          </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={2} style={styles.text}>{/* 2 o más líneas..... */}
          {title}
          </Text>
          <Text style={styles.subText}>{author}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  
  export default ListItem;