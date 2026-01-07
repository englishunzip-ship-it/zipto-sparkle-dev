import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Home, Search, Filter, Phone, Facebook } from "lucide-react";
import ziptocodelogo from "@/assets/ziptocode-logo.png";
import ScrollToTop from "@/components/ScrollToTop";

const products = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    category: "Website",
    description: "My personal portfolio website showcasing skills, projects and experience as a web developer. Responsive website with modern design principles.",
    tags: ["HTML", "CSS", "JavaScript"],
    price: "Contact for Price",
    features: ["Responsive Design", "Modern UI", "Project Showcase", "Contact Form"],
    demoUrl: "https://ridoan-zisan.netlify.app",
    imageUrl: "https://github.com/RidoanDev.png",
  },
  {
    id: "dhunathub",
    title: "DhunatHub - Local Help Directory",
    category: "Web Application",
    description: "A comprehensive local help directory connecting people with local services and resources. Features user reviews, service categories, and intuitive interface.",
    tags: ["React", "Firebase", "Maps"],
    price: "Contact for Price",
    features: ["Service Directory", "User Reviews", "Category Filter", "Search Function"],
    demoUrl: "https://dhunat.netlify.app",
    imageUrl: "https://i.postimg.cc/KvXCcTcg/dhunathub.png",
  },
  {
    id: "zupramart",
    title: "ZupraMart - E-commerce Platform",
    category: "E-commerce",
    description: "Complete e-commerce platform with product listings, shopping cart, and secure checkout. Features user authentication and order management.",
    tags: ["React", "Node.js", "Payment"],
    price: "Contact for Price",
    features: ["Shopping Cart", "User Auth", "Product Catalog", "Order Tracking"],
    demoUrl: "https://zupramart.netlify.app",
    imageUrl: "https://zupramart.netlify.app/ZupraMart.jpg",
  },
  {
    id: "bobdo",
    title: "BOBDO - Blood Donation Organization",
    category: "Healthcare",
    description: "Blood donation platform connecting donors with recipients. Reduced response time by 40% and served 68,000+ community members.",
    tags: ["React", "Firebase", "Real-time"],
    price: "Contact for Price",
    features: ["Donor Registry", "Blood Request", "Real-time Match", "SMS Alerts"],
    demoUrl: "https://bobdo.vercel.app",
    imageUrl: "https://i.postimg.cc/FH2r1Q8D/bobdo-removebg-preview.png",
  },
  {
    id: "zpad",
    title: "Zpad - Note Taking Application",
    category: "Productivity",
    description: "Feature-rich note-taking application with markdown support and organizational tools. Categories, tags, search, and cloud sync.",
    tags: ["React", "Markdown", "Cloud"],
    price: "Contact for Price",
    features: ["Markdown Support", "Categories", "Search", "Cloud Sync"],
    demoUrl: "https://zpad.netlify.app",
    imageUrl: "https://i.postimg.cc/vBkkVgWk/zpad.png",
  },
  {
    id: "youthhope",
    title: "YouthHopeBD - Youth Organization",
    category: "Organization",
    description: "Youth organization platform for community development. Event management, volunteer opportunities, and educational resources.",
    tags: ["React", "Firebase", "Events"],
    price: "Contact for Price",
    features: ["Event Management", "Volunteer Portal", "Resources", "Community Hub"],
    demoUrl: "https://youthhope-bd.netlify.app",
    imageUrl: "https://i.postimg.cc/rskLpzPD/IMG-20250916-021919.jpg",
  },
  {
    id: "uniconverter",
    title: "UniConverter - Universal Converter",
    category: "Utility",
    description: "Universal converter supporting multiple measurement types. Length, weight, temperature, currency conversions with intuitive interface.",
    tags: ["JavaScript", "Math", "API"],
    price: "Contact for Price",
    features: ["Unit Conversion", "Currency", "Temperature", "Quick Results"],
    demoUrl: "https://uniconverter.netlify.app",
    imageUrl: "https://i.postimg.cc/qqKYXJwR/uniconverter.png",
  },
  {
    id: "hscian",
    title: "HSCian - E-learning Platform",
    category: "Educational",
    description: "E-learning platform for HSC students with study materials, chapter-wise guides, and built-in HTML & C compilers. Completely non-profit.",
    tags: ["React", "Education", "Compiler"],
    price: "Contact for Price",
    features: ["Study Materials", "Code Compiler", "Study Tips", "Free Access"],
    demoUrl: "https://hscian.netlify.app",
    imageUrl: "https://i.postimg.cc/KjfkwDnN/HSCian-20250922-011814-0000.png",
  },
  {
    id: "sound-memory-game",
    title: "Sound Memory Game",
    category: "Game",
    description: "Interactive sound memory game challenging players to match pairs of sounds. Multiple themes, score tracking, and timer.",
    tags: ["JavaScript", "Audio", "Game"],
    price: "Contact for Price",
    features: ["Sound Matching", "Score Tracking", "Multiple Levels", "Timer"],
    demoUrl: "https://mindgame-i.netlify.app",
    imageUrl: "https://i.postimg.cc/qvxP57T6/memorygame.png",
  },
  {
    id: "snake-game",
    title: "Snake Game",
    category: "Game",
    description: "Classic snake game with modern features. Score tracking, increasing difficulty, and responsive controls for all devices.",
    tags: ["JavaScript", "Canvas", "Game"],
    price: "Contact for Price",
    features: ["Classic Gameplay", "Score Board", "Responsive", "Difficulty Levels"],
    demoUrl: "https://snake-i.netlify.app/",
    imageUrl: "https://i.postimg.cc/Jhh2YcxS/snakegame.png",
  },
  {
    id: "thetacode",
    title: "ThetaCode - Programming Platform",
    category: "Educational",
    description: "Programming platform for developers to learn and practice. Coding challenges, tutorials, and built-in code editor.",
    tags: ["React", "Monaco", "Code"],
    price: "Contact for Price",
    features: ["Code Editor", "Challenges", "Tutorials", "Multi-language"],
    demoUrl: "https://thetacode.netlify.app/",
    imageUrl: "https://i.postimg.cc/kMRkdsCm/thetacode.png",
  },
  {
    id: "tiktaktoe",
    title: "TikTakToe - Classic Game",
    category: "Game",
    description: "Digital Tic-Tac-Toe with enhanced features. Play against computer or friend with multiple difficulty levels.",
    tags: ["JavaScript", "AI", "Game"],
    price: "Contact for Price",
    features: ["Single Player", "Multiplayer", "AI Opponent", "Score History"],
    demoUrl: "https://xox-i.netlify.app/",
    imageUrl: "https://i.postimg.cc/g2m58PZz/tiktaktoe.png",
  },
  {
    id: "toolhub",
    title: "ToolHub - Developer Utilities",
    category: "Utility",
    description: "Collection of essential developer tools. Code formatters, validators, converters, and helpful utilities in one platform.",
    tags: ["JavaScript", "Tools", "Utility"],
    price: "Contact for Price",
    features: ["Code Formatter", "Validators", "Converters", "Quick Access"],
    demoUrl: "https://toolhub-i.netlify.app/",
    imageUrl: "https://i.postimg.cc/vZyRhVpd/toolhub.png",
  },
  {
    id: "typing-test",
    title: "Typing Test - Speed Assessment",
    category: "Utility",
    description: "Typing test application measuring speed and accuracy. Various text samples, progress tracking, and detailed statistics.",
    tags: ["JavaScript", "Analytics", "Test"],
    price: "Contact for Price",
    features: ["WPM Tracking", "Accuracy Stats", "Progress History", "Multiple Texts"],
    demoUrl: "https://typing-i.netlify.app/",
    imageUrl: "https://i.postimg.cc/fRCPvgcx/typingtest.png",
  },
];

