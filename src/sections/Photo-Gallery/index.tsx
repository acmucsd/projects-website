import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";
import s from "./style.module.scss";


const qtr_yr = [
    {value:"wtr_23", text: "Winter 2023"},
    {value: "spr_23", text: "Spring 2023"},
    {value: "sum_23", text: "Summer 2023"}
]


const options = qtr_yr.map((option, index) => {
    return <option value={option.value} key={index}>{option.text}</option>
})

const PhotoGallery: React.FC =  () => {

    const photos = [
        { src: "public\assets\wtr_23\IMG_2364.jpg", width: 800, height: 600},
        { src: "public\assets\wtr_23\IMG_2366.jpg", width: 800, height: 600},
    ]

    return (
        <div className={ s.container }>
            <h1>Photo Gallery</h1>
            <select name="project_select">
                {options}
            </select>
            <PhotoAlbum
                layout="rows"
                photos={photos}
                renderPhoto={NextJsImage}
                defaultContainerWidth={1200}
                sizes={{ size: "calc(100vw - 240px)" }}
            />
        </div>
    )
}

export default PhotoGallery;

