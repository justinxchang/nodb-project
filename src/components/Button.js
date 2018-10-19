import React, {Component} from 'react';

class Button extends Component {
    editMessage(){
        this.props.editMessage()
    }

    deleteMessage(){
        this.props.deleteMessage()
    }

    render(){
        return(
            <button >

            </button>
        )
    }
}

export default Button



