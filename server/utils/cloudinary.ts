import {v2 as _cloudinary} from 'cloudinary'


const cloudinary = () => {
    const config = useRuntimeConfig();
    _cloudinary.config({
        cloud_name: config.cloudinaryCloudName,
        api_key: config.cloudinaryApiKey,
        api_secret: config.cloudinaryApiSecret
    })

    return _cloudinary
}

export const uploadToCloudinary = (file: string) => {
    return new Promise((resolve, reject) => {
        cloudinary().uploader.upload(file, {
            timestamp: new Date().getTime(),
        }, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}