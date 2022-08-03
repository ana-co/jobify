import express from 'express';

const router = express.Router();

import { getJobPostings } from '../controllers/jobsController.js';
import {
  makeJobPublic,
  applyForJob,
} from '../controllers/jobPostingController.js';

router.route('/').get(getJobPostings);
router.route('/:id/public').patch(makeJobPublic);
router.route('/:id/apply').post(applyForJob);

export default router;
