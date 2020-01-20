import React, { Component } from 'react';
import Logo from './ld-logo-square-128.png';
import './App.scss';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: '', latest: '', msgs: [] };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
    // alert('A message has been posted: ' + this.state.msg);
    event.preventDefault();
    console.log(this.state.msg);
    axios
      .post('http://localhost:9000/', {
        msg: this.state.msg
      })
      .then((res) => {
        this.setState({ msgs: res.data, latest: this.state.msg });
      })
      .catch((error) => {
        console.log(`oopzsh`);
      });
  }

  render() {
    return (
      <div className='app-container'>
        {/* {this.state.apiResponse} */}
        <header className='header-container'>
          <div className='logo-container'>
            <img src={Logo} alt='log dna helix logo' />
          </div>
          <h1>What is Lorem Ipsum? {this.state.apiResponse} </h1>
        </header>
        <main className='main-container'>
          <nav className='nav-container'>
            <ul>
              <li>
                <div className='workspace-img'></div>
                <p>⌘ 1</p>
              </li>
              <li>
                <div className='workspace-img'></div>
                <p>⌘ 2</p>
              </li>
              <li>
                <div className='workspace-img'></div>
                <p>⌘ 3</p>
              </li>
              <li>
                <div className='workspace-img'></div>
                <p>⌘ 4</p>
              </li>
            </ul>
          </nav>
          <aside className='articles-list-container'>
            <ul>
              <li>
                <article>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex...
                  </p>
                </article>
                <article>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex...
                  </p>
                </article>
                <article>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex...
                  </p>
                </article>
                <article>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex...
                  </p>
                </article>
                <article>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex...
                  </p>
                </article>
                <article>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex...
                  </p>
                </article>
                <article>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex...
                  </p>
                </article>
                <article>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex...
                  </p>
                </article>
                <article>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex...
                  </p>
                </article>
              </li>
            </ul>
          </aside>
          <div className='content-container'>
            <article>
              <h2>Aenean commodo ligula eget dolor.</h2>
              <h3>Nullam dictum felis eu pede mollis pretium.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                nulla nisi rem aspernatur quas doloribus cum veritatis debitis
                voluptate, nihil, adipisci quisquam. Eligendi maxime libero
                facere consequuntur fugiat, harum dignissimos. Voluptatem
                dolorum vero, rem asperiores praesentium ipsa quidem? Vero,
                labore dignissimos at neque ratione exercitationem eius nisi
                culpa dolor delectus ad non est illum nobis suscipit sapiente
                tenetur beatae? Repellendus? Ab reiciendis eligendi ducimus
                explicabo? Error voluptatibus officiis repellendus sed delectus
                et animi perspiciatis molestiae ab? Magni animi alias voluptatum
                saepe, eaque tempora sed doloribus voluptatem, delectus natus
                sint non?
              </p>
              <section className='article-image'>
                <div className='image'></div>
                <figcaption className='article-caption'>
                  Eligendi maxime libero facere.
                </figcaption>
              </section>
            </article>
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
    );
  }
}

export default App;
