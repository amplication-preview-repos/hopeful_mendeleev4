/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ThemeWhereInput } from "./ThemeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ThemeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ThemeWhereInput,
  })
  @ValidateNested()
  @Type(() => ThemeWhereInput)
  @IsOptional()
  @Field(() => ThemeWhereInput, {
    nullable: true,
  })
  every?: ThemeWhereInput;

  @ApiProperty({
    required: false,
    type: () => ThemeWhereInput,
  })
  @ValidateNested()
  @Type(() => ThemeWhereInput)
  @IsOptional()
  @Field(() => ThemeWhereInput, {
    nullable: true,
  })
  some?: ThemeWhereInput;

  @ApiProperty({
    required: false,
    type: () => ThemeWhereInput,
  })
  @ValidateNested()
  @Type(() => ThemeWhereInput)
  @IsOptional()
  @Field(() => ThemeWhereInput, {
    nullable: true,
  })
  none?: ThemeWhereInput;
}
export { ThemeListRelationFilter as ThemeListRelationFilter };