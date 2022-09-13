import { Resolver } from '@nestjs/graphql';
import { SubgraphBService } from './subgraph-b.service';

@Resolver('SubgraphA')
export class SubgraphBResolver {
  constructor(private readonly subgraphBService: SubgraphBService) {}
}
