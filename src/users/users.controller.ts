import {
  Controller,
  Get,
  UseGuards,
  Req,
  Patch,
  Body,
  Query,
  Delete,
  Param,
} from '@nestjs/common';

import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { JwtAuthenticationGuard } from '../common/guards/jwt-authentication.guard';
import { RequestWithUser } from '../common/types/request-with-user.type';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import RoleType from 'src/common/constants/role-type.constant';
import PaginationParams from 'src/common/types/pagination-params.type';

@Controller({ path: 'users', version: '1' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('list')
  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Roles(RoleType.ADMIN)
  getAll(@Query() query: PaginationParams) {
    return this.usersService.findAll(query);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Roles(RoleType.ADMIN)
  delete(@Param('id') id: number) {
    return this.usersService.deleteOneById(id);
  }

  @Get('profile')
  @UseGuards(JwtAuthenticationGuard)
  findOne(@Req() request: RequestWithUser) {
    return request.user;
  }

  @Patch('profile')
  @UseGuards(JwtAuthenticationGuard)
  updateOne(
    @Req() request: RequestWithUser,
    @Body() updatedUserData: UpdateUserDto,
  ) {
    return this.usersService.updateUserById(request.user.id, updatedUserData);
  }
}
