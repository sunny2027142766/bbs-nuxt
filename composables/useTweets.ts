export default () => {
    const postTweet = (formData: any) => {
        const form = new FormData()
        form.append('text', formData.text)
        formData.mediaFiles.forEach((mediaFile: Blob, index: number) => {
            form.append('media_file_' + index, mediaFile)
        })

        return useFetchApi('/api/user/tweets', {
            method: 'POST',
            body: form,
        })
    }

    const getTweets = () => {

        return useFetchApi('/api/tweets', {
            method: 'GET',
        })
    }

    return {
        postTweet, getTweets
    }
}
