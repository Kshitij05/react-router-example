import React, {Component} from 'react';
import './Form.css';

// the first  thing that a class does  is  render  then it will return 
class Form extends Component {

  constructor(props){
    super(props);

    this.state  = { fullname: "vinodthapa", 
                    email: "thapa@thapa.com", 
                    phone:"525254524523",
                    message:"what's up homies"
                  }
  }

  // handlename = (event) => {

  //   this.setState({ fullname: event.target.value })

  // }

  // handleemail = (event) => {

  //   this.setState({ email: event.target.value })

  // }

  // handlenumber = (event) => {

  //   this.setState({ phone: event.target.value })

  // }

  // handlemessage = (event) => {

  //   this.setState({ message: event.target.value })

  // }

  handlechange = (event) => {
    this.setState ( { [event.target.name]: event.target.value } )
  }

  handlesubmit = (event) => {
    alert(JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <form onSubmit = {this.handlesubmit}>
          <label> fullname </label><br/>
          <input type="text" name = "fullname" value = {this.state.fullname}
              onChange = {this.handlechange}/><br/>

          <label> Email </label><br/>
          <input type = "email" name = "email" value = {this.state.email}
               onChange = {this.handlechange}/><br/>

          <label> Mobile </label><br/>
          <input type = "number" name = "phone" value = {this.state.phone}
              onChange = {this.handlechange}/><br/>

          <label> Message </label><br/>
          <textarea value = {this.state.message} name = "message"
               onChange = {this.handlechange}/><br/>

          <input type="submit" value="Send"/>

        </form>
      </div>
    )
  }

}

export default Form;