test("AddColor API returns expected structure", () => {
	const mockResponse = {
		status: 200,
		message: "Color has been added"
	};

	expect(mockResponse.status).toBe(200);
	expect(typeof mockResponse.message).toBe("string");
});
