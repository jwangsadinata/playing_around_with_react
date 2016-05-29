// learning about different functions, and also events

var ChildComponent = React.createClass({
	render: function() {
		return (
			<div>
				<div className="prompt">Add a click handler</div>
				<button onClick={this.props.onMagicClick}>Do Magic</button>
			</div>
		);
	}
});

var ParentComponent = React.createClass({
	performMagic: function() {
		alert('TAADAH!');
	},

	render: function() {
		return (
			<div>
				<ChildComponent onMagicClick={this.performMagic} />
			</div>
		);
	}
})

ReactDOM.render(
	<ParentComponent />,
	document.getElementById('container')
);