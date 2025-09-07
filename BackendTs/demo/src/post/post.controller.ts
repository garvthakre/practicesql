import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postservice: PostService) {}

  @Post()
  create(@Body() dto: CreatePostDto) {
    return this.postservice.create(dto);
  }

  @Get()
  getAllPosts() {
    return this.postservice.allpost();
  }

  @Get(':id')
  getPost(@Param('id') id: string) {
    return this.postservice.singlepost(+id);
  }

  @Put(':id')
  updatePost(@Param('id') id: string, @Body() dto: CreatePostDto) {
    return this.postservice.update(+id, dto);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postservice.delete(+id);
  }
}
