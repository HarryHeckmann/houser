import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {updateName, updateAddress, updateCity, updateState, updateZipcode} from '../../ducks/reducer'

import '../Wizard/Wizard.css'

class Step_One extends Component {
    render(){
        console.log(this.props.match)
        return(
            <div className='wizard'>
                <div id='inputwizard'>
                    <div className='inputs'>
                        <label for='propertyname'>Property Name</label>
                        <textarea name='propertyname' onChange={(e) => this.props.updateName(e.target.value)}>{this.props.propertyName}</textarea>
                    </div>
                    
                    <div className='inputs'>
                        <label for='address'>Address</label>
                        <textarea name='address' onChange={(e) => this.props.updateAddress(e.target.value)}>{this.props.address}</textarea>
                    </div>
                    

                    <div id='cityStateZip'>
                        <label for='city'>City</label>
                        <textarea name='city' onChange={(e) => this.props.updateCity(e.target.value)}>{this.props.city}</textarea>

                        <label for='state'>State</label>
                        <textarea name='state' onChange={(e) => this.props.updateState(e.target.value)}>{this.props.propertystate}</textarea>

                        <label for='zip'>Zipcode</label>
                        <textarea name='zip' onChange={(e) => this.props.updateZipcode(e.target.value)}>{this.props.zipcode}</textarea>
                    </div>
                </div>
                <div className='steps'>
                        <Link className='changeStep' to='/wizard/step_two'>Next Step</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {propertyName, address, city, propertyState, zipcode} = state

    return {propertyName, address, city, propertyState, zipcode}
}

export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZipcode})(Step_One)