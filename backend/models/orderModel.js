<<<<<<< HEAD
import mongoose from 'mongoose';
=======
import mongoose from 'mongoose'
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811

const orderSchema = mongoose.Schema(
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
    orderItems: [
      {
        name: { type: String, required: true },
<<<<<<< HEAD
        quantity: { type: Number, required: true },
=======
        qty: { type: Number, required: true },
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
<<<<<<< HEAD
      updateTime: { type: String },
=======
      update_time: { type: String },
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
<<<<<<< HEAD
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
=======
)

const Order = mongoose.model('Order', orderSchema)

export default Order
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811
