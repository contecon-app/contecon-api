import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Beneficiary } from './entities/beneficiary.entity';
import { GetCurrentUser } from 'src/shared/decorators/get-current-user';
import { CurrentUser } from 'src/common/types/current-user.entity';
import { BeneficiaryService } from './beneficiary.service';
import { AuthGuard } from '../auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { CreateBeneficiaryInput } from './models/create-beneficiary-input.dto';
import { UpdateBeneficiaryInput } from './models/update-beneficiary-input.dto';

@Resolver(() => Beneficiary)
export class BeneficiaryResolver {
  constructor(private readonly beneficiaryService: BeneficiaryService) {}

  @Query(() => [Beneficiary], { name: 'getAllBeneficiaries' })
  @UseGuards(AuthGuard)
  getAll(@GetCurrentUser() user: CurrentUser) {
    return this.beneficiaryService.getAll(user.userId);
  }

  @Query(() => Beneficiary, { name: 'getBeneficiaryById' })
  @UseGuards(AuthGuard)
  getById(
    @GetCurrentUser() user: CurrentUser,
    @Args('id', { type: () => String }) id: string,
  ) {
    return this.beneficiaryService.getById(user.userId, id);
  }

  @Mutation(() => Beneficiary, { name: 'createBeneficiary' })
  @UseGuards(AuthGuard)
  create(
    @GetCurrentUser() user: CurrentUser,
    @Args('data') data: CreateBeneficiaryInput,
  ) {
    return this.beneficiaryService.create(user.userId, data);
  }

  @Mutation(() => Beneficiary, { name: 'updateBeneficiary' })
  @UseGuards(AuthGuard)
  update(
    @GetCurrentUser() user: CurrentUser,
    @Args('data') data: UpdateBeneficiaryInput,
  ) {
    return this.beneficiaryService.update(user.userId, data);
  }

  @Mutation(() => Beneficiary, { name: 'deleteBeneficiary' })
  @UseGuards(AuthGuard)
  delete(
    @GetCurrentUser() user: CurrentUser,
    @Args('id', { type: () => String }) id: string,
  ) {
    return this.beneficiaryService.delete(user.userId, id);
  }
}
