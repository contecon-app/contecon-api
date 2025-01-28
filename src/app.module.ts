import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GqlConfigService } from './config/graphql.config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CostCenterModule } from './modules/cost-center/cost-center.module';
import { CategoryModule } from './modules/category/category.module';

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
  ],
})
export class AppModule {}
