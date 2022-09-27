import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface ReviewModel extends Base {}
@Schema()
export class ReviewModel extends TimeStamps {
  @prop()
  name: string;

  @prop()
  title: string;

  @prop()
  description: string;

  @prop()
  rating: number;

  @prop()
  createdAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
