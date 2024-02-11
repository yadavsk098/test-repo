/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                lostfish: ["lostfish", "cursive"],
            },
            width: {
                cap: "1280px",
            },
            screens: {
                "hover-none": { raw: "(hover: none)" },
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
