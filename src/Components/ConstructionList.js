import axios from 'axios';
import React,{useState,useEffect} from 'react'
import './ConstructionList.css';


export default function ConstructionList() {
    const[construction,setConstruction] = useState([]);
    const[message,setMessage] = useState('');

    useEffect(() =>{
        const fetchData = async() =>{
            try{
                const response = await axios.get('http://localhost:8080/construction/getCons');
                if(response.status === 200){
                    console.log("Success!All Constructionservice");
                    setConstruction(response.data);
                }else{
                    setMessage("No data found!")
                }
            }catch(error){
                setMessage("No data found for Construction!");
            }
        };
        fetchData();
    }, [])
  return (
    <div className='card-client'>
    {construction.map((construction) => (
      <div key={construction.id} className='card-client-item'>
        <h3 className='card-serviceName'>{construction.serviceName}</h3>
        <p className='card-description'>{construction.description}</p>
        <h4 className='card-address'>{construction.address}</h4>
        <h4 className='card-phone'>{construction.phone}</h4>
      </div>
    ))}
  </div>
  )
}
