import React from 'react';

const mapStateWithProps = store => (WrappedComponent) => {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {}
      }
      componentDidMount() {
        this.setState({
            ...store.state
        });
        store.events.subscribe('stateChange', () => {
            this.setState({
                ...store.state
            })
        })
      }

      componentWillUnmount() {
        store.events.unsubscribe('stateChange');
      }

      render() {
        return React.createElement(
          WrappedComponent,
          {
            state: this.state,
            ...this.props
          }
        )
      }
    };
  }

  export default mapStateWithProps;