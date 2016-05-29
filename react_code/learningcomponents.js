var VacancySign = React.createClass({
	render: function() {
		var text;
		if (this.props.hasvacancy) {
			text = 'Vacancy';
		} else {
			text = 'No Vacancy';
		}
		return <div>{text}</div>;
	}
});


/**
**/

//Another implementation

var VacancySign = React.createClass({
	render: function(){
		return <div>{this.props.hasvacancy ? '' : 'No '}Vacancy</div>;
	}
});


ReactDOM.render(
	<VacancySign hasvacancy = {false} />,
	document.getElementById('container')
	// document.body
);