import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { useSelector } from "react-redux"
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';//exportando componentes de nodes moudle

const styles = StyleSheet.create({//creando contenedor para que contenga lo que manda a traer la api url,texto
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
})

export default ClipScreen = ({navigation}) => {//exportando pantalla clip
  const user = useSelector(state => state.user)
  const { clips } = user;
  return (
    <SafeAreaView style={ styles.container }>
      <FlatList
        data={ clips }
        renderItem={({ item }) => (
          <ListItem
            imageUrl={ item.urlToImage }//url de imagen
            title={ item.title }//titulo del articulo
            author={ item.author }//autor del articulo
            onPress={() => 
              navigation.navigate("Article", { article: item })
            } //*component.name
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};