const SEARCH_TERM_CHANGED = 'SEARCH_TERM_CHANGED';
const SET_LOADING = 'SET_LOADING';

const initialState = {
    title : 'React Image Search',
    searchTerm : '',
    loading : false ,
    images : []                           
   };

export const actions = {
    searchTermChanged(searchTerm) {
        return {
            type : SEARCH_TERM_CHANGED,
            searchTerm
        };
    },
    setLoading(loading) {
        return {
          type : SET_LOADING,
          loading                   //is a payload
        };
    }
}
  

export function reducer(state = initialState,action) {
  switch(action.type) {
    case SEARCH_TERM_CHANGED : {
        return {
            ...state,
            searchTerm : action.searchTerm
        };
    }
    case SET_LOADING : {
        return {
            ...state,
            loading : action.loading
        }
    }
    default : 
     return state;
  }



}