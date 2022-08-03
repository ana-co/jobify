import mongoose from 'mongoose';
import validator from 'validator';
const Schema = mongoose.Schema;

const JobApplicationSchema = new mongoose.Schema(
  {
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user',
    // },

    job: {
      type: Schema.Types.ObjectId,
      ref: 'job',
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email',
      },
    },

    name: {
      type: String,
      required: [true, 'Please provide name'],
      minlength: 1,
      trim: true,
    },
    lastName: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },
    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

// JobApplicationSchema.index({ job: 1, email: 1 }, { unique: true });

export default mongoose.model('jobApplication', JobApplicationSchema);
