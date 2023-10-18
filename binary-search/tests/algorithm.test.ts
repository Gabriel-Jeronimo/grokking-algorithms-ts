import { searchInsert } from "../src/algorithm"

describe('Binary search', () => {
    test('A sorted array of numbers ', () => {
        expect(searchInsert([1, 2, 3, 4, 5], 3)).toEqual(2)
    })
})