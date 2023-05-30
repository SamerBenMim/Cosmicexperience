import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../user/entities/user.entity';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    console.log("12321123321",req.user)
    return req.user;
  },
);
