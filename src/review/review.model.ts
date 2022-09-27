import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export interface ReviewModel extends Base {}
@Schema()
export class ReviewModel extends TimeStamps {
  @Prop({ required: true })
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop()
  productId: Types.ObjectId;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
