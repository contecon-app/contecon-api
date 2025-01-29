import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Role } from './entities/role.entity';
import { RoleService } from './role.service';
import { CreateRoleInputDto } from './models/create-role-input.dto';
import { UpdateRoleInputDto } from './models/update-role-input.dto';

@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => [Role], { name: 'getAllRoles' })
  async getAll() {
    return this.roleService.getAll();
  }

  @Query(() => Role, { name: 'getRoleById' })
  async getById(@Args('id') id: string) {
    return this.roleService.getById(id);
  }

  @Mutation(() => Role, { name: 'createRole' })
  async create(@Args('data') data: CreateRoleInputDto) {
    return this.roleService.create(data);
  }

  @Mutation(() => Role, { name: 'updateRole' })
  async update(@Args('data') data: UpdateRoleInputDto) {
    return this.roleService.update(data);
  }

  @Mutation(() => Role, { name: 'deleteRole' })
  async delete(@Args('id') id: string) {
    return this.roleService.delete(id);
  }
}
