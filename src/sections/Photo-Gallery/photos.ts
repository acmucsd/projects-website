const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const rawPhotos = [
    { src: "IMG_1517.png", width: 1080, height: 800 },
    { src: "IMG_2630.png", width: 1080, height: 1620 },
    { src: "IMG_3041.JPG", width: 1080, height: 720 },
    { src: "IMG_3043.JPG", width: 1080, height: 721 },
    { src: "IMG_3053.JPG", width: 1080, height: 1620 },
    { src: "IMG_3055.JPG", width: 1080, height: 607 },
    { src: "IMG_3062.JPG", width: 1080, height: 608 },
    { src: "IMG_3066.JPG", width: 1080, height: 720 },
    { src: "IMG_3069.JPG", width: 1080, height: 1549 },
    { src: "IMG_3072.JPG", width: 1080, height: 720 },
];

const photos = rawPhotos.map((photo) => ({
    src: '/spr-23/' + photo.src,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: '/spr-23/' + photo.src,
            width: breakpoint,
            height,
        };
    }),
}));

export default photos;
