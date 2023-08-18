import { _ArtThumbnail, _ArtWork } from "./ArtWork.types";

export class ArtWork implements _ArtWork {
  id: number;
  title: string;
  image_id: string;
  artwork_type_title: string;
  artist_display: string;

  constructor(id: number, title: string, image_id: string,
  artwork_type_title: string,
  artist_display: string) {
    this.id = id;
    this.title = title;
    this.image_id = image_id;
    this.artwork_type_title = artwork_type_title;
    this.artist_display = artist_display;
  }
}
