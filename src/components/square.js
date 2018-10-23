//@flow
import React from 'react';

type State = {
  value: string
};

type Props = { /* ... */ };

export class Square extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        value: "",
      };
    }
  
    render() {
        var vartest1: string = "stringtest";
        var vartest2: string = yes + 1;
      return (
        <button
          className="square"
          onClick={() => this.setValue()}
        >
          {this.state.value}
          {vartest2}
        </button>
      );
    }

    setValue() {
        this.setState({value: 'X'})
    }
  }