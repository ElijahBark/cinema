
import React, {Component} from 'react';

const withData = (WrappedComponent, url) => {
    class WithData extends Component {
        state = {
            data: []
        };

        componentDidMount() {
            fetch(url)
                .then((response)=>response.json())
                .then((data)=>this.setState({data}));
        };

        render() {
            return <WrappedComponent data={this.state.data} {...this.props}/>;
        }
    }

    return WithData;
};

export default withData;