import { ISession } from "../../shared/model/ISession";
import { IEntityDetails } from "../../shared/types/IEntityDetails";
import { ISessionRepo } from "./ISessionRepo";

export class SessionRepo implements ISessionRepo {
  deleteById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<ISession[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<ISession | undefined> {
    throw new Error("Method not implemented.");
  }
  insert(entity: IEntityDetails<ISession>): Promise<ISession> {
    throw new Error("Method not implemented.");
  }
  update(entity: ISession): Promise<ISession> {
    throw new Error("Method not implemented.");
  }
}
