"use client";

import React, { useState } from 'react';
import { validateCashOut, MIN_SW_CASHOUT, MAX_SW_CASHOUT } from '@/lib/cashOutValidator';

interface CashOutFormProps {
    userId: string;
    userWinningBalance: number;
}

export default function CashOutForm({ userId, userWinningBalance }: CashOutFormProps) {
    const [amount, setAmount] = useState<number | ''>('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleWithdraw = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const requestAmount = Number(amount);

        // 1. Frontend Validation
        const validation = validateCashOut(requestAmount, userWinningBalance);
        if (!validation.isValid) {
            setError(validation.error);
            return;
        }

        setIsSubmitting(true);

        // 2. API Request
        try {
            const response = await fetch('/api/cashout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, amount: requestAmount }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to process cash out');
            }

            setSuccess(data.message);
            setAmount(''); // Clear the form on success

            // Optional: Trigger a state update or router.refresh() here to update the user's displayed balance

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Cash Out SW Coins</h2>
            <p className="text-sm font-medium text-gray-500">
                Available Winnings: <span className="text-gray-900">{userWinningBalance} SW</span>
            </p>

            <form onSubmit={handleWithdraw} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Amount (Min: {MIN_SW_CASHOUT}, Max: {MAX_SW_CASHOUT})
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value === '' ? '' : Number(e.target.value));
                            setError(null);
                            setSuccess(null);
                        }}
                        disabled={isSubmitting}
                        className="block w-full border border-gray-300 rounded-md p-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter amount"
                    />
                </div>

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                {success && <p className="text-green-600 text-sm font-medium">{success}</p>}

                <button
                    type="submit"
                    disabled={!amount || isSubmitting}
                    className="w-full bg-blue-600 text-white font-medium p-2.5 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex justify-center items-center"
                >
                    {isSubmitting ? 'Processing...' : 'Withdraw'}
                </button>
            </form>
        </div>
    );
}