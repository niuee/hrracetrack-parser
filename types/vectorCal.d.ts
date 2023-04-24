type vector = {
    x: number;
    y: number;
    z?: number;
};
export declare class VectorCal {
    static dotProduct(vectorA: vector, vectorB: vector): number;
    static crossProduct(vectorA: vector, vectorB: vector): vector;
    static vectorMag(vector: vector): number;
    static unitVector(vector: vector): vector;
    static zUpNormalUnitVector(vector: vector): vector;
}
export {};
