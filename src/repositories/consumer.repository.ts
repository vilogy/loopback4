import {DefaultCrudRepository} from '@loopback/repository';
import {Consumer} from '../models';
import {MemorydbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ConsumerRepository extends DefaultCrudRepository<
  Consumer,
  typeof Consumer.prototype.Id
> {
  constructor(
    @inject('datasources.memorydb') dataSource: MemorydbDataSource,
  ) {
    super(Consumer, dataSource);
  }
}
