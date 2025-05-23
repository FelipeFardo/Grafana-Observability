import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async list(): Promise<Array<{ email: string, name: string }>> {
    return await this.userService.list();
  }
}
