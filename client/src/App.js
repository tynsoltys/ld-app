import React, { Component } from 'react';
import MessageContext from './contexts/MessageContext';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
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
      activeArticle: 3
    };
    // Binding Form Event Handlers to this
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({ msgs: res.data[1], latest: res.data[0] });
      })
      .catch((error) => {
        console.log(error);
      });

    //Article Generator (just for purposes of this thing)
    const articleTitle = 'Lorem Ipsum';
    const articleContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo dtempor incididunt veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip export.';
    const arrayGenerator = (num) => {
      let articlesArray = [];
      console.log(`generator ON`);
      while (num > 0) {
        articlesArray.push({
          id: num,
          title: articleTitle,
          content: articleContent
        });
        console.log(`hi`);
        return num - 1;
      }
    };
    arrayGenerator(9);
  }

  render() {
    return (
      <MessageContext.Provider value={this.state}>
        <div className='app-container'>
          <Header />
          <main className='main-container'>
            <Nav items={this.state.navItems} />
            <ArticlesListing
              articles={this.state.articles}
              activeArticle={this.state.activeArticle}
            />
            <div className='content-container'>
              <Content />
              <Footer />
              <footer className='message-container'>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type='text'
                    placeholder='Message...'
                    name='msg'
                    onChange={this.handleInputChange}
                  />
                  <button type='submit'>Submit</button>
                </form>
                <div className='notification error'>
                  <p>MESSGE: {this.state.latest}</p>
                </div>
              </footer>
            </div>
          </main>
        </div>
      </MessageContext.Provider>
    );
  }
}

export default App;
