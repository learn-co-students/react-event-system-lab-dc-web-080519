import React, {Component} from 'react'

class EyesOnMe extends Component {

    focusWhatever = () => console.log("Good!")
    blurWhatever = () => console.log("Hey! Eyes on me!")

    render(){
        return(
            <button
                onFocus={this.focusWhatever}
                onBlur={this.blurWhatever}
                />
        )
    }
}

export default EyesOnMe 