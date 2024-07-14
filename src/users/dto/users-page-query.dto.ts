import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { PageQuery } from 'src/common/dtos/pagination.dto';
import { UserStatus } from 'src/common/enums/user-status.enum';
import { UserType } from 'src/common/enums/user-type.enum';

export class UserPageQuery extends PageQuery {
  @ApiProperty({ description: 'User ID', required: false })
  @IsString()
  userId!: string;

  @ApiProperty({ description: "User's Name", required: false })
  @IsString()
  name!: string;

  @ApiProperty({ description: 'Email', required: false })
  @IsString()
  email!: string;

  @ApiProperty({ description: 'Cellular Phone Number', required: false })
  @IsString()
  phone!: string;

  @ApiProperty({ description: 'User Type', required: false, enum: UserType })
  @IsEnum(UserType)
  userType!: UserType;

  @ApiProperty({
    description: 'User Status',
    required: false,
    enum: UserStatus,
  })
  @IsEnum(UserStatus)
  userStatus!: UserStatus;
}