const categories = ["All", "Website", "Web Application", "E-commerce", "Educational", "Healthcare", "Productivity", "Organization", "Utility", "Game"];

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppContact = (productTitle: string) => {
    const message = `Hi! I'm interested in purchasing "${productTitle}" from ZiptoCode Store. Please provide more details.`;
    window.open(`https://wa.me/8801712525910?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleFacebookMessage = (productTitle: string) => {
    window.open("https://m.me/ziptocode", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+8809638845910";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
        <div className="container-max">
          <nav className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center gap-2">
              <img src={ziptocodelogo} alt="ZiptoCode" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-foreground">
                Zipto<span className="text-primary">Code</span>
                <span className="text-sm font-normal text-muted-foreground ml-2">Store</span>
              </span>
            </Link>

            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-max text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-semibold uppercase tracking-wider"
          >
            ZiptoCode Store
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-lg mt-3 mb-4"
          >
            Ready-Made <span className="text-gradient">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Browse our collection of professionally built websites, web apps, and projects. 
            Try the live demo and contact us to purchase.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-300 text-foreground"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border/50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-max">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group glass-card overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="hidden text-5xl text-primary/30 font-bold absolute">
                      {product.title.charAt(0)}
                    </span>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/90 text-primary-foreground font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <ul className="grid grid-cols-2 gap-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Live Demo Button */}
                    <a
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors duration-300 mb-3"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>

                    {/* Price & Actions */}
                    <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                      <span className="text-sm font-medium text-primary text-center">{product.price}</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleWhatsAppContact(product.title)}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors duration-300"
                          title="WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          WhatsApp
                        </button>
                        <button
                          onClick={() => handleFacebookMessage(product.title)}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#1877F2] text-white text-xs font-medium hover:bg-[#1877F2]/90 transition-colors duration-300"
                          title="Facebook"
                        >
                          <Facebook className="w-3.5 h-3.5" />
                          Message
                        </button>
                        <button
                          onClick={handleCall}
                          className="flex items-center justify-center px-3 py-2 rounded-lg bg-green-600 text-white text-xs font-medium hover:bg-green-600/90 transition-colors duration-300"
                          title="Call"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-b from-background to-primary/5">
        <div className="container-max text-center">
          <h2 className="heading-md mb-4">
            Need a <span className="text-gradient">Custom Solution?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Can't find what you're looking for? We can build custom solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8801712525910?text=Hi!%20I%20need%20a%20custom%20solution.%20Can%20we%20discuss?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a
              href="https://m.me/ziptocode"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <Facebook className="w-5 h-5" />
              Message on Facebook
            </a>
            <a
              href="tel:+8809638845910"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call: +880 9638-845910
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ZiptoCode Tech Solution. All rights reserved.
          </p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default Store;
