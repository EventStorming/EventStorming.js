import {EventEntity} from "./EventEntity";
import {IPosition} from "../render/IPosition";
import {eventModeInterface, modelInterface} from "../model/IModel";


export interface IEventPosition extends modelInterface {
  pos?: IPosition
}

export class EventPositionEntity extends EventEntity {
  private _pos: IPosition;
  private _entity: IEventPosition;
  subEntity: EventPositionEntity[] = [];
  nearEntity: EventPositionEntity[] = [];

  constructor(pos: IPosition, entity: eventModeInterface) {
    super(entity.id);

    this._entity = entity;
    this._pos = pos;

    this.relatedNodes = entity.relatedNodes;
    this.nearNode = entity.nearNode;

    this.subEntity = [];
    this.nearEntity = [];
  }

  get entity(): IEventPosition {
    return this._entity;
  }

  set entity(value: IEventPosition) {
    this._entity = value;
  }

  get pos(): IPosition {
    return this._pos;
  }

  set pos(value: IPosition) {
    this._pos = value;
  }
}
