import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-primary text-secondary flex flex-col">
      <main className="relative flex-1 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/homeviewpagebg.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-primary/95"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 lg:py-16 flex flex-col gap-10">
          <div className="grid gap-8 lg:grid-cols-[3fr,2fr] items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-2xl tracking-[0.25em] text-white"> welcome to
                <span className="text-accent">i Computers</span> 
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Modern computers,{" "}
                <span className="text-accent">for real life.</span>
              </h1>

              <p className="text-lg sm:text-base text-gray-200/90 max-w-xl leading-relaxed">
                From work laptops to gaming rigs and everyday PCs, i Computers
                helps you pick the right system, accessories and upgrades – with
                clear pricing and friendly guidance.
              </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 text-[11px] sm:text-lg text-gray-200">
                <span className="px-3 py-1 rounded-full bg-black/40">
                  Laptops & Desktops
                </span>
                <span className="px-3 py-1 rounded-full bg-black/40">
                  Custom PCs
                </span>
                <span className="px-3 py-1 rounded-full bg-black/40">
                  Repairs & Service
                </span>
                <span className="px-3 py-1 rounded-full bg-black/40">
                  Accessories & Upgrades
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 lg:p-7 space-y-4">
                <h2 className="text-xl font-semibold text-center text-white">
                  Shop by Need
                </h2>

                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="rounded-xl bg-black/40 p-3">
                    <p className="font-semibold text-accent mb-1 text-md text-center">For Work</p>
                    <p className="text-gray-200/80 text-center">
                      Reliable systems for office, coding and business.
                    </p>
                  </div>
                  <div className="rounded-xl bg-black/40 p-3">
                    <p className="font-semibold text-accent mb-1 text-md text-center">For Gaming</p>
                    <p className="text-gray-200/80 text-center">
                      High-performance builds and upgrade paths.
                    </p>
                  </div>
                  <div className="rounded-xl bg-black/40 p-3">
                    <p className="font-semibold text-accent mb-1 text-md text-center">For Study</p>
                    <p className="text-gray-200/80 text-center">
                      Student-friendly laptops and accessories.
                    </p>
                  </div>
                  <div className="rounded-xl bg-black/40 p-3">
                    <p className="font-semibold text-accent mb-1 text-md text-center">For Home</p>
                    <p className="text-gray-200/80 text-center">
                      Simple, dependable PCs for everyday use.
                    </p>
                  </div>
                </div>

                <div className=" gap-3 pt-2 text-center">
                <Link
                  to="/products"
                  className="px-6 py-3 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent/90 transition hover:scale-105 inline-block"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-black/60 border border-white/10 p-4">
              <h3 className="font-semibold text-accent mb-1 text-md text-center">
                Genuine Products
              </h3>
              <p className="text-xs sm:text-sm text-gray-200/85 text-center">
                Branded computers and components with proper warranty and clear
                billing.
              </p>
            </div>

            <div className="rounded-xl bg-black/60 border border-white/10 p-4">
              <h3 className="font-semibold text-accent mb-1 text-md text-center">
                Service & Support
              </h3>
              <p className="text-xs sm:text-sm text-gray-200/85 text-center">
                Laptop/PC repair, cleaning, upgrades and software setup from
                experienced technicians.
              </p>
            </div>

            <div className="rounded-xl bg-black/60 border border-white/10 p-4">
              <h3 className="font-semibold text-accent mb-1 text-md text-center">
                Honest Guidance
              </h3>
              <p className="text-xs sm:text-sm text-gray-200/85 text-center">
                No confusing jargon or upselling – just clear advice based on
                your real needs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
