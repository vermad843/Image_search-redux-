const SEARCH_TERM_CHANGED = 'SEARCH_TERM_CHANGED';

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
    default : 
     return state;
  }



}