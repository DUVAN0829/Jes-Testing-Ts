import { getAge } from "../../../src/plugins";

describe('plugins/get-age.plugin.ts', () => {

    test('getAge() should return the age of a person', () => {

        const birtdate = '2004-02-11'
        const age = getAge(birtdate)

        expect(typeof age).toBe('number')

    })

    test('getAge should return current age', () => {

        const birtdate = '2004-02-11'
        const age = getAge(birtdate)

        const calculatedAge = new Date().getFullYear() - new Date(birtdate).getFullYear()

        expect(age).toBe(calculatedAge)

    })

})