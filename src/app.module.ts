import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GqlConfigService } from './config/graphql.config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CostCenterModule } from './modules/cost-center/cost-center.module';
import { CategoryModule } from './modules/category/category.module';
import { PermissionModule } from './modules/permission/permission.module';
import { RoleModule } from './modules/role/role.module';
import { InflowModule } from './modules/inflow/inflow.module';
import { BeneficiaryModule } from './modules/beneficiary/beneficiary.module';
import { FinancialAccountModule } from './modules/financial-account/financial-account.module';
import { RecurrenceModule } from './modules/recurrence/recurrence.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    AuthModule,
    UserModule,
    CostCenterModule,
    CategoryModule,
    PermissionModule,
    RoleModule,
    InflowModule,
    BeneficiaryModule,
    FinancialAccountModule,
    RecurrenceModule,
  ],
})
export class AppModule {}
