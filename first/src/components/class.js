//conversion to class based
import { Component } from "react"

// function is replaced by class keyword and extends with Component and the return is wrapped with render method.. 
export default class functional extends Component {
    // render containing the JSX where interfers gets render and updates on sate schange. 

    // declaring state on class based component. State Name is Fixed. , with considering object literals
    state = {
        counter: 0
    }

    increment = () => {
        let c = this.state.counter;
        c++;
        this.setState((state, props) => {
            return {
                counter: c
            }
        }, () => { console.log('The Component is rendered') })
    }

    render() {
        return (
            <div>
                I am functional Component
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}> Increment</button>
            </div>
        )
    }
}

// class component has setState() predefined keyword.  its request to update for state makes queue for updating component.
// setState( changeObject, [optional callback])


// Optional Callback function is called once the  setState() completes the execution and the component is re-rendered.


// What is the component life cycle method in class component?
// When you have a class component, there are various phases where the component life cycle methods are getting executed automatically
// like constructor() render(), componentWillMount(), shouldComponentUpdate() , when you have to write some code at a particualr sequence then you will use the
// component life cycle methods

// phases mounting, updating, unmounting, error handling,
//purpose execute peice of code depending on the peice of sequence, or requirements. 