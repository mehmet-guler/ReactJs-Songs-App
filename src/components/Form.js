import React from 'react';
import { connect } from 'react-redux';
import { addSong } from '../actions';
class Form extends React.Component {

    state = {
        title: '',
        duration: ''
    }

    saveSong = (e) => {
        e.preventDefault();
        this.props.addSong(this.state)
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.saveSong}>
                <div className="field">
                    <label>Song Name</label>
                    <input type="text" value={this.state.songName} onChange={(e) => this.setState({ title: e.target.value })} />
                </div>
                <div className="field">
                    <label>Duration</label>
                    <input type="text" onChange={(e) => this.setState({ duration: e.target.value })} />
                </div>
                <div className="field">
                    <button className="ui button" type="submit">Save</button>
                </div>
            </form>
        )
    }
}



export default connect(
    null,
    {addSong}
)(Form);
