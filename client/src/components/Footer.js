import React, { Component } from 'react';
import MessageContext from '../contexts/MessageContext';

class Footer extends Component {
  render() {
    return (
      <MessageContext.Consumer>
        {(value) => (
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
              <p>MESSGE: {value.latest}</p>
            </div>
          </footer>
        )}
      </MessageContext.Consumer>
    );
  }
}

export default Footer;
