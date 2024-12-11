
import {characters} from '../../src/js-foundation/02-destructuring'

describe('js-foundation/02-destructuring.ts', () => {

    test('characters should contains Flash, Superman', () => {

        expect(characters).toContain('Flash')
        expect(characters).toContain('Superman')

    })

})