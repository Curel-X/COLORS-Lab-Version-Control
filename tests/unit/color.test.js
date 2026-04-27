const { buildColorPayload } = require("../../public/js/code");

test("builds correct color payload", () => {
	const result = buildColorPayload("red", 5);

	expect(result).toEqual({
		color: "red",
		userId: 5
	});
});
