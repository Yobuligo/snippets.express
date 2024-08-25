import { Subset } from "../../core/types/Subset";
import { IEntity } from "../../core/api/types/IEntity";
import { IEntityDetails } from "../../core/api/types/IEntityDetails";
import { IEntityRepository } from "./IEntityRepository";
import { IEntitySubset } from "../../core/api/types/IEntitySubset";

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

  insert(entity: IEntityDetails<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }
  update(entity: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  updateAll(entities: T[]): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
}
