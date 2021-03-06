var Board = React.createClass({
  render: function() {
    var className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
});

var BoardSwitcher = React.createClass({
	getInitialState: function() {
		// Start off by selecting the first board
		return {
			selectedIndex: 0
		}
	},

	onToggleClick: function(evt) {
		// Updates the state and updates the UI to reflect the new render output.
		this.setState({
			selectedIndex: (this.state.selectedIndex + 1) % this.props.numBoards
		})	
	},

	render: function() {
		var boards = [];
		for (var ii = 0; ii < this.props.numBoards; ii++) {
			var isSelected = ii === this.state.selectedIndex; // first board is the selectedIndex
			boards.push(
				<Board index={ii} selected={isSelected} key={ii} />
			);
		}

		return (
			<div>
				<div className="boards">{boards}</div>
				<button onClick={this.onToggleClick}>Toggle</button>
			</div>
		);
	}
});

ReactDOM.render(
	<BoardSwitcher numBoards={3} />,
	document.getElementById('container')
);