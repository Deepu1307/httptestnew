import React, { Component } from 'react'
import NewForm from './component/NewForm'
import axios  from 'axios'

export class App extends Component {



  fetchData()
  {
  
        const response =  axios.get('http://localhost:3001/userData/1').then(data=>{
          console.log(data,"data is here");
        });
        console.log(response,"res");
     
  }

  componentDidMount()
  {
    this.fetchData()
  }

  handleOnSubmit = (e)=>{
    console.log(e,"e in handle on submit in app");

    axios.post('http://localhost:3001/userData', {
      id : e.id,
      firstName: e.firstName,
      lastName: e.lastName
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
      <div className="App">
      <NewForm onSubmit = {this.handleOnSubmit}/>
     </div>
    )
  }
}

export default App
