import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { Assignee, Status } from '../data';
import Input from './Input';
import store from '../store'; 
import { withRouter } from 'react-router-dom';


class Form extends Component {

    state = {
        incident: '',
        assignee: '',
        status: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch('createIncident', this.state);
        store.dispatch('triggerAlert', true);
        setTimeout(() => {
            store.dispatch('triggerAlert', false);
        }, 3000)
        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        const { incident, assignee, status } = this.state;
        const isEnabled = incident.length > 0 && assignee.length > 0 && status.length > 0;
        return (
            <div className="card">
                <div className="card-header">
                    <h6>Create Incident</h6>
                </div>
                <div className="card-body">
                    <small>*All Fields are mandatory</small>
                    <form onSubmit={this.handleSubmit}>
                        <Input id="incident" label="Incident" handleChange={this.handleChange} />
                        <Dropdown id="assignee" label="Assignee" data={Assignee} handleChange={this.handleChange} />
                        <Dropdown id="status" label="Status" data={Status} handleChange={this.handleChange} />
                        <button type="submit" disabled={!isEnabled} className="btn btn-success m-2 float-right">Create Incident</button>
                        <Link to="/"><button  type="reset" className="btn btn-danger m-2 float-right">Cancel</button></Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Form);
