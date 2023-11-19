import { Injectable } from '@nestjs/common';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import TelegramMessage from './entities/message.entity';
import axios from 'axios';

@Injectable()
export class PhotoService {
  async create(messageBody: TelegramMessage) {
    console.log(messageBody);
    console.log(messageBody.message.chat.id);
    const { chat, text } = messageBody.message;
    const BASEURL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;
    const response = await axios.get('sendMessage', {
      baseURL: BASEURL,
      params: {
        chat_id: chat.id,
        // photo: 'https://docs.nestjs.com/assets/logo-small.svg',
        text: `apa maksud saudara "${text}"`,
      },
    });

    // await axios.get('sendPhoto', {
    //   baseURL: BASEURL,
    //   params: {
    //     chat_id: chat.id,
    //     // photo: 'https://docs.nestjs.com/assets/logo-small.svg',
    //     // text: `apa maksud saudara "${text}"`,
    //   },
    // });

    console.log(response);

    return 'This action adds a new photo';
  }

  findAll() {
    return `This action returns all photo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
