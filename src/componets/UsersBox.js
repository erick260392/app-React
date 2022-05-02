import React, {useState} from 'react';
import users from '../users.json';
import style from '../style.css';



const UsersBox = () => {




    
    let NumberRandom =Math.floor(Math.random()*users.length)
 
    const [index ,setindex]= useState(NumberRandom)

    const Colors =[ 'green', 'yellow', 'lightblue', 'lightgreen', 'lightcoral']


    const ChageUser = () => {
    let NumberRandom =Math.floor(Math.random()*users.length)
  
    setindex(NumberRandom)

    } 
   
    let RandomColor = Math.floor(Math.random()*Colors.length)
    document.body.style = `background: ${Colors[RandomColor]}`
    
    return (
        <div className='card' style={{color: Colors[RandomColor]}} >
            <h1 > {users[index].name.title} {users[index].name.first} {users[index].name.last} </h1>
         
            <img  src={users[index].picture.medium} alt="" />
<div className="info">
    <div> <i className="i fa-solid fa-envelope"></i>{users[index].email}</div>
    <div> <i className='fa-solid fa-phone'></i> {users[index].phone} </div>
    <div> <i className='fa-solid fa-location-dot' ></i>{users[index].location.city}, {users[index].location.country} </div>


    
</div>
            
           <div><button onClick={ChageUser} >Cambiar usuario</button></div>
    
        </div>
    );
};

export default UsersBox;

