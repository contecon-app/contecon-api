import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PermissionService } from './permission.service';
import { Permission } from './entities/permission.entity';
import { CreatePermissionInputDto } from './models/create-permission-input.dto';
import { UpdatePermissionInputDto } from './models/update-permission-input.dto';

@Resolver(() => Permission)
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}

  @Mutation(() => Permission, { name: 'createPermission' })
  async create(@Args('data') data: CreatePermissionInputDto) {
    return this.permissionService.create(data);
  }

  @Mutation(() => Permission, { name: 'updatePermission' })
  async update(@Args('data') data: UpdatePermissionInputDto) {
    return this.permissionService.update(data);
  }

  @Mutation(() => Permission, { name: 'deletePermission' })
  async delete(@Args('id') id: string) {
    return this.permissionService.delete(id);
  }

  @Query(() => Permission, { name: 'getPermissionById' })
  async getById(@Args('id') id: string) {
    return this.permissionService.getById(id);
  }

  @Query(() => [Permission], { name: 'getAllPermissions' })
  async getAll() {
    return this.permissionService.getAll();
  }
}
