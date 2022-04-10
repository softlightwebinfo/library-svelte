import type { IMessage } from "./IMessage";

export interface IContact {
    new?: boolean;
    title: string;
    subTitle: string;
    image: string;
    date: string;
    id: number;
    messages?: IMessage[];
}