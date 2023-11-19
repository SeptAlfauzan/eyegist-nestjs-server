export class CreateMessageDto {
  chat_id: number;
  text: string;
  image: Express.Multer.File | null;
}
