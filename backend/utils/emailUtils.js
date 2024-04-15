// utils/emailUtils.js

const sendEmail = async (recipient, subject, content) => {
    // Placeholder function for sending email
    try {
        console.log(`Sending email to ${recipient} with subject: ${subject}`);
        console.log(`Email content:\n${content}`);
    } catch (error) {
        console.error('Error sending Email', error);
    }
};

module.exports = { sendEmail };
