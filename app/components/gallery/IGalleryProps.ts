import { IGalleryPicture } from "../../shared/interfaces/IGalleryPicture";
import { IGalleryRow } from "../../shared/interfaces/IGalleryRow";

export interface IGalleryProps {
    title: string;
    rows: IGalleryRow[]
    pageLink?: string;
}