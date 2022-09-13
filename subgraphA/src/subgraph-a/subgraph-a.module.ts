import { Module } from '@nestjs/common';
import { SubgraphAService } from './subgraph-a.service';
import { SubgraphAResolver } from './subgraph-a.resolver';

@Module({
  providers: [SubgraphAResolver, SubgraphAService]
})
export class SubgraphAModule {}
