import { NextResponse } from 'next/server';
import { validateCashOut } from '@/lib/cashOutValidator';
// import { adminDb } from '@/lib/firebaseAdmin'; // Assuming you use Firebase Admin

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId, amount } = body;

        if (!userId || !amount) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 1. Fetch the user's current actual balance from your database securely
        // Example: const userDoc = await adminDb.collection('users').doc(userId).get();
        // const currentBalance = userDoc.data()?.winningBalance || 0;

        // NOTE: Replace this mock balance with your actual database fetch
        const currentBalance = 1500;

        // 2. Run the strict validation
        const validation = validateCashOut(amount, currentBalance);

        if (!validation.isValid) {
            return NextResponse.json({ error: validation.error }, { status: 400 });
        }

        // 3. Process the deduction securely (Example using a database transaction)
        /*
        await adminDb.runTransaction(async (transaction) => {
          const userRef = adminDb.collection('users').doc(userId);
          const doc = await transaction.get(userRef);
          const newBalance = doc.data()!.winningBalance - amount;
          transaction.update(userRef, { winningBalance: newBalance });
          
          // Optionally create a withdrawal record
          const withdrawalRef = adminDb.collection('withdrawals').doc();
          transaction.set(withdrawalRef, { userId, amount, status: 'pending', date: new Date() });
        });
        */

        return NextResponse.json({
            success: true,
            message: `Successfully cashed out ${amount} SW coins!`
        }, { status: 200 });

    } catch (error) {
        console.error("Cash out error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}