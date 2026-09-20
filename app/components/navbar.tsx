export default function Navbar() {
    return (
        <nav className="flex gap-4 font-semibold text-xl py-4 fixed bg-purple-300 w-full top-0 px-8">
            <a href="#" className="hover:scale-105 hover:text-gray-300">Home</a>
            <a href="#about" className="hover:scale-105 hover:text-gray-300">About</a>
            <a href="#projects" className="hover:scale-105 hover:text-gray-300">Projects</a>
            <a href="public/Chri_s_Resume (1).pdf" target="_blank" rel="noopener noreferrer"
                className="hover:scale-105 hover:text-pink-700">Resume</a>
        </nav>
    )
}