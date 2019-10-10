import React, {Component} from 'react'


class Keypad extends Component {

    passwordYumYum = () => console.log("Entering password...")

    render(){
        return(
            <div>
                <input
                    type="password"
                    onKeyUp={this.passwordYumYum}
                />
            </div>
        )
    }
}
export default Keypad