import { Injectable } from '@nestjs/common';
import { log } from 'src/infra/logger';

@Injectable()
export class UserService {
  list(): Array<{ email: string, name: string }> {
    log.info('Buscando usuários...')
    return [
      {
        name: 'User 1',
        email: 'user1@rocketseat.com'
      },
      {
        name: 'User 2',
        email: 'user2@rocketseat.com'
      },
      {
        name: 'User 4',
        email: 'user4@rocketseat.com'
      },
    ]
  }
}
