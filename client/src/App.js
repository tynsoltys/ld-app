import React, { Component } from 'react';
import './App.scss';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ArticlesListing from './components/ArticlesListing';
import Content from './components/Content';

//Utils
import { workspaceGenerator } from './utils/utils';

// State, etc.
import WorkspaceContextProvider from './contexts/WorkspaceContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [],
      workspace: 1
    };
  }

  // Checking to see if we're up and running
  componentDidMount() {
    console.log(`🏇React app is running!`);
    const navItems = workspaceGenerator(4);
    this.setState({ navItems });
  }

  render() {
    const { navItems } = this.state;
    return (
      <div className='app-container'>
        <WorkspaceContextProvider>
          <Header />
          <h1>HI IS THIS EVEN UPDATING</h1>
          <Main>
            <Nav items={navItems} />
            <ArticlesListing />
            <div className='content-container'>
              <Content />
              <Footer />
            </div>
          </Main>
        </WorkspaceContextProvider>
      </div>
    );
  }
}

export default App;
