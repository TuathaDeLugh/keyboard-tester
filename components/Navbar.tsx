const Navbar: React.FC = () => {
    return (
      <nav className="bg-gray-800 text-white p-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold ">Keyboard Tester</h1>
          <div className="flex space-x-4">
            <a href="https://github.com/TuathaDeLugh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
            <a href="https://linkedin.com/in/umangsailor" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
            <a href="https://twitter.com/TuathaDeLugh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Twitter</a>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar