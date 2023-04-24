type vector = {
    x: number;
    y: number;
    z?: number;
}

export class VectorCal {

    static dotProduct(vectorA: vector, vectorB: vector ):number {
        return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
    }

    static crossProduct(vectorA: vector, vectorB: vector): vector {
        if (vectorA.z == null) {
            vectorA.z = 0;
        }
        if (vectorB.z == null) {
            vectorB.z = 0;
        }
        let res = {x: vectorA.y * vectorB.z - vectorA.z * vectorB.y, y: vectorA.z * vectorB.x - vectorA.x * vectorB.z, z: vectorA.x * vectorB.y - vectorA.y * vectorB.x};
        return res;
    }

    static vectorMag(vector: vector): number {
        if (vector.z == null) {
            vector.z = 0;
        }
        return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2) + Math.pow(vector.z, 2));
    }

    static unitVector(vector: vector): vector {
        let vecMag = this.vectorMag(vector);
        return {x: vector.x / vecMag, y: vector.y / vecMag, z: vector.z == null? 0: vector.z / vecMag};
    }

    static zUpNormalUnitVector(vector: vector): vector {
        let resVec = this.crossProduct(vector, {x: 0, y: 0, z: 1});
        let vecMag = this.vectorMag(resVec);
        return {x: resVec.x / vecMag, y: resVec.y / vecMag, z: resVec.z == null? 0: resVec.z / vecMag};
    }

}