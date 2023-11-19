import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import axios, { HttpStatusCode } from 'axios';

@Injectable()
export class MessageService {
  async create(createMessageDto: CreateMessageDto) {
    try {
      const { chat_id, text, image } = createMessageDto;
      const BASEURL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

      const formData = new FormData();
      formData.append('photo', new Blob([image.buffer]));
      formData.append('caption', text);

      if (image) {
        const response = await axios.post(`sendPhoto`, formData, {
          baseURL: BASEURL,
          params: {
            chat_id: chat_id,
          },
        });

        return JSON.stringify({
          data: response.data,
          message: 'success send message with photo',
        });
      } else {
        const response = await axios.get('sendMessage', {
          baseURL: BASEURL,
          params: {
            chat_id: chat_id,
            text: `apa maksud saudara "${text}"`,
          },
        });

        return JSON.stringify({
          data: response.data,
          message: 'success send message',
        });
      }
      return 'This action adds a new message';
    } catch (e) {
      if (e instanceof HttpException) {
        return e;
      }
      console.log(e);
      throw new HttpException(
        e.message || 'Internal Server Error',
        e.response.status || HttpStatusCode.InternalServerError,
      );
    }
  }

  findAll() {
    return `This action returns all message`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
