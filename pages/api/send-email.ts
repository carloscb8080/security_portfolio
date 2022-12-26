import type { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";
import { env } from "../../config";
import { Contact } from "../../interfaces/contact";
import { getTemplateEmail } from "../../utils/email";

type Data = {
  message: string;
};

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(404).json({
      message: "Not found",
    });
  }

  try {
    const { firstName, lastName, email, message, affair, phone } =
      req.body as Contact;
    const name = `${firstName} ${lastName}`;

    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: env.email.from,
        pass: env.email.api,
      },
    });

    await transporter.sendMail({
      from: env.email.from,
      to: env.email.from,
      subject: affair,
      html: getTemplateEmail(name, email, message, phone),
    });

    return res.status(200).json({
      message:
        "Gracias por contactarnos, pronto nos pondremos en contacto contigo",
    });
  } catch (error) {
    return res.status(500).json({
      message:
        "Tuvimos un problema al enviar tu mensaje. Por favor, intenta más tarde.",
    });
  }
}
