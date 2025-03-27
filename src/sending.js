import emailjs from "@emailjs/browser";

const sendEmail = async (sender, receiver, message) => {
  try {
    console.log(message);
    const response = await emailjs.send(
      "service_np9v9g8",    // Replace with your EmailJS service ID
      "template_k89ou0r",
      {
        from_email: sender,
        to_email: receiver,
        message: message,
      },
      "rPp20gYj-IEEV0ohh"     // Replace with your EmailJS public key
    );

    return "Email sent successfully!";
  } catch (error) {
    return `Failed to send email: ${error.text}`;
  }
};

export default sendEmail;
