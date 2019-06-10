import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {updateImage} from '../../ducks/reducer'

import '../Wizard/Wizard.css'

class Step_Two extends Component {

    render(){
        // const {propertyname, address, city, state, zip} = this.state
        console.log(this.props.match)
        return(
            <div className='wizard'>
                <div id='inputwizard'>
                    <div className='inputs'>
                        <label for='imageUrl'>Image URL</label>
                        <textarea name='imageUrl' onChange={(e) => this.props.updateImage(e.target.value)}>{this.props.image}</textarea>
                    </div>
                </div>
                <div className='steps'>
                    <Link className='changeStep' to='/wizard/step_three'>Next Step</Link>
                    <Link className='changeStep' to='/wizard/step_one'>Previous Step</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {image} = state

    return {image}
}

export default connect(mapStateToProps, {updateImage})(Step_Two)