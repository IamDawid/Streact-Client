import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);  //stream needs to be fetched right away to make sure this component works in isolation
    }  

    onSubmit = (formValues) => {



    };

    render() {
        console.log(this.props);
        if (!this.props.stream) {
            return <div>Loading stream...</div>;
        }

        return (

            <div>
                <h3>Edit a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} initialValues={this.props.stream} />
            </div>

            );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);