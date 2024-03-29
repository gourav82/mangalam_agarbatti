import React, { useState } from 'react'

const Enquary = () => {
    const [formData, setFormData] = useState({
   name:"",
   email:"",
   mobile:"",
   address:"",
   pincode:"",
   city:"",
   state:"",
   country:"",

    })
    const handleFormData =(e)=>{
        setFormData((prevState)=>{
            return{
                ...prevState,
                [e.target.name]: e.target.value, 
            }
        })
        console.log("heloo forknjn oanjn",formData);
    } 
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log("submit form data", formData);

        try{
          if(responce.status === 200){
            localStorage.setItem('token', responce.data.token);
          }else{
            console.log('login faild')
          }
        } catch(error){
         console.log(error);
        }


    }
  return (
    
        <form className='enquiry flex flex--direction-column' onSubmit={(e)=>handleSubmit(e)}>
           <div className='enquiry flex flex--justify-content-between flex--align-items-center width--coloumn-90'>
            <div className='flex flex--direction-column width--column-two-5'>
                <input type="text" placeholder="name" name="name" value={formData.name} onChange={(e)=>handleFormData(e)}/>
                <input type="text" placeholder="email" name="email" value={formData.email} onChange={(e)=>handleFormData(e)}/>
                <input type="text" placeholder="mobile" name="mobile" value={formData.mobile} onChange={(e)=>handleFormData(e)}/>
                <input type="text" placeholder="address" name="address" value={formData.address} onChange={(e)=>handleFormData(e)}/>
            </div>
            <div className='flex flex--direction-column width--column-two-5'>
                <input type="text" placeholder="pincode" name="pincode" value={formData.pincode} onChange={(e)=>handleFormData(e)}/>
                <input type="text" placeholder="city" name="city" value={formData.city} onChange={(e)=>handleFormData(e)}/>
                <input type="text" placeholder="state" name="state" value={formData.state} onChange={(e)=>handleFormData(e)}/>
                <input type="text" placeholder="country" name="country" value={formData.country} onChange={(e)=>handleFormData(e)}/>
            </div>
            </div>
            <button type='submit' className='bg--error color--white bg--radius pd--5 fs--25 width--column-three-10 block--auto'>Submit</button>
        </form>
   
  )
}

export default Enquary