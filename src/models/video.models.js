import mongoose, { Schema } from "mongoose";
import moongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // cloudinary URL
            required: true, 
        },
        thumbnail: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        duration: {
            type: String,
            required: true,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        }, 
    },
    {
        timestamps: true, 
    }
)

videoSchema.plugin(moongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);



/*
likes: {
            type: Number,
            default: 0,
        },
        dislikes: {
            type: Number,
            default: 0,
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment",
            }
        ],
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
*/