import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from './store';
import API from './API';

class App extends Component {

  formSubmitted(event) {           
    event.preventDefault();       
   this.setState({              
    loading : true,               
    images : []                
   });
    API.search(this.state.searchTerm)
    .then(images => {
      this.setState({
        loading : false ,
       images
      });
    });
  }


  render() {
    const {title , searchTerm, loading ,images } = this.props ;
         return (
      <div>
        <h1>
          {title} 
        </h1>
        <form onSubmit ={this.formSubmitted.bind(this)}>
        <label htmlFor = "searchTerm">Search Term</label>
          <input 
            onChange = {(event) => this.props.onSearchTermChanged(event.target.value)}
            value = {searchTerm}
            className = "u-full-width" 
            type = "text" 
            id = "searchTerm" 
            name = "searchTerm"  />
            <button type = "submit">Search</button>
         </form>
         {loading ? <img src = "Blocks-1s-200px.gif" alt = "" /> : '' }      
          <section className = "images">                        
             {images.map((image) => {
               return <img key ={image.id} alt ={image.description} src ={image.image_url[0]} />
             })}
          </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title : state.title,
    searchTerm : state.searchTerm,
    loading : state.loading ,
    images : state.images
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchTermChanged(searchTerm) {
      dispatch(actions.searchTermChanged(searchTerm));
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);


