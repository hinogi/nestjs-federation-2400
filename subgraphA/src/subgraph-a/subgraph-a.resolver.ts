import { Args, Query, Resolver } from '@nestjs/graphql';
import { SubgraphAService } from './subgraph-a.service';

@Resolver('SubgraphA')
export class SubgraphAResolver {
  constructor(private readonly subgraphAService: SubgraphAService) {}

  @Query()
  subgraphA(@Args('id') id: string) {
    return {
      id: 'TestID',
      name: 'TestName',
    };
  }
}
