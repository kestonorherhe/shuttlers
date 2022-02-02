import { BadRequestException, Injectable } from '@nestjs/common';

// import { TagEntity } from './entities/tag.entity';

@Injectable()
export class AppService {
  constructor() {
  }

  // async findTags(): Promise<string[]> {
  //   const tags = await this.tagRepo.find();
  //   return tags.map(tag => tag.tag);
  // }
}
