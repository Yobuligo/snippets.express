import { IEntity } from "./IEntity";

export type IEntityDetails<TEntity extends IEntity> = Omit<
  TEntity,
  "id" | "createdAt" | "updatedAt"
>;
