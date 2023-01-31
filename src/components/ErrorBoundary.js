import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: "",
    };
  }

  componentDidCatch(error) {
    console.log("caught an Error");
    //This method is executed only if there is an error
    this.setState({
      error: error,
    });
  }

  render() {
    console.log(typeof this.state.error, "Error");
    if (this.state.error) {
      return (
        <div style={{background:"red"}}>
         Something Went Wrong
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
