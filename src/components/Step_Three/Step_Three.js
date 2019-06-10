import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {updateMortgage, updateRent} from '../../ducks/reducer'

import '../Wizard/Wizard.css'

class Step_Three extends Component {

    onClick(){
        let newValues ={
            propertyname: this.props.propertyName,
            address: this.props.address,
            city: this.props.city,
            state: this.props.propertyState,
            zip: this.props.zipcode,
            image: this.props.image,
            mortgage: this.props.mortgage,
            rent: this.props.rent
        }
        axios
            .post('/api/add', {newValues})
    }

    render(){
        console.log(this.props.match)
        return(
            <div className='wizard'>
                <div id='inputwizard'>
                    <div className='inputs'>
                        <label for='mortgage'>Monthly Mortgage Amount</label>
                        <textarea name='mortgage' onChange={(e) => this.props.updateMortgage(e.target.value)}>{this.props.mortgage}</textarea>
                    </div>
                    <div className='inputs'>
                        <label for='rent'>Desired Monthly Rent</label>
                        <textarea name='rent' onChange={(e) => this.props.updateRent(e.target.value)}>{this.props.rent}</textarea>
                    </div>
                </div>
                <div className='steps'>
                    <Link id='complete' to='/' onClick={() =>this.onClick()}>Complete</Link>
                    <Link className='changeStep' to='/wizard/step_two'>Previous Step</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {propertyName, address, city, propertyState, zipcode, image, mortgage, rent} = state

    return {propertyName, address, city, propertyState, zipcode, image, mortgage, rent}
}

export default connect(mapStateToProps, {updateMortgage, updateRent})(Step_Three)