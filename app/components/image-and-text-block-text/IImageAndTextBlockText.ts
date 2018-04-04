import { ILinkData } from "../../shared/interfaces/ILinkData";

export interface IImageAndTextBlockText {
    title: string;
    text: string;
    link: ILinkData;
    additionalText?: string;
}