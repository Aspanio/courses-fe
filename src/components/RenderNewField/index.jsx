import React, { Component } from 'react';
import AddInput from '../AddInput';

export default class RenderNewField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [this.props.element],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { element } = this.props;
    const { elements } = this.state;
    elements.push(element);
    this.setState({
      elements: elements,
    });
  }

  render() {
    const { elements } = this.state;
    const data = elements.map(el => el);
    return (
      <div>
        {data}
        <button type="button" onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
