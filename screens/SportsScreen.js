import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem'; //* importación de componente
import Constants from 'expo-constants'
import axios from 'axios'
import Loading from '../components/Loading'



const URL = 'https://newsapi.org/v2/everything?&language=en&domains=foxsports.com,nba.com,nfl.com,mlssoccer.com,nhl.com,&pageSize=100&page=1&apiKey=3037f8b62af64c07b753211615f7038c';//url de la api,mandando a llamar apikey desde app.json


const styles = StyleSheet.create({
  container: {
    flex: 1, //* Misma pantalla que resetCss
    backgroundColor: 'black',
  },
});
export default HomeScreen = ({ navigation }) => {

  const [articles, setArticles] = useState([]); //*estado introducido
  const [loading, setLoading] = useState(false);
                  

  useEffect(() => { //* Introducción de efecto de uso
    fetchArticle();
  }, []) //*Si pasa una matriz vacía, se activará solo cuando se monte


  const fetchArticle = async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);//mostrando posible error a la hora de cargar datos desde la api
    }
    setLoading(false);
  }
  //desplegando lista de articulos
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={ articles } //* Pon una matriz de datos
      renderItem={({ item }) =>( 
        <ListItem
          imageUrl={ item.urlToImage }
          title={ item.title }
          author={ item.author }
          onPress={() => navigation.navigate("Article", { article: item })} //*component.name
        />
      )}
      keyExtractor={(item, index) => index.toString()}//extracion 
    />
    { loading && <Loading />}
    </SafeAreaView>
  );
}