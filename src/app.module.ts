import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // .env faylini yuklash
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT as string, 10) || 5433, // `as string` qo'shildi
      username: process.env.DB_USERNAME || 'default_user',
      password: process.env.DB_PASSWORD || 'default_password',
      database: process.env.DB_DATABASE || 'default_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    PostsModule,
    CommentsModule,
  ],
})
export class AppModule {}
