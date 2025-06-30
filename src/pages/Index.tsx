
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Star, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Home className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Fresh Start</h1>
            </div>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your New Page
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This is a completely fresh start. Build something amazing from here.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <Star className="w-8 h-8 text-yellow-500 mb-2" />
              <CardTitle>Quality</CardTitle>
              <CardDescription>
                Built with attention to detail and modern best practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-blue-500 mb-2" />
              <CardTitle>Community</CardTitle>
              <CardDescription>
                Join a growing community of developers and creators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">Join Us</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Home className="w-8 h-8 text-green-500 mb-2" />
              <CardTitle>Simple</CardTitle>
              <CardDescription>
                Clean, intuitive design that gets out of your way
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="secondary">Explore</Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Fresh Start. Ready to build something great.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
