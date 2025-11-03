import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1D2E50 0%, #0F1A2E 100%)' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #8EB3E1 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #31487A 0%, transparent 70%)' }}></div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: 'rgba(142, 179, 225, 0.1)',
                  border: '1px solid rgba(142, 179, 225, 0.2)'
                }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#8EB3E1' }}></div>
                <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: '#8EB3E1' }}>
                  Contact Us
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl mb-10" style={{ color: '#D9E1F1' }}>
                Ready to transform your healthcare operations? Contact our team
                to discuss how we can support your medical management needs.
              </p>

              <div className="space-y-6">
                <div className="group flex items-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #31487A 0%, #8EB3E1 100%)' }}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Our Location</h3>
                    <p style={{ color: '#D9E1F1' }}>Healthcare District, Medical Center</p>
                  </div>
                </div>

                <div className="group flex items-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #31487A 0%, #8EB3E1 100%)' }}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Phone Number</h3>
                    <p style={{ color: '#D9E1F1' }}>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="group flex items-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #31487A 0%, #8EB3E1 100%)' }}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Email Address</h3>
                    <p style={{ color: '#D9E1F1' }}>info@mistmedical.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl opacity-30 blur group-hover:opacity-50 transition-all duration-500"
                style={{ background: 'linear-gradient(135deg, #31487A, #8EB3E1)' }}></div>
              
              <div className="relative rounded-3xl p-8"
                style={{
                  background: 'rgba(49, 72, 122, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(142, 179, 225, 0.2)'
                }}>
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder:text-opacity-50 focus:outline-none focus:ring-2 transition-all duration-300"
                        placeholder="Your first name"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(142, 179, 225, 0.2)'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder:text-opacity-50 focus:outline-none focus:ring-2 transition-all duration-300"
                        placeholder="Your last name"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(142, 179, 225, 0.2)'
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder:text-opacity-50 focus:outline-none focus:ring-2 transition-all duration-300"
                      placeholder="your.email@example.com"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(142, 179, 225, 0.2)'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Organization</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder:text-opacity-50 focus:outline-none focus:ring-2 transition-all duration-300"
                      placeholder="Your organization"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(142, 179, 225, 0.2)'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl text-white placeholder:text-opacity-50 focus:outline-none focus:ring-2 transition-all duration-300"
                      placeholder="Tell us about your needs..."
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(142, 179, 225, 0.2)'
                      }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #8EB3E1 0%, #31487A 100%)',
                      color: '#FFFFFF',
                      boxShadow: '0 10px 30px rgba(142, 179, 225, 0.3)'
                    }}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="relative border-t py-16 z-10" style={{ borderColor: 'rgba(49, 72, 122, 0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-1">
              <Image
                src="/logo.png"
                alt="Mist Medical Management"
                width={150}
                height={50}
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#D9E1F1' }}>
                Transforming healthcare through innovative medical management
                solutions and strategic partnerships.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(142, 179, 225, 0.1)', border: '1px solid rgba(142, 179, 225, 0.2)' }}>
                  <svg className="w-5 h-5" style={{ color: '#8EB3E1' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(142, 179, 225, 0.1)', border: '1px solid rgba(142, 179, 225, 0.2)' }}>
                  <svg className="w-5 h-5" style={{ color: '#8EB3E1' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(142, 179, 225, 0.1)', border: '1px solid rgba(142, 179, 225, 0.2)' }}>
                  <svg className="w-5 h-5" style={{ color: '#8EB3E1' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-sm" style={{ color: '#D9E1F1' }}>
                <li><a href="#what-we-do" className="hover:text-white transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8EB3E1' }}></div>
                  Laboratory Management
                </a></li>
                <li><a href="#what-we-do" className="hover:text-white transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8EB3E1' }}></div>
                  Genetic Testing
                </a></li>
                <li><a href="#what-we-do" className="hover:text-white transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8EB3E1' }}></div>
                  Diagnostic Services
                </a></li>
                <li><a href="#what-we-do" className="hover:text-white transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8EB3E1' }}></div>
                  Digital Health
                </a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-sm" style={{ color: '#D9E1F1' }}>
                <li><a href="#who-we-are" className="hover:text-white transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8EB3E1' }}></div>
                  About Us
                </a></li>
                <li><a href="#our-portfolio" className="hover:text-white transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8EB3E1' }}></div>
                  Portfolio
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8EB3E1' }}></div>
                  Careers
                </a></li>
                <li><a href="#contact" className="hover:text-white transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8EB3E1' }}></div>
                  Contact
                </a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Legal</h4>
              <ul className="space-y-3 text-sm" style={{ color: '#D9E1F1' }}>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8EB3E1' }}></div>
                  Privacy Policy
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8EB3E1' }}></div>
                  Terms of Service
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8EB3E1' }}></div>
                  Compliance
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8EB3E1' }}></div>
                  Security
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t py-8 z-10" style={{ borderColor: 'rgba(49, 72, 122, 0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#D9E1F1' }}>
              © 2024 Mist Medical Management. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs" style={{ color: '#8EB3E1' }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#8EB3E1' }}></div>
              <span>ISO Certified Healthcare Partner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
