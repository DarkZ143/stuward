import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {


    try {
        const body = await request.json();
        const { subject, email, message } = body;

        // Basic validation
        if (!subject || !message) {
            return NextResponse.json({ error: "Subject and message are required." }, { status: 400 });
        }

        // Configure Nodemailer transporter
        // NOTE: Use environment variables for your actual credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your preferred email service provider
            auth: {
                user: process.env.EMAIL_USER, // e.g., 'your-email@gmail.com'
                pass: process.env.EMAIL_PASS, // e.g., your App Password
            },
        });

        // Setup email data
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself (admin)
            replyTo: email || undefined, // Allow you to reply directly to the user
            subject: `🚨 [Atlas Feedback] ${subject}`,
            html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px 20px;">
            <tr>
                <td align="center">
                    
                    <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #111111; border: 1px solid #222222; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 200, 255, 0.1);">
                        
                        <tr>
                            <td style="background: linear-gradient(90deg, #06b6d4, #3b82f6); padding: 24px; text-align: center;">
                                <h2 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">
                                    🎮 Atlas Game Report
                                </h2>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 32px;">
                                <p style="color: #9ca3af; font-size: 14px; margin-top: 0; margin-bottom: 24px;">
                                    A new feedback report has been submitted via the Stuward platform.
                                </p>

                                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px; background-color: #0a0a0a; border-radius: 8px; border: 1px solid #222222;">
                                    <tr>
                                        <td style="padding: 16px; border-bottom: 1px solid #222222;">
                                            <span style="color: #06b6d4; font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Category / Subject</span><br>
                                            <span style="font-size: 16px; color: #ffffff; font-weight: 500; display: inline-block; margin-top: 4px;">${subject}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 16px;">
                                            <span style="color: #06b6d4; font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Player Email</span><br>
                                            <span style="font-size: 16px; color: ${email ? '#ffffff' : '#ef4444'}; font-weight: 500; display: inline-block; margin-top: 4px;">
                                                ${email || 'No email provided'}
                                            </span>
                                        </td>
                                    </tr>
                                </table>

                                <h3 style="color: #ffffff; margin-top: 0; margin-bottom: 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message Content</h3>
                                <div style="background-color: #1a1a1a; border-left: 4px solid #06b6d4; padding: 20px; border-radius: 0 8px 8px 0; color: #e5e7eb; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>

                                ${email ? `
                                <div style="text-align: center; margin-top: 32px;">
                                    <a href="mailto:${email}?subject=Re: Your Atlas Game Feedback" style="display: inline-block; background-color: #06b6d4; color: #000000; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                                        Reply to Player
                                    </a>
                                </div>
                                ` : ''}

                            </td>
                        </tr>

                        <tr>
                            <td style="background-color: #0a0a0a; padding: 16px; text-align: center; border-top: 1px solid #222222;">
                                <p style="margin: 0; color: #4b5563; font-size: 12px;">
                                    Automated system message from <strong>Stuward</strong>.
                                </p>
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>
        </table>
    `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Feedback sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Feedback Email Error:", error);
        return NextResponse.json({ error: "Failed to send feedback. Please try again later." }, { status: 500 });
    }
}