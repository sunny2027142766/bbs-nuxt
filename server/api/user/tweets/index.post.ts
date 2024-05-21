import formidable from "formidable";
import {createTweet} from "~/server/db/tweets";
import {tweetTransformer} from "~/server/transformers/tweets";
import {createMediaFile} from "~/server/db/mediaFile";
import {uploadToCloudinary} from "~/server/utils/cloudinary";

export default defineEventHandler(async (event) => {

    const form = formidable({})

    const response = await new Promise<any>((resolve, reject) => {
        form.parse(event.node.req, (err, fields, files) => {
            if (err) reject(err)
            resolve({fields, files})
        })
    })

    const {fields, files} = response

    const userId = event.context?.auth?.user?.id

    const tweetData: any = {
        text: fields.text[0],
        authorId: userId,
    }

    const replyTo = fields.replyTo

    if (replyTo && replyTo !== 'null') {
        tweetData.replyToId = replyTo[0]
    }

    const tweet = await createTweet(tweetData)

    const filePromise = Object.keys(files).map(async (key) => {
        const file = files[key][0]
        const cloudinaryResource = await uploadToCloudinary(file.filepath) as any

        return createMediaFile({
            url: cloudinaryResource.secure_url,
            providerPublicId: cloudinaryResource.public_id,
            userId: userId,
            tweetId: tweet.id,
        })
    })

    await Promise.all(filePromise)


    return {
        tweet: tweetTransformer(tweet)
    }
})