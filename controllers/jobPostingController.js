import { StatusCodes } from 'http-status-codes';

import checkPermissions from '../utils/checkPermissions.js';
import { BadRequestError, NotFoundError } from '../errors/index.js';

import Job from '../models/Job.js';
import JobApplication from '../models/JobApplication.js';
import User from '../models/User.js';
import { sendJobApplicationMail } from '../utils/mailUtils.js';

const makeJobPublic = async (req, res) => {
  const { id: jobId } = req.params;
  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id :${jobId}`);
  }

  checkPermissions(req.user, job.createdBy);

  job.isPublic = true;

  const publicJob = await Job.findOneAndUpdate({ _id: jobId }, job, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ publicJob });
};

const applyForJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id :${jobId}`);
  }
  if (!job.isPublic) {
    throw new BadRequestError('You can only apply for public jobs');
  }

  const { name, lastName, gender, email, phone, fileName } = req.body;
  const resume = req.files.resume;
  resume.name = fileName;

  const existsApplication = await JobApplication.findOne({
    job: jobId,
    email: email,
  });

  if (existsApplication) {
    throw new BadRequestError(
      'User with this email has already applied for this job'
    );
  }

  const userTo = await User.findOne({ _id: job.createdBy });

  sendJobApplicationMail({
    userTo,
    job,
    application: {
      fullName: name + ' ' + lastName,
      gender: gender,
      email: email,
      phone: phone,
      resume: resume,
    },
    handleError: (err) => {
      // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
      console.log(error);
    },
  });

  const jobApplication = await JobApplication.create({
    job: jobId,
    name: name,
    lastName: lastName,
    gender: gender,
    email: email,
    phone: phone,
  });

  res.status(StatusCodes.CREATED).json({ msg: jobApplication });
};

export { applyForJob, makeJobPublic };
