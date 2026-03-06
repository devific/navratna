import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  Star,
  ArrowRight,
  Coffee,
  Wheat,
  Leaf,
  ChevronDown,
} from "lucide-react";
import { Button } from "../components/Button";
import { IMAGES, TESTIMONIALS } from "../constants";
import Videos from "@/components/Videos";

// ─── Reusable animation variants ────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

// ─── Scroll-triggered wrapper ────────────────────────────────────────────────

const ScrollReveal: React.FC<{
  children: React.ReactNode;
  variants?: any;
  custom?: number;
  className?: string;
  once?: boolean;
}> = ({
  children,
  variants = fadeInUp,
  custom = 0,
  className = "",
  once = true,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── Parallax image wrapper ──────────────────────────────────────────────────

const ParallaxImage: React.FC<{
  src: string;
  alt: string;
  speed?: number;
  className?: string;
}> = ({ src, alt, speed = 0.3, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed * 100}%`, `${speed * 100}%`],
  );
  const springY = useSpring(y, { stiffness: 60, damping: 20 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y: springY }}
        className="w-full h-full object-cover scale-125"
      />
    </div>
  );
};

// ─── Animated counter ────────────────────────────────────────────────────────

const Counter: React.FC<{ to: number; suffix?: string; label: string }> = ({
  to,
  suffix = "",
  label,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  React.useEffect(() => {
    if (inView) count.set(to);
  }, [inView]);

  return (
    <div ref={ref} className="text-center">
      <motion.span className="text-5xl font-serif font-bold text-gold block">
        {display}
      </motion.span>
      <span className="text-white/60 uppercase tracking-widest text-xs mt-1 block">
        {label}
      </span>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

export const Home: React.FC = () => {
  const heroRef = useRef(null);
  const ambianceRef = useRef(null);

  // Hero parallax
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.08]);

  // Ambiance parallax
  const { scrollYProgress: ambianceScroll } = useScroll({
    target: ambianceRef,
    offset: ["start end", "end start"],
  });
  const ambianceBgY = useTransform(ambianceScroll, [0, 1], ["-20%", "20%"]);

  // Global scroll for decorative elements
  const { scrollY } = useScroll();
  const floatY1 = useTransform(scrollY, [0, 1000], [0, -120]);
  const floatY2 = useTransform(scrollY, [0, 1000], [0, -60]);
  const floatRotate = useTransform(scrollY, [0, 1000], [0, 15]);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center px-6 md:px-12 bg-[#3a0e0e] overflow-hidden"
      >
        {/* Floating decorative orbs */}
        <motion.div
          style={{ y: floatY1, rotate: floatRotate }}
          className="absolute top-20 right-[10%] w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ y: floatY2 }}
          className="absolute bottom-32 left-[5%] w-96 h-96 bg-maroon/40 rounded-full blur-3xl pointer-events-none"
        />

        {/* Animated grain texture overlay */}
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text block with parallax */}
          <motion.div style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-left"
            >
              <motion.div
                variants={fadeInUp}
                custom={0}
                className="flex items-center gap-2 mb-6"
              >
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold tracking-widest uppercase border border-gold/30"
                >
                  Pure Vegetarian
                </motion.span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                custom={1}
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1]"
              >
                The Taste of <br />
                <motion.span
                  className="text-gold inline-block"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(212,175,55,0)",
                      "0 0 40px rgba(212,175,55,0.4)",
                      "0 0 20px rgba(212,175,55,0)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "easeInOut",
                  }}
                >
                  Tradition.
                </motion.span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                custom={2}
                className="text-lg lg:text-xl text-white/70 mb-10 max-w-lg leading-relaxed font-light"
              >
                From crispy Dosas to steaming Chai. Experience the authentic
                flavors of India, crafted with love and fresh ingredients.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                custom={3}
                className="flex flex-wrap gap-4"
              >
                <Link to="/menu">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      variant="primary"
                      className="px-10 py-4 text-lg w-full"
                    >
                      View Menu
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      variant="outline"
                      className="px-10 py-4 text-lg w-full"
                    >
                      Find a Location
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero image with parallax */}
          <motion.div
            style={{ y: heroImageY, scale: heroScale }}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gold/20 blur-3xl rounded-full transform scale-110"
            />
            <motion.img
              src={IMAGES.hero}
              alt="South Indian Feast"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 rounded-[3rem] shadow-2xl border-4 border-white/10 w-full object-cover h-[300px] lg:h-[600px]"
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-cream p-4 lg:p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 z-20"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  }}
                  className="bg-maroon/10 p-3 rounded-full"
                >
                  <Coffee className="text-maroon" />
                </motion.div>
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
          </motion.div>
        </div>
      </section>

      <Videos />

      {/* ── STATS BAND ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#3a0e0e]">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { to: 25, suffix: "+", label: "Years of Flavor" },
            { to: 50, suffix: "+", label: "Signature Dishes" },
            { to: 12, suffix: "", label: "Locations" },
            { to: 1, suffix: "M+", label: "Happy Guests" },
          ].map((s, i) => (
            <ScrollReveal key={i} custom={i} variants={scaleIn}>
              <Counter to={s.to} suffix={s.suffix} label={s.label} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── SECTION 2: FEATURES ─────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-white relative overflow-hidden">
        {/* Decorative background text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span className="text-[20vw] font-serif font-bold text-maroon whitespace-nowrap">
            NAVRATNA
          </span>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20 max-w-3xl mx-auto">
            <motion.h4
              variants={fadeInUp}
              className="text-gold uppercase tracking-widest text-sm font-semibold mb-3"
            >
              Our Promise
            </motion.h4>
            <h2 className="text-4xl md:text-5xl font-serif text-maroon mb-6">
              Authentic Indian Flavors
            </h2>
            <p className="text-muted text-lg">
              We bring the bustling streets of Mumbai and the traditional
              kitchens of Udupi straight to your plate.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <Leaf size={32} />,
                title: "100% Vegetarian",
                desc: "Pure vegetarian cuisine prepared in separate hygienic kitchens.",
                color: "from-green-50 to-cream",
              },
              {
                icon: <Wheat size={32} />,
                title: "Fresh Ingredients",
                desc: "Locally sourced produce and spices grinded in-house daily.",
                color: "from-amber-50 to-cream",
              },
              {
                icon: <Coffee size={32} />,
                title: "Traditional Recipes",
                desc: "Time-honored recipes passed down through generations.",
                color: "from-orange-50 to-cream",
              },
            ].map((card, idx) => (
              <ScrollReveal key={idx} custom={idx} variants={fadeInUp}>
                <motion.div
                  whileHover={{
                    y: -12,
                    boxShadow: "0 30px 60px rgba(90,20,20,0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`p-10 bg-gradient-to-br ${card.color} rounded-3xl border border-maroon/5 cursor-default`}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-maroon text-white rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-maroon mb-3 font-serif">
                    {card.title}
                  </h3>
                  <p className="text-muted">{card.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SIGNATURE DISHES ─────────────────────────────────── */}
      <section className="py-28 bg-cream relative overflow-hidden">
        {/* Scrolling spice strip */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden h-8 bg-gold/10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap"
          >
            {Array(10)
              .fill(
                "✦ MASALA DOSA  ✦ FILTER KAAPI  ✦ POORI BHAJI  ✦ IDLI SAMBAR  ✦ VADA PAV  ✦ PANI PURI",
              )
              .map((t, i) => (
                <span
                  key={i}
                  className="text-gold/50 text-xs font-bold uppercase tracking-widest"
                >
                  {t}
                </span>
              ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <ScrollReveal variants={fadeInLeft}>
              <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">
                Customer Favorites
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif text-maroon">
                Signature Dishes
              </h2>
            </ScrollReveal>
            <ScrollReveal variants={fadeInRight} className="hidden md:block">
              <Link to="/menu">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button variant="outline">
                    View Full Menu{" "}
                    <ArrowRight size={16} className="ml-2 inline" />
                  </Button>
                </motion.div>
              </Link>
            </ScrollReveal>
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
              <ScrollReveal key={idx} custom={idx} variants={scaleIn}>
                <motion.div
                  whileHover={{ y: -14 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
                >
                  <div className="h-64 overflow-hidden relative">
                    <motion.img
                      src={dish.img}
                      alt={dish.title}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay shimmer on hover */}
                    <motion.div
                      initial={{ opacity: 0, x: "-100%" }}
                      whileHover={{ opacity: 1, x: "100%" }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                    />
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.15 + 0.3 }}
                      className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-maroon shadow-md"
                    >
                      {dish.price}
                    </motion.div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                      {dish.title}
                    </h3>
                    <p className="text-muted mb-6">{dish.desc}</p>
                    <motion.div
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.5, duration: 0.5 }}
                      className="h-[2px] w-full bg-gradient-to-r from-gold to-transparent"
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: AMBIANCE ─────────────────────────────────────────── */}
      <section
        ref={ambianceRef}
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        {/* Parallax background */}
        <motion.div
          style={{ y: ambianceBgY }}
          className="absolute inset-[-20%] bg-center bg-cover scale-125"
          style={{
            backgroundImage: `url(${IMAGES.ambiance})`,
            y: ambianceBgY,
          }}
        />

        {/* Dark overlay with animated gradient */}
        <motion.div
          animate={{ opacity: [0.65, 0.75, 0.65] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute inset-0 bg-maroon"
        />

        {/* Decorative rings */}
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] rounded-full border border-gold/20"
        />
        <motion.div
          animate={{ scale: [1.06, 1, 1.06], opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute w-[450px] h-[450px] rounded-full border border-gold/30"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal variants={fadeInUp} custom={0}>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Chai, Conversation{" "}
              <motion.span
                animate={{ color: ["#ffffff", "#D4AF37", "#ffffff"] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                & Community
              </motion.span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variants={fadeInUp} custom={1}>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto font-light">
              More than just a restaurant, Navratna is a place to gather, share
              stories, and enjoy the simple pleasures of life over a cup of hot
              Masala Chai.
            </p>
          </ScrollReveal>
          <ScrollReveal variants={scaleIn} custom={2}>
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block"
              >
                <Button
                  variant="primary"
                  className="bg-gold border-gold text-white hover:bg-white hover:text-gold mx-auto"
                >
                  Visit Nearest Outlet
                </Button>
              </motion.div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 5: TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Horizontal scrolling backdrop text */}
        <motion.div
          animate={{ x: ["0%", "-30%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-10 whitespace-nowrap opacity-[0.03] pointer-events-none select-none"
        >
          <span className="text-[10rem] font-serif font-bold text-maroon">
            ★ REVIEWS ★ TESTIMONIALS ★ GUESTS ★ REVIEWS ★ TESTIMONIALS ★ GUESTS
            ★
          </span>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-center text-maroon mb-6">
              What Our Guests Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold/20 mx-auto mb-16 rounded-full" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.id} custom={i} variants={fadeInUp}>
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: "0 24px 48px rgba(90,20,20,0.10)",
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="bg-cream p-8 rounded-2xl border border-maroon/5 shadow-sm h-full"
                >
                  {/* Stars with stagger */}
                  <div className="flex gap-1 text-gold mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.1 + j * 0.08,
                          type: "spring",
                        }}
                      >
                        <Star size={16} fill="currentColor" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-charcoal/80 italic mb-6 leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center text-maroon font-serif font-bold text-lg"
                    >
                      {t.name[0]}
                    </motion.div>
                    <div>
                      <h5 className="font-serif font-bold text-maroon">
                        {t.name}
                      </h5>
                      <span className="text-xs text-muted uppercase tracking-wider">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#3a0e0e] relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full blur-3xl pointer-events-none"
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Ready to Taste <span className="text-gold">India?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Reserve your table today and experience the warmth of authentic
              vegetarian cuisine.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/menu">
                <motion.div
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button variant="primary" className="px-10 py-4 text-lg">
                    Explore Menu
                  </Button>
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button variant="outline" className="px-10 py-4 text-lg">
                    Book a Table
                  </Button>
                </motion.div>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
