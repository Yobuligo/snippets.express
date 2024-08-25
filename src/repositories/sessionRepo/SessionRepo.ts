import { ISession } from "../../shared/model/ISession";
import { SequelizeRepository } from "../sequelize/SequelizeRepository";

export class SessionRepo extends SequelizeRepository<ISession> {}
