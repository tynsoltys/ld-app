import React, { Component } from 'react';
import './App.scss';

// Components
import Header from './components/Header';
import Main from './components/Main';
// import Footer from './components/Footer';
import Nav from './components/Nav';
import ArticlesListing from './components/ArticlesListing';
import Content from './components/Content';

// State, etc.
import MessageContext from './contexts/MessageContext';

//APIs, Tools, Requests
import { workspaceGenerator } from './utils/utils';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    //* Definitions:
    // Msg is the POST request, latest is the latest POST response, msgs is an array of all messages (future use perhaps)
    this.state = {
      msg: '',
      latest: '',
      navItems: [],
      loading: false,
      notificationShow: false
    };
    // Binding Form Event Handlers to this
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
  }

  // Checking to see if we're up and running
  componentDidMount() {
    console.log(`🏇 App is running`);
    // Do some kind of calls maybe
    const navItems = workspaceGenerator(4);
    this.setState({ navItems });
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
      .post(
        'http://localhost:9000/',
        {
          msg: this.state.msg
        },
        this.setState({
          loading: true
        }),
        console.log(`Sending ` + this.state.msg)
      )
      .then((res) => {
        this.setState({
          msg: '',
          latest: res.data.msg,
          notificationShow: true,
          loading: false
        });
      })
      .catch((error) => {
        console.log('hi' + error);
        alert(
          `🙅 ${error} \nWe're sorry, your message could not be sent at this time.`
        );
        this.setState({
          loading: false
        });
      });
  }

  closeNotification = () => {
    console.log('close');
    this.setState({
      notificationShow: false
    });
  };

  render() {
    const { navItems, notificationShow, msg, latest, loading } = this.state;

    return (
      <MessageContext.Provider value={this.state}>
        <div className='app-container'>
          <Header />
          <Main>
            <Nav items={navItems} />
            <ArticlesListing />
            <div className='content-container'>
              <Content />
              <footer className='message-container'>
                <div
                  onClick={this.closeNotification}
                  className={`notification ${
                    notificationShow ? `opening` : `closing`
                  }`}>
                  <p>
                    <strong>
                      <span role='img' aria-label='check'>
                        ✔️
                      </span>{' '}
                      Successfully sent
                    </strong>{' '}
                    "{latest}".
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
                    value={msg}
                  />
                  <button
                    type='submit'
                    className={loading ? `loading` : undefined}>
                    {loading ? `Sending` : `Submit`}
                  </button>
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
