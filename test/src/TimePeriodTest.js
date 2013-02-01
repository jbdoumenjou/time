describe("TimePeriod constructor", function() {
	
	it("should have only years", function() {
	    var period = new TimePeriod(42,0,0,0,0,0);
	    expect(period.years).toEqual(42);
	    expect(period.months).toEqual(0);
	    expect(period.days).toEqual(0);
	    expect(period.hours).toEqual(0);
	    expect(period.minutes).toEqual(0);
	    expect(period.seconds).toEqual(0);
	});
	
	it("should have only months", function() {
	    var period = new TimePeriod(0,42,0,0,0,0);
	    expect(period.years).toEqual(0);
	    expect(period.months).toEqual(42);
	    expect(period.days).toEqual(0);
	    expect(period.hours).toEqual(0);
	    expect(period.minutes).toEqual(0);
	    expect(period.seconds).toEqual(0);
	});

	it("should have only days", function() {
	    var period = new TimePeriod(0,0,42,0,0,0);
	    expect(period.years).toEqual(0);
	    expect(period.months).toEqual(0);
	    expect(period.days).toEqual(42);
	    expect(period.hours).toEqual(0);
	    expect(period.minutes).toEqual(0);
	    expect(period.seconds).toEqual(0);
	});

	it("should have only hours", function() {
	    var period = new TimePeriod(0,0,0,42,0,0);
	    expect(period.years).toEqual(0);
	    expect(period.months).toEqual(0);
	    expect(period.days).toEqual(0);
	    expect(period.hours).toEqual(42);
	    expect(period.minutes).toEqual(0);
	    expect(period.seconds).toEqual(0);
	});

	it("should have only minutes", function() {
	    var period = new TimePeriod(0,0,0,0,42,0);
	    expect(period.years).toEqual(0);
	    expect(period.months).toEqual(0);
	    expect(period.days).toEqual(0);
	    expect(period.hours).toEqual(0);
	    expect(period.minutes).toEqual(42);
	    expect(period.seconds).toEqual(0);
	});

	it("should have only seconds", function() {
	    var period = new TimePeriod(0,0,0,0,0,42);
	    expect(period.years).toEqual(0);
	    expect(period.months).toEqual(0);
	    expect(period.days).toEqual(0);
	    expect(period.hours).toEqual(0);
	    expect(period.minutes).toEqual(0);
	    expect(period.seconds).toEqual(42);
	});

	it("should have complete period", function() {
	    var period = new TimePeriod(1,2,3,4,5,6);
	    expect(period.years).toEqual(1);
	    expect(period.months).toEqual(2);
	    expect(period.days).toEqual(3);
	    expect(period.hours).toEqual(4);
	    expect(period.minutes).toEqual(5);
	    expect(period.seconds).toEqual(6);
	});
});

describe("TimePeriod toString method", function() {
	
	it("should display a valid string for a 42 years period", function() {
	    var period = new TimePeriod(42,0,0,0,0,0);
	    expect(period.toString()).toEqual("P42Y");
	});

	it("should display a valid string for a 42 months period", function() {
	    var period = new TimePeriod(0,42,0,0,0,0);
	    expect(period.toString()).toEqual("P42M");
	});

	it("should display a valid string for a 42 days period", function() {
	    var period = new TimePeriod(0,0,42,0,0,0);
	    expect(period.toString()).toEqual("P42D");
	});

	it("should display a valid string for a 42 hours period", function() {
	    var period = new TimePeriod(0,0,0,42,0,0);
	    expect(period.toString()).toEqual("PT42H");
	});

	it("should display a valid string for a 42 minutes period", function() {
	    var period = new TimePeriod(0,0,0,0,42,0);
	    expect(period.toString()).toEqual("PT42M");
	});

	it("should display a valid string for a 42 seconds period", function() {
	    var period = new TimePeriod(0,0,0,0,0,42);
	    expect(period.toString()).toEqual("PT42S");
	});

	it("should display a valid string for a complete Date period", function() {
	    var period = new TimePeriod(12,34,56,0,0,0);
	    expect(period.toString()).toEqual("P12Y34M56D");
	});

	it("should display a valid string for a complete Time period", function() {
	    var period = new TimePeriod(0,0,0,12,34,56);
	    expect(period.toString()).toEqual("PT12H34M56S");
	});

	it("should display a valid string for a complete period", function() {
	    var period = new TimePeriod(1,2,3,4,5,6);
	    expect(period.toString()).toEqual("P1Y2M3DT4H5M6S");
	});

});

