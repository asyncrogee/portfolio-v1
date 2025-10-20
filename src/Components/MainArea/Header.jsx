import { useState, useEffect } from "react";

export default function Header() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const manilaTime = now.toLocaleString('en-US', {
                timeZome: 'Asia/Manila',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
            setTime(manilaTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex p-5 max-h-14 bg-offwhite rounded-xl w-full justify-between items-center shadow-inner shadow-black/25">
            <button className="px-10 py-3 rounded-lg text-xs text-darkblue bg-darkblue/15 border-darkblue border">View Resume</button>
            <div className="text-xs flex">
                <p>"Perceive that which cannot be seen with the eye"</p>
                <p className="text-grei">- Miyamoto Musashi</p>
            </div>
            <div className="text-xs flex gap-1">
                <p>MNL</p>
                <p>{time}</p>
            </div>
        </div>
    );
}