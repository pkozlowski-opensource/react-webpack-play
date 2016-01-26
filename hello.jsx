import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: 'World'};
    }

    updateName(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.state.name}</h1>
                <input value={this.state.name} onInput={this.updateName.bind(this)} />
            </div>
        );
    }
}

ReactDOM.render(<Hello/>, document.getElementById('app'));