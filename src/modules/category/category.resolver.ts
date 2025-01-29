import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './models/create-category-input.dto';
import { UpdateCategoryInput } from './models/update-category-input.dto';
import { CurrentUser } from 'src/common/types/current-user.entity';
import { GetCurrentUser } from 'src/shared/decorators/get-current-user';
import { AuthGuard } from '../auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category, { name: 'createCategory' })
  @UseGuards(AuthGuard)
  create(
    @Args('data') data: CreateCategoryInput,
    @GetCurrentUser() user: CurrentUser,
  ) {
    return this.categoryService.create(user.userId, data);
  }

  @Mutation(() => Category, { name: 'updateCategory' })
  @UseGuards(AuthGuard)
  update(
    @Args('data') data: UpdateCategoryInput,
    @GetCurrentUser() user: CurrentUser,
  ) {
    return this.categoryService.update(user.userId, data);
  }

  @Mutation(() => Category, { name: 'deleteCategory' })
  @UseGuards(AuthGuard)
  delete(@Args('id') id: string, @GetCurrentUser() user: CurrentUser) {
    return this.categoryService.delete(user.userId, id);
  }

  @Query(() => Category, { name: 'getCategoryById' })
  @UseGuards(AuthGuard)
  get(@Args('id') id: string, @GetCurrentUser() user: CurrentUser) {
    return this.categoryService.getById(user.userId, id);
  }

  @Query(() => [Category], { name: 'getAllCategories' })
  @UseGuards(AuthGuard)
  getMany(@GetCurrentUser() user: CurrentUser) {
    return this.categoryService.getAll(user.userId);
  }
}
