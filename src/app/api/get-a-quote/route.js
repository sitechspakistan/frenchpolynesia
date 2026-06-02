import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("FORM DATA:", body);

    const startDate = body.travelDates?.start
      ? `${body.travelDates.start.month}/${body.travelDates.start.day}/${body.travelDates.start.year}`
      : "-";

    const endDate = body.travelDates?.end
      ? `${body.travelDates.end.month}/${body.travelDates.end.day}/${body.travelDates.end.year}`
      : "-";

    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    const info = await transporter.sendMail({
      from: '"Travel Planner" <test@example.com>',
      to: "test@example.com",
      subject: "New Travel Planner Submission",
      html: `
        <h2>Travel Planner Form</h2>

        <p><strong>Passengers:</strong> ${body.nameOfPassengers}</p>

        <p><strong>Travel Dates:</strong> ${startDate} - ${endDate}</p>

        <p><strong>Island:</strong> ${body.island}</p>

        <p><strong>Budget:</strong> ${body.budget}</p>

        <p><strong>Notes:</strong></p>
        <p>${body.additionalNotes}</p>
      `,
    });

    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASSWORD,
    //   },
    // });

    // await transporter.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: process.env.SMTP_TO,
    //   subject: "New Travel Planner Submission",
    //   html: `
    //     <h2>Travel Planner Form</h2>

    //     <p><strong>Passengers:</strong> ${body.nameOfPassengers}</p>

    //    <p><strong>Travel Dates:</strong>${startDate} → ${endDate}</p>

    //     <p><strong>Island:</strong> ${body.island}</p>

    //     <p><strong>Budget:</strong> ${body.budget}</p>

    //     <p><strong>Notes:</strong></p>
    //     <p>${body.additionalNotes}</p>
    //   `,
    // });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 },
    );
  }
}
