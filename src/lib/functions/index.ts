export const handleImageChange = (currentIndex, images, direction = "forward") => {
    if (direction == 'forward')
        currentIndex = (currentIndex + 1) % images.length;
    else
        currentIndex = (currentIndex - 1 + images.length) % images.length;

    return currentIndex;
}

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
