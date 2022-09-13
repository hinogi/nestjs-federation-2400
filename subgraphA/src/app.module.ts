import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SubgraphAModule } from './subgraph-a/subgraph-a.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['**/*.graphql'],
      mocks: true,
      mockEntireSchema: false,
    }),
    SubgraphAModule,
  ],
})
export class AppModule {}
