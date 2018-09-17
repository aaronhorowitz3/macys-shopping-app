import React from "react";

class Form extends React.Component {
  state = {
    color: "",
    size: "",
    quantity: 0,
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      color: "",
      size: "",
      quantity: 0,
      name: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: ""
    });
  };

  render() {
    return (
      <form>
        <div className="styledSelect">
          <select
            id="colorSelect"
            name="color"
            value={this.state.color}
            onChange={e => this.change(e)}
            required
          >
            <option defaultValue>Select a color</option>
            <option value="black dresses">Black</option>
            <option value="red dresses">Red</option>
            <option value="white dresses">White</option>
            <option value="blue dresses">Blue</option>
          </select>
        </div>
        <br />
        <div className="styledSelect">
          <select
            id="sizeSelect"
            name="size"
            value={this.state.size}
            onChange={e => this.change(e)}
          >
            <option defaultValue>Select a size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <br />
        <div className="styledSelect">
          <select
            id="quantitySelect"
            name="quantity"
            value={this.state.quantity}
            onChange={e => this.change(e)}
          >
            <option defaultValue>Select quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <br />
        <p>Enter Shipping Information:</p>
        <input
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={e => this.change(e)}
          required
        />
        <br />

        <input
          name="address1"
          placeholder="Address 1"
          value={this.state.address1}
          onChange={e => this.change(e)}
          required
        />
        <br />
        <input
          name="address2"
          placeholder="Address 2"
          value={this.state.address2}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="city"
          placeholder="City"
          value={this.state.city}
          onChange={e => this.change(e)}
          required
        />
        <br />
        <input
          name="state"
          placeholder="State"
          value={this.state.state}
          onChange={e => this.change(e)}
          required
        />
        <br />
        <input
          name="zip"
          placeholder="Zip Code"
          value={this.state.zip}
          onChange={e => this.change(e)}
          required
        />
        <br />
        <button id="submitButton" onClick={e => this.onSubmit(e)}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
