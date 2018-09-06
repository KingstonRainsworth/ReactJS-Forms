import React from 'react';
import PropTypes from 'prop-types';
const content = document.createElement('div');
document.body.appendChild(content);

module.exports = class extends React.Component {
  static displayName = "06-state-input-multi";
  static propTypes = {
    fields: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    people: PropTypes.array.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: '',
        email: '',
      },
      people: [],
    };
  };

  onFormSubmit = (evt) => {
    const peoples = [
      ...this.state.people,
      this.state.fields,
    ];
    this.setState({
      people: peoples,
      fields: {
        name: '',
        email: ''
      }
    });
    evt.preventDefault();
  };

  onInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields : fields });
  };

  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Name'
            name='name'
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />

          <input
            placeholder='Email'
            name='email'
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />

          <input type='submit' />
        </form>

        <div>
          <h3>People</h3>
          <ul>
            { this.state.people.map(({ name, email }, i) =>
              <li key={i}>{name} ({ email })</li>
            ) }
          </ul>
        </div>
      </div>
    );
  }
};
