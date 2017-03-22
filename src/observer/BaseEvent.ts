export class BaseEvent implements EventStorming.Event.IEvent {
  name: string;
  action: object;

  constructor(name: string, action: object) {
    this.name = name;
    this.setAction(action);
  }

  getAction(): object {
    return this.action;
  }

  setAction(value: object) {
    this.action = value;
  }
}
