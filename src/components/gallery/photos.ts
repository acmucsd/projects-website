const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const rawPhotos = [];
for (let i = 1; i <= 16; i++) {
    const newPhoto = { src: `v1694905295/wtr_23_showcase_${i}.jpg` , width:4032, height:3024};
    rawPhotos.push(newPhoto);
  }


// https://res.cloudinary.com/dgnecfapo/image/upload/v1694889051/PXL_20230407_003553652_nrt8en.jpg
const photos = rawPhotos.map((photo) => ({
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

export default photos;
