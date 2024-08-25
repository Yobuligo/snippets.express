import { Subset } from "../../core/types/Subset";
import { IEntity } from "../../shared/types/IEntity";
import { IEntityDetails } from "../../shared/types/IEntityDetails";

export interface IEntityRepository<TEntity extends IEntity> {
  deleteById(id: string): Promise<boolean>;
  findAll<K extends keyof TEntity>(fields: K[]): Promise<Subset<TEntity, K>>;
  findAll<K extends keyof TEntity>(fields?: K): Promise<TEntity>;
  findById(id: string): Promise<TEntity | undefined>;
  insert(entity: IEntityDetails<TEntity>): Promise<TEntity>;
  update(entity: TEntity): Promise<TEntity>;
  updateAll(entities: TEntity[]): Promise<TEntity[]>;
}
