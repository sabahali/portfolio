"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import nodemailer from "nodemailer"
const resend = new Resend(process.env.RESEND_API_KEY);
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sabahalick21@gmail.com",
    pass: process.env.APP_PASS_KEY
  },
});
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  // let data;
  try {
    const mailOptions = {
      from: "sabahalick21@gmail.com",
      to: "sabahalick21@gmail.com",
      subject: "Message from contact form",
      html:`<h2>Message :</h2><h3>${message}</h3><br/><h2>From : </h2><h3>${senderEmail}</h3>`
    }
    await transporter.sendMail(mailOptions)
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data : 'success',
  };
};
