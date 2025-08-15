import { useState } from 'react';

interface NavigationProps {
  currentPath?: string;
}

const Navigation = ({ currentPath = '/' }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrangeTheme, setIsOrangeTheme] = useState(false);
  
  // Ensure currentPath is always a string and handle edge cases
  const normalizedCurrentPath = currentPath || '/';

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: 'https://github.com/chapeljuice', label: 'GitHub', external: true },
  ];
  


  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the anchor tag from navigating
    e.stopPropagation(); // Stop event bubbling
    setIsOrangeTheme(!isOrangeTheme);
    // Apply theme to document body
    if (!isOrangeTheme) {
      document.body.classList.add('orange-theme');
    } else {
      document.body.classList.remove('orange-theme');
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="bg-home-linkflex-shrink-0 flex items-center">
              <span className="text-2xl font-bold silkscreen-regular flex items-center gap-4">
                <span 
                  className="main-logo"
                  onClick={handleLogoClick}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleLogoClick(e as any);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Toggle color theme"
                  style={{ cursor: 'pointer' }}
                ></span>
                <span className="inline-block silkscreen-regular">Ryan Chapel</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`px-3 py-2 rounded-md text-lg font-medium transition-colors relative ${
                  normalizedCurrentPath === item.href
                    ? 'nav-active'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`block px-3 py-2 rounded-md text-lg font-medium transition-colors relative ${
                    normalizedCurrentPath === item.href
                      ? 'nav-active'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                  onClick={() => !item.external && setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 