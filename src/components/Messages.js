import React, {Component} from 'react';
import axios from 'axios'
import Button from './Button'

class Messages extends Component {
    constructor(){
        super()

        this.state = {
            input: '',
            messages: []

        }
        this.addMessage = this.addMessage.bind(this)
        this.deleteMessage = this.deleteMessage.bind(this)
    }

    componentDidMount(){
        axios.get('/api/messages')
        .then(res => {
            this.setState({
                messages: res.data
            })
        })
    }

    addMessage() {
        axios.post('/api/messages', {input: this.state.input} )
        .then(res => {
            this.setState({
                messages: res.data
            })
        })
        this.setState({input: ''})
    }

    deleteMessage(id) {
        axios.delete(`/api/messages/${id}`)
        .then(res => {
            this.setState({
                messages: res.data
            })
        })
    }

    editMessage(id) {
        axios.put(`/api/messages/${id}`, {input: this.state.input})
        .then(res => {
            this.setState({
                messages: res.data
            })
        })
        this.setState({input: ''})
    }


    render(){
        let displayedMessages = this.state.messages.map((message, i) => (
            <div className="message" key={i}>
                {message}
                <div className='shift'>
                    <button className='button' onClick={() => this.editMessage(i)}><img className='icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgH9892b5wrduqjSffVJ0n9__kwyS-8mveTsZzTOn72XEMDb1d'/></button>
                    <button className='button' onClick={() => this.deleteMessage(i)}><img className='icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5X_hfHvHrjple7fIarQXom-gk4u2bPKO1RQcjgTY6FkPpN4yxmw'/></button>
                </div>
            </div>
            )
        )
    
        return (
        <div>
            <div>
                {displayedMessages}
            </div>
            <div className='input'>
                <input class='input' type="text" placeholder="type here" 
                onChange={(event) => this.setState({input: event.target.value})} value={this.state.input}/>
                <button onClick={this.addMessage}>Submit</button>
            </div>
        </div>

        )
    }
}

export default Messages