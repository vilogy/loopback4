import {DefaultCrudRepository, BelongsToAccessor, repository} from '@loopback/repository';
import {Ticket, Consumer} from '../models';
import {MemorydbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { ConsumerRepository } from './consumer.repository';

export class TicketRepository extends DefaultCrudRepository<
  Ticket,
  typeof Ticket.prototype.Id
> {

  public readonly consumer: BelongsToAccessor<
    Consumer,
    typeof Consumer.prototype.Id
  >;

  constructor(
    @inject('datasources.memorydb') dataSource: MemorydbDataSource,
    @repository.getter('ConsumerRepository')
    consumerRepositoryGetter: Getter<ConsumerRepository>
  ) {
    super(Ticket, dataSource);
    this.consumer = this._createBelongsToAccessorFor(
      'Consumer',
      consumerRepositoryGetter
      //Getter.fromValue(this),
    )
  }
}
