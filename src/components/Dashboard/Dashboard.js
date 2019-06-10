import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import './Dashboard.css'

import House from '../House/House'

class Dashboard extends Component {
    constructor(){
        super()
        this.state ={
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount(){
       this.getHouses()
    }
    componentDidUpdate(prevProps){
        if(prevProps.houses !== this.props.houses){
            this.getHouses()
        }
    }

    getHouses(){
        axios
        .get('/api/houses')
        .then(response => {
            console.log(response.data)
            this.setState({houses: response.data})
        })
    }

    deleteHouse(id){
        axios
            .delete('/api/delete'+id)
            .then(response => {
                this.getHouses()
            })
    }

    render(){
        return(
            <div id='dashboard'>
                <div id='dashboardHeader'>
                    <h1>Dashboard</h1>
                    <Link id='newProp' to='/wizard/step_one'>Add New Property</Link>
                </div>
                <h2>Home Listings</h2>
    
                {this.state.houses.map((e,i) => (
                    <House
                        key={i}
                        id = {e.id}
                        propertyname = {e.propertyname}
                        address = {e.address}
                        city = {e.city}
                        state = {e.state}
                        zipcode = {e.zipcode}
                        deleteHouse = {this.deleteHouse}
                        image = {e.image}
                        mortgage = {e.mortgage}
                        rent = {e.rent}
                    />
                ) )}
                
            </div>
        )
    }
}

export default Dashboard