describe("TimePeriod equals method", function() {
	it("throws error if it is not a TimePeriod object", function() {
		var period = new TimePeriod(1,2,3,4,5,6);

		var equal = function() {
			return period.equals('nimp');
		};
		expect(equal).toThrow();
	});

	it("should evaluate both period P1Y2M3DT4H5M6S as equal", function() {
	    var period1 = new TimePeriod(1,2,3,4,5,6);
	    var period2 = new TimePeriod(1,2,3,4,5,6);

	    expect(period1.equals(period2)).toBe(true);
	});

	it("should evaluate both period P1Y as equal", function() {
	    var period1 = new TimePeriod(1,0,0,0,0,0);
	    var period2 = new TimePeriod(1,0,0,0,0,0);

	    expect(period1.equals(period2)).toBe(true);
	});

	it("should evaluate period P1Y and P1M as not equal", function() {
	    var period1 = new TimePeriod(1,0,0,0,0,0);
	    var period2 = new TimePeriod(0,1,0,0,0,0);

	    expect(period1.equals(period2)).toBe(false);
	});
});

describe("TimePeriod parse static method", function() {
	
	//////////////////////////////////
	// Invalid strings
	//////////////////////////////////
	it("throws error if it is not an iso8601 format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('nimp');
	   	};
	   	expect(parse).toThrow();
	});

	it("Identifies 'P1' as an invalid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('P1');
	   	};
	   	expect(parse).toThrow();
	});

	it("Identifies 'P1YT' as an invalid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('P1YT');
	   	};
	   	expect(parse).toThrow();
	});

	it("Identifies 'PYT' as an invalid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('PYT');
	   	};
	   	expect(parse).toThrow();
	});

	it("Identifies '1YT' as an invalid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('1YT');
	   	};
	   	expect(parse).toThrow();
	});

	it("Identifies '-P1Y' as an invalid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('-P1Y');
	   	};
	   	expect(parse).toThrow();
	});

	it("Identifies 'P1Y-' as an invalid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('P1Y-');
	   	};
	   	expect(parse).toThrow();
	});

	it("Identifies 'P1Y-T' as an invalid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('P1Y-T');
	   	};
	   	expect(parse).toThrow();
	});

	it("Identifies 'P1YT1' as an invalid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('P1YT1');
	   	};
	   	expect(parse).toThrow();
	});

	it("Identifies 'P1YT-1' as an invalid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('P1YT-1');
	   	};
	   	expect(parse).toThrow();
	});
	//////////////////////////////////
	// Valid strings
	//////////////////////////////////

	it("Identifies 'P1Y' as a valid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('P1Y');
	   	};
	   	expect(parse).not.toThrow();
	});

	it("Identifies 'P-1Y' as a valid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('P-1Y');
	   	};
	   	expect(parse).not.toThrow();
	});

	it("Identifies 'P1M' as a valid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('P1M');
	   	};
	   	expect(parse).not.toThrow();
	});

	it("Identifies 'PT1M' as a valid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('PT1M');
	   	};
	   	expect(parse).not.toThrow();
	});

	it("Identifies 'P1MT1M' as a valid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('PT1M');
	   	};
	   	expect(parse).not.toThrow();
	});

	it("Identifies 'P1D' as a valid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('P1D');
	   	};
	   	expect(parse).not.toThrow();
	});
	
	it("Identifies 'PT1H' as a valid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('PT1H');
	   	};
	   	expect(parse).not.toThrow();
	});

	it("Identifies 'PT1M' as a valid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('PT1M');
	   	};
	   	expect(parse).not.toThrow();
	});

	it("Identifies 'PT1S' as a valid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('PT1S');
	   	};
	   	expect(parse).not.toThrow();
	});

	it("Identifies 'P42Y12M7DT9H10M1S' as a valid iso8601 period format", function() {
	   	var parse = function() {
	   		return TimePeriod.parse('P42Y12M7DT9H10M1S');
	   	};
	   	expect(parse).not.toThrow();
	});
});
