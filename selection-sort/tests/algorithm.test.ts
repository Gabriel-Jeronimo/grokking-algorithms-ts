import { selectionSort } from "../src/algoritm"

describe('Selection sort', () => {
    test('An unsorted array of numbers ', () => {
        expect(selectionSort([5, 3, 6, 2, 10])).toEqual([2, 3, 5, 6, 10])
    })
})