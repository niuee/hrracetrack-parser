import fs from "fs/promises";

export type TrackData = {
    curves: CurveData[];
    scale: number
}

export type CurveData = {
    name: string;
    curveSegments: {
        segmentType: string;
        points: {
            x: number;
            y: number;
        }[];
    }[]
}

export function add(a: number, b: number): number {
    return a + b;
}

export function readCurves(filePath: string):Promise<TrackData>{
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath).then((data)=>{
            let parsed = JSON.parse(data.toString()) as TrackData
            resolve(parsed);
        }).catch(reason=>{
            reject("failed to read curve file");
        });
    })
}

export function combineSegments(track: TrackData) {
    let segments = [];
}

