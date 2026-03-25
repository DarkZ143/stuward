import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { email } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "rahulbhardwajthestar58@gmail.com",
            pass: "uymxkoctrhqveqfv",
        },
    });

    await transporter.sendMail({
        from: `"Stuward 🚀" <${email}>`,
        to: "rahulbhardwajthestar58@gmail.com",
        subject: "🎉 New Subscriber Joined Stuward",

        html: `
    <div style="font-family: Arial, sans-serif; background:#0a0a0a; padding:20px; color:#fff;">
      
      <div style="max-width:600px; margin:auto; background:#111; border-radius:12px; overflow:hidden; border:1px solid #222;">
        
        <!-- HEADER -->
        <div style="background: linear-gradient(90deg,#06b6d4,#3b82f6); padding:20px; text-align:center;">
          <h1 style="margin:0; font-size:24px;">Stuward 🚀</h1>
          <p style="margin:0; font-size:12px;">Student + Reward Platform</p>
        </div>

        <!-- BODY -->
        <div style="padding:20px;">
          <h2 style="color:#06b6d4;">New Subscriber Alert 🎉</h2>
          
          <p style="font-size:14px; color:#ccc;">
            A new user has subscribed to your platform.
          </p>

          <div style="margin:20px 0; padding:15px; background:#0a0a0a; border-radius:8px; border:1px solid #222;">
            <p style="margin:0; font-size:14px;">
              📧 <strong>Email:</strong> ${email}
            </p>
          </div>

          <p style="font-size:13px; color:#888;">
            Keep building awesome features 💪
          </p>
        </div>

        <!-- FOOTER -->
        <div style="text-align:center; padding:15px; font-size:12px; color:#666; border-top:1px solid #222;">
          © ${new Date().getFullYear()} Stuward India Pvt Ltd
        </div>

      </div>

    </div>
  `,
    });

    await transporter.sendMail({
        from: `"Stuward 🚀" <your@gmail.com>`,
        to: email,
        subject: "🎉 Welcome to Stuward – Start Earning Now!",

        html: `
  <div style="margin:0; padding:0; background:#0a0a0a; font-family: 'Segoe UI', Arial, sans-serif; color:#ffffff;">
    
    <div style="max-width:600px; margin:30px auto; background:#111; border-radius:16px; overflow:hidden; border:1px solid #222;">
      
      <!-- HEADER -->
      <div style="background:linear-gradient(90deg,#06b6d4,#3b82f6); padding:24px; text-align:center;">
        <h1 style="margin:0; font-size:26px;">Stuward 🚀</h1>
        <p style="margin:4px 0 0; font-size:12px;">Student + Reward Platform</p>
      </div>

      <!-- BODY -->
      <div style="padding:24px;">
        
        <h2 style="margin-top:0; color:#06b6d4;">
          Welcome to Stuward 🎉
        </h2>

        <p style="font-size:14px; color:#ccc; line-height:1.6;">
          You're now part of a new generation platform where you can
          <strong style="color:#fff;"> learn, play, and earn 💰</strong>.
        </p>

        <!-- FEATURES -->
        <div style="margin:20px 0; padding:16px; background:#0a0a0a; border-radius:10px; border:1px solid #222;">
          <p style="margin:6px 0;">🎮 Play skill-based games</p>
          <p style="margin:6px 0;">🧠 Improve your knowledge</p>
          <p style="margin:6px 0;">💸 Earn real rewards</p>
        </div>

        <!-- CTA -->
        <div style="text-align:center; margin:25px 0;">
          <a href="https://stuward.netlify.app" target="_blank" rel="noopener noreferrer"
            style="display:inline-block; padding:12px 24px; background:linear-gradient(90deg,#3b82f6,#06b6d4); color:#fff; text-decoration:none; border-radius:8px; font-size:14px;">
            Start Playing 🚀
          </a>
        </div>

        <p style="font-size:12px; color:#777;">
          Tip: Join rooms early to maximize your chances of winning.
        </p>

      </div>

      <!-- FOOTER -->
      <div style="text-align:center; padding:16px; font-size:12px; color:#666; border-top:1px solid #222;">
        © ${new Date().getFullYear()} Stuward India Pvt Ltd  
        <br/>
        Lucknow, India 🇮🇳
      </div>

    </div>

  </div>
  `,
    });

    return NextResponse.json({ success: true });
}