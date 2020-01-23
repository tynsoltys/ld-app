import React, { createContext, Component } from 'react';
const axios = require('axios');

export const WorkspaceContext = createContext();

class WorkspaceContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      latest: '',
      loading: false,
      notificationShow: false
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
    this.setState({
      notificationShow: false
    });
  };

  render() {
    return (
      <WorkspaceContext.Provider
        value={{
          ...this.state,
          toggleNotification: this.toggleNotification,
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
