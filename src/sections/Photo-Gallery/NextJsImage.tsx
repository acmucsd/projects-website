import type { RenderPhotoProps } from "react-photo-album";
import { CldImage } from "next-cloudinary";

import s from "./style.module.scss";

export default function NextJsImage({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
}: RenderPhotoProps) {
    const combinedClassName = className ? `${className} ${s.image}` : s.image;

    return (
        <div style={{ ...wrapperStyle, position: "relative" }}>
            <CldImage
                fill
                src={photo.src}
                className={combinedClassName}
                placeholder={"blurDataURL" in photo ? "blur" : undefined}
                alt={alt}
                title={title}
                sizes={sizes}
                onClick={onClick}
            />
        </div>
    );
}
