import { Pathfinder } from './Pathfinder.js';

export class AStar extends Pathfinder {
    run() {
        this.startNode.g = 0;
        this.startNode.h = this.heuristic(this.startNode, this.endNode);
        this.startNode.f = this.startNode.g + this.startNode.h;
        
        const openSet = [this.startNode];

        while (openSet.length > 0) {
            openSet.sort((a, b) => a.f - b.f);
            const current = openSet.shift();

            if (current.visited) continue;
            current.visited = true;
            this.visitedNodesInOrder.push(current);

            if (current === this.endNode) return this.visitedNodesInOrder;

            const neighbors = this.getNeighbors(current);
            for (const neighbor of neighbors) {
                if (neighbor.visited) continue;

                const tentativeG = current.g + neighbor.weight;
                if (tentativeG < neighbor.g) {
                    neighbor.previousNode = current;
                    neighbor.g = tentativeG;
                    neighbor.h = this.heuristic(neighbor, this.endNode);
                    neighbor.f = neighbor.g + neighbor.h;
                    if (!openSet.includes(neighbor)) {
                        openSet.push(neighbor);
                    }
                }
            }
        }
        return this.visitedNodesInOrder;
    }
}
