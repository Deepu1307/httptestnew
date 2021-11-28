import React, { Component } from 'react'

export class NewForm extends Component {

  

    state={
        id: '',
        firstName : '',
        lastName : '',
        submit : false,
        error : false
    }

    componentDidUpdate()
    {
        console.log(this.props,"updated props");
    }

    submitform = (event)=>{
        event.preventDefault()
        console.log(this.state,"state value")
// setstate is an async function so it is taking quite some time for updating the value so we are using settimeout to cope up with the lag happened due to set state
        setTimeout(() => {
            this.setState({
                submit : true,
            })
            if(!this.state.id && this.state.submit)
            {
                this.setState({
                    error:true
                })
            }
            this.props.onSubmit(this.state)
        }, 0);
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitform}>
                  <div className="ui form">
                <label>userId</label>
                <input type="number" name="userId" value={this.state.id} onChange={(e)=> this.setState({id:e.target.value})} />
                {this.state.error ? <span style={{color:"red"}}>User id is required</span> : '' }
                </div>
                <div className="ui form">
                <label>firstName</label>
                <input type="text" value={this.state.firstName} onChange={(e)=> this.setState({firstName:e.target.value})} />
                </div>
                <div className="ui form">
                <label>lastName</label>
                <input type="text" value={this.state.lastName} onChange={(e)=> this.setState({lastName:e.target.value})} />
                </div>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewForm
