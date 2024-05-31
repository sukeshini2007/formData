import { Button, Container, TextField, Typography } from '@mui/material'

import { useState } from 'react'
const HomePage =()=>{
    const [formData, setFormData]=useState({
        fullName:'',
        firstName:'',
        lastname:'',
        MiddleName:'',
        PhoneNo:''
    })
    const [errorMesage, setErrorMessage] = useState('');
    const handleChange =(event)=>{
    const {name,value} =event.target
    setFormData((prev)=>({...prev, [name]:value}))
    
    if(name === 'fullName'){
        // for spliting array 
        const newValue = value.split(' ')

     console.log(newValue)
     setFormData((prev) => ({
        ...prev,
        firstName: newValue[0] || '',
            // checking with  array length and ternary operator for keeping empty otherwise it will give booleav value
        MiddleName: newValue.length > 2 ? newValue[1] : '',
            //    for accesing last  array element
        lastname: newValue.length > 1 ? newValue[newValue.length - 1] : ''
    }));

   }
}
    const handleSubmit =()=>{
        if (!formData.fullName) {
            setErrorMessage('Required');
        } else {
           
            console.log(formData);
        }
    }
   
    
    return(
<Container sx={{ display: 'flex', flexDirection: 'column', gap: 1 }} maxWidth='sm'>
            <TextField value={formData.fullName} onChange={handleChange} name='fullName' label='Full Name' />
            <TextField value={formData.firstName} onChange={handleChange} name='firstName' label='First Name' />
            <TextField value={formData.MiddleName} onChange={handleChange} name='MiddleName' label='Middle Name' />
            <TextField value={formData.lastname} onChange={handleChange} name='lastname' label='Last Name' />
            <TextField value={formData.PhoneNo} onChange={handleChange} name='PhoneNo' type='number' label='Phone Number' />
            <Typography sx={{ color: 'red' }}>{errorMesage}</Typography>
            <Button variant='contained' onClick={handleSubmit}>Submit</Button>
        </Container>
    )
}
export default HomePage