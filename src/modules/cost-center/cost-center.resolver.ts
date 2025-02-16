import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { CostCenterService } from './cost-center.service';
import { CostCenter } from './entities/cost-center.entity';
import { CreateCostCenterInput } from './models/create-cost-center-input.dto';
import { UpdateCostCenterInput } from './models/update-cost-center-input.dto';
import { CurrentUser } from 'src/common/types/current-user.entity';
import { GetCurrentUser } from 'src/shared/decorators/get-current-user';
import { AuthGuard } from '../auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class CostCenterResolver {
  constructor(private readonly costCenterService: CostCenterService) {}

  @Mutation(() => CostCenter, { name: 'createCostCenter' })
  @UseGuards(AuthGuard)
  create(
    @Args('data') data: CreateCostCenterInput,
    @GetCurrentUser() user: CurrentUser,
  ) {
    return this.costCenterService.create(user.userId, data);
  }

  @Mutation(() => CostCenter, { name: 'updateCostCenter' })
  @UseGuards(AuthGuard)
  update(
    @Args('data') data: UpdateCostCenterInput,
    @GetCurrentUser() user: CurrentUser,
  ) {
    return this.costCenterService.update(user.userId, data);
  }

  @Mutation(() => CostCenter, { name: 'deleteCostCenter' })
  @UseGuards(AuthGuard)
  delete(@Args('id') id: string, @GetCurrentUser() user: CurrentUser) {
    return this.costCenterService.delete(user.userId, id);
  }

  @Query(() => CostCenter, { name: 'getCostCenterById' })
  @UseGuards(AuthGuard)
  get(@Args('id') id: string, @GetCurrentUser() user: CurrentUser) {
    return this.costCenterService.getAll(user.userId, id);
  }

  @Query(() => [CostCenter], { name: 'getAllCostCenters' })
  @UseGuards(AuthGuard)
  getMany(@GetCurrentUser() user: CurrentUser) {
    return this.costCenterService.getById(user.userId);
  }
}
