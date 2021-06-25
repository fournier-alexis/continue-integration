import {add} from "./utils";

describe("Verify utils functions", () => {
    it("should return the right result", () => {
        expect(add(1, 2)).toBe(3);
        expect(add(0, 0)).toBe(0);
        expect(add(0,1)).toBe(0);
    })
})
