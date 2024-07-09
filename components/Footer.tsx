const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white p-6 w-full">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">About Keyboard Tester</h3>
              <p>Test your keyboard's functionality, including anti-ghosting capabilities. Perfect for gamers and professionals alike.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Instructions</h3>
              <ul className="list-disc list-inside">
                <li>Click "Start" to begin testing</li>
                <li>Press multiple keys to test anti-ghosting</li>
                <li>Observe highlighted keys and borders</li>
                <li>F-keys and hotkeys are disabled during the test</li>
                <li>PrtSc key will open screenshot window</li>
                <li>Click "Reset" to clear all pressed keys</li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside">
                <li>Real-time key detection</li>
                <li>Anti-ghosting test</li>
                <li>Visual key layout</li>
                <li>F-keys and hotkeys disabled for focused testing</li>
                <li>Special handling for PrtSc key</li>
                <li>Works with various keyboard layouts</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p>© {new Date().getFullYear()} UmangSailor. Visit my website: <a href="https://umangsailor.vercel.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">umangsailor.vercel.app</a></p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer