import Image from "next/image";

export default function WhatWeDo() {
  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: "Laboratory Management & Operations",
      description:
        "Comprehensive laboratory management services including quality control, workflow optimization, and regulatory compliance for medical testing facilities.",
      gradient: "linear-gradient(135deg, #1D2E50 0%, #31487A 100%)",
      imageUrl:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Genetic Testing & Research Management",
      description:
        "Advanced genetic testing services, research coordination, and personalized medicine solutions with cutting-edge genomic technologies.",
      gradient: "linear-gradient(135deg, #31487A 0%, #8EB3E1 100%)",
      imageUrl:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      title: "Diagnostic & Clinical Support Services",
      description:
        "Comprehensive diagnostic services including medical imaging, clinical pathology, and specialized testing with rapid turnaround times.",
      gradient: "linear-gradient(135deg, #1D2E50 0%, #31487A 100%)",
      imageUrl:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Innovation & Digital Health",
      description:
        "Digital transformation solutions, telemedicine platforms, AI-driven diagnostics, and innovative healthcare technology implementation.",
      gradient: "linear-gradient(135deg, #31487A 0%, #8EB3E1 100%)",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Strategic Partnerships & Clinical Integration",
      description:
        "Building strategic alliances with healthcare providers, facilitating clinical integration, and developing collaborative care networks.",
      gradient: "linear-gradient(135deg, #1D2E50 0%, #31487A 100%)",
      imageUrl:
        "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=600&fit=crop",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Education & Knowledge Development",
      description:
        "Medical education programs, professional development, research publications, and knowledge transfer initiatives for healthcare professionals.",
      gradient: "linear-gradient(135deg, #31487A 0%, #8EB3E1 100%)",
      imageUrl:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Healthcare Consultancy",
      description:
        "Strategic consulting services for healthcare organizations, operational optimization, regulatory compliance, and business development guidance.",
      gradient: "linear-gradient(135deg, #1D2E50 0%, #31487A 100%)",
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: "Pharmaceuticals",
      description:
        "Pharmaceutical distribution, medication management solutions, and specialized drug therapy programs for healthcare facilities.",
      gradient: "linear-gradient(135deg, #31487A 0%, #8EB3E1 100%)",
      imageUrl:
        "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&h=600&fit=crop",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Clinic Network Management",
      description:
        "Comprehensive clinic management services including operations, staffing, technology integration, and patient experience optimization.",
      gradient: "linear-gradient(135deg, #1D2E50 0%, #31487A 100%)",
      imageUrl:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #8EB3E1 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #D9E1F1 0%, transparent 70%)",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(29, 46, 80, 0.1) 0%, rgba(49, 72, 122, 0.1) 100%)",
              border: "1px solid rgba(29, 46, 80, 0.2)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#1D2E50" }}
            ></div>
            <span
              className="text-sm font-semibold tracking-wider"
              style={{ color: "#1D2E50" }}
            >
              OUR SERVICES
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background:
                "linear-gradient(135deg, #1D2E50 0%, #31487A 50%, #8EB3E1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            What We Do
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#31487A" }}>
            Comprehensive healthcare management solutions across laboratory
            services, genetic testing, digital innovation, and clinical
            excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(217, 225, 241, 0.5) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 8px 32px rgba(29, 46, 80, 0.1)",
              }}
            >
              {/* Service Image */}
              {service.imageUrl && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, ${
                        service.gradient
                          .match(/\(([^)]+)\)/)?.[1]
                          ?.split(",")[0]
                      } 0%, transparent 100%)`,
                      opacity: 0.8,
                    }}
                  ></div>
                </div>
              )}

              {/* Content */}
              <div className="relative p-8 z-10">
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: service.gradient,
                    color: "#FFFFFF",
                    boxShadow: "0 8px 24px rgba(29, 46, 80, 0.2)",
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-4 transition-colors duration-300"
                  style={{ color: "#1D2E50" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#31487A" }}
                >
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#31487A" }}
                  >
                    Learn More
                  </span>
                  <svg
                    className="w-4 h-4"
                    style={{ color: "#31487A" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
