/**
*	Class that manipulate period and manage string with ISO 8601 format
*/
function TimePeriod(years, months, days, hours, minutes, seconds) {
	this.years = years;
	this.months = months;
	this.days = days;
	this.hours = hours;
	this.minutes = minutes;
	this.seconds = seconds;
};

// Use Module pattern to encapsulate the code
var timeUtils = (function () {
	// Private part
	var regExpDatePart = /^P(?:(-?\d+)Y)?(?:(-?\d+)M)?(?:(-?\d+)D)?(?:T(.+))?$/;
	var regExpTimePart = /^(?:(-?\d+)H)?(?:(-?\d+)M)?(?:(-?\d+)S)?$/;

	var _isIso8601format = function (str) {
		var dateParts = str.match(regExpDatePart);

		if (dateParts) {
			var timePart = dateParts[4];
			if (timePart) {
				return timePart.match(regExpTimePart);
			} 
			return true;
		}

		return false;
	};

	var _extractPeriodValues = function(str) {
		var period = new TimePeriod(0,0,0,0,0,0);

		var dateParts = str.match(regExpDatePart);
		period.years = +dateParts[1] || 0;
		period.months = +dateParts[2] || 0;
		period.days = +dateParts[3] || 0;

		if (dateParts[4]) {
			var timeParts = dateParts[4].match(regExpTimePart);
			if (timeParts) {
				period.hours = +timeParts[1] || 0;
				period.minutes = +timeParts[2] || 0;
				period.seconds = +timeParts[3] || 0;
			}
		}

		return period;
	};

	// public part
	return { isIso8601format : function (str) {
			return _isIso8601format(str);
		},
		extractPeriodValues : function(str) {
			return _extractPeriodValues(str);
		}
	}
})();

/**
*	Parse ISO 8601 Format : P[nY][nM][nD][T[nH][nM][nS]] and create the corresponding period
*/
TimePeriod.parse = function(str) {
	if (!timeUtils.isIso8601format(str)) {
		throw new Error('It is not a valid iso 8601 format.');
	}
	return timeUtils.extractPeriodValues(str);
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

TimePeriod.prototype.add = function (other) {
	if (!(other instanceof TimePeriod)) {
		throw new Error('Can apply equals only on TimePeriod instance');
	} 
	return new Period(this.years + other.years, this.months + other.months, this.days + other.days, this.hours + other.hours, this.minutes + other.minutes, this.seconds + other.seconds);
};

TimePeriod.prototype.equals = function(other) {
	if (!(other instanceof TimePeriod)) {
		throw new Error('Can apply equals only on TimePeriod instance');
	} 
	var datePartAreEqual = this.years === other.years && this.months === other.months && this.days === other.days;
	var timePartAreEqual = this.hours === other.hours && this.minutes === other.minutes && this.seconds === other.seconds;

	return  datePartAreEqual && timePartAreEqual;
};

