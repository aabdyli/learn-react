import React, {Component} from 'react';

class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;

    this.setState( () => ({
      username: value
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render() {
    return (
    <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>{this.props.label}</label>
        <input
        id='username'
        placeholder='github username'
        type='text'
        value={this.state.username}
        autoComplete='off'
        onChange={this.handleChange}
        />
        <input
        type='submit'
        className='button'
        disabled={!this.state.username}
        value='Submit'
        />
    </form>
    );
  }
}

export default PlayerInput;