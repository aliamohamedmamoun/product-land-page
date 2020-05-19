import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div>
        <form
          id="form"
          action="https://www.freecodecamp.com/email-submit"
          target="_blank"
        >
          <input
            id="email"
            type="email"
            //name="email"
            placeholder="Enter your email address"
            required
          />
          <input
            id="submit"
            type="submit"
            //name="submit"
            value="GET STARTED"
          />
        </form>
      </div>
    );
  }
}

export default Form;
