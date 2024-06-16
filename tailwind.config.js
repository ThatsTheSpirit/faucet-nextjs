/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                "btn-primary": "10px 9px 22px 0 rgba(20, 78, 227, 0.38)",
                "sh-primary": "0 4px 10px 0 rgba(0, 0, 0, 0.1)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-logo":
                    "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600",
                "gradient-logo":
                    "linear-gradient(79deg, #144ee3 0%, #eb568e 18.75%, #a353aa 64.06%, #144ee3 100%)",
            },
        },
    },
    plugins: [],
};
