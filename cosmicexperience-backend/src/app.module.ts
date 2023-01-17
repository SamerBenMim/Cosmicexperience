import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './events/events.module';
import { UserModule } from './users/user/user.module';
import { AuthModule } from './users/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: 'your_password',
      database: 'cosmos',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    EventModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}