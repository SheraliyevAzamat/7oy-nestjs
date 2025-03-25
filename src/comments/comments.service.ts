import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  async create(text: string, postId: number): Promise<Comment> {
    const comment = this.commentsRepository.create({ text, post: { id: postId } });
    return this.commentsRepository.save(comment);
  }

  async findAll(): Promise<Comment[]> {
    return this.commentsRepository.find({ relations: ['post'] });
  }
}
