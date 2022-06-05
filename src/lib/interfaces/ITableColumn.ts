import type { TTableColumnType } from "./TTableColumnType";

export interface ITableColumn {
    label: string;
    type: TTableColumnType;
    key: string;
}