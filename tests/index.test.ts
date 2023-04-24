import {add, readCurves, TrackData}from "../src/index";
import * as path from "path";

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});


describe("Read file", ()=>{

    test('failed with non existent file', ()=>{
        expect.assertions(1);
        return readCurves("").catch((e)=>{
            expect(e).toBe("failed to read curve file");
        });
    });

    test('read first bezier file', ()=>{
        return readCurves(path.join(__dirname, "/bezier_testfiles/second_bezier_curves.json")).then((data:TrackData)=>{
            expect(data.curves.length).toBe(1);
        });
    });

});