export type TrackData = {
    curves: CurveData[];
    scale: number;
};
export type CurveData = {
    name: string;
    curveSegments: {
        segmentType: string;
        points: {
            x: number;
            y: number;
        }[];
    }[];
};
export declare function add(a: number, b: number): number;
export declare function readCurves(filePath: string): Promise<TrackData[]>;
