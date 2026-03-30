import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    // 1. SECURITY: Input Validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }

    // 2. SECURITY: Environment Variables (No hardcoded credentials)
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables.");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Send Email to Admin (You)
    await transporter.sendMail({
      from: `"Stuward Alerts" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // SECURITY FIX: Allows you to hit "Reply" to email the user directly without spoofing
      subject: "🎉 New Subscriber Joined Stuward",
      html: `
            <div style="font-family: Arial, sans-serif; background:#0a0a0a; padding:20px; color:#fff;">
              <div style="max-width:600px; margin:auto; background:#111; border-radius:12px; overflow:hidden; border:1px solid #222;">
                
                <div style="background: linear-gradient(90deg,#06b6d4,#3b82f6); padding:20px; text-align:center;">
                  <h1 style="margin:0; font-size:24px;">Stuward 🚀</h1>
                  <p style="margin:0; font-size:12px;">Student + Reward Platform</p>
                </div>

                <div style="padding:20px;">
                  <h2 style="color:#06b6d4;">New Subscriber Alert 🎉</h2>
                  <p style="font-size:14px; color:#ccc;">A new user has subscribed to your platform.</p>

                  <div style="margin:20px 0; padding:15px; background:#0a0a0a; border-radius:8px; border:1px solid #222;">
                    <p style="margin:0; font-size:14px;">
                      📧 <strong>Email:</strong> ${email}
                    </p>
                  </div>

                  <p style="font-size:13px; color:#888;">Keep building awesome features 💪</p>
                </div>

                <div style="text-align:center; padding:15px; font-size:12px; color:#666; border-top:1px solid #222;">
                  © ${new Date().getFullYear()} Stuward India Pvt Ltd
                </div>

              </div>
            </div>
            `,
    });

    // 4. Send Welcome Email to the Subscriber
    await transporter.sendMail({
      from: `"Stuward 🚀" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🎉 Welcome to Stuward – Start Earning Now!",
      html: `
            <div style="margin:0; padding:0; background:#0a0a0a; font-family: 'Segoe UI', Arial, sans-serif; color:#ffffff;">
              <div style="max-width:600px; margin:30px auto; background:#111; border-radius:16px; overflow:hidden; border:1px solid #222;">
                
                <div style="background:linear-gradient(90deg,#06b6d4,#3b82f6); padding:24px; text-align:center;">
                  <h1 style="margin:0; font-size:26px;">Stuward 🚀</h1>
                  <p style="margin:4px 0 0; font-size:12px;">Student + Reward Platform</p>
                </div>

                <div style="padding:24px;">
                  <h2 style="margin-top:0; color:#06b6d4;">Welcome to Stuward 🎉</h2>

                  <p style="font-size:14px; color:#ccc; line-height:1.6;">
                    You're now part of a new generation platform where you can
                    <strong style="color:#fff;"> learn, play, and earn 💰</strong>.
                  </p>

                  <div style="margin:20px 0; padding:16px; background:#0a0a0a; border-radius:10px; border:1px solid #222;">
                    <p style="margin:6px 0;">🎮 Play skill-based games</p>
                    <p style="margin:6px 0;">🧠 Improve your knowledge</p>
                    <p style="margin:6px 0;">💸 Earn real rewards</p>
                  </div>

                  <div style="text-align:center; margin:25px 0;">
                    <a href="https://stuward.netlify.app" target="_blank" rel="noopener noreferrer"
                      style="display:inline-block; padding:12px 24px; background:linear-gradient(90deg,#3b82f6,#06b6d4); color:#fff; text-decoration:none; border-radius:8px; font-size:14px; font-weight:bold;">
                      Start Playing 🚀
                    </a>
                  </div>

                  <p style="font-size:12px; color:#777;">
                    Tip: Join rooms early to maximize your chances of winning.
                  </p>
                </div>

                <div style="text-align:center; padding:16px; font-size:12px; color:#666; border-top:1px solid #222;">
                  © ${new Date().getFullYear()} Stuward India Pvt Ltd  
                  <br/>
                  Lucknow, India 🇮🇳
                </div>

              </div>
            </div>
            `,
    });

    // 5. SECURITY: Graceful Success Response
    return NextResponse.json({ success: true, message: "Subscription successful!" }, { status: 200 });

  } catch (error) {
    // 6. SECURITY: Catching errors prevents the server from crashing
    console.error("Newsletter Subscription Error:", error);
    return NextResponse.json({ error: "Failed to subscribe. Please try again later." }, { status: 500 });
  }
}