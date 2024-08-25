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

  findAll<K extends keyof T>(fields: K[]): Promise<IEntitySubset<T, K>>;
  findAll<K extends keyof T>(fields?: K | undefined): Promise<T>;
  findAll(fields?: unknown): Promise<unknown> {
    throw new Error();
  }

  findById(id: string): Promise<T | undefined> {
    throw new Error("Method not implemented.");
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
