import axios from 'axios';
import React,{useState,useEffect} from 'react'


export default function ConstructionList() {
    const[construction,setConstruction] = useState([]);
    const[message,setMessage] = useState('');

    useEffect(() =>{
        const fetchData = async() =>{
            try{
                const response = await axios.get('http://localhost:8080/construction/getAllCons');
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
    <div className='card'>
        {construction.map((construction) =>(
            <div key={construction.id} className='card'>
                <h3 className='card-title'>{construction.serviceName}</h3>
                <p>{construction.description}</p>
                <h4>{construction.address}</h4>
                <h4>{construction.phone}</h4>
            </div>
        ))}
    </div>
  )
}
