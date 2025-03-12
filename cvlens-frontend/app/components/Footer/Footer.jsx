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
                    <ul className="flex justify-center mt-2 text-sm space-y-1">
                        <li><a href="https://github.com/CVLens/CVLens" className="hover:underline" target="_blank" rel="noopener noreferrer">
                        Github
                        </a></li>
                    </ul>
                </div>
            </div>
        
            <div className="flex justify-center mt-6">
                <button className="
                    px-6 py-2 
                    bg-gradient-to-r from-blue-500 to-blue-400 
                    text-white font-semibold rounded-md 
                    transition-all duration-300 ease-in-out
                    transform hover:scale-105 hover:shadow-lg
                    relative overflow-hidden
                    group
                ">
                    <span className="relative z-10 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-y-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        Upload
                    </span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </button>
            </div>
            
            <p className="mt-6 text-sm">We're open source! ❤️ | © 2025 CVLens. All rights reserved.</p>
        </footer>
    );
};

export default Footer;