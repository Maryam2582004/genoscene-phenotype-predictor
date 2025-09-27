import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const Home = () => {
  const features = [
    {
      title: "High Accuracy Predictions",
      description: "Advanced AI algorithms analyze DNA data to predict physical traits with exceptional precision.",
      icon: "🎯"
    },
    {
      title: "Secure Data Processing",
      description: "Your genetic data is processed with the highest security standards and privacy protection.",
      icon: "🔒"
    },
    {
      title: "Research Grade Analysis",
      description: "Built on peer-reviewed research and validated scientific methodologies.",
      icon: "🔬"
    },
    {
      title: "Forensic Applications",
      description: "Designed specifically for forensic investigations and law enforcement use cases.",
      icon: "⚖️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
            We Decipher The Code of Life
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Advanced AI-powered DNA analysis for forensic phenotype prediction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/upload">Start Analysis</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-card/60 border-accent/20 backdrop-blur-sm">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-accent flex items-center gap-3">
                <span>ℹ️</span>
                About GenoScene
              </h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                GenoScene is an advanced AI-powered forensic phenotype prediction system that analyzes DNA data to predict physical characteristics including hair color, eye color, and skin tone. This system is designed for forensic applications and research purposes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-6 bg-card/40 border border-border/50 rounded-xl hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-3xl">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-center">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Upload your DNA data and discover what genetic secrets it holds.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/upload">Begin Analysis</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted-foreground text-sm">
            GenoScene - AI-Powered Forensic Phenotype Prediction System | This is a demonstration prototype
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Version: 2.1.0 | Updated: 2025-09-01
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;