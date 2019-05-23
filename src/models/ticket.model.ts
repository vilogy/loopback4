import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Consumer } from './consumer.model';

@model({settings: {}})
export class Ticket extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  Id: number;

  @belongsTo(() => Consumer, {keyTo: 'Id'})
  ConsumerId: number;

  @property({
    type: 'number',
    required: true,
  })
  DeviceId: number;

  @property({
    type: 'string',
    required: true,
  })
  State: string;

  @property({
    type: 'string',
  })
  DeliveryMethod?: string;

  @property({
    type: 'string',
  })
  Attachment?: string;

  @property({
    type: 'boolean',
    required: true,
    default: 0,
  })
  isClosed: boolean;

  @property({
    type: 'string',
  })
  AssignedTo?: string;

  @property({
    type: 'string',
  })
  Title?: string;

  @property({
    type: 'string',
  })
  Description?: string;

  @property({
    type: 'date',
    required: true,
  })
  DateCreated: string;

  @property({
    type: 'date',
  })
  DateOpened: string;

  @property({
    type: 'date',
  })
  DateClosed?: string;


  constructor(data?: Partial<Ticket>) {
    super(data);
  }
}
