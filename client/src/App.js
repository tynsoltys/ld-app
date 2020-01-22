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
      navItems: []
    };
  }

  // Checking to see if we're up and running
  componentDidMount() {
    console.log(`🏇 App is running`);
    const navItems = workspaceGenerator(4);
    this.setState({ navItems });
  }

  render() {
    const { navItems } = this.state;
    return (
      <WorkspaceContextProvider>
        <div className='app-container'>
          <Header />
          <Main>
            <Nav items={navItems} />
            <ArticlesListing />
            <div className='content-container'>
              <Content />
              <Footer />
            </div>
          </Main>
        </div>
      </WorkspaceContextProvider>
    );
  }
}

export default App;
