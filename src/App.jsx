import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  
  searchTermChanged(event) {
    this.setState({
     searchTerm : event.target.value                    
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
            onChange = {this.searchTermChanged.bind(this)}
            value = {searchTerm}
            className = "u-full-width" 
            type = "text" 
            id = "searchTerm" 
            name = "searchTerm"  />
            <button type = "submit">Search</button>
         </form>
         {loading ? <img src = "Blocks-1s-200px.gif" /> : '' }      
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



export default connect(mapStateToProps)(App);


