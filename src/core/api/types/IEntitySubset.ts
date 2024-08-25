import { Subset } from "../../types/Subset";
import { IHaveId } from "./IHaveId";

export type IEntitySubset<T, K extends keyof T> = Subset<T, K> & IHaveId;
