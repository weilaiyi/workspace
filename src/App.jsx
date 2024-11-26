import React from "react";

let status = {
  a: { key: 1 },
  b: { key: 1 },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("App Constructor", props);
  }

  handleChange() {
    if (status.a.key < 4) {
      status.a = { key: status.a.key + 1 };
      status.b = { key: status.b.key + 1 };
      this.forceUpdate();
    }
  }

  render() {
    console.log("App Render");
    return (
      <div>
        <A a={status.a} onChange={this.handleChange.bind(this)} />
        <B b={status.b} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

class A extends React.Component {
  constructor(props) {
    super(props);
    console.log("A Constructor", props);
    this.props.onChange();
    // Promise.resolve().then(() => {
    //   console.log("A constructor Promise");
    //   this.props.onChange();
    // });
  }

  componentDidMount() {
    console.log("A Mounted", this.props);
    this.props.onChange();
    // Promise.resolve().then(() => this.props.onChange());
  }

  componentDidUpdate() {
    console.log("A Updated", this.props);
    // this.props.onChange();
  }

  render() {
    console.log("A Render", this.props);
    return "A";
  }
}

class B extends React.Component {
  constructor(props) {
    super(props);
    // props.onChange();
    console.log("B Constructor", props);
  }

  componentDidMount() {
    console.log("B Mounted", this.props);
  }

  componentDidUpdate() {
    console.log("B Updated", this.props);
  }

  render() {
    console.log("B Render", this.props);
    return "B";
  }
}

export default App;
