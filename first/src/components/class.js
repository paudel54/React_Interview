//conversion to class based
import { Component } from "react"

// function is replaced by class keyword and extends with Component and the return is wrapped with render method.. 
export default class functional extends Component {
    // render containing the JSX where interfers gets render and updates on sate schange. 

    // declaring state on class based component. State Name is Fixed. , with considering object literals
    state = {
        counter: 0
    }
    render() {
        return (
            <div>
                I am functional Component
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}
