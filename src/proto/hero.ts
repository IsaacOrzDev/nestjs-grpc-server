import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type {
  HeroServiceClient as _hero_HeroServiceClient,
  HeroServiceDefinition as _hero_HeroServiceDefinition,
} from './hero/HeroService';

type SubtypeConstructor<
  Constructor extends new (...args: any) => any,
  Subtype,
> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  hero: {
    Hero: MessageTypeDefinition;
    HeroById: MessageTypeDefinition;
    HeroService: SubtypeConstructor<
      typeof grpc.Client,
      _hero_HeroServiceClient
    > & { service: _hero_HeroServiceDefinition };
  };
}
