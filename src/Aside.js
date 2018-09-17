import React, { Component } from "react";
import Form from "./Form";

class Aside extends Component {
  state = {
    fields: {}
  };

  onSubmit = fields => {
    this.setState({ fields });
  };

  render() {
    return (
      <aside>
        <h3>Nice Dress for All Occasions</h3>
        <h4>$59.90</h4>
        <Form onSubmit={fields => this.onSubmit(fields)} />
        <div id="purchaseSummary" className="">
          <h4>Order Summary:</h4>
          <p>
            {this.state.fields.quantity}&nbsp;
            {this.state.fields.size}&nbsp;
            {this.state.fields.color}
          </p>
          <h4>Shipping to:</h4>
          <p>{this.state.fields.name}</p>
          <p>
            {this.state.fields.address1}&nbsp;
            {this.state.fields.address2}
          </p>
          <p>
            {this.state.fields.city}&nbsp;
            {this.state.fields.state}&nbsp;
            {this.state.fields.zip}
          </p>
        </div>
      </aside>
    );
  }
}
export default Aside;
