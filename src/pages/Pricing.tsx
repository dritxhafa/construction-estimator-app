import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small contractors and individual estimators',
      features: [
        '10 estimates per month',
        'Basic AI analysis',
        'PDF export',
        'Email support',
        '1 user account',
        'Mobile app access',
      ],
      buttonText: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing construction companies',
      features: [
        '50 estimates per month',
        'Advanced AI analysis',
        'PDF & Excel export',
        'Priority support',
        '5 user accounts',
        'Team collaboration',
        'Custom markup settings',
        'Regional cost adjustments',
        'Gauge AI assistant',
      ],
      buttonText: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large companies with complex needs',
      features: [
        'Unlimited estimates',
        'Premium AI analysis',
        'All export formats',
        'Dedicated support',
        'Unlimited users',
        'Advanced integrations',
        'Custom templates',
        'API access',
        'White-label options',
        'Training & onboarding',
      ],
      buttonText: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'How accurate are the AI-generated estimates?',
      answer: 'Our AI achieves 94% accuracy on average by combining machine learning with RSMeans pricing data and industry best practices. Accuracy improves over time as the system learns from your projects.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period.',
    },
    {
      question: 'What file formats do you support?',
      answer: 'We currently support PDF blueprints and architectural drawings. We\'re working on adding support for CAD files and other formats based on user feedback.',
    },
    {
      question: 'How does the free trial work?',
      answer: 'Your 14-day free trial includes full access to all features in your chosen plan. No credit card required to start. You can upgrade, downgrade, or cancel at any time.',
    },
    {
      question: 'Do you offer training and support?',
      answer: 'Yes! All plans include email support, and Professional and Enterprise plans include priority support. Enterprise customers also receive dedicated training and onboarding.',
    },
    {
      question: 'Can I integrate with my existing software?',
      answer: 'Enterprise plans include API access for custom integrations. We also offer pre-built integrations with popular construction management software.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business. Start with a free trial, 
            no credit card required.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border-2 p-8 ${
                  plan.popular
                    ? 'border-blue-500 shadow-xl scale-105'
                    : 'border-gray-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-xl text-gray-500 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.buttonText === 'Contact Sales' ? '/contact' : '/signup'}
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            30-Day Money-Back Guarantee
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Try Costimate.ai risk-free. If you're not completely satisfied within 30 days, 
            we'll refund your money, no questions asked.
          </p>
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">14</span>
                </div>
                <h3 className="font-semibold text-gray-900">Free Trial</h3>
                <p className="text-gray-600 text-sm">Days to explore</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">30</span>
                </div>
                <h3 className="font-semibold text-gray-900">Money Back</h3>
                <p className="text-gray-600 text-sm">Day guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">24/7</span>
                </div>
                <h3 className="font-semibold text-gray-900">Support</h3>
                <p className="text-gray-600 text-sm">Always available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about Costimate.ai
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of construction professionals who trust Costimate.ai 
            for their estimating needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-blue-300 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;