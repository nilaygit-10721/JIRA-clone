import {
  FaArrowRight,
  FaCheck,
  FaChartLine,
  FaUsers,
  FaSync,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img
                src="/jira-logo.png"
                alt="Jira Clone"
                className="h-8 w-auto"
              />
              <div className="hidden md:flex space-x-8 ml-10">
                <a
                  href="/features"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Features
                </a>
                <a
                  href="/solutions"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Solutions
                </a>
                <a
                  href="/pricing"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Pricing
                </a>
                <a
                  href="/resources"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Resources
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/login" className="text-gray-700 hover:text-blue-600">
                Sign in
              </a>
              <a
                href="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The #1 software development tool
              <br />
              used by agile teams
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Plan, track, and release world-class software with Jira Clone.
              Trusted by thousands of teams worldwide.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="/signup"
                className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-700 flex items-center"
              >
                Get started free <FaArrowRight className="ml-2" />
              </a>
              <a
                href="/demo"
                className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-medium shadow-md hover:shadow-lg flex items-center"
              >
                Watch demo
              </a>
            </div>
          </div>

          {/* Product Screenshot */}
          <div className="mt-16 rounded-xl shadow-2xl overflow-hidden">
            <img
              src="/dashboard-screenshot.png"
              alt="Jira Clone Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful features for all your team needs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaChartLine,
                title: "Advanced Analytics",
                text: "Track progress with real-time reports",
              },
              {
                icon: FaUsers,
                title: "Team Collaboration",
                text: "Work together seamlessly",
              },
              {
                icon: FaSync,
                title: "Workflow Automation",
                text: "Automate repetitive tasks",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <feature.icon className="text-blue-600 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "0",
                users: "10",
                features: ["Basic boards", "2GB storage"],
              },
              {
                name: "Standard",
                price: "10",
                users: "Unlimited",
                features: ["Advanced boards", "Custom fields", "10GB storage"],
                popular: true,
              },
              {
                name: "Premium",
                price: "20",
                users: "Unlimited",
                features: ["All features", "Unlimited storage", "24/7 support"],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl bg-white ${
                  plan.popular
                    ? "border-2 border-blue-600 shadow-xl"
                    : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="text-sm font-semibold text-blue-600 mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">
                  ${plan.price}
                  <span className="text-lg text-gray-500">/user/month</span>
                </div>
                <div className="mb-6 text-gray-600">
                  Up to {plan.users} users
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" /> {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Jira Clone</h4>
              <p className="text-sm">
                Empowering teams to build better software.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/features" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/security" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Stay Connected</h4>
              <div className="flex space-x-4">
                <a href="/twitter" className="hover:text-white">
                  Twitter
                </a>
                <a href="/linkedin" className="hover:text-white">
                  LinkedIn
                </a>
                <a href="/facebook" className="hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            © 2023 Jira Clone. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
