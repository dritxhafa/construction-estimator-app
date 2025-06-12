import { Calculator, Users, Target, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects Estimated', value: '50,000+' },
    { label: 'Construction Companies', value: '2,500+' },
    { label: 'Time Saved (Hours)', value: '1M+' },
    { label: 'Accuracy Rate', value: '94%' },
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO & Co-founder',
      experience: '15 years in construction tech',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&crop=face',
    },
    {
      name: 'Mike Rodriguez',
      role: 'CTO & Co-founder',
      experience: '20 years in AI and software',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&crop=face',
    },
    {
      name: 'David Chen',
      role: 'Head of Construction',
      experience: '25 years as general contractor',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&crop=face',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Costimate.ai
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing construction estimating by combining artificial intelligence 
              with industry expertise to help contractors win more projects and improve profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Construction estimating has remained largely unchanged for decades. We believe 
                there's a better way. Our mission is to empower construction professionals with 
                AI-powered tools that make estimating faster, more accurate, and more profitable.
              </p>
              <p className="text-lg text-gray-600">
                By combining cutting-edge artificial intelligence with deep construction industry 
                knowledge, we're helping contractors of all sizes compete more effectively and 
                grow their businesses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accuracy</h3>
                <p className="text-gray-600">AI-powered precision in every estimate</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 text-center">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Speed</h3>
                <p className="text-gray-600">Complete estimates in minutes, not days</p>
              </div>
              <div className="bg-orange-50 rounded-2xl p-6 text-center">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">Share and discuss estimates with your team</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">Professional-grade estimates every time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by the Industry
            </h2>
            <p className="text-xl text-gray-600">
              Our platform has helped thousands of construction professionals succeed
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Construction veterans and tech experts working together
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-blue-100">
                  We constantly push the boundaries of what's possible in construction technology.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Reliability</h3>
                <p className="text-blue-100">
                  Our platform is built to handle your most critical projects with confidence.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Partnership</h3>
                <p className="text-blue-100">
                  We're not just a software provider – we're your partner in success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;