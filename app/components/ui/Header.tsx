const Header = () => {
    return (
        <header className="bg-green-600 text-white p-4">
            <h1 className="text-2xl font-bold">my-portfolio-website</h1>
            <nav className="mt-2">
                <a href="#" className="mr-4 hover:underline">Home</a>
                <a href="#" className="mr-4 hover:underline">About</a>
                <a href="#" className="mr-4 hover:underline">Works</a>
                <a href="#" className="mr-4 hover:underline">Contact</a>
            </nav>
        </header>
    );
}

export default Header;