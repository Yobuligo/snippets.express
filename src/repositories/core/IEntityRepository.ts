import { IEntity } from "../../core/api/types/IEntity";
import { IEntityDetails } from "../../core/api/types/IEntityDetails";
import { IEntitySubset } from "../../core/api/types/IEntitySubset";

export interface IEntityRepository<TEntity extends IEntity> {
  deleteById(id: string): Promise<boolean>;
  findAll<K extends keyof TEntity>(
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K>[]>;
  findAll(): Promise<TEntity[]>;

  findById<K extends keyof TEntity>(
    id: string,
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K> | undefined>;
  findById(id: string): Promise<TEntity | undefined>;

  insert(entity: IEntityDetails<TEntity>): Promise<TEntity>;
  update(entity: TEntity): Promise<TEntity>;
  updateAll(entities: TEntity[]): Promise<TEntity[]>;
}
