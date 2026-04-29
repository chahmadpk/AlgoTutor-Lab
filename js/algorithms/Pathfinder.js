export class Pathfinder {
    constructor(grid, startNode, endNode) {
        this.grid = grid;
        this.startNode = startNode;
        this.endNode = endNode;
        this.visitedNodesInOrder = [];
    }

    getNeighbors(node) {
        const neighbors = [];
        const { row, col } = node;
        
        if (row > 0) neighbors.push(this.grid[row - 1][col]);
        if (row < this.grid.length - 1) neighbors.push(this.grid[row + 1][col]);
        if (col > 0) neighbors.push(this.grid[row][col - 1]);
        if (col < this.grid[0].length - 1) neighbors.push(this.grid[row][col + 1]);
        
        return neighbors.filter(neighbor => !neighbor.isWall);
    }

    reconstructPath() {
        const path = [];
        let curr = this.endNode;
        while (curr !== null) {
            path.unshift(curr);
            curr = curr.previousNode;
        }
        return path[0] === this.startNode ? path : [];
    }

    heuristic(a, b) {
        // Manhattan distance
        return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
    }
}
