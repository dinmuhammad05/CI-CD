import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  

  @Field(() => String, { description: 'name field (user)' })
  name: string;

  @Field(() => String, { description: 'email field (user)' })
  email:string

}
