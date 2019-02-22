import React, { Component } from 'react';
import './App.css';
import { users } from  './mock-data';  //import users mock data to app js component


class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        users : users//set state as users
      };
  }

  handleRemove = (e) => {
    // alert('Do you really want to delete');
   let users = JSON.parse(JSON.stringify(this.state.users));
   console.log(users);
   users.splice(e, 1);
    this.setState({
      users
    })
  }


  render() {
    return (
      <div>
          <h1 id='header'>User's Mock Data</h1>
          <div className="red">
            {this.state.users.map(user => 
              <li key={user.id} className='box'>{user.name}
                <button id='del' onClick={this.handleRemove}>X</button>
                <br />{user.phone}
              </li>)
            }
          </div>
      </div>
    );
  }
}

export default App;
