import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewSchema } from './review.model';

@Module({
  controllers: [ReviewController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Review',
        schema: ReviewSchema,
      },
    ]),
  ],
})
export class ReviewModule {}
