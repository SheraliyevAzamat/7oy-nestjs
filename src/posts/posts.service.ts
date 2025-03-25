import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async create(title: string, content: string): Promise<Post> {
    const post = this.postsRepository.create({ title, content });
    return this.postsRepository.save(post);
  }

  async findAll(): Promise<Post[]> {
    return this.postsRepository.find({ relations: ['user', 'comments'] });
  }

  async findOne(id: number): Promise<Post | null> {
    return this.postsRepository.findOne({ where: { id } });
  }
}
