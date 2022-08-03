// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const sendmail = require('sendmail')();

import nodemailer from 'nodemailer';
import moment from 'moment';

export const sendJobApplicationMail = ({
  userTo,
  job,
  application,
  handleError,
}) => {
  const htmlToSend = `<p>Hello, ${userTo.name}, </p>
        <p> You've got new application for your job posting. </p> 
     
        <b>Job Details</b> <br>
        <text>Position: ${job.position} </text> <br>
        <text>Company: ${job.company}</text> <br>
        <text>Location: ${job.jobLocation}</text> <br>
        <text>Job Type: ${job.jobType}</text> <br>
        <text>Job Status: ${job.status}</text> <br>
        <text>Created At: ${moment(job.createdAt).format('MMM Do, YYYY')}
          </text> <br>
        
        <br>
        <b>Job Application</b> <br>
        <text>Name: ${application.fullName}</text> <br> 
        <text>Gender: ${application.gender}</text> <br>
        <text>Email: ${application.email}</text> <br>
        <text>Phone: ${application.phone}</text> <br>`;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.sendMail(
    {
      //   to: 'davitashvilianna@gmail.com',
      to: userTo.email,
      subject: 'New Job Application', // for job ${job._id}
      attachments: [
        {
          filename: application.resume.name,
          contentType: 'application/pdf',
          content: application.resume.data,
        },
      ],
      html: htmlToSend,
    },
    (error, info) => {
      if (error) {
        handleError(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }
  );
};
