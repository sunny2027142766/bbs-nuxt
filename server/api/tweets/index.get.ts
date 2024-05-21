import {getTweets} from "~/server/db/tweets";
import {tweetTransformer} from "~/server/transformers/tweets";

export default defineEventHandler(async (event) => {
    const tweets = await getTweets({
        include: {
            author: true,
            mediaFile: true,
            replies: {
                include:{
                    author: true,
                }
            },
            replyTo: {
                include:{
                    author: true,
                }
            }
        },
        orderBy: [
            {
                createAt: 'desc'
            }
        ]
    });

    return {
        tweets: tweets.map(tweetTransformer)
    }
})