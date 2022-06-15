import React, { Component } from 'react'
import firebase from '../utils/firebase.js'
import axios from 'axios'

class ContactForm extends Component {

  state = {
    submit: false,
    name: "",
    email: "",
    message: "",
    database: null,
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    // const itemsRef = firebase.database().ref('contacts');
    // const item = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   message: this.state.message
    // }
    // itemsRef.push(item);
    // this.setState({
    //   name: '',
    //   email: '',
    //   message: '',
    //   submit:true
    // });
    const scriptUrl = "https://sheet.best/api/sheets/3f7642d3-dd05-4f37-a997-89c7ac330084"

  const item = {
      Timestamp: new Intl.DateTimeFormat('en-UK', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now()),
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    // fetch(scriptUrl, {
    // method: 'POST', 
    // body: new FormData(event.target.value),

    // }).then(res => {
    //       console.log(res)
    //       console.log("SUCCESSFULLY SUBMITTED")
    //       // setLoading(false)
    // })
    //   .catch(err => console.log(err))
    // axios.post(scriptUrl, this.state)
    // .then(response => {
    //   console.log(response);
    // })

    axios.post(scriptUrl, item)
    .then((response) => {
      console.log("ok");
    })
    this.setState({
        name: '',
        email: '',
        message: '',
        submit:true
      });
  }


  render() {
    const { submit } = this.state;

    return(
      <section>
        { submit &&
          <p>Your message has been sent! Thank you for contacting us!</p>
        }

        <form  onSubmit={this.handleSubmit} class="dzForm">
        <div class="row">
        <div class="col-lg-12">
        <div class="form-group">
          <div class="input-group">
            <input
              required
              type="text"
              name="name"
              class="form-control"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Your name"
            />
          </div>
          </div>
          </div>
        <div class="col-lg-12">
        <div class="form-group">
          <div class="input-group">
            <input
              required
              type="email"
              name="email"
              class="form-control"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder=" Your Email"
            />
          </div>
          </div>
          </div>
        <div class="col-lg-12">
        <div class="form-group">
          <div class="input-group">
            <textarea
              required
              type="text"
              name="message"
              rows="4" class="form-control"
              value={this.state.message}
              onChange={this.handleInputChange}
              placeholder="Your Message"
            />
          </div>
          </div>
        </div>
          <div  class="col-lg-12">
            <button type="submit" class="site-button ">Submit</button>
          </div>
          </div>
        </form>
      </section>
    )
  }
}


export default ContactForm;