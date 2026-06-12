export default function NotFound() {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-pulse rounded-full bg-purple-600/20 blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 h-72 w-72 animate-pulse rounded-full bg-blue-600/20 blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <h1 className="animate-bounce text-9xl font-extrabold tracking-widest">
                    404
                </h1>

                <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>

                <h2 className="mt-8 text-3xl font-semibold">
                    Oops! Page Not Found
                </h2>

                <p className="mt-4 max-w-md text-gray-400">
                    The page youre looking for doesnt exist or has been moved.
                </p>

                <a>
                    Back to Home
                </a>
            </div>

            {/* Floating 404 Text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="animate-ping text-[20rem] font-black text-white/[0.03]">
                    404
                </span>
            </div>
        </div>
    );
}