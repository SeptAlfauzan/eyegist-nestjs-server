import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './photo/photo.module';
import { ConfigModule } from '@nestjs/config';
import { MessageModule } from './message/message.module';

@Module({
  imports: [PhotoModule, ConfigModule.forRoot(), MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
