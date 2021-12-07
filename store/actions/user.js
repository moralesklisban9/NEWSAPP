//! AÑADIR CLIP Acción
export const addClip = ({ clip }) => {
    return {
      type: 'ADD_CLIP',
      clip,
    }
  }

//! Acción DELETE CLIP
  export const deleteClip = ({ clip }) => {
    return {
      type: 'DELETE_CLIP',
      clip,
    };
  };