import { memo, useState, useEffect } from 'react';

const ProgressiveImageLoader = memo(({ src, placeholder, classes, alt = "" }) => {
    const [loading, setLoading] = useState(true);
    const [currentSrc, updateSrc] = useState(placeholder);

    useEffect(() => {
        // start loading original image
        const imageToLoad = new Image();
        imageToLoad.src = src;
        imageToLoad.onload = () => {
            // When image is loaded replace the src and set loading to false
            setLoading(false);
            updateSrc(src);
        }
    }, [src])

    return (
        <img
            className={classes}
            src={currentSrc}
            style={{
                opacity: loading ? 0.5 : 1,
                transition: "opacity .15s linear"
            }}
            alt={alt}
        />
    )
});

export default ProgressiveImageLoader;