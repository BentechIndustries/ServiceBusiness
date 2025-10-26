import { Play, Check, Star, ArrowRight, Video, Clock, Zap, TrendingUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/Small Logo.png" 
                alt="Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="text-xl font-bold text-gray-900">REEL<span className="text-pink-500">IMPACT</span></div>
                <div className="text-xs text-gray-600">Clips that Convert</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition">Portfolio</a>
              <a href="#packages" className="text-gray-600 hover:text-gray-900 transition">Packages</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-pink-50 rounded-full">
                <span className="text-pink-600 font-semibold text-sm">LIMITED TIME OFFER</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Turn Your Footage Into<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
                  High-Converting Content
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional video editing for businesses that want to dominate social media.
                Fast turnaround. Proven results. Starting at just $2 per video.
              </p>

              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-pink-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Try Us For $2</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Get one professionally edited short-form video for only $2. See our quality firsthand.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Professional editing & color grading
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Captions & platform optimization
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    24-hour turnaround
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition duration-200 flex items-center justify-center space-x-2">
                  <span>Get Your $2 Video Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">Join 200+ businesses already creating better content</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative">
                  <img
                    src="/landscape.png?v=3"
                    alt="Video Preview"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                      <Play className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+247%</div>
                    <div className="text-sm text-gray-600">Avg. Engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">24-48 hour turnaround on most projects. Rush delivery available.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Platform Optimized</h3>
              <p className="text-gray-600">Formatted perfectly for Instagram, TikTok, YouTube, and more.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save Your Time</h3>
              <p className="text-gray-600">Focus on your business while we handle your content creation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600">Videos that drive real results for real businesses</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer">
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-200 to-gray-300 relative">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold">Restaurant Promo</p>
                  <p className="text-gray-300 text-sm">+150% engagement</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section id="packages" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect solution for your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Social Media Starter",
                description: "Perfect for small businesses looking to establish their online presence",
                features: ["5 Short-form Videos", "Basic Editing", "Platform Optimization", "24hr Turnaround"],
                price: "$197",
                image: "/Social Media Starter.png",
                popular: false
              },
              {
                title: "Content Creator Pro",
                description: "Ideal for influencers and content creators who need consistent, high-quality videos",
                features: ["15 Short-form Videos", "Advanced Editing", "Motion Graphics", "Custom Branding", "Priority Support"],
                price: "$497",
                image: "/Content Creator Pro.png",
                popular: true
              },
              {
                title: "Business Growth",
                description: "Comprehensive package for established businesses ready to scale their content",
                features: ["25 Short-form Videos", "3 Long-form Videos", "Advanced Motion Graphics", "Analytics Reports", "Content Strategy"],
                price: "$997",
                image: "/Business Growth.png?v=2",
                popular: false
              }
            ].map((pkg, idx) => (
              <div key={idx} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${pkg.popular ? 'ring-2 ring-pink-500 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="bg-pink-500 text-white text-center py-2 rounded-t-2xl font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6">
                  <div className="aspect-[4/3] rounded-lg mb-4 overflow-hidden bg-white">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <button className={`px-6 py-2 rounded-lg font-semibold transition ${
                      pkg.popular 
                        ? 'bg-pink-500 text-white hover:bg-pink-600' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}>
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$397</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">10 short-form videos</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Professional editing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Captions & subtitles</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1-2 revisions per video</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-gray-800 transition">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-pink-500 rounded-2xl p-8 shadow-xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$797</span>
                <span className="text-blue-100">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white">20 short-form videos</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white">1 long-form video</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Basic motion graphics</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Platform optimization</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$997</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">30 short-form videos</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">4 long-form videos</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced motion graphics</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Analytics review</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Content strategy</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-gray-800 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-pink-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Elevate Your Content?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 200+ businesses creating scroll-stopping content that converts
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Business Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition duration-200">
                Book Your Strategy Call
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/Small Logo.png" 
                  alt="Logo" 
                  className="w-8 h-8 object-contain"
                />
                <div className="text-lg font-bold">REEL<span className="text-pink-500">IMPACT</span></div>
              </div>
              <p className="text-gray-400 text-sm">Creating clips that convert for businesses worldwide.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Short-Form Editing</a></li>
                <li><a href="#" className="hover:text-white transition">Long-Form Editing</a></li>
                <li><a href="#" className="hover:text-white transition">Motion Graphics</a></li>
                <li><a href="#" className="hover:text-white transition">Content Strategy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
                <li><a href="#packages" className="hover:text-white transition">Packages</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>info@reelimpact.com</li>
                <li>Mon-Fri: 9AM - 6PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Reel Impact. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
