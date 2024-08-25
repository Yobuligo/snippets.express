import { IEntity } from "../../core/api/types/IEntity";
import { IEntityDetails } from "../../core/api/types/IEntityDetails";
import { IEntitySubset } from "../../core/api/types/IEntitySubset";
import { IEntityRepository } from "./IEntityRepository";

export abstract class EntityRepository<T extends IEntity>
  implements IEntityRepository<T>
{
  deleteById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  findAll<K extends keyof T>(fields: K[]): Promise<IEntitySubset<T, K>[]>;
  findAll(): Promise<T[]>;
  findAll(fields?: unknown): Promise<unknown> {
    throw new Error();
  }

  findById<K extends keyof T>(
    id: string,
    fields: K[]
  ): Promise<IEntitySubset<T, K> | undefined>;
  findById(id: string): Promise<T | undefined>;
  findById(id: unknown, fields?: unknown): Promise<unknown> {
    throw new Error();
  }

  insert<K extends keyof T>(
    entity: IEntityDetails<T>,
    fields: K[]
  ): Promise<IEntitySubset<T, K>>;
  insert(entity: IEntityDetails<T>): Promise<T>;
  insert(entity: unknown, fields?: unknown): Promise<unknown> {
    throw new Error("Method not implemented.");
  }
  update<K extends keyof T>(
    entity: T,
    fields: K[]
  ): Promise<IEntitySubset<T, K>>;
  update(entity: T): Promise<T>;
  update(entity: unknown, fields?: unknown): Promise<unknown> {
    throw new Error("Method not implemented.");
  }
  updateAll<K extends keyof T>(
    entities: T[],
    fields: K[]
  ): Promise<IEntitySubset<T, K>[]>;
  updateAll(entities: T[]): Promise<T[]>;
  updateAll(entities: unknown, fields?: unknown): Promise<unknown> {
    throw new Error("Method not implemented.");
  }
}
