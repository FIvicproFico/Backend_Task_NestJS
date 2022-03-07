import { Module } from '@nestjs/common';
import { EmailModule } from 'src/email/email.module';

import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';

@Module({
  imports: [EmailModule],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}
