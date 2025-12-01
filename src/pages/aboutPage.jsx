export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-primary text-secondary flex flex-col">
      <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1 space-y-5">
            <p className="uppercase tracking-[0.25em] text-sm text-accent/80 font-semibold">
              About Us
            </p>
            <h1 className="text-3xl lg:text-4xl font-extrabold">
              Welcome to <span className="text-accent">i Computers</span>
            </h1>
            <p className="text-base lg:text-lg text-secondary leading-relaxed text-justify">
              i Computers is your trusted partner for all kinds of computer
              products and services. From brand new laptops and desktops to
              accessories, upgrades, and repairs, we provide everything you need
              to stay connected and productive.
            </p>
            <p className="text-sm text-secondary leading-relaxed text-justify">
              Whether you&apos;re a student, gamer, professional, or business
              owner, we help you choose the right device that fits your work,
              lifestyle, and budget. Our goal is simple give you genuine
              products, honest advice, and fast, friendly service.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="bg-white shadow-md rounded-xl px-4 py-3 text-center">
                <p className="text-xl font-bold text-accent">Genuine</p>
                <p className="text-md text-secondary/70">Branded products</p>
              </div>
              <div className="bg-white shadow-md rounded-xl px-4 py-3 text-center">
                <p className="text-xl font-bold text-accent">Support</p>
                <p className="text-md text-secondary/70">After-sales service</p>
              </div>
              <div className="bg-white shadow-md rounded-xl px-4 py-3 text-center">
                <p className="text-xl font-bold text-accent">Repairs</p>
                <p className="text-md text-secondary/70">PC & laptop service</p>
              </div>
              <div className="bg-white shadow-md rounded-xl px-4 py-3 text-center">
                <p className="text-xl font-bold text-accent">Affordable</p>
                <p className="text-md text-secondary/70">Competitive prices</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-accent/10">
              <h2 className="text-2xl font-bold mb-3">
                What We Offer
              </h2>
              <ul className="text-md text-secondary space-y-2 list-disc list-inside mb-4">
                <li>Brand new laptops, desktops, and all-in-one PCs</li>
                <li>Monitors, keyboards, mice, and other accessories</li>
                <li>Custom-built PCs for work, gaming, or content creation</li>
                <li>Upgrades: RAM, SSD, graphics cards, and more</li>
                <li>Software installation and basic setup</li>
                <li>Hardware diagnostics, repairs, and maintenance</li>
              </ul>
              <p className="text-md text-secondary leading-relaxed text-justify">
                Our team is always ready to help you compare options and find
                the best solution for your needs without any confusing jargon
                or unnecessary upselling.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-accent/5">
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-md text-secondary leading-relaxed text-justify">
              At i Computers, our mission is to make technology simple,
              reliable, and accessible for everyone. We focus on providing
              trusted products and service, so you can feel confident about
              every purchase you make with us.
            </p>
          </div>

          <div className="bg-accent/5 rounded-2xl shadow-md p-6 border border-accent/10">
            <h2 className="text-2xl font-bold mb-3">Why Choose <span className="text-accent">i Computers</span> ? </h2>
            <ul className="text-md text-secondary space-y-2 list-disc list-inside">
              <li>Genuine and reliable computer brands</li>
              <li>Friendly, experienced staff to guide you</li>
              <li>Clear pricing with no hidden charges</li>
              <li>Quick service and after-sales support</li>
              <li>Solutions for home users, students, and businesses</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 lg:mt-16 text-center">
          <h2 className="text-2xl font-extrabold mb-3">
            Everything You Need in One Computer Shop
          </h2>
          <p className="text-sm text-secondary/75 max-w-2xl mx-auto mb-6">
            Looking for a new computer, an upgrade, or a quick repair? i
            Computers is here to help. Browse our products online or contact us
            for more details about stock, pricing, and services.
          </p>
          <a
            href="/products"
            className="inline-block px-6 py-3 bg-accent/60 text-white rounded-full text-sm font-semibold hover:bg-accent transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
