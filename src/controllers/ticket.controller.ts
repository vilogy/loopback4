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
import {Ticket, Consumer} from '../models';
import {TicketRepository} from '../repositories';

export class TicketController {
  constructor(
    @repository(TicketRepository)
    public ticketRepository : TicketRepository,
  ) {}

  @post('/tickets', {
    responses: {
      '200': {
        description: 'Ticket model instance',
        content: {'application/json': {schema: {'x-ts-type': Ticket}}},
      },
    },
  })
  async create(@requestBody() ticket: Ticket): Promise<Ticket> {
    return await this.ticketRepository.create(ticket);
  }

  @get('/tickets/count', {
    responses: {
      '200': {
        description: 'Ticket model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Ticket)) where?: Where,
  ): Promise<Count> {
    return await this.ticketRepository.count(where);
  }

  @get('/tickets', {
    responses: {
      '200': {
        description: 'Array of Ticket model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Ticket}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Ticket)) filter?: Filter,
  ): Promise<Ticket[]> {
    return await this.ticketRepository.find(filter);
  }

  @patch('/tickets', {
    responses: {
      '200': {
        description: 'Ticket PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() ticket: Ticket,
    @param.query.object('where', getWhereSchemaFor(Ticket)) where?: Where,
  ): Promise<Count> {
    return await this.ticketRepository.updateAll(ticket, where);
  }

  @get('/tickets/{id}', {
    responses: {
      '200': {
        description: 'Ticket model instance',
        content: {'application/json': {schema: {'x-ts-type': Ticket}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Ticket> {
    return await this.ticketRepository.findById(id);
  }

  @patch('/tickets/{id}', {
    responses: {
      '204': {
        description: 'Ticket PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() ticket: Ticket,
  ): Promise<void> {
    await this.ticketRepository.updateById(id, ticket);
  }

  @put('/tickets/{id}', {
    responses: {
      '204': {
        description: 'Ticket PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ticket: Ticket,
  ): Promise<void> {
    await this.ticketRepository.replaceById(id, ticket);
  }

  @del('/tickets/{id}', {
    responses: {
      '204': {
        description: 'Ticket DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ticketRepository.deleteById(id);
  }

  @get('/tickets{id}/consumer', {
    responses: {
      '200': {
        description: 'Ticket model instance',
        content: {'application/json':{schema: {'x-ts-type': Consumer}}},
      },
    },
  })
  async getConsumer(
    @param.path.number('Id') ticketId: typeof Ticket.prototype.Id,
  ): Promise<Consumer> {
    return await this.ticketRepository.consumer(ticketId);
  }
}
