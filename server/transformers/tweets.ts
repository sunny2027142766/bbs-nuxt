import {mediaFileTransformer} from "~/server/transformers/mediaFile";
import {userTransformer} from "~/server/transformers/user";
// @ts-ignore
import human from "human-time";

export const tweetTransformer = (tweet: any): any => {
    return {
        id: tweet.id,
        text: tweet.text,
        mediaFile: !!tweet.mediaFile ? tweet.mediaFile.map(mediaFileTransformer) : [],
        author: !!tweet.author ? userTransformer(tweet.author) : null,
        replies: !!tweet.replies ? tweet.replies.map(tweetTransformer) : [],
        replyTo: !!tweet.replyTo ? tweetTransformer(tweet.replyTo) : null,
        repliesCounts: !!tweet.replies ? tweet.replies.length : 0,
        postedAtHuman: human(tweet.createAt)
    }
}