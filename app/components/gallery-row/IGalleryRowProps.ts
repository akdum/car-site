import { IGalleryPicture } from "../../shared/interfaces/IGalleryPicture";

export interface IGalleryRowProps {
    pictures: IGalleryPicture[];
    pageLink?: string;
}