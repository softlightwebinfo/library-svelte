import type { ICustomAll } from "./ICustomAll";
import type { TEmpty } from "./TEmpty";

export interface ITableRow extends ICustomAll<TEmpty> {
    id: number | string;
}