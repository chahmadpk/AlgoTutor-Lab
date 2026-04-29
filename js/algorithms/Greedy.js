import { Pathfinder } from './Pathfinder.js';

export class Greedy extends Pathfinder {
    run() {
        this.startNode.h = this.heuristic(this.startNode, this.endNode);
        const openSet = [this.startNode];

        while (openSet.length > 0) {
            // Sort by heuristic distance only
            openSet.sort((a, b) => a.h - b.h);
            const current = openSet.shift();

            if (current.visited) continue;
            current.visited = true;
            this.visitedNodesInOrder.push(current);

            if (current === this.endNode) return this.visitedNodesInOrder;

            const neighbors = this.getNeighbors(current);
            for (const neighbor of neighbors) {
                if (!neighbor.visited) {
                    neighbor.previousNode = current;
                    neighbor.h = this.heuristic(neighbor, this.endNode);
                    if (!openSet.includes(neighbor)) openSet.push(neighbor);
                }
            }
        }
        return this.visitedNodesInOrder;
    }
}
