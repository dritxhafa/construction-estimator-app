import { Link } from 'react-router-dom';
import { Calculator, Upload, Bot, Download, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Upload,
      title: 'Upload Blueprints',
      description: 'Simply drag and drop your PDF blueprints and let our AI do the rest.',
    },
    {
      icon: Bot,
      title: 'AI Analysis',
      description: 'Our AI assistant Gauge analyzes your blueprints and extracts quantities automatically.',
    },
    {
      icon: Calculator,
      title: 'Cost Estimation',
      description: 'Get detailed cost breakdowns with RSMeans pricing and regional modifiers.',
    },
    {
      icon: Download,
      title: 'Export Results',
      description: 'Download professional estimates as PDF or Excel for your clients and teams.',
    },
  ];

  const testimonials = [
    {
      name: 'Mike Rodriguez',
      role: 'General Contractor',
      company: 'Rodriguez Construction',
      content: 'Costimate.ai has cut our estimating time by 75%. What used to take days now takes hours.',
      rating: 5,
    },
    {
      name: 'Sarah Chen',
      role: 'Project Manager',
      company: 'Premier Developments',
      content: 'The accuracy is incredible. Our estimates are now more competitive and detailed than ever.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Estimator',
      company: 'BuildRight Inc.',
      content: 'Gauge answers all my questions instantly. It\'s like having an expert estimator available 24/7.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Construction
              <span className="text-blue-600 block">Estimating</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Upload your blueprints and get accurate, detailed cost estimates in minutes. 
              Our AI assistant Gauge makes construction estimating faster, smarter, and more accurate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Costimate.ai Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From blueprint to estimate in four simple steps. Our AI handles the complex analysis 
              so you can focus on winning projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Costimate.ai?
              </h2>
              <div className="space-y-6">
                {[
                  'Save 75% of your estimating time',
                  'Increase accuracy with RSMeans pricing',
                  'Chat with Gauge for instant answers',
                  'Professional PDF and Excel exports',
                  'Regional cost adjustments included',
                  'Secure cloud storage for all projects',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Gauge</h3>
                <p className="text-gray-600 mb-6">
                  Your AI assistant that understands construction costs and can answer any 
                  question about your estimates instantly.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 text-left">
                  <p className="text-sm text-gray-700 italic">
                    "What's the framing cost for the second floor?"
                  </p>
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      The second floor framing is estimated at $12,400 for 1,200 sq ft 
                      using 2x6 studs at 16" O.C. This includes labor and materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Construction Professionals
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of contractors who are estimating smarter with Costimate.ai
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Estimating Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of construction professionals who are already saving time and 
            winning more projects with accurate AI-powered estimates.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="text-blue-100 mt-4 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;