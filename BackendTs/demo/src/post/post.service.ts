import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postrepo: Repository<Post>
  ) {}

  create(data: CreatePostDto) {
    return this.postrepo.save(data);
  }

  singlepost(id: number) {
    return this.postrepo.findOne({ where: { id } });
  }

  allpost() {
    return this.postrepo.find();
  }

  update(id: number, data: CreatePostDto) {
    return this.postrepo.update(id, data);
  }

  delete(id: number) {
    return this.postrepo.delete(id);
  }
}
