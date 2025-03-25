import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(@Body() body: { text: string; postId: number }) {
    return this.commentsService.create(body.text, body.postId);
  }

  @Get()
  async findAll() {
    return this.commentsService.findAll();
  }
}
