import React, { Component } from 'react';
import MessageContext from './contexts/MessageContext';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
// import Footer from './components/Footer';
import Nav from './components/Nav';
import ArticlesListing from './components/ArticlesListing';
import Content from './components/Content';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    //* Definitions:
    // Msg is the POST request, latest is the latest POST response, msgs is an array of all messages (future use perhaps)
    this.state = {
      msg: '',
      latest: '',
      msgs: [],
      navItems: [
        {
          url: '/one',
          icon: '/path'
        },
        {
          url: '/one',
          icon: '/path'
        },
        {
          url: '/one',
          icon: '/path'
        },
        {
          url: '/one',
          icon: '/path'
        }
      ],
      articles: [],
      activeArticle: 3,
      notificationShow: false
    };
    // Binding Form Event Handlers to this
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
  }

  // Checking to see if we're up and running
  componentDidMount() {
    console.log(`🏇 App`);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // POST request
    axios
      .post('http://localhost:9000/', {
        msg: this.state.msg
      })
      .then((res) => {
        //TODO: create new route/view for msgs
        console.log(res.data);
        this.setState({
          msg: '',
          msgs: res.data[1],
          latest: res.data[0],
          notificationShow: true
        });
      })
      .catch((error) => {
        console.log('hi' + error);
        alert(
          `🙅  ${error} \nWe're sorry, your message could not be sent at this time.`
        );
        //TODO refactor notificaiton to handle errors as well
      });
  }

  closeNotification = (e) => {
    console.log('close');
    this.setState({
      notificationShow: false
    });
  };

  render() {
    return (
      <MessageContext.Provider value={this.state}>
        <div className='app-container'>
          <Header />
          <Main>
            <Nav items={this.state.navItems} />
            <ArticlesListing
              articles={this.state.articles}
              activeArticle={this.state.activeArticle}
            />
            <div className='content-container'>
              <Content />
              <footer className='message-container'>
                <div
                  onClick={this.closeNotification}
                  className={`notification ${
                    this.state.notificationShow ? `opening` : `closing`
                  }`}>
                  <p>
                    <strong>✔️ Successfully sent</strong> "{this.state.latest}".
                    <strong></strong>
                  </p>
                  <p className='close'>✕</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type='text'
                    placeholder='Message...'
                    name='msg'
                    onChange={this.handleInputChange}
                    value={this.state.msg}
                  />
                  <button type='submit'>Submit</button>
                </form>
              </footer>
            </div>
          </Main>
        </div>
      </MessageContext.Provider>
    );
  }
}

export default App;
