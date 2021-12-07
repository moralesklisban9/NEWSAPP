import React from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {WebView} from "react-native-webview";
import {useDispatch, useSelector} from 'react-redux';
import {addClip, deleteClip} from "../store/actions/user";//eliminando o gradando el articulo... extrayendo
import ClipButton  from "../components/ClipButton";
import Loading  from "../components/Loading";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
//exportando la pantalla
export default ArticleScreen = ({route}) => {
  const {article} = route.params;

  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  const { clips } = user;

  const isClipped = () => {
    return clips.some(clip => clip.url === article.url)
  }
//validando valores de eliminado o guardado
  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip({ clip: article }));
    } else {
      dispatch(addClip({ clip: article }));
    }
  }
//retornando el valor de guardado o eliminado en cada articulo al precioanarlo
  return (
    <SafeAreaView style={ styles.container }>
      <ClipButton onPress={ toggleClip } enabled={ isClipped() } />
      <WebView
        source={{uri: article.url}} 
        startInLoadingState={ true }
        renderLoading={() => <Loading/>}//Guardando articulo,iamgen,etc desde la api
      />
    </SafeAreaView>
  );
};