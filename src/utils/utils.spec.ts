import {add} from "./utils";

describe("Verify utils functions", () => {
    it("should return the right result", () => {
        expect(add(1, 2)).toEqual(3);
    })
})
