import { IEntity } from "../../core/api/types/IEntity";

export interface ISession extends IEntity {
  expiresAt: Date;
  platform: string;
  userId: string;
}
