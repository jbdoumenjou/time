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
	
	it("should display a valid string for 42 years period", function() {
	    var period = new TimePeriod(42,0,0,0,0,0);
	    expect(period.toString()).toEqual("P42Y");
	});

	it("should display a valid string for 42 months period", function() {
	    var period = new TimePeriod(0,42,0,0,0,0);
	    expect(period.toString()).toEqual("P42M");
	});

	it("should display a valid string for 42 days period", function() {
	    var period = new TimePeriod(0,0,42,0,0,0);
	    expect(period.toString()).toEqual("P42D");
	});

	it("should display a valid string for 42 hours period", function() {
	    var period = new TimePeriod(0,0,0,42,0,0);
	    expect(period.toString()).toEqual("PT42H");
	});

	it("should display a valid string for 42 minutes period", function() {
	    var period = new TimePeriod(0,0,0,0,42,0);
	    expect(period.toString()).toEqual("PT42M");
	});

	it("should display a valid string for 42 seconds period", function() {
	    var period = new TimePeriod(0,0,0,0,0,42);
	    expect(period.toString()).toEqual("PT42S");
	});

	it("should display a valid string for complete Date period", function() {
	    var period = new TimePeriod(12,34,56,0,0,0);
	    expect(period.toString()).toEqual("P12Y34M56D");
	});

	it("should display a valid string for complete Time period", function() {
		    var period = new TimePeriod(0,0,0,12,34,56);
		    expect(period.toString()).toEqual("PT12H34M56S");
	});

	it("should display a valid string for complete period", function() {
		    var period = new TimePeriod(1,2,3,4,5,6);
		    expect(period.toString()).toEqual("P1Y2M3DT4H5M6S");
		});

});


describe("TimePeriod parse static method", function() {
	
	/*it("Should parse valid year period", function() {
	    var period = TimePeriod.parse('P1Y');
	    expect(period.years).toEqual(0);
	});*/
	
});
