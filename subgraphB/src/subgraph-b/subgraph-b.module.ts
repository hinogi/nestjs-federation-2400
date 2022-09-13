import { Module } from '@nestjs/common';
import { SubgraphBService } from './subgraph-b.service';
import { SubgraphBResolver } from './subgraph-b.resolver';

@Module({
  providers: [SubgraphBResolver, SubgraphBService]
})
export class SubgraphBModule {}
