const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-teal-300 mb-4 silkscreen-regular">Ryan Chapel</h3>
            <p className="text-gray-300">
              Web development and engineering management consulting.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 silkscreen-regular">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Engineering Management</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 silkscreen-regular">Connect</h4>
            <div className="space-y-2 text-gray-300">
              <p>Ready to work together?</p>
              <a 
                href="/contact" 
                className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors silkscreen-regular"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ryan Chapel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 