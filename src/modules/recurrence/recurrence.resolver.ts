import { Recurrence } from './entities/recurrence.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecurrenceService } from './recurrence.service';
import { CreateRecurrenceInput } from './models/create-recurrence-input.dto';
import { GetCurrentUser } from 'src/shared/decorators/get-current-user';
import { CurrentUser } from 'src/common/types/current-user.entity';
import { AuthGuard } from '../auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { UpdateRecurrenceInput } from './models/update-recurrence-input.dto';

@Resolver(() => Recurrence)
export class RecurrenceResolver {
  constructor(private readonly recurrenceService: RecurrenceService) {}

  @Mutation(() => Recurrence, { name: 'createRecurrence' })
  @UseGuards(AuthGuard)
  async create(
    @Args('data') data: CreateRecurrenceInput,
    @GetCurrentUser() user: CurrentUser,
  ) {
    return this.recurrenceService.create(user.userId, data);
  }

  @Mutation(() => Recurrence, { name: 'updateRecurrence' })
  @UseGuards(AuthGuard)
  async update(
    @Args('data') data: UpdateRecurrenceInput,
    @GetCurrentUser() user: CurrentUser,
  ) {
    return this.recurrenceService.update(user.userId, data);
  }

  @Mutation(() => Recurrence, { name: 'deleteRecurrence' })
  @UseGuards(AuthGuard)
  async delete(@Args('id') id: string, @GetCurrentUser() user: CurrentUser) {
    return this.recurrenceService.delete(user.userId, id);
  }

  @Query(() => [Recurrence], { name: 'getAllRecurrences' })
  @UseGuards(AuthGuard)
  async getAll(@GetCurrentUser() user: CurrentUser) {
    return this.recurrenceService.getAll(user.userId);
  }

  @Query(() => Recurrence, { name: 'getRecurrenceById' })
  @UseGuards(AuthGuard)
  async getById(@Args('id') id: string, @GetCurrentUser() user: CurrentUser) {
    return this.recurrenceService.getById(user.userId, id);
  }
}
