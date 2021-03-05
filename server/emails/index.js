const sgMail = require("@sendgrid/mail");
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

exports.sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: "Thanks for signing up.",
    text: `Hi ${name}! Welcome to your task manager api.`,
  });
};

exports.sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: "Sorry to see you go.",
    text: `Bye ${name}. Hope to see you soon.`,
  });
};

exports.forgotPasswordEmail = (email, token) => {
  const exampleHTMLEmail = `<a target="_blank" rel="noopener noreferrer" href="${process.env.APP_URL}/api/password/${token}">Reset Password</a>`;

  sgMail.send({
    to: email,
    from: process.env.FROM_EMAIL,
    subject: "Password Reset",
    html: exampleHTMLEmail,
  });
};

exports.sendConfirmationEmail = (email) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: "Second Appinion",
    text: `Hello! This email is to confirm that we have received your submission for a second opinion by a dental professional. An unbiased dentist will review your x-rays and questionnaire completed and will email you with the second opinion. 
    
    Thank you for choosing Second Appinion!`,
  });
};
