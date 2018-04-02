import { IGalleryPicture } from "../../shared/interfaces/IGalleryPicture";

export interface IGalleryProps {
    title: string;
    pictures: IGalleryPicture[];
    pageLink?: string;
}