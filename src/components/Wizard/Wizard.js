import React, {Component} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
// import routes from '../../routes'

import Step_One from '../Step_One/Step_One'
import Step_Two from '../Step_Two/Step_Two'
import Step_Three from '../Step_Three/Step_Three'

import './Wizard.css'

export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {}
    }

    render(){
        // console.log(this.props.match)
        return(
            <div className='wizard'>
                <div id='wizardHeader'>
                    <h1>Add New Listing</h1>
                    <Link id='cancel' to='/'>Cancel</Link>
                </div>
               
                <Switch>
                    {/* <Route path='wizard/step_one' render={() =>({Step_One})}/>  */}
                    <Route path='/wizard/step_one' component={Step_One}/>
                    <Route path='/wizard/step_two' component={Step_Two}/>
                    <Route path='/wizard/step_three' component={Step_Three}/>
                </Switch>
                    
            </div>
        )
    }
}