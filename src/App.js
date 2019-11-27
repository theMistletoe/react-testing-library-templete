import React from "react";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        console.log('it was called')
    }
//   state = { greeting: 'Hello' };
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleLogin}>
            <div>
                <label>
                    email:
                    <input type="text" placeholder="Input Your Email Address"></input>
                </label>
            </div>

            <div>
                <label>
                    password:
                    <input type="password" placeholder="Password"></input>
                </label>
            </div>

            <div>
                <button type="submit">Login</button>
            </div>
        </form>
        {/* <div data-testid="greeting">{this.state.greeting}</div> */}
      </div>
    );
  }
}
