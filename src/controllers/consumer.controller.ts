import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Consumer} from '../models';
import {ConsumerRepository} from '../repositories';

export class ConsumerController {
  constructor(
    @repository(ConsumerRepository)
    public consumerRepository : ConsumerRepository,
  ) {}

  @post('/consumers', {
    responses: {
      '200': {
        description: 'Consumer model instance',
        content: {'application/json': {schema: {'x-ts-type': Consumer}}},
      },
    },
  })
  async create(@requestBody() consumer: Consumer): Promise<Consumer> {
    return await this.consumerRepository.create(consumer);
  }

  @get('/consumers/count', {
    responses: {
      '200': {
        description: 'Consumer model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Consumer)) where?: Where,
  ): Promise<Count> {
    return await this.consumerRepository.count(where);
  }

  @get('/consumers', {
    responses: {
      '200': {
        description: 'Array of Consumer model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Consumer}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Consumer)) filter?: Filter,
  ): Promise<Consumer[]> {
    return await this.consumerRepository.find(filter);
  }

  @patch('/consumers', {
    responses: {
      '200': {
        description: 'Consumer PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() consumer: Consumer,
    @param.query.object('where', getWhereSchemaFor(Consumer)) where?: Where,
  ): Promise<Count> {
    return await this.consumerRepository.updateAll(consumer, where);
  }

  @get('/consumers/{id}', {
    responses: {
      '200': {
        description: 'Consumer model instance',
        content: {'application/json': {schema: {'x-ts-type': Consumer}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Consumer> {
    return await this.consumerRepository.findById(id);
  }

  @patch('/consumers/{id}', {
    responses: {
      '204': {
        description: 'Consumer PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() consumer: Consumer,
  ): Promise<void> {
    await this.consumerRepository.updateById(id, consumer);
  }

  @put('/consumers/{id}', {
    responses: {
      '204': {
        description: 'Consumer PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() consumer: Consumer,
  ): Promise<void> {
    await this.consumerRepository.replaceById(id, consumer);
  }

  @del('/consumers/{id}', {
    responses: {
      '204': {
        description: 'Consumer DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.consumerRepository.deleteById(id);
  }
}
