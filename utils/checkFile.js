import imageUrlFor from './imageUrlFor';



const checkFile = (image, size) => {
    const file = imageUrlFor(image).url().split(".");
    const filetype = file[file.length - 1]
    if (filetype === "gif")
      return imageUrlFor(image).width(size).url();
    return imageUrlFor(image).width(size).format('webp').url();
}

export default checkFile;