import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";
import photos from "./photos";
import s from "./style.module.scss";

export default function Gallery() {
    return (
            <PhotoAlbum
            photos={photos}
            layout="rows"
            renderPhoto={NextJsImage}
            sizes={{
                size: "calc(90vw - 100px)",
                sizes: [
                    { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
                    { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
                    { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
                ],
            }}
        />
    );
}
