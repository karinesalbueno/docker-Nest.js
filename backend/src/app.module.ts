import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { RecordsModule } from './records/records.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, RecordsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
