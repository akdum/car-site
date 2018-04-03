import { IGalleryPicture } from "./IGalleryPicture";

export interface IGalleryRow {
    pictures: IGalleryPicture[],
    pageLink?: string;
}