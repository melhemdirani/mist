import Link from "next/link";

export default function ComparePage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #D9E1F1 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1
            className="text-6xl lg:text-7xl font-black mb-6"
            style={{ color: "#1D2E50" }}
          >
            Choose Your Design
          </h1>
          <p className="text-2xl" style={{ color: "#31487A" }}>
            Select the homepage style that best represents your brand
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Homepage 1 - Futuristic */}
          <Link href="/">
            <div
              className="group cursor-pointer bg-white p-8 rounded-3xl border-4 hover:shadow-2xl transition-all duration-500"
              style={{ borderColor: "#8EB3E1" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = "#31487A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#8EB3E1";
              }}
            >
              <div
                className="aspect-video mb-6 rounded-xl overflow-hidden relative"
                style={{
                  background:
                    "linear-gradient(135deg, #1D2E50 0%, #31487A 50%, #8EB3E1 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-4xl font-black mb-2">
                      Version 1
                    </div>
                    <div className="text-white/80 text-lg">
                      Futuristic & Modern
                    </div>
                  </div>
                </div>
                {/* Animated elements */}
                <div
                  className="absolute top-4 left-4 w-16 h-16 rounded-full blur-xl animate-pulse"
                  style={{ background: "rgba(142, 179, 225, 0.5)" }}
                ></div>
                <div
                  className="absolute bottom-4 right-4 w-20 h-20 rounded-full blur-xl animate-pulse"
                  style={{ background: "rgba(49, 72, 122, 0.5)" }}
                ></div>
              </div>

              <h2
                className="text-3xl font-black mb-4"
                style={{ color: "#1D2E50" }}
              >
                Homepage 1
              </h2>
              <p className="text-lg mb-6" style={{ color: "#1D2E50" }}>
                Futuristic design with glass morphism, glowing effects, animated
                gradients, and modern interactive elements. Perfect for a
                cutting-edge tech feel.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#8EB3E1" }}
                  ></div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#31487A" }}
                  >
                    Glass Morphism Effects
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#8EB3E1" }}
                  ></div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#31487A" }}
                  >
                    Animated Glowing Borders
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#8EB3E1" }}
                  ></div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#31487A" }}
                  >
                    Gradient Backgrounds
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#8EB3E1" }}
                  ></div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#31487A" }}
                  >
                    Floating Elements
                  </span>
                </div>
              </div>

              <div
                className="text-center py-4 rounded-xl font-bold text-white transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #8EB3E1 0%, #31487A 100%)",
                }}
              >
                View Homepage 1
              </div>
            </div>
          </Link>

          {/* Homepage 2 - Clean & Bold */}
          <Link href="/homepage2">
            <div
              className="group cursor-pointer bg-white p-8 rounded-3xl border-4 hover:shadow-2xl transition-all duration-500"
              style={{ borderColor: "#31487A" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = "#8EB3E1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#31487A";
              }}
            >
              <div
                className="aspect-video mb-6 rounded-xl overflow-hidden relative bg-white border-4"
                style={{ borderColor: "#31487A" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="text-4xl font-black mb-2"
                      style={{ color: "#1D2E50" }}
                    >
                      Version 2
                    </div>
                    <div className="text-lg" style={{ color: "#31487A" }}>
                      Clean & Bold
                    </div>
                  </div>
                </div>
                {/* Geometric shapes */}
                <div
                  className="absolute top-0 right-0 w-20 h-20"
                  style={{ backgroundColor: "#8EB3E1" }}
                ></div>
                <div
                  className="absolute bottom-0 left-0 w-16 h-16"
                  style={{ backgroundColor: "#D9E1F1" }}
                ></div>
              </div>

              <h2
                className="text-3xl font-black mb-4"
                style={{ color: "#1D2E50" }}
              >
                Homepage 2
              </h2>
              <p className="text-lg mb-6" style={{ color: "#1D2E50" }}>
                Clean, bold design with strong typography, geometric shapes, and
                crisp layouts. Perfect for a professional, authoritative
                presence.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2"
                    style={{ backgroundColor: "#31487A" }}
                  ></div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#31487A" }}
                  >
                    Bold Typography
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2"
                    style={{ backgroundColor: "#31487A" }}
                  ></div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#31487A" }}
                  >
                    Geometric Accents
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2"
                    style={{ backgroundColor: "#31487A" }}
                  ></div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#31487A" }}
                  >
                    Structured Layouts
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2"
                    style={{ backgroundColor: "#31487A" }}
                  ></div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#31487A" }}
                  >
                    Crisp Borders
                  </span>
                </div>
              </div>

              <div
                className="text-center py-4 rounded-xl font-bold text-white transition-all duration-300"
                style={{ backgroundColor: "#31487A" }}
              >
                View Homepage 2
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg" style={{ color: "#1D2E50" }}>
            Both designs use your complete color palette and include all content
            sections
          </p>
        </div>
      </div>
    </div>
  );
}
