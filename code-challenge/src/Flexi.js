import React from 'react';
import PropTypes from 'prop-types';

const TEXTFIELD = 'TextField';

const InputField = (props) => {
	return (
		<label>
			{props.label}:
		<input type="text" name={props.name} onChange={props.onValueEnter} />
		</label>
	);
}
InputField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onValueEnter: PropTypes.func.isRequired,
}

const DropDownField = React.memo(function DropDownField(props) {
	return (
		<label>
			{props.label}:
			<select name={props.name} onChange={props.onDropDownChange}>
				{
					props.values && props.values.map((value, index) => {
						return (
							<option value={value} key={index} onChange={props.onDropDownChange}>{value}</option>
						)
					})
				}
			</select>
		</label>
	);
}
)
DropDownField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	values: PropTypes.array.isRequired,
	onDropDownChange: PropTypes.func.isRequired,
}

class DisplayFlexi extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			userData: this.props.userData || {},
		}
	}

	onValueEnter = (event) => {
		let userData = this.state.userData;
		userData[event.target.name] = event.target.value;
		this.setState({ userData });
		this.props.parentCallBack(userData);
	}

	onDropDownChange = (event) => {
		const userData = this.state.userData;
		userData[event.target.name] = event.target.value;
		this.setState({ userData });
		this.props.parentCallBack(userData);
	}

	render() {
		const items = this.props.items;
		console.log(this.state.userData, 'user data');
		return (
			<React.Fragment>
				{
					items.length && items.map((item, index) => {
						return (
							<div>
								{
									item.type === TEXTFIELD
										? (
											<React.Fragment>
												<InputField label={item.label} key={index} name={item.name} onValueEnter={this.onValueEnter} />
												{
													item.children && <DisplayFlexi items={item.children} userData={this.state.userData} parentCallBack={this.props.parentCallBack} />
												}
											</React.Fragment>
										) : (
											<DropDownField label={item.label} values={item.values} name={item.name} onDropDownChange={this.onDropDownChange} />
										)
								}
							</div>
						)
					})
				}
			</React.Fragment>

		)
	}
}
DisplayFlexi.propTypes = {
	items: PropTypes.array,
	userData: PropTypes.object,
	parentCallBack: PropTypes.func,
}

class Flexi extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
		}
	}

	onSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.data);
	};

	callBackFunction = (childData) => {
		this.setState({ data: childData });
	}

	render() {
		const items = this.props.config;
		return (
			<div>
				<form>
					<br />
					<br />
					<DisplayFlexi items={items} parentCallBack={this.callBackFunction} />
					<button value="submit" onClick={this.onSubmit} >Submit</button>
				</form>
			</div>
		);
	}
}
Flexi.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	config: PropTypes.object.isRequired,
}
export default Flexi;
