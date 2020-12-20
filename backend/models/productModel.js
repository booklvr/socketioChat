<<<<<<< HEAD
import mongoose from 'mongoose';
=======
import mongoose from 'mongoose'
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
<<<<<<< HEAD
  },
  { timestamps: true }
);
=======
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811

const productSchema = mongoose.Schema(
  {
    user: {
<<<<<<< HEAD
      type: mongoose.Schema.Types.objectId,
=======
      type: mongoose.Schema.Types.ObjectId,
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
<<<<<<< HEAD
);

const Product = mongoose.model('Product', productSchema);

export default Product;
=======
)

const Product = mongoose.model('Product', productSchema)

export default Product
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811
