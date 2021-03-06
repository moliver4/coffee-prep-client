import React, { Component } from 'react';
import PrepCard from '../components/PrepCard';
import {connect} from 'react-redux'
import NewPrepCard from '../components/NewPrepCard';

export class PrepViewer extends Component {

    renderPreps = () => {
        console.log('preps in the prep viewer...', this.props.preps)
        return this.props.preps.map( prep => {
            return <PrepCard key={Math.random()} prep={prep} />
        })
    }

    render() {
        return (
            <div>
                <h4 className='ui horizontal divider header'>
                <i className="coffee icon"></i>
                My Coffee Preparations
                </h4>
                <div className='ui four stackable cards'>
                {this.renderPreps()}

                <NewPrepCard />
                </div>
                <br/>
            </div>
        );
    }
}

const mapState = state => {
    return {
        preps: state.user.preps,
        editingId: state.editingId
    }
}

export default connect(mapState)(PrepViewer);
