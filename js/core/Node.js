export class Node {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.isWall = false;
        this.isStart = false;
        this.isEnd = false;
        this.weight = 1;
        
        // Pathfinding props
        this.distance = Infinity;
        this.g = Infinity;
        this.h = 0;
        this.f = Infinity;
        this.previousNode = null;
        this.visited = false;
    }

    reset() {
        this.distance = Infinity;
        this.g = Infinity;
        this.h = 0;
        this.f = Infinity;
        this.previousNode = null;
        this.visited = false;
    }
}
