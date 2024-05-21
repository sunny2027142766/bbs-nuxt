import {prisma} from "~/server/db/index";

export const createMediaFile = (mediaFileData: any) => {
    return prisma.mediaFile.create({
        data: mediaFileData
    })
}