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

    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ error: 'No subscribers found.' }), { status: 400 });
    }

    // Read the CSV file and filter out the email
    const subscribers = fs.readFileSync(filePath, 'utf8').split('\n').filter(line => line.trim());
    const updatedSubscribers = subscribers.filter(line => line.split(',')[0] !== email);

    // Write the updated list back to the CSV file
    fs.writeFileSync(filePath, updatedSubscribers.join('\n'), 'utf8');

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error in unsubscribe API:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
