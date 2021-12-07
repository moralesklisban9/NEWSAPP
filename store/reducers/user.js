const initialState = {
    clips: []
  }
  
  const reducer = ( state = initialState, action ) => {
    switch (action.type) {
      case 'ADD_CLIP'://llamdo a agregar favorito
        return {
          ...state,//retornamos el estado
          clips: [...state.clips, action.clip]//mandamos la imformacion del articulo
        };
      case 'DELETE_CLIP'://llamdo a eliminar favorito
        return {
          ...state,
          clips: state.clips.filter(clip => clip.url !== action.clip.url),//eliminamos la informacion del articulo
        };
      default: 
        return state;//retornamos el estado
    }
  };
  
  export default reducer;