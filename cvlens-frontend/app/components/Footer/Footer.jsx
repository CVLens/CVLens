import React from 'react'


{/* Footer */ }
const Footer = () => {
    return (
        <footer className="mt-12 p-6 bg-gray-900 text-white text-center">
            <div className="align-center max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <h3 className="font-semibold text-lg">Overview</h3>
                    <ul className="mt-2 text-sm space-y-1">
                        <li><a href="/" className="hover:underline">Home</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Product</h3>
                    <ul className="mt-2 text-sm space-y-1">
                        <li><a href="/api-doc" className="hover:underline">API</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Creators</h3>
                    <ul className="mt-2 text-sm space-y-1">
                        <li><a href="/about-us" className="hover:underline">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">More Info</h3>
                    <ul className=" flex justify-center mt-2 text-sm space-y-1">
                        <li><a href="https://github.com/CVLens/CVLens" className="hover:underline" target="_blank" rel="noopener noreferrer">
                        Github
                        {/* <img src="/svg/github.svg" alt="GitHub" className="w-6 h-6" /> */}
                        </a></li>
                    </ul>
                </div>
            </div>
            <p className="mt-6 text-sm">© 2025 CVLens. All rights reserved.</p>
        </footer>
    );
};

export default Footer;