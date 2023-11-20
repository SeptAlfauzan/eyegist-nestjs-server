import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './photo/photo.module';
import { ConfigModule } from '@nestjs/config';
import { MessageModule } from './message/message.module';
import { MediaModule } from './media/media.module';

@Module({
  imports: [PhotoModule, ConfigModule.forRoot(), MessageModule, MediaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
