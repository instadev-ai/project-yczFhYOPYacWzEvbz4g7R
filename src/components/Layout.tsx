import { ModeToggle } from "./mode-toggle"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold">DevTools</span>
            <nav className="hidden md:flex space-x-6">
              <a href="#tools" className="hover:text-primary transition-colors">Tools</a>
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
            </nav>
          </div>
          <ModeToggle />
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">DevTools</h3>
              <p className="text-muted-foreground">Making development easier, one tool at a time.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#tools" className="text-muted-foreground hover:text-primary transition-colors">Tools</a></li>
                <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 DevTools. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout