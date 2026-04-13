import { randFloatSpread } from '../src/math.js';
import { mapLinear } from '../src/math.js';
import { lerp } from '../src/math.js';

import assert  from "assert";

describe("Utilitire Mathématique", () => {
    it("Doit retourner un nombre compris entre 0 & -1", ()  => {

       const range = 1;
       const result = randFloatSpread(range);
        assert.ok(result >= -1 && result <= 1, true);
    });
});

describe("Test de mapLinear", () => {
    it("Doit retourner 3", ()  => {
       const result = mapLinear(1, 2, 3, 4, 5);
        assert.strictEqual(result, 3);
    });
});

describe("Test de mapLinear", () => {
    it("Doit retourner la valeur précise passée dans la variable expected", ()  => {
       const result = mapLinear(1, 20, 3, 40, 5);
       const expected = 0.882352941176471;
        assert.strictEqual(result.toFixed(10), expected.toFixed(10));
    });
});

describe("Test de lerp", () => {
    it("Doit retourner 41", ()  => {
       const result = lerp(1, 3, 20);
        assert.strictEqual(result, 41);
    });
});

describe("Test de lerp", () => {
    it("Doit retourner -15.3", ()  => {
       const result = lerp(1.3, -7,2);
        assert.strictEqual(result, -15.3);
    });
});