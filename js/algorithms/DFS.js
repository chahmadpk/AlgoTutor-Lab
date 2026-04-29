import { Pathfinder } from './Pathfinder.js';

export class DFS extends Pathfinder {
    run() {
        const stack = [this.startNode];
        const discoveryMap = new Set();
        discoveryMap.add(`${this.startNode.row}-${this.startNode.col}`);
        
        while (stack.length > 0) {
            const current = stack.pop();

            if (current.visited) continue;
            current.visited = true;
            this.visitedNodesInOrder.push(current);

            if (current === this.endNode) return this.visitedNodesInOrder;

            const neighbors = this.getNeighbors(current);
            // Reverse neighbors for standard DFS depth priority
            for (let i = neighbors.length - 1; i >= 0; i--) {
                const neighbor = neighbors[i];
                const key = `${neighbor.row}-${neighbor.col}`;
                if (!neighbor.visited && !discoveryMap.has(key)) {
                    neighbor.previousNode = current;
                    discoveryMap.add(key);
                    stack.push(neighbor);
                }
            }
        }
        return this.visitedNodesInOrder;
    }
}
