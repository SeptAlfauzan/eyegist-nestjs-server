import { HttpException, Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import axios, { HttpStatusCode } from 'axios';

@Injectable()
export class MediaService {
  async create(createMediaDto: CreateMediaDto) {
    try {
      const BASEURL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

      const response = await axios.get('sendMessage', {
        baseURL: BASEURL,
        params: {
          chat_id: createMediaDto.chat_id,
          text: `DEV: "${createMediaDto.text}"`,
        },
      });
      return JSON.stringify({ message: 'success', data: response.data });
    } catch (e) {
      if (e instanceof HttpException) {
        return e;
      }
      console.log(e);
      throw new HttpException(
        e || 'Internal Server Error',
        e.response.status || HttpStatusCode.InternalServerError,
      );
    }
  }

  findAll() {
    return `This action returns all media`;
  }

  findOne(id: number) {
    return `This action returns a #${id} media`;
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return `This action updates a #${id} media`;
  }

  remove(id: number) {
    return `This action removes a #${id} media`;
  }
}
