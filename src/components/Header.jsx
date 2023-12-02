'use client'
import Link from "next/link";
import Image from 'next/image'

export default function Header() {
    return (
        <header className="bg-white mx-auto">
            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-5">
                    <Image
                        src="/logo.png"
                        alt="Vercel Logo"
                        width={100}
                        height={100}
                        priority
                    />
                </div>
            </nav>
        </header>
    );
}