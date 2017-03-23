import {EventEntity} from "../entity/EventEntity";
import {IPosition} from "./IPosition";
import {EventPositionEntity} from "../entity/EventPositionEntity";
import {SVGGenerator} from "./SVGGenerator";
import {modelInterface} from "../model/IModel";

export class Renderer {
  stickyEntities: EventPositionEntity[] = [];
  private _svgGenerator: SVGGenerator;

  constructor(svgGenerator: SVGGenerator) {
    this._svgGenerator = svgGenerator;
  }

  createEntity(node: EventEntity, nodes: EventEntity[]) {
    let position: IPosition = this.calculatePosition(nodes);
    let newEntity = new EventPositionEntity(position, node);

    if (node.hasRelatedChild()) {
      for (let index in node.relatedNodes) {
        let subPosition: IPosition = this.calculateSubPosition(position, newEntity, node.relatedNodes[index]);
        let subEntity = new EventPositionEntity(subPosition, node.relatedNodes[index]);

        newEntity.subEntity.push(subEntity);
      }
    }

    this.stickyEntities.push(newEntity);

    return newEntity;
  }

  updateEntity(node: EventEntity, nodes: EventEntity[]) {
    this.calculatePositions(nodes);
  }

  calculatePositions(nodes: EventEntity[]): IPosition[] {
    let positions: IPosition[] = [];

    return positions;
  }

  calculateSubPosition(parentPosition: IPosition, parentNode: EventPositionEntity, currentNode: modelInterface): IPosition {
    return {
      x: 50,
      y: 50
    }
  }

  private calculatePosition(nodes: EventEntity[]): IPosition {
    let position: IPosition = {
      x: 0,
      y: 0
    };

    return position
  }

  render(): string {
    let result = this._svgGenerator.build(this.stickyEntities);
    return result;
  }
}
