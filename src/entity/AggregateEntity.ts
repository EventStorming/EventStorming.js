import {Entity} from './Entity';
import {StringIdentity} from './Identity';

export class AggregateEntity extends Entity<StringIdentity> {
  name: string;

  constructor(name: any) {
    super(name);
    this.name = name;
  }
}