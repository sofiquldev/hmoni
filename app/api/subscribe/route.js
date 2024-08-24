import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const data = await req.json();
    const email = data.email;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
    }

    // Define the path for the CSV file
    const filePath = path.join(process.cwd(), 'public', 'subscribers.csv');

    // Read the CSV file and check for existing email
    const subscribers = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8').split('\n') : [];
    const isAlreadySubscribed = subscribers.some(line => line.split(',')[0] === email);

    if (isAlreadySubscribed) {
      return new Response(JSON.stringify({ error: 'You have already subscribed with this email.' }), { status: 400 });
    }

    // Append the new subscriber email and date-time to the CSV file
    const dateTime = new Date().toISOString();
    const writeStream = fs.createWriteStream(filePath, { flags: 'a' });
    writeStream.write(`${email},${dateTime}\n`);
    writeStream.end();

    // Configure nodemailer using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send notification email to you
    await transporter.sendMail({
      from: process.env.SMTP_USERNAME,
      to: process.env.SMTP_USERNAME,
      subject: 'New Subscriber',
      text: `New subscriber: ${email}`,
    });

    // Send thank you email to user
    await transporter.sendMail({
      from: process.env.SMTP_USERNAME,
      to: email,
      subject: 'Thank You for Subscribing!',
      text: 'Thank you for subscribing to our mailing list!',
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error in subscribe API:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
