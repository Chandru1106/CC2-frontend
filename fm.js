import { useState, } from 'react';
import './Frm.css'
function ValidatingForm() {
    const initValues={Id:'',Name:'',Count:'',Address:''}
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(values)=>{
        const errors={};

        if(!values.Id)
        errors.Id="Id is Required";

        if(!values.Name)
        errors.Name="Name is Required";
        
        if(!values.Count)
        errors.Count="Count is Required";

        if(!values.Address)
        errors.Address="Address is Required";
        return errors;
    }

    return ( 
        <>
        <div className="ig"></div>
        <div className='container'>
            {
                Object.keys(formErrors).length===0 && isSubmit?
                (<h1 style={{background:"Red",color:"white"}}>Updated Successfully</h1>)
                :(<pre></pre>)
            }
        <form onSubmit={handleSubmit}>
            <h1><center>Update Your Details</center></h1>
            
            <div className='row'>
                <label>Enter ID:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
                <input type="text" id='Id' placeholder='ID' value={formValues.Id}
                    onChange={handleChange}/>
            </div>
            <p  style={{color:"White"}}>{formErrors.Id}</p>

            <div className='row'>
                <label>Enter Name:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
                <input type="Name" id='Name' placeholder='Name' value={formValues.Name}
                    onChange={handleChange}/>
            </div>
            
            <p  style={{color:"White"}}>{formErrors.Name}</p>

            <div className='row'>
                <label>Enter Count:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
                <input type="Count" id='Count' placeholder='Count' value={formValues.Count}
                    onChange={handleChange}/>
            </div>
            <p  style={{color:"White"}}>{formErrors.Count}</p>

            <div className='row'>
                <label>Enter Address:&ensp;&ensp;&ensp;&ensp;</label>
                <input type="Address" id='Address' placeholder='Address' value={formValues.Address}
                    onChange={handleChange}/>
            </div>
            <p  style={{color:"White"}}>{formErrors.Address}</p>

            <div className='row'>
                <button className="bon">Submit</button>
            </div>
        </form>
  
        </div>
        </>
     );
}
export default ValidatingForm;