import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Coffee, Wheat, Leaf } from "lucide-react";
import { Button } from "../components/Button";
import { IMAGES, TESTIMONIALS } from "../constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[700px] flex items-center px-6 md:px-12 bg-maroon overflow-hidden max-lg:py-32">
        {/* Abstract shapes/bg */}
        <div className="absolute inset-0 bg-[#3a0e0e]" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 mb-2 lg:mb-6"
            >
              <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold tracking-widest uppercase border border-gold/20">
                Pure Vegetarian
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-4 lg:mb-8 leading-[1.1]"
            >
              The Taste of <br />
              <span className="text-gold">Tradition.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg lg:text-xl text-white/70 mb-4 lg:mb-10 max-w-lg leading-relaxed font-light"
            >
              From crispy Dosas to steaming Chai. Experience the authentic
              flavors of India, crafted with love and fresh ingredients.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to="/menu">
                <Button variant="primary" className="px-10 py-4 text-lg w-full">
                  View Menu
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="px-10 py-4 text-lg w-full">
                  Find a Location
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full transform scale-110"></div>
            <img
              src={IMAGES.hero}
              alt="South Indian Feast"
              className="relative z-10 rounded-[3rem] shadow-2xl border-4 border-white/10 w-full object-cover h-[300px] lg:h-[600px] hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -left-6 bg-cream p-2 lg:p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4"
            >
              <div className="bg-maroon/10 p-3 rounded-full">
                <Coffee className="text-maroon" />
              </div>
              <div>
                <p className="text-xs text-muted font-bold uppercase tracking-wider">
                  Best Seller
                </p>
                <p className="text-maroon font-serif text-xl font-bold">
                  Filter Kaapi
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: STORY / FEATURES */}
      <section className="py-24 px-6 bg-white">
        <div className="text-center mb-16 max-w-3xl mx-auto max-w-7xl">
          <h2 className="text-4xl font-serif text-maroon mb-6">
            Authentic Indian Flavors
          </h2>
          <p className="text-muted text-lg">
            We bring the bustling streets of Mumbai and the traditional kitchens
            of Udupi straight to your plate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-7xl mx-auto">
          <div className="p-8 bg-cream rounded-3xl hover:bg-gold/10 transition-colors">
            <div className="w-16 h-16 bg-maroon text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-bold text-maroon mb-3 font-serif">
              100% Vegetarian
            </h3>
            <p className="text-muted">
              Pure vegetarian cuisine prepared in separate hygienic kitchens.
            </p>
          </div>
          <div className="p-8 bg-cream rounded-3xl hover:bg-gold/10 transition-colors">
            <div className="w-16 h-16 bg-maroon text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Wheat size={32} />
            </div>
            <h3 className="text-xl font-bold text-maroon mb-3 font-serif">
              Fresh Ingredients
            </h3>
            <p className="text-muted">
              Locally sourced produce and spices grinded in-house daily.
            </p>
          </div>
          <div className="p-8 bg-cream rounded-3xl hover:bg-gold/10 transition-colors">
            <div className="w-16 h-16 bg-maroon text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee size={32} />
            </div>
            <h3 className="text-xl font-bold text-maroon mb-3 font-serif">
              Traditional Recipes
            </h3>
            <p className="text-muted">
              Time-honored recipes passed down through generations.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SIGNATURE DISHES */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">
                Customer Favorites
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif text-maroon">
                Signature Dishes
              </h2>
            </div>
            <Link to="/menu" className="hidden md:block">
              <Button variant="outline">View Full Menu</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: IMAGES.dish1,
                title: "Masala Dosa",
                price: "₹140",
                desc: "Crispy crepe with spiced potato filling.",
              },
              {
                img: IMAGES.dish2,
                title: "Punjabi Samosa",
                price: "₹60",
                desc: "Golden pastry with spiced potato & peas.",
              },
              {
                img: IMAGES.dish3,
                title: "Poori Bhaji",
                price: "₹120",
                desc: "Fluffy bread with spicy potato curry.",
              },
            ].map((dish, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={dish.img}
                    alt={dish.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-maroon shadow-md">
                    {dish.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                    {dish.title}
                  </h3>
                  <p className="text-muted mb-6">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link to="/menu">
              <Button variant="outline">Explore Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: AMBIANCE / CHAI */}
      <section
        className="relative h-[500px] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${IMAGES.ambiance})` }}
      >
        <div className="absolute inset-0 bg-maroon/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Chai, Conversation & Community
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto font-light">
            More than just a restaurant, Navratna is a place to gather, share
            stories, and enjoy the simple pleasures of life over a cup of hot
            Masala Chai.
          </p>
          <Link to="/contact">
            <Button
              variant="primary"
              className="bg-gold border-gold text-white hover:bg-white hover:text-gold mx-auto"
            >
              Visit Nearest Outlet
            </Button>
          </Link>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center text-maroon mb-16">
            What Our Guests Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream p-8 rounded-2xl border border-maroon/5 shadow-sm"
              >
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-charcoal/80 italic mb-6 leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <h5 className="font-serif font-bold text-maroon">{t.name}</h5>
                  <span className="text-xs text-muted uppercase tracking-wider">
                    {t.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
