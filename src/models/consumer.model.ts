import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Consumer extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  Id: number;

  @property({
    type: 'string',
    required: true,
  })
  FirstName: string;

  @property({
    type: 'string',
    required: true,
  })
  LastName: string;

  @property({
    type: 'string',
  })
  NIP: string;


  constructor(data?: Partial<Consumer>) {
    super(data);
  }
}
