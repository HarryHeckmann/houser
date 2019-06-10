import React from 'react'
import delete_button from '../../images/delete_button.png'

import './House.css'

export default function House(props){
        return(
            <div className='houses'>
                <div className='houseBox'>
                    <img id='houseImage' src={props.image}/>
                    <div className = 'infoBox'>
                        <div id='mainInfo'>
                            <p>Property Name: {props.propertyname}</p>
                            <p>Address: {props.address}</p>
                            <p>City: {props.city}</p>   
                            <p>State: {props.state}</p>   
                            <p>Zip: {props.zipcode}</p> 
                        </div>
                        <div id='moneyInfo'>
                            <p>Monthly Morgage: {props.mortgage}</p>
                            <p>Desired Rent: {props.rent}</p>
                        </div>
                    </div>
                    <img id='delete' src={delete_button} onClick={() => props.deleteHouse(props.id)}/>
                </div>
            </div>
        )
}