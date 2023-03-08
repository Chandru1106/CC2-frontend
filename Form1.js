import axios from 'axios';
import './Frm.css'
import React, { Component } from 'react'
// function ValidatingForm() {
//     const initValues={Id:'',Name:'',Count:'',Address:''}
//     const [formValues,setFormValues]=useState(initValues);
//     const [formErrors,setFormErrors]=useState({});
//     const [isSubmit,setIsSubmit]=useState(false);

//     const handleChange=(event)=>{
//         const{id,value}=event.target;
//         setFormValues({...formValues,[id]:value});
//         console.log(formValues);
//     }

//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         setFormErrors(validate(formValues));
//         setIsSubmit(true);
//     }
//     const validate=(values)=>{
//         const errors={};

//         if(!values.Id)
//         errors.Id="Id is Required";

//         if(!values.Name)
//         errors.Name="Name is Required";
        
//         if(!values.Count)
//         errors.Count="Count is Required";

//         if(!values.Address)
//         errors.Address="Address is Required";
//         return errors;
//     }

    // return ( 
    //     <>
    //     <div className="ig"></div>
    //     <div className='container'>
    //         {
    //             Object.keys(formErrors).length===0 && isSubmit?
    //             (<h1 style={{background:"Red",color:"white"}}>Submitted Successfully</h1>)
    //             :(<pre></pre>)
    //         }
    //     <form onSubmit={handleSubmit}>
    //         <h1><center>Post Your Details</center></h1>
            
    //         <div className='row'>
    //             <label>Enter ID:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
    //             <input type="text" id='Id' placeholder='ID' value={formValues.Id}
    //                 onChange={handleChange}/>
    //         </div>
    //         <p  style={{color:"White"}}>{formErrors.Id}</p>

    //         <div className='row'>
    //             <label>Enter Name:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
    //             <input type="Name" id='Name' placeholder='Name' value={formValues.Name}
    //                 onChange={handleChange}/>
    //         </div>
            
    //         <p  style={{color:"White"}}>{formErrors.Name}</p>

    //         <div className='row'>
    //             <label>Enter Count:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
    //             <input type="Count" id='Count' placeholder='Count' value={formValues.Count}
    //                 onChange={handleChange}/>
    //         </div>
    //         <p  style={{color:"White"}}>{formErrors.Count}</p>

    //         <div className='row'>
    //             <label>Enter Address:&ensp;&ensp;&ensp;&ensp;</label>
    //             <input type="Address" id='Address' placeholder='Address' value={formValues.Address}
    //                 onChange={handleChange}/>
    //         </div>
    //         <p  style={{color:"White"}}>{formErrors.Address}</p>

    //         <div className='row'>
    //             <button className="bon">Submit</button>
    //         </div>
    //     </form>
  
    //     </div>
    //     </>
         //  );
// }
// export default ValidatingForm;

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
    
      axios.post('http://127.0.0.1:8080/addDet12', data)
  };
  render() {
    return (
      <>
      <div className="ig"></div>
      <div className='container'>
          
      <form onSubmit={this.handleSubmit}>
          <h1><center>Post Your Details</center></h1>
          
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