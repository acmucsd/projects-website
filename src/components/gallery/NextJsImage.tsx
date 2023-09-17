import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";
import { CldImage } from 'next-cloudinary';
import s from "./style.module.scss"

export default function NextJsImage({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
}: RenderPhotoProps) {
    return (
        <div style={{ ...wrapperStyle, position: "relative" }}>
            <CldImage
                fill
                src={ photo.src }
                className={s.image}
                placeholder={"blurDataURL" in photo ? "blur" : undefined}
                {...{ alt, title, sizes, onClick }}
            />
        </div>
    );
}
