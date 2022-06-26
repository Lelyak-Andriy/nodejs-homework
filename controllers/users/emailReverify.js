const { NotFound } = require("http-errors");
const uuid = require("uuid");
const { User } = require("../../models");
const { sendEmail } = require("../../helpers");

const emailReverify = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new NotFound("Missing required field email");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new NotFound(`User with email ${email} is not found`);
  }

  if (user.verified) {
    throw new NotFound("Verification has already been passed");
  }

  const verificationToken = uuid.v4();

  await User.findByIdAndUpdate(user._id, { verificationToken }, { new: true });

  const mail = {
    to: email,
    from: "a.lelyak47@gmail.com",
    subject: "Email reverification",
    text: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Verify your email</a>`,
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Verify your email</a>`,
  };

  await sendEmail(mail);
  res.status(200).json({
    status: "Success",
    message: "Verification email is sent",
  });
};

module.exports = emailReverify;
