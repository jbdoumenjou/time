describe("TimePeriod constructor", function() {
	
	it("should have a year", function() {
	    var period = new TimePeriod(0,0,0,0,0,0);
	    expect(period.years).toEqual(0);
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
		    expect(period.toString()).toEqual("P1Y2M3DT4H5M");
		});

});


describe("TimePeriod parse static method", function() {
	
	/*it("Should parse valid year period", function() {
	    var period = TimePeriod.parse('P1Y');
	    expect(period.years).toEqual(0);
	});*/
	
});
