describe("TimePeriod constructor", function() {

  var assertPeriod = function(period, years, months, days, hours, minutes, seconds) {
    expect(period.years).toEqual(years);
    expect(period.months).toEqual(months);
    expect(period.days).toEqual(days);
    expect(period.hours).toEqual(hours);
    expect(period.minutes).toEqual(minutes);
    expect(period.seconds).toEqual(seconds);
  };

  it("should have only years", function() {
    var period = new TimePeriod(42,0,0,0,0,0);
    assertPeriod(period,42,0,0,0,0,0);
  });
  
  it("should have only months", function() {
    var period = new TimePeriod(0,42,0,0,0,0);
    assertPeriod(period,0,42,0,0,0,0);
  });

  it("should have only days", function() {
    var period = new TimePeriod(0,0,42,0,0,0);
    assertPeriod(period,0,0,42,0,0,0);
  });

  it("should have only hours", function() {
    var period = new TimePeriod(0,0,0,42,0,0);
    assertPeriod(period,0,0,0,42,0,0);
  });

  it("should have only minutes", function() {
    var period = new TimePeriod(0,0,0,0,42,0);
    assertPeriod(period,0,0,0,0,42,0);
  });

  it("should have only seconds", function() {
    var period = new TimePeriod(0,0,0,0,0,42);
    assertPeriod(period,0,0,0,0,0,42);
  });

  it("should have complete period", function() {
    var period = new TimePeriod(1,2,3,4,5,6);
    assertPeriod(period,1,2,3,4,5,6);
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
  it("throws an error if it is not a TimePeriod object", function() {
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
  it("identifies 'nimp' as an invalid iso8601 period format", function() {
    var parse = function() {
      return TimePeriod.parse('nimp');
    };
    expect(parse).toThrow();
  }); 

  it("identifies 'P1' as an invalid iso8601 period format", function() {
    var parse = function() {
      return TimePeriod.parse('P1');
    };
    expect(parse).toThrow();
  });

  it("identifies 'P1YT' as an invalid iso8601 period format", function() {
    var parse = function() {
      return TimePeriod.parse('P1YT');
    };
    expect(parse).toThrow();
  });

  it("identifies 'PYT' as an invalid iso8601 period format", function() {
    var parse = function() {
      return TimePeriod.parse('PYT');
    };
    expect(parse).toThrow();
  });

  it("identifies '1YT' as an invalid iso8601 period format", function() {
    var parse = function() {
      return TimePeriod.parse('1YT');
    };
    expect(parse).toThrow();
  });

  it("identifies '-P1Y' as an invalid iso8601 period format", function() {
    var parse = function() {
      return TimePeriod.parse('-P1Y');
    };
    expect(parse).toThrow();
  });

  it("identifies 'P1Y-' as an invalid iso8601 period format", function() {
    var parse = function() {
      return TimePeriod.parse('P1Y-');
    };
    expect(parse).toThrow();
  });

  it("identifies 'P1Y-T' as an invalid iso8601 period format", function() {
    var parse = function() {
      return TimePeriod.parse('P1Y-T');
    };
    expect(parse).toThrow();
  });

  it("identifies 'P1YT1' as an invalid iso8601 period format", function() {
    var parse = function() {
      return TimePeriod.parse('P1YT1');
    };
    expect(parse).toThrow();
  });

  it("identifies 'P1YT-1' as an invalid iso8601 period format", function() {
    var parse = function() {
      return TimePeriod.parse('P1YT-1');
    };
    expect(parse).toThrow();
  });

  it("identifies 'P1YT-1' as an invalid iso8601 period format", function() {
    var parse = function() {
      return TimePeriod.parse('P--1YT');
    };
    expect(parse).toThrow();
  });

//////////////////////////////////
// Valid strings
//////////////////////////////////

  it("creates 'P12Y' period from string", function() {
    var expected = new TimePeriod(12,0,0,0,0,0);
    var actual = TimePeriod.parse('P12Y');
    expect(actual).toEqual(expected);
  });

  it("creates 'P-12Y' period from string", function() {
    var expected = new TimePeriod(-12,0,0,0,0,0);
    var actual = TimePeriod.parse('P-12Y');
    expect(actual).toEqual(expected);
  });

  it("creates 'P14M' period from string", function() {
    var expected = new TimePeriod(0,14,0,0,0,0);
    var actual = TimePeriod.parse('P14M');
    expect(actual).toEqual(expected);
  });

  it("create 'P-14M' period from string", function() {
    var expected = new TimePeriod(0,-14,0,0,0,0);
    var actual = TimePeriod.parse('P-14M');
    expect(actual).toEqual(expected);
  });

  it("creates 'P112D' period from string", function() {
    var expected = new TimePeriod(0,0,112,0,0,0);
    var actual = TimePeriod.parse('P112D');
    expect(actual).toEqual(expected);
  });

  it("Creates 'P-112D' period from string", function() {
    var expected = new TimePeriod(0,0,-112,0,0,0);
    var actual = TimePeriod.parse('P-112D');
    expect(actual).toEqual(expected);
  });

  it("creates 'PT23H' period from string", function() {
    var expected = new TimePeriod(0,0,0,23,0,0);
    var actual = TimePeriod.parse('PT23H');
    expect(actual).toEqual(expected);
  });

  it("creates 'PT-23H' period from string", function() {
    var expected = new TimePeriod(0,0,0,-23,0,0);
    var actual = TimePeriod.parse('PT-23H');
    expect(actual).toEqual(expected);
  });

  it("creates 'PT58M' period from string", function() {
    var expected = new TimePeriod(0,0,0,0,58,0);
    var actual = TimePeriod.parse('PT58M');
    expect(actual).toEqual(expected);
  });

  it("creates 'PT442S' period from string", function() {
    var expected = new TimePeriod(0,0,0,0,0,442);
    var actual = TimePeriod.parse('PT442S');
    expect(actual).toEqual(expected);
  });

  it("creates 'PT-442S' period from string", function() {
    var expected = new TimePeriod(0,0,0,0,0,-442);
    var actual = TimePeriod.parse('PT-442S');
    expect(actual).toEqual(expected);
  });

  it("creates 'P-42Y12M-7DT9H-10M1S' period from string", function() {
    var expected = new TimePeriod(-42,12,-7,9,-10,1);
    var actual = TimePeriod.parse('P-42Y12M-7DT9H-10M1S');
    expect(actual).toEqual(expected);
  });

});

describe("TimePeriod add method", function() {
  it("throws an error if it is not a TimePeriod object", function() {
    var period = new TimePeriod(1,2,3,4,5,6);

    var equal = function() {
      return period.add('nimp');
    };
    expect(equal).toThrow();
  });

  it("", function() {
    var period = new TimePeriod(1,2,3,4,5,6);

    var equal = function() {
      return period.add('nimp');
    };
    expect(equal).toThrow();
  });
});
