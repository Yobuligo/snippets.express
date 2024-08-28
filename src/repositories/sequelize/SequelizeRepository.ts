import { Model, ModelStatic, WhereOptions } from "sequelize";
import { IEntity } from "../../core/api/types/IEntity";
import { IEntityDetails } from "../../core/api/types/IEntityDetails";
import { IEntityRepository } from "../../core/api/types/IEntityRepository";
import { IEntitySubset } from "../../core/api/types/IEntitySubset";

export abstract class SequelizeRepository<TEntity extends IEntity>
  implements IEntityRepository<TEntity>
{
  constructor(
    protected readonly model: ModelStatic<
      Model<TEntity, IEntityDetails<TEntity>>
    >
  ) {}

  async delete(entity: TEntity): Promise<boolean> {
    return await this.deleteById(entity.id);
  }

  async deleteById(id: string): Promise<boolean> {
    const count = await this.model.destroy({
      where: { id: id } as WhereOptions<TEntity>,
    });
    return count === 1;
  }

  findAll<K extends keyof TEntity>(
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K>[]>;
  findAll(): Promise<TEntity[]>;
  async findAll(fields?: unknown): Promise<unknown> {
    const requestedFields = this.getFields(fields);
    const data = await this.model.findAll({ attributes: requestedFields });
    return data.map((model) => model.toJSON());
  }

  findById<K extends keyof TEntity>(
    id: string,
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K> | undefined>;
  findById(id: string): Promise<TEntity | undefined>;
  async findById(id: string, fields?: unknown): Promise<unknown> {
    const requestedFields = this.getFields(fields);
    const data = await this.model.findByPk(id, { attributes: requestedFields });
    return data?.toJSON();
  }

  insert<K extends keyof TEntity>(
    entity: IEntityDetails<TEntity>,
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K>>;
  insert(entity: IEntityDetails<TEntity>): Promise<TEntity>;
  insert(entity: unknown, fields?: unknown): Promise<unknown> {
    throw new Error("Method not implemented.");
  }

  update<K extends keyof TEntity>(
    entity: TEntity,
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K>>;
  update(entity: TEntity): Promise<TEntity>;
  update(entity: unknown, fields?: unknown): Promise<unknown> {
    throw new Error("Method not implemented.");
  }

  updateAll<K extends keyof TEntity>(
    entities: TEntity[],
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K>[]>;
  updateAll(entities: TEntity[]): Promise<TEntity[]>;
  updateAll(entities: unknown, fields?: unknown): Promise<unknown> {
    throw new Error("Method not implemented.");
  }

  private getFields(fields?: unknown): string[] {
    if (fields && Array.isArray(fields)) {
      return fields;
    }
    return [];
  }
}
