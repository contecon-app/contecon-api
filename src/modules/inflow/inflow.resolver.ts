import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Inflow } from './entities/inflow.entity';
import { InflowService } from './inflow.service';
import { CreateInflowInput } from './models/create-inflow-input.dto';
import { GetCurrentUser } from 'src/shared/decorators/get-current-user';
import { CurrentUser } from 'src/common/types/current-user.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { UpdateInflowInput } from './models/update-inflow-input.dto';

@Resolver(() => Inflow)
export class InflowResolver {
  constructor(private readonly inflowService: InflowService) {}

  @Mutation(() => Inflow, { name: 'createInflow' })
  @UseGuards(AuthGuard)
  create(
    @GetCurrentUser() user: CurrentUser,
    @Args('data') data: CreateInflowInput,
  ) {
    return this.inflowService.create(user.userId, data);
  }

  @Mutation(() => Inflow, { name: 'updateInflow' })
  @UseGuards(AuthGuard)
  update(
    @GetCurrentUser() user: CurrentUser,
    @Args('data') data: UpdateInflowInput,
  ) {
    return this.inflowService.update(user.userId, data);
  }

  @Mutation(() => Inflow, { name: 'deleteInflow' })
  @UseGuards(AuthGuard)
  delete(
    @Args('id', { type: () => String }) id: string,
    @GetCurrentUser() user: CurrentUser,
  ) {
    return this.inflowService.delete(user.userId, id);
  }

  @Query(() => Inflow, { name: 'getInflowById' })
  @UseGuards(AuthGuard)
  get(
    @Args('id', { type: () => String }) id: string,
    @GetCurrentUser() user: CurrentUser,
  ) {
    return this.inflowService.getById(user.userId, id);
  }

  @Query(() => [Inflow], { name: 'getAllInflows' })
  @UseGuards(AuthGuard)
  getAll(@GetCurrentUser() user: CurrentUser) {
    return this.inflowService.getAll(user.userId);
  }
}
