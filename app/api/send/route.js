// /app/api/send/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
        host: "mail.hankah.sa",
        port: 465,
        secure: true, // true لمنفذ 465
        auth: {
          user: "info@hankah.sa",
          pass: process.env.EMAIL_PASS,
        },
      });
      

    const mailOptions = {
      from: `"Henka Website" <info@hankah.sa>`,
      to: "amineelakkermi37@gmail.com", // يمكنك تغييره لأي ايميل آخر مستلم
      subject: "📩 نموذج مشروع جديد",
      text: `
اسم المشروع: ${data.name}
الوصف: ${data.description}
النموذج: ${data.model}
المرحلة: ${data.stage}
المبلغ المطلوب: ${data.amount}
الاستخدام: ${data.usage}
المستثمرون: ${data.investors}
رابط العرض: ${data.pitchLink}
الموقع: ${data.website}
الاسم الكامل: ${data.fullName}
البريد: ${data.email}
الهاتف: ${data.phone}
الدور: ${data.role}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
