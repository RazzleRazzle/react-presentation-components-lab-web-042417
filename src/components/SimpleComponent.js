import React, {Component} from 'react'


export default class SimpleComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: 'happy'
    }
  }

  changeMood = () => {
    this.setState({ mood: 'sad'})
  }

  render() {
    return(<div onClick={ this.changeMood }>{ this.state.mood }</div>)
  }
}
