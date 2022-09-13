import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SubgraphBModule } from './subgraph-b/subgraph-b.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['**/*.graphql'],
      mocks: true,
      mockEntireSchema: false,
    }),
    SubgraphBModule,
  ],
})
export class AppModule {}
