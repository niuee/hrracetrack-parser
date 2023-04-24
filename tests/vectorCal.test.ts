import {VectorCal} from "../src/vectorCal";

describe("Dot Product", ()=>{

    test('dot product of perpendicular vectors', ()=>{
        expect(VectorCal.dotProduct({x: 1, y: 0}, {x:0, y:1})).toBe(0);
    });

    test('dot product of parallel vectors', ()=>{
        expect(VectorCal.dotProduct({x: 1, y: 0}, {x: 3, y: 0})).toBe(3);
    });

});


describe("Cross Product", ()=>{
    test('cross product of y axis and negative z axis', ()=>{
        expect(VectorCal.crossProduct({x: 0, y: 1, z:0}, {x: 0, y: 0, z: -1})).toEqual({x: -1, y: 0, z: 0});
    });
});


test("Calculate Unit Vector of a vector", ()=>{
    expect(VectorCal.unitVector({x: 1, y: 1})).toEqual({x: 1 / Math.sqrt(2), y: 1 / Math.sqrt(2), z: 0});
});

test("Calculate the Normal Unit Vector of a vector", ()=>{
    expect(VectorCal.zUpNormalUnitVector({x: 2, y: 0})).toEqual({x: 0, y: -1, z: 0});
})