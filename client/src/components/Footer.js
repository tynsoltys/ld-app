import React, { Component } from 'react';
import { WorkspaceContext } from '../contexts/WorkspaceContext';

class Footer extends Component {
  static contextType = WorkspaceContext;
  render() {
    return (
      <WorkspaceContext.Consumer>
        {(context) => {
          // Destructuring variables for component
          const {
            msg,
            latest,
            notificationShow,
            handleInputChange,
            handleSubmit,
            loading,
            closeNotification
          } = this.context;
          return (
            <footer className='message-container'>
              <div
                onClick={closeNotification}
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
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  placeholder='Message...'
                  name='msg'
                  onChange={handleInputChange}
                  value={msg}
                />
                <button
                  type='submit'
                  className={loading ? `loading` : undefined}>
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
