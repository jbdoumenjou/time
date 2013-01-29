/**
*	Class that manipulate period
*	Parse ISO 8601 Format : P[nY][nM][nD]T[nH][nM][nS]
*/
function TimePeriod(years, months, days, hours, minutes, seconds) {
	this.years = years;
	this.months = months;
	this.days = days;
	this.hours = hours;
	this.minutes = minutes;
	this.seconds = seconds;
};

TimePeriod.parse = function(str) {
	var period = new TimePeriod(0,0,0,0,0,0);
	// TODO : implement
	return period;
}

TimePeriod.prototype.toString = function() {
	var str = '';

	// Date part
	if (this.years > 0) {
		str += this.years + 'Y';
	}
	if (this.months > 0) {
		str += this.months + 'M';
	}
	if (this.days > 0) {
		str += this.days + 'D';
	}

	// Time part
	if (this.hours || this.minutes || this.seconds) {
		str += 'T';
	}
	if (this.hours > 0) {
		str += this.hours + 'H';
	}
	if (this.minutes > 0) {
		str += this.minutes + 'M';
	}
	if (this.seconds > 0) {
		str += this.seconds + 'S';
	}

	if (str.length > 0) {
		str = 'P' + str;
	}

	return  str;
};