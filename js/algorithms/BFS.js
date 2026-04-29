import { Pathfinder } from './Pathfinder.js';

export class BFS extends Pathfinder {
    run() {
        this.startNode.distance = 0;
        const queue = [this.startNode];
        this.startNode.visited = true;

        while (queue.length > 0) {
            const current = queue.shift();
            this.visitedNodesInOrder.push(current);

            if (current === this.endNode) return this.visitedNodesInOrder;

            const neighbors = this.getNeighbors(current);
            for (const neighbor of neighbors) {
                if (!neighbor.visited) {
                    neighbor.visited = true;
                    neighbor.previousNode = current;
                    queue.push(neighbor);
                }
            }
        }
        return this.visitedNodesInOrder;
    }
}
