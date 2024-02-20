import mongoose from "mongoose";

const ImageSchema = mongoose.Schema(
    {
      img: {
        type: String,
      },
    })



const Image = mongoose.model('Image',ImageSchema)
export default Image
