it("should calculate the monthly rate", function () {
	// ...
	const values = { amount: 100000, years: 5, rate: 5.5 };

	expect(calculateMonthlyPayment(values)).toEqual("1910.12");
});

it("should return with 2 decimal places", function () {
	// ..
	const values = { amount: 10000, years: 5, rate: 5.5 };
	expect(calculateMonthlyPayment(values)).toEqual("191.01");
});

it("should return NaN", function () {
	const values = { amount: 10000, years: 5, rate: "sdas" };
	expect(calculateMonthlyPayment(values)).toEqual("NaN");
});
/// etc
it("should handle terribly high interest rates", function () {
	const values = {
		amount: 10000,
		years: 50,
		rate: 90,
	};
	expect(calculateMonthlyPayment(values)).toEqual("82.50");
});
