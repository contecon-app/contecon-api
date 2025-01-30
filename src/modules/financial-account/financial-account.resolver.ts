import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { FinancialAccount } from './entities/financial-account.entity';
import { FinancialAccountService } from './financial-account.service';
import { CreateFinancialAccountInput } from './models/create-financial-account-input.dto';
import { UpdateFinancialAccountInput } from './models/update-financial-account-input.dto';

@Resolver(() => FinancialAccount)
export class FinancialAccountResolver {
  constructor(
    private readonly financialAccountService: FinancialAccountService,
  ) {}

  @Mutation(() => FinancialAccount, { name: 'createFinancialAccount' })
  async create(@Args('data') data: CreateFinancialAccountInput) {
    return this.financialAccountService.create(data);
  }

  @Mutation(() => FinancialAccount, { name: 'updateFinancialAccount' })
  async update(
    @Args('id') id: string,
    @Args('data') data: UpdateFinancialAccountInput,
  ) {
    return this.financialAccountService.update(id, data);
  }

  @Mutation(() => FinancialAccount, { name: 'deleteFinancialAccount' })
  async delete(@Args('id') id: string) {
    return this.financialAccountService.delete(id);
  }

  @Query(() => FinancialAccount, { name: 'getFinancialAccountById' })
  async getById(@Args('id') id: string) {
    return this.financialAccountService.getById(id);
  }

  @Query(() => [FinancialAccount], { name: 'getAllFinancialAccounts' })
  async getAll() {
    return this.financialAccountService.getAll();
  }
}
