import { IEntity } from "../types/IEntity";

/**
 * Returns if the given {@link value} is of type {@link IEntity}.
 */
export const isEntity = (value: object): value is IEntity => {
  return "id" in value && "createdAt" in value && "updatedAt" in value;
};
