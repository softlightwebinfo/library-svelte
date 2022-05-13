import type { IOptions } from "./IOptions";

export interface ICardSelected extends IOptions<any> {
    id: number | string;
    title: string;
}