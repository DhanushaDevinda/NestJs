import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public async getUser() {
    return { userId: 1003, userName: 'Mac', email: 'mac@yopmail.com' };
  }
}
