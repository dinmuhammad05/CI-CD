import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String, { description: 'name field (user)' })
  name: string;

  @Field(() => String, { description: 'email field (user)' })
  email: string;
}
