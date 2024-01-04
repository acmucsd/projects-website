"use client";

import React, { useState, useEffect } from "react";
import s from "./style.module.scss";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";

const qtr_yr = [
    {value:"wtr_23", text: "Winter 2023", length: 16},
    {value: "spr_23", text: "Spring 2023", length: 24, vertical:[7, 24, 22]},
    // {value: "sum_23", text: "Summer 2023", length: 1}
]

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

type Photo = {
    src: string;
    width: number;
    height: number;
    srcSet: {
      src: string;
      width: number;
      height: number;
    }[];
  };

const options = qtr_yr.map((option, index) => {
    return <option value={option.value} key={index}>{option.text}</option>
})

const PhotoGallery: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState(qtr_yr[0].value);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    }
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        const rawPhotos = [];
        //here i am trying to read the dimensions of the image from cloudinary, but doesn't work
        // const cloudinary = require('cloudinary').v2;
        // cloudinary.config({
        //     cloud_name: 'dgnecfapo',
        //     api_key: '',
        //     api_secret: ''
        //   });
        const selectedQtrYr = qtr_yr.find(q => q.value === selectedOption);
        const numPhotos = selectedQtrYr?.length ?? 0;
        const indexVertical = selectedQtrYr?.vertical ?? [];
        for (let i = 1; i <= numPhotos; i++) {
            const newPhoto = {src: `${selectedOption}_showcase_${i}.jpg`, width:4032, height:3024};
            if (indexVertical.includes(i)) {
                newPhoto.width = 4000;
                newPhoto.height = 6000;
            }
            // trying to dynamically read the images from cloudinary
            // cloudinary.uploader.explicit(newPhoto.src, {type: 'fetch'}, function(error: string, result: any) {
            //     newPhoto.width = result.width;
            //     newPhoto.height = result.height;
            //   });
            rawPhotos.push(newPhoto);
        }

        const updatedPhotos = rawPhotos.map((photo) => ({
            src: photo.src,
            width: photo.width,
            height: photo.height,
            srcSet: breakpoints.map((breakpoint) => {
                const height = Math.round((photo.height / photo.width) * breakpoint);
                return {
                    src: photo.src,
                    width: breakpoint,
                    height,
                };
            }),
        }));

        setPhotos(updatedPhotos);
    }, [selectedOption]);

    return (
        <>
            <div className={s.container} id="gallery">
                <h1>Photo Gallery</h1>
                <select name="project_select" onChange={handleChange}>
                    {options}
                </select>
            </div>
            
            <PhotoAlbum
                photos={photos}
                layout="rows"
                renderPhoto={NextJsImage}
                sizes={{
                    size: "calc(90vw - 100px)",
                    sizes: [
                        { viewport: "(max-width: 299px)", size: "calc(90vw - 10px)" },
                        { viewport: "(max-width: 599px)", size: "calc(90vw - 20px)" },
                        { viewport: "(max-width: 1199px)", size: "calc(90vw - 30px)" },
                    ],
                }}
            /> 
        </>
    );
}

export default PhotoGallery;