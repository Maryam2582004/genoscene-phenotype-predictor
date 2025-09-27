import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import dnaHeroBg from "@/assets/dna-hero-bg.jpg";
import dnaStructure from "@/assets/dna-structure.jpg";
import dnaBases from "@/assets/dna-bases.jpg";
import geneticAnalysis from "@/assets/genetic-analysis.jpg";
import dnaSequencing from "@/assets/dna-sequencing.jpg";

const Home = () => {
  const features = [
    {
      title: "High Accuracy Predictions",
      description: "Advanced AI algorithms analyze DNA data to predict physical traits with exceptional precision.",
    },
    {
      title: "Secure Data Processing",
      description: "Your genetic data is processed with the highest security standards and privacy protection.",
    },
    {
      title: "Research Grade Analysis",
      description: "Built on peer-reviewed research and validated scientific methodologies.",
    },
    {
      title: "Forensic Applications",
      description: "Designed specifically for forensic investigations and law enforcement use cases.",
    }
  ];

  const dnaComponents = [
    {
      name: "Adenine (A)",
      description: "A purine nitrogenous base with two fused rings. It always pairs with thymine via two hydrogen bonds.",
      color: "bg-red-500"
    },
    {
      name: "Thymine (T)",
      description: "A pyrimidine nitrogenous base with a single ring. It specifically pairs with adenine via two hydrogen bonds.",
      color: "bg-purple-500"
    },
    {
      name: "Guanine (G)",
      description: "A purine nitrogenous base with two fused rings. It always pairs with cytosine via three hydrogen bonds.",
      color: "bg-green-500"
    },
    {
      name: "Cytosine (C)",
      description: "A pyrimidine nitrogenous base with a single ring. It specifically pairs with guanine via three hydrogen bonds.",
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${dnaHeroBg})` }}
        ></div>
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
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-center">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* DNA Learning Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Understanding DNA Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about the fundamental building blocks of genetic information and how our AI decodes them
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card/60 border-accent/20 backdrop-blur-sm overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={dnaStructure} 
                  alt="DNA Structure Diagram" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-accent">DNA Double Helix</h3>
                <p className="text-foreground leading-relaxed">
                  The DNA double helix consists of two complementary strands wound around each other. 
                  Each strand contains nucleotides with phosphate groups, sugar molecules, and nitrogenous bases 
                  that form the genetic code through specific base pairing.
                </p>
              </div>
            </Card>

            <Card className="bg-card/60 border-accent/20 backdrop-blur-sm overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={dnaBases} 
                  alt="DNA Bases Illustration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-accent">Genetic Building Blocks</h3>
                <p className="text-foreground leading-relaxed">
                  The four DNA bases - Adenine, Thymine, Guanine, and Cytosine - create the genetic alphabet. 
                  Their specific sequences and variations (SNPs) determine physical traits that our AI analyzes 
                  to predict phenotypic characteristics.
                </p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dnaComponents.map((component, index) => (
              <Card key={index} className="bg-card/40 border-border/50 hover:border-accent/30 transition-all duration-300">
                <div className="p-6">
                  <div className={`w-12 h-12 ${component.color} rounded-full flex items-center justify-center mb-4 shadow-glow`}>
                    <span className="text-white font-bold text-lg">{component.name.charAt(0)}</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-accent">{component.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{component.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-card/60 border-accent/20 backdrop-blur-sm overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={geneticAnalysis} 
                  alt="Genetic Analysis Process" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-accent">Forensic Analysis</h3>
                <p className="text-foreground leading-relaxed">
                  Our advanced algorithms process single nucleotide polymorphisms (SNPs) to identify genetic 
                  markers associated with physical traits, enabling accurate phenotype prediction for forensic 
                  and research applications.
                </p>
              </div>
            </Card>

            <Card className="bg-card/60 border-accent/20 backdrop-blur-sm overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={dnaSequencing} 
                  alt="DNA Sequencing Visualization" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-accent">Data Visualization</h3>
                <p className="text-foreground leading-relaxed">
                  Complex genetic data is transformed into intuitive visualizations showing probability 
                  distributions for hair color, eye color, and skin tone predictions based on validated 
                  scientific research and machine learning models.
                </p>
              </div>
            </Card>
          </div>
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