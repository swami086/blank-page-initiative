
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white rounded-full shadow-lg">
              <Sparkles className="w-8 h-8 text-indigo-600" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Build Something
            <span className="text-indigo-600 block">Amazing</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A fresh, clean start for your next big idea. Simple, beautiful, and ready to customize.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 bg-white rounded-xl shadow-sm">
            <div className="inline-flex p-3 bg-indigo-100 rounded-full mb-4">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast</h3>
            <p className="text-gray-600">Built for speed and performance from the ground up.</p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-sm">
            <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Simple</h3>
            <p className="text-gray-600">Clean design that focuses on what matters most.</p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-sm">
            <div className="inline-flex p-3 bg-purple-100 rounded-full mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Beautiful</h3>
            <p className="text-gray-600">Designed with attention to detail and user experience.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-500">© 2024 Your Project. Ready to build something great.</p>
      </footer>
    </div>
  );
};

export default Index;
