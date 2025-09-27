import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/upload-predict", label: "Upload & Predict" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-card/40 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-2xl font-bold bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              GenoScene
            </div>
            <div className="hidden sm:block text-xs bg-card/60 px-3 py-1 rounded-full border border-border text-muted-foreground">
              AI-Powered Forensic Phenotype Prediction
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === item.href
                    ? "text-accent"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button variant="accent" size="sm" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;