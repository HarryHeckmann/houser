import React from 'react'
import logo from '../../images/houser_logo.png'
import './Header.css'


export default function Header(){
        return(
            <div id='header'>
                <div id='logo_title'>
                    <img src={logo}/>
                    <h1 id='title'>Houser</h1>
                </div>
                
            </div>
        )
}