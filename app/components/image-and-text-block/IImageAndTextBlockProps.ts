import { ILinkData } from "../../shared/interfaces/ILinkData";

export interface IImageAndTextBlockProps {
    imgName: string;
    title: string;
    text: string;
    link: ILinkData;
    isWhiteBackground: boolean;
    isTextOnLeft: boolean;
    additionalText?: string;
}