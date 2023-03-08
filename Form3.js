import axios from 'axios';
import './Frm.css'
import React, { Component } from 'react'
export class form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        aid:'',
        aname:'',
        acount: '',
        email:'',
        phoneno:'',
        adistrict: ''
    };
  }

  handleIdChange = (event) => {
    this.setState({ aid: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ aname: event.target.value });
  };

  handleCountChange = (event) => {
    this.setState({ acount: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ phoneno: event.target.value });
  };

  handleAddressChange = (event) => {
    this.setState({ adistrict: event.target.value });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        aid: this.state.aid,
        aname: this.state.aname,
        acount: this.state.acount,
        email: this.state.email,
        phoneno: this.state.phoneno,
        adistrict: this.state.adistrict,

        
      };
    
      axios.put('http://127.0.0.1:8080/updatedet1', data)
  };
  render() {
    return (
      <>
      <div className="ig"></div>
      <div className='container'>
          
      <form onSubmit={this.handleSubmit}>
          <h1><center>Update Your Details</center></h1>
          
          <div className='row'>
              <label>Enter ID:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
              <input type="number" id='aid' placeholder='ID' 
                    value={this.state.aid}
                    onChange={this.handleIdChange}/>
          </div>
          &nbsp;
         
          

          <div className='row'>
              <label>Enter Name:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
              <input type="text" id='aname' placeholder='Name' 
                     value={this.state.aname}
                     onChange={this.handleNameChange}/>
          </div>
          &nbsp;
      

          <div className='row'>
              <label>Enter Count:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
              <input type="number" id='acount' placeholder='Count' 
                     value={this.state.acount}
                     onChange={this.handleCountChange}/>
          </div>
          &nbsp;
      
          <div className='row'>
              <label>Enter Email:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
              <input type="email" id='email' placeholder='Email' 
                   value={this.state.email}
                   onChange={this.handleEmailChange}/>
          </div>
          &nbsp;
      
          
          <div className='row'>
              <label>Enter PhoneNo:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
              <input type="number" id='phoneno' placeholder='Phoneno' 
                     value={this.state.phoneno}
                     onChange={this.handlePhoneChange}/>
          </div>
          &nbsp;


          <div className='row'>
              <label>Enter Address:&ensp;&ensp;&ensp;&ensp;</label>
              <input type="Address" id='adistrict' placeholder='Address' 
                  value={this.state.adistrict}
                  onChange={this.handleAddressChange}/>
          </div>

          <div className='row'>
              <button className="bon">Submit</button>
          </div>
      </form>

      </div>
      </>
    )
  }
}

export default form1