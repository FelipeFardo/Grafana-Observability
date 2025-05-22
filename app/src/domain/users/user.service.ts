import { Injectable } from '@nestjs/common';
import { log } from 'src/infra/logger';
import { request } from 'undici'

@Injectable()
export class UserService {
  async list(): Promise<any> {
    const { body } = await request('http://localhost:3002/users')
    const payload = await body.json()
    return payload
  }
}
