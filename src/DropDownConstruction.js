import React,{useState} from 'react';
import { MeniuConstructionItems } from './MeniuConstructionDrop';
import { Link } from 'react-router-dom';
import './DropDownCons.css';



export default function DropDownConstruction() {
    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <>
    <ul onClick={handleClick}
    className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
        {MeniuConstructionItems.map((item,index)=>{
            return(
                <li key={index}>
                    <Link to={item.path}
                    className={index.cName}
                    onClick={() => setClick(false)}
                    >
                        {item.title}
                    </Link>
                </li>
            );
        })}
    </ul>
    </>
  )
}
