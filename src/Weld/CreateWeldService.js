import axios from 'axios';
import React ,{useState,useEffect}from 'react';
import './CreateWeld.css';

export default function CreateWeldService() {
    const[serviceWeldName,setServiceNameWeld] = useState('');
    const[descriptionWeld,setDescriptionWeld] = useState('');
    const[weldingType,setWeldingType] = useState('');
    const[addressWeld,setAddressWeld] = useState('');
    const[pricePerCm,setPricePerCm] = useState('');
    const[phoneWeld,setPhoneWeld] = useState('');
    const[createdWeldServices,setCreateWeldServices ]= useState(null);

    const handleCreateWeldingServices = async() =>{
        try{
            const response = await axios.post('htttp://localhost:8080/weld/addWeld',{
                serviceWeldName:serviceWeldName,
                descriptionWeld:descriptionWeld,
                weldingType:weldingType,
                addressWeld:addressWeld,
                pricePerCm:pricePerCm,
                phoneWeld:phoneWeld
            });

            setCreateWeldServices(response.data);
        }catch(error){
           console.log('Error createing weld services');
        }
    };
  return (
    <div className='card-client-weld'>
        <div className='card-client-item-weld'>
            <div className='mb-3'>
            <h1 className='card-title'>Adauga confectie Metalica</h1>
            <label htmlFor='serviceWeldName' className='card-serviceName-weld'>Adauga confectia metalica pe care ti-o doresti:</label>
            <input
            type='text'
            placeholder='Introdu confectia dorita'
            id='serviceWeldName'
            value={serviceWeldName}
            className='form-control'
            onChange={(e) => setServiceNameWeld(e.target.value)}
            />
            </div>

            <div className='mb-3'>
            <h1 className='card-title'>Adauga confectie Metalica</h1>
            <label htmlFor='serviceWeldName' className='card-serviceName-weld'>Adauga confectia metalica pe care ti-o doresti:</label>
            <input
            type='text'
            placeholder='Introdu confectia dorita'
            id='serviceWeldName'
            value={serviceWeldName}
            className='form-control'
            onChange={(e) => setServiceNameWeld(e.target.value)}
            />
            </div>


            <div className='mb-3'>
            <h1 className='card-title'>Adauga confectie Metalica</h1>
            <label htmlFor='serviceWeldName' className='card-serviceName-weld'>Adauga confectia metalica pe care ti-o doresti:</label>
            <input
            type='text'
            placeholder='Introdu confectia dorita'
            id='serviceWeldName'
            className='form-control'
            value={serviceWeldName}
            onChange={(e) => setServiceNameWeld(e.target.value)}
            />
            </div>
           
        </div>

       
    </div>
  )
}
