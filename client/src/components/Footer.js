import React, { Component } from 'react';
import { WorkspaceContext } from '../contexts/WorkspaceContext';
import ReactHtmlParser from 'react-html-parser';

class Footer extends Component {
  static contextType = WorkspaceContext;

  render() {
    return (
      <WorkspaceContext.Consumer>
        {(context) => {
          // Destructuring variables for component
          const {
            msg,
            notificationShow,
            handleInputChange,
            handleSubmit,
            loading,
            closeNotification,
            notificationString
          } = this.context;
          return (
            <footer className='message-container'>
              <div
                className={`notification ${
                  notificationShow ? `opening` : `closing`
                }`}>
                {ReactHtmlParser(notificationString)}
                <p className='close' onClick={closeNotification}>
                  ✕
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  placeholder='Message...'
                  name='msg'
                  onChange={handleInputChange}
                  value={msg}
                  className={
                    loading || msg.length > 0 ? `hasUnsentContent` : undefined
                  }></input>
                <button
                  type='submit'
                  className={loading || msg.length > 0 ? `loading` : undefined}>
                  {loading ? `Sending` : `Submit`}
                </button>
              </form>
            </footer>
          );
        }}
      </WorkspaceContext.Consumer>
    );
  }
}

export default Footer;
