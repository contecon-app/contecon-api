import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './models/create-user-input.dto';
import { UpdateUserInput } from './models/update-user.input.dto';
import { AuthGuard } from '../auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { GetCurrentUser } from 'src/shared/decorators/get-current-user';
import { CurrentUser } from 'src/common/types/current-user.entity';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'getUsers' })
  async getAll() {
    return this.userService.getAll();
  }

  @Query(() => User, { name: 'getUser' })
  async getOne(@Args('id') id: string) {
    return this.userService.getOne(id);
  }

  @Mutation(() => User, { name: 'createUser' })
  async create(@Args('data') data: CreateUserInput) {
    return this.userService.create(data);
  }

  @Mutation(() => User, { name: 'updateUser' })
  async update(@Args('data') data: UpdateUserInput) {
    return this.userService.update(data);
  }

  @Mutation(() => User, { name: 'deleteUser' })
  async delete(@Args('id') id: string) {
    return this.userService.delete(id);
  }

  @Query(() => User, { name: 'getCurrentUser' })
  @UseGuards(AuthGuard)
  async getCurrentUser(@GetCurrentUser() user: CurrentUser) {
    return this.userService.getCurrentUser(user.userId);
  }
}
