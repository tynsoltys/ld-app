import React, { createContext, Component } from 'react';
const axios = require('axios');

export const WorkspaceContext = createContext();

class WorkspaceContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      loading: false,
      notificationShow: false,
      notificationString: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // POST request
    axios
      .post(
        '/',
        {
          msg: this.state.msg
        },
        this.setState({
          loading: true
        })
      )
      .then((res) => {
        console.log(res);
        const notificationString = `<p>&#127881; <strong>Successfully sent: </strong> ${res.data.msg}</p>`;
        this.setState({
          msg: '',
          latest: res.data.msg,
          notificationShow: true,
          loading: false,
          notificationString
        });
      })
      .catch((error) => {
        console.log('🙅 ' + error);
        const notificationString = `<p>&#128584; <strong>Uhoh! Your message could not be sent.</strong> (${error})</p>`;
        this.setState({
          loading: false,
          notificationString,
          notificationShow: true
        });
      });
  }

  closeNotification = () => {
    this.setState({
      notificationShow: false
    });
  };

  render() {
    return (
      <WorkspaceContext.Provider
        value={{
          ...this.state,
          handleInputChange: this.handleInputChange,
          handleSubmit: this.handleSubmit,
          closeNotification: this.closeNotification
        }}>
        {this.props.children}
      </WorkspaceContext.Provider>
    );
  }
}

export default WorkspaceContextProvider;
