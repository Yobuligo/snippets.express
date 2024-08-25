import { Subset } from "../../core/types/Subset";
import { IEntity } from "../../shared/types/IEntity";
import { IEntityDetails } from "../../shared/types/IEntityDetails";
import { IEntityRepository } from "./IEntityRepository";

export abstract class EntityRepository<T extends IEntity>
  implements IEntityRepository<T>
{
    deleteById(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    findAll<K extends keyof T>(fields: K[]): Promise<Subset<T, K>>;
    findAll<K extends keyof T>(fields?: K | undefined): Promise<T>;
    findAll(fields?: unknown): Promise<unknown> {
        throw new Error("Method not implemented.");
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
