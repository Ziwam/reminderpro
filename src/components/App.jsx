import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			dueDate: ''
		}
	}

	addReminder() {
		if(this.state.dueDate && this.state.text){
			this.props.addReminder(this.state.text, this.state.dueDate);
			this.setState({text: "", dueDate: ""});
		}
	}

	deleteReminder(id) {
		this.props.deleteReminder(id);
	}

	renderReminders() {
		const {reminders} = this.props;
		return (
			<ul className="list">
			<div className="label">upcoming</div>
				{
					reminders.map(reminder => {
						return (
							<li key = {reminder.id} className="item">
								<div className="date">{moment(new Date(reminder.dueDate)).fromNow()}</div>
								<div className="task">
									<div className="delete-btn"
										onClick={()=>this.deleteReminder(reminder.id)}
									> &#x2715; </div>
									<div className="text">{reminder.text}</div>
								</div>
							</li>
						)
					})
				}
			</ul>
		)
	}


	render() {
		return (
		 	<div className="App">
		 	<div className="background"></div>
				<h1 className="title">Reminder Pro</h1>
				<div className="form">
					<input 
						placeholder="I Have To..." 
						onKeyPress={ev => {
							if(ev.key === 'Enter')this.addReminder();
						}}
						value={this.state.text}
						onChange={event => this.setState({text: event.target.value})}
					/>
					<input 
						type="datetime-local"
						onKeyPress={ev => {
							if(ev.key === 'Enter')this.addReminder();
						}}
						value={this.state.dueDate}
						onChange={event =>this.setState({dueDate: event.target.value})}/>
					<button
						type="button"
						className="add-btn"
						onClick={()=> this.addReminder()}
					>
					Add Reminder
					</button>
				</div>
				<button
					type="button" 
					className="clear-btn"
					onClick={()=> this.props.clearReminders()}
				>
				Clear Reminders
				</button>
				{ this.renderReminders()}
		 	</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		reminders: state
	}
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders})(App);
