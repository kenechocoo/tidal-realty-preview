import { j as jsxRuntimeExports, m as motion, q as Target, s as Shield, v as Lightbulb, p as Handshake, a as Mail, w as Linkedin, x as Award, U as Users, T as TrendingUp, H as Heart, A as ArrowRight, L as Link, y as Calendar, P as Phone, M as MapPin } from "./vendor-CqeTsLdH.js";
import { B as Button } from "./main-QrBkkgpc.js";
import { B as Badge, C as Card, a as CardContent } from "./badge-qDlWSost.js";
import "./preload-VwzZcMtp.js";
const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    bio: "With 15+ years in real estate, Sarah founded Tidal to bring transparency and excellence to property services. Licensed broker and investment strategist.",
    image: "/tidal-realty-preview/airo-assets/images/pages/the-nest/team-member-1",
    email: "sarah@tidalrealty.com",
    linkedin: "#"
  },
  {
    name: "Marcus Chen",
    role: "Director of Asset Management",
    bio: "Marcus oversees our property management division, ensuring every property is maintained to the highest standards. 10+ years managing portfolios.",
    image: "/tidal-realty-preview/airo-assets/images/pages/the-nest/team-member-2",
    email: "marcus@tidalrealty.com",
    linkedin: "#"
  },
  {
    name: "Jennifer Rodriguez",
    role: "Senior Broker",
    bio: "Jennifer specializes in luxury residential and commercial transactions. Top producer with $50M+ in annual sales and exceptional client satisfaction.",
    image: "/tidal-realty-preview/airo-assets/images/pages/the-nest/team-member-3",
    email: "jennifer@tidalrealty.com",
    linkedin: "#"
  },
  {
    name: "David Thompson",
    role: "Investment Consultant",
    bio: "David guides investors through market analysis and acquisition strategies. Former financial analyst with deep expertise in real estate investment.",
    image: "/tidal-realty-preview/airo-assets/images/pages/the-nest/team-member-4",
    email: "david@tidalrealty.com",
    linkedin: "#"
  }
];
function TheNestPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "The Nest - About Tidal Realty Services" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Meet the team behind Tidal Realty Services. Learn about our mission, values, and commitment to exceptional real estate services." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 bg-primary text-primary-foreground overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/tidal-realty-preview/airo-assets/images/pages/the-nest/hero",
              alt: "Tidal Realty team",
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "max-w-4xl mx-auto text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-6 text-sm px-4 py-2", children: "Welcome to The Nest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-bold mb-6", children: "Where Expertise Meets Excellence" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl opacity-90 mb-8", children: "We're more than a real estate company—we're your partners in building wealth and achieving property goals." })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "mb-4", children: "Our Story" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-6", children: "Built on Trust, Driven by Results" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-lg text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tidal Realty Services was founded in 2015 with a simple mission: to provide real estate services that actually serve our clients' best interests." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We saw an industry where agents prioritized quick commissions over long-term relationships, where property managers were reactive instead of proactive, and where investors struggled to find trustworthy guidance." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "So we built something different. A company where transparency isn't just a buzzword—it's how we operate. Where expertise is backed by results. Where your success is our success." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Today, we manage over 500 properties, have facilitated $250M+ in transactions, and maintain a 98% client satisfaction rate. But the numbers that matter most? The families we've helped find homes, the investors whose portfolios we've grown, and the property owners who sleep better knowing we're on their side." })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/tidal-realty-preview/airo-assets/images/pages/the-nest/office-culture",
                    alt: "Tidal Realty office culture",
                    className: "w-full h-[500px] object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-primary mb-1", children: "2015" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Founded in Houston" })
              ] })
            ]
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Our Mission & Values" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "The principles that guide everything we do" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
          {
            icon: Target,
            title: "Client-First Approach",
            description: "Your goals drive our strategy. We succeed when you succeed."
          },
          {
            icon: Shield,
            title: "Unwavering Integrity",
            description: "Transparency, honesty, and ethical practices in every transaction."
          },
          {
            icon: Lightbulb,
            title: "Innovation & Excellence",
            description: "Leveraging technology and expertise to deliver superior results."
          },
          {
            icon: Handshake,
            title: "Long-Term Partnerships",
            description: "Building relationships that last beyond a single transaction."
          }
        ].map((value, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.3, delay: index * 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full hover:shadow-lg transition-all duration-300 hover:border-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(value.icon, { className: "h-8 w-8 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: value.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: value.description })
            ] }) })
          },
          value.title
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "mb-4", children: "Meet the Team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "The People Behind Tidal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Experienced professionals dedicated to your success" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: teamMembers.map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: index * 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden group hover:shadow-xl transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[300px] overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: member.image,
                    alt: member.name,
                    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: `mailto:${member.email}`,
                      className: "p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" })
                    }
                  ),
                  member.linkedin && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: member.linkedin,
                      className: "p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-1", children: member.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary font-medium mb-3", children: member.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: member.bio })
              ] })
            ] })
          },
          member.name
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Why Clients Choose Tidal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "What sets us apart in the real estate industry" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: [
          {
            icon: Award,
            title: "Proven Track Record",
            stat: "$250M+",
            description: "In successful transactions since 2015"
          },
          {
            icon: Users,
            title: "Client Satisfaction",
            stat: "98%",
            description: "Client satisfaction and retention rate"
          },
          {
            icon: TrendingUp,
            title: "Portfolio Growth",
            stat: "500+",
            description: "Properties under active management"
          }
        ].map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: index * 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center h-full hover:shadow-lg transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "h-10 w-10 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: stat.stat }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2", children: stat.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: stat.description })
            ] }) })
          },
          stat.title
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "mb-4", children: "Our Culture" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Life at Tidal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "We believe great service starts with a great team" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
          {
            icon: Heart,
            title: "Work-Life Balance",
            description: "We support our team so they can support our clients with energy and enthusiasm."
          },
          {
            icon: Lightbulb,
            title: "Continuous Learning",
            description: "Regular training, certifications, and professional development opportunities."
          },
          {
            icon: Users,
            title: "Collaborative Environment",
            description: "We win together. Knowledge sharing and teamwork are core to our success."
          },
          {
            icon: Award,
            title: "Recognition & Growth",
            description: "Clear career paths and recognition for exceptional performance."
          }
        ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: index * 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-primary/10 rounded-lg h-fit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-6 w-6 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-2", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.description })
              ] })
            ] }) })
          },
          item.title
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "Join Our Team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg opacity-90 mb-6", children: "We're always looking for talented professionals who share our values and passion for real estate." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", variant: "secondary", children: [
            "View Open Positions ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
          ] })
        ] }) }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 bg-primary text-primary-foreground relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-full h-full", viewBox: "0 0 1440 320", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "currentColor", d: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "max-w-4xl mx-auto text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Ready to Work Together?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 opacity-90", children: "Whether you're buying, selling, investing, or need property management, we're here to help." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "secondary", className: "text-lg px-8 py-6", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
                  "Get in Touch ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", variant: "outline", className: "text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                  "Schedule Consultation"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6 opacity-90" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "(713) 555-0123" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-75", children: "Mon-Fri 9am-6pm" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6 opacity-90" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "info@tidalrealty.com" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-75", children: "24hr response time" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6 opacity-90" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Houston, TX" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-75", children: "Serving Greater Houston" })
                ] })
              ] })
            ]
          }
        ) })
      ] })
    ] })
  ] });
}
export {
  TheNestPage as default
};
