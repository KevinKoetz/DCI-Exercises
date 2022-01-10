import React from "react";

class User extends React.Component<{bootcamp: string}> {
  render() {
    return <h2>{this.props.bootcamp}</h2>
  }
}

export default User;
