const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CookieBanner-BGkk_mA8.js","assets/vendor-CqeTsLdH.js","assets/preload-VwzZcMtp.js","assets/_404-Qt-hdS1d.js","assets/services-DqJuxoHh.js","assets/listings-5PQ4x2ZC.js","assets/badge-qDlWSost.js","assets/asset-management-CT49WKEO.js","assets/the-nest-BksA3_4Y.js","assets/contact-XEgnlc0q.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, M as MapPin, P as Phone, a as Mail, L as Link, t as twMerge, c as clsx, r as reactExports, S as Slot, b as cva, u as useLocation, X, d as Menu, m as motion, A as ArrowRight, e as createHashRouter, R as RouterProvider2, O as Outlet, Q as QueryClient, f as ReactDOM, g as React2, h as QueryClientProvider } from "./vendor-CqeTsLdH.js";
import { _ as __vitePreload } from "./preload-VwzZcMtp.js";
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-[#1B2A4A] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-8 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/tidal-realty-preview/assets/tidal-logo.png",
              alt: "Tidal Realty Services",
              className: "h-12 w-12 object-contain brightness-0 invert"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-light", children: "Tidal Realty Services" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/70", children: "Full-Service Real Estate Brokerage" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-1 flex-shrink-0 text-white/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/90", children: [
            "2417 Truxillo Street",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Houston, TX 77004"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 flex-shrink-0 text-white/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:832-930-4663", className: "text-white/90 hover:text-white transition-colors", children: "832-930-4663" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 flex-shrink-0 text-white/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@tidalpm.com", className: "text-white/90 hover:text-white transition-colors", children: "info@tidalpm.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/services",
            className: "block text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors",
            children: "Services"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30", children: "|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/listings",
            className: "block text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors",
            children: "Listings"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30", children: "|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/asset-management",
            className: "block text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors",
            children: "Asset Management"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30", children: "|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/the-nest",
            className: "block text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors",
            children: "The Nest"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30", children: "|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            className: "block text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors",
            children: "Contact"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/20 mt-12 pt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/60", children: "© 2025 Tidal Realty Services. All rights reserved." }) })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/asset-management", label: "Asset Management" },
    { href: "https://www.4714wardstreet.com/", label: "The Nest", external: true },
    { href: "/contact", label: "Contact" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[72px] items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/tidal-realty-preview/assets/tidal-logo.png",
            alt: "Tidal Realty Services",
            className: "h-9 w-9 object-contain group-hover:scale-105 transition-transform mix-blend-multiply"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[18px] font-bold tracking-[0.06em] text-[#1B2A4A] uppercase leading-none group-hover:text-primary transition-colors", children: "Tidal Realty Services" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex gap-8 items-center", children: [
        navItems.map(
          (item) => item.external ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: item.href,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group text-[16px] font-medium tracking-[0.08em] transition-colors relative pb-1 text-muted-foreground hover:text-[#1B2A4A]",
              children: [
                item.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 right-0 h-[2px] bg-[#1B2A4A] opacity-0 group-hover:opacity-40 transition-opacity" })
              ]
            },
            item.href
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: item.href,
              className: `group text-[16px] font-medium tracking-[0.08em] transition-colors relative pb-1 ${location.pathname === item.href ? "text-[#1B2A4A]" : "text-muted-foreground hover:text-[#1B2A4A]"}`,
              children: [
                item.label,
                location.pathname === item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 right-0 h-[2px] bg-[#1B2A4A]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 right-0 h-[2px] bg-[#1B2A4A] opacity-0 group-hover:opacity-40 transition-opacity" })
              ]
            },
            item.href
          )
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "ml-4 bg-[#1B2A4A] text-white hover:bg-[#1B2A4A]/90 text-[15px] font-bold tracking-[0.08em] px-6", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Get Started" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
          className: "lg:hidden p-2 hover:bg-accent rounded-md transition-colors",
          "aria-label": "Toggle menu",
          children: isMobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 24 })
        }
      )
    ] }),
    isMobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-2", children: [
      navItems.map(
        (item) => item.external ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: item.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-[16px] font-medium tracking-[0.08em] transition-colors py-3 px-2 rounded-md text-muted-foreground",
            onClick: () => setIsMobileMenuOpen(false),
            children: item.label
          },
          item.href
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.href,
            className: `text-[16px] font-medium tracking-[0.08em] transition-colors py-3 px-2 rounded-md ${location.pathname === item.href ? "text-[#1B2A4A] bg-accent border-l-2 border-[#1B2A4A]" : "text-muted-foreground"}`,
            onClick: () => setIsMobileMenuOpen(false),
            children: item.label
          },
          item.href
        )
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "mt-4 bg-[#1B2A4A] text-white hover:bg-[#1B2A4A]/90 text-[15px] font-bold", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Get Started" }) })
    ] }) })
  ] }) });
}
function Website({
  children,
  config = {},
  className
}) {
  const {
    layout = {
      maxWidth: "full",
      padding: "md",
      background: "default",
      minHeight: true
    }
  } = config;
  const getBackgroundClass = () => {
    switch (layout.background) {
      case "muted":
        return "bg-muted";
      case "gradient":
        return "bg-gradient-to-b from-background to-muted/20";
      default:
        return "bg-background";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
    layout.minHeight !== false && "min-h-screen",
    getBackgroundClass(),
    "flex flex-col",
    className
  ), children });
}
const CookieBanner = reactExports.lazy(
  () => __vitePreload(() => import("./CookieBanner-BGkk_mA8.js"), true ? __vite__mapDeps([0,1,2]) : void 0).catch((error) => {
    console.warn("Failed to load CookieBanner:", error);
    return {
      default: () => null
    };
  })
);
class CookieBannerErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.warn("CookieBanner error boundary caught an error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
function RootLayout({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Website, { children: [
    !isHomePage && /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CookieBannerErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CookieBanner, {}) }) })
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Tidal Realty Services - Full-Service Real Estate Brokerage" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Full-service real estate brokerage specializing in property listings and professional property management. Exceptional service with flat-fee listings and competitive pricing." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#FAF8F5]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "h-screen flex flex-col md:flex-row relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "absolute top-0 left-0 right-0 z-50 py-6 px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/tidal-realty-preview/assets/tidal-logo.png",
                alt: "Tidal Realty Services",
                className: "h-9 w-9 object-contain mix-blend-multiply"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[18px] font-bold tracking-[0.06em] text-[#1B2A4A] uppercase leading-none", children: "Tidal Realty Services" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/",
                className: "relative text-[16px] tracking-[0.08em] text-[#1B2A4A] font-medium pb-1",
                children: [
                  "Home",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 right-0 h-[2px] bg-[#1B2A4A]" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/services",
                className: "group relative text-[16px] tracking-[0.08em] text-[#1B2A4A]/70 hover:text-[#1B2A4A] transition-colors font-medium pb-1",
                children: [
                  "Services",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 right-0 h-[2px] bg-[#1B2A4A] opacity-0 group-hover:opacity-40 transition-opacity" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/asset-management",
                className: "group relative text-[16px] tracking-[0.08em] text-[#1B2A4A]/70 hover:text-[#1B2A4A] transition-colors font-medium pb-1",
                children: [
                  "Asset Management",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 right-0 h-[2px] bg-[#1B2A4A] opacity-0 group-hover:opacity-40 transition-opacity" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://www.4714wardstreet.com/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group relative text-[16px] tracking-[0.08em] text-[#1B2A4A]/70 hover:text-[#1B2A4A] transition-colors font-medium pb-1",
                children: [
                  "The Nest",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 right-0 h-[2px] bg-[#1B2A4A] opacity-0 group-hover:opacity-40 transition-opacity" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                className: "group relative text-[16px] tracking-[0.08em] text-[#1B2A4A]/70 hover:text-[#1B2A4A] transition-colors font-medium pb-1",
                children: [
                  "Contact",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 right-0 h-[2px] bg-[#1B2A4A] opacity-0 group-hover:opacity-40 transition-opacity" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "bg-[#1B2A4A] text-white hover:bg-[#1B2A4A]/90 text-[15px] font-bold tracking-[0.08em] px-6",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Get Started" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden text-[#1B2A4A]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M4 6h16M4 12h16M4 18h16" }) }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-1/2 bg-[#FAF8F5] flex items-center justify-center p-8 md:p-16 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "max-w-[550px] w-full",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[56px] md:text-[72px] leading-[1.1] text-[#1B2A4A] font-light mb-8", children: "We make property ownership easier." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] text-[#888888] mb-10 leading-[1.7]", children: "Tidal Realty Services is a full-service real estate brokerage specializing in property listings and professional property management." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "lg",
                    className: "bg-[#F5F0EB] border border-[#1B2A4A]/20 text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white px-8 py-6 text-[14px] font-bold tracking-[0.15em] uppercase rounded-sm transition-colors",
                    asChild: true,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
                      "Let Us Talk ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                    ] })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-8 flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-[#1B2A4A]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#1B2A4A] text-2xl", children: "↓" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-1/2 h-64 md:h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/tidal-realty-preview/assets/home-hero-houston.png",
            alt: "Traditional Houston Home with Oak Tree",
            className: "w-full h-full object-cover object-center"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "min-h-screen flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col md:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-1/2 bg-[#F0EDE6] flex items-center p-16 min-h-[600px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "max-w-[600px]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] tracking-[0.2em] text-[#1B2A4A] uppercase font-bold mb-8", children: "Our Mission" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 bg-[#1B2A4A]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 bg-[#1B2A4A] opacity-30" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[24px] md:text-[24px] text-[#1B2A4A] font-medium leading-relaxed mb-10", children: '"Our focus is simple: deliver an exceptional client experience while protecting and maximizing your bottom line. That commitment is why we offer innovative programs such as flat-fee property listings and highly competitive property management pricing, value that many of our clients consider unmatched."' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "lg",
                      className: "bg-[#F0EDE6] border border-[#1B2A4A]/20 text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white px-8 py-6 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors",
                      asChild: true,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", children: [
                        "Learn More ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                      ] })
                    }
                  )
                ] })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-1/2 bg-[#F0EDE6] flex items-center justify-center p-16 min-h-[600px] relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "absolute inset-0 w-full h-full opacity-[0.12]",
            viewBox: "0 0 800 800",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "200", x2: "800", y2: "600", stroke: "#888888", strokeWidth: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "600", x2: "800", y2: "200", stroke: "#888888", strokeWidth: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "200", y1: "0", x2: "600", y2: "800", stroke: "#888888", strokeWidth: "0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "600", y1: "0", x2: "200", y2: "800", stroke: "#888888", strokeWidth: "0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "650", cy: "400", r: "250", stroke: "#888888", strokeWidth: "1", fill: "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "650", cy: "400", r: "180", stroke: "#888888", strokeWidth: "0.5", fill: "none" })
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-[#FAF8F5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1400px] mx-auto px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[13px] tracking-[0.2em] text-[#1B2A4A] uppercase font-bold mb-12", children: "Our Portfolio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 border-l border-[#1B2A4A]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#FAF8F5] py-20 px-8 text-center border-r border-[#1B2A4A]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[72px] md:text-[80px] leading-none text-[#1B2A4A] mb-4", children: "23+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] tracking-[0.25em] uppercase text-[#888888]", children: [
                  "Units Under",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Management"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#1B2A4A] py-20 px-8 text-center border-r border-[#1B2A4A]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[72px] md:text-[80px] leading-none text-white mb-4", children: "25,000+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] tracking-[0.25em] uppercase text-white/80", children: [
                  "Square Feet",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Managed"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#FAF8F5] py-20 px-8 text-center border-r border-[#1B2A4A]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[72px] md:text-[80px] leading-none text-[#1B2A4A] mb-4", children: "20+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] tracking-[0.25em] uppercase text-[#888888]", children: [
                  "Years of Houston",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Real Estate Experience"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#1B2A4A] py-20 px-8 text-center border-r border-[#1B2A4A]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[72px] md:text-[80px] leading-none text-white mb-4", children: "$75" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] tracking-[0.25em] uppercase text-white/80", children: [
                  "Flat Property",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Management Fee"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0 h-[450px] w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/tidal-realty-preview/assets/team.jpg",
                alt: "Professional Team Collaboration",
                className: "w-full h-full object-cover grayscale-[20%]"
              }
            ) })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-[#F0EDE6]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "grid md:grid-cols-[40%_60%] gap-16 mb-20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] tracking-[0.2em] text-[#1B2A4A] uppercase font-bold mb-8", children: "We Make It Simple" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] text-[#1B2A4A] leading-[1.8]", children: "Whether you're a homeowner, investor, or tenant, Tidal Realty Services designs a set of real estate solutions tailored to your needs and goals. We focus on creating value through proactive management, competitive pricing, and a personal touch that sets us apart." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/services",
                    className: "block text-[28px] text-[#1B2A4A] hover:underline transition-all group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#1B2A4A] mr-4", children: "—" }),
                      "Listings for Sale"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/services",
                    className: "block text-[28px] text-[#1B2A4A] hover:underline transition-all group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#1B2A4A] mr-4", children: "—" }),
                      "Listings for Rent"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/services",
                    className: "block text-[28px] text-[#1B2A4A] hover:underline transition-all group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#1B2A4A] mr-4", children: "—" }),
                      "Asset Management"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/services",
                    className: "block text-[28px] text-[#1B2A4A] hover:underline transition-all group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#1B2A4A] mr-4", children: "—" }),
                      "Property Consulting"
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8, delay: 0.2 },
            className: "grid md:grid-cols-3 gap-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#F0EDE6] border border-[#1B2A4A]/20 p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[26px] text-[#1B2A4A] mb-4 font-medium", children: "Listings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-[#888888] leading-relaxed mb-8", children: "Ready to sell or rent your property? We list it, market it, and manage the process — for a flat fee." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/listings",
                    className: "text-[11px] tracking-[0.2em] uppercase text-[#1B2A4A] hover:opacity-60 transition-opacity inline-flex items-center",
                    children: [
                      "Explore Listings ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-3 w-3" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute bottom-4 right-4 opacity-[0.08]", width: "80", height: "80", viewBox: "0 0 80 80", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "10", width: "60", height: "60", stroke: "#1B2A4A", strokeWidth: "1", fill: "none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "10", y1: "30", x2: "70", y2: "30", stroke: "#1B2A4A", strokeWidth: "0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "10", y1: "50", x2: "70", y2: "50", stroke: "#1B2A4A", strokeWidth: "0.5" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#F0EDE6] border border-[#1B2A4A]/20 p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[26px] text-[#1B2A4A] mb-4 font-medium", children: "Asset Management" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-[#888888] leading-relaxed mb-8", children: "Comprehensive property management at $75/month flat. No surprises, just results." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/asset-management",
                    className: "text-[11px] tracking-[0.2em] uppercase text-[#1B2A4A] hover:opacity-60 transition-opacity inline-flex items-center",
                    children: [
                      "Learn More About Management ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-3 w-3" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute bottom-4 right-4 opacity-[0.08]", width: "80", height: "80", viewBox: "0 0 80 80", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "10", width: "60", height: "60", stroke: "#1B2A4A", strokeWidth: "1", fill: "none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "30", y1: "10", x2: "30", y2: "70", stroke: "#1B2A4A", strokeWidth: "0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50", y1: "10", x2: "50", y2: "70", stroke: "#1B2A4A", strokeWidth: "0.5" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#F0EDE6] border border-[#1B2A4A]/20 p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[26px] text-[#1B2A4A] mb-4 font-medium", children: "The Human Touch" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-[#888888] leading-relaxed mb-8", children: "Smart technology, backed by people who actually pick up the phone." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/contact",
                    className: "text-[11px] tracking-[0.2em] uppercase text-[#1B2A4A] hover:opacity-60 transition-opacity inline-flex items-center",
                    children: [
                      "Contact Us ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-3 w-3" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute bottom-4 right-4 opacity-[0.08]", width: "80", height: "80", viewBox: "0 0 80 80", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "40", r: "30", stroke: "#1B2A4A", strokeWidth: "1", fill: "none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "40", r: "20", stroke: "#1B2A4A", strokeWidth: "0.5", fill: "none" })
                ] })
              ] })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[600px] md:h-[700px] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/tidal-realty-preview/assets/home-hero.png",
              alt: "Modern Houston Architecture",
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full flex items-center justify-end px-8 md:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 50 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "bg-[#FAF8F5] p-12 md:p-16 shadow-2xl max-w-[520px] w-full",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[36px] leading-[1.2] text-[#1B2A4A] mb-8", children: "We're here when it matters most." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] text-[#888888] leading-relaxed mb-6", children: "We invite you to take a quick tour of our site and see how we can serve your real estate needs." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] text-[#888888] leading-relaxed mb-10", children: "The world may be trending toward AI and automation — and we embrace smart technology. But when it comes to your real estate investments, we still believe in the power of personal service and the human touch. Give us a call." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "lg",
                  className: "bg-[#FAF8F5] border border-[#1B2A4A]/20 text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white px-8 py-6 text-[14px] font-bold tracking-[0.15em] uppercase rounded-sm transition-colors",
                  asChild: true,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
                    "Let's Talk ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                  ] })
                }
              )
            ]
          }
        ) })
      ] })
    ] })
  ] });
}
const NotFoundPage = reactExports.lazy(() => __vitePreload(() => import("./_404-Qt-hdS1d.js"), true ? __vite__mapDeps([3,1,2]) : void 0));
const ServicesPage = reactExports.lazy(() => __vitePreload(() => import("./services-DqJuxoHh.js"), true ? __vite__mapDeps([4,1,2]) : void 0));
const ListingsPage = reactExports.lazy(() => __vitePreload(() => import("./listings-5PQ4x2ZC.js"), true ? __vite__mapDeps([5,1,2,6]) : void 0));
const AssetManagementPage = reactExports.lazy(() => __vitePreload(() => import("./asset-management-CT49WKEO.js"), true ? __vite__mapDeps([7,1,2]) : void 0));
const TheNestPage = reactExports.lazy(() => __vitePreload(() => import("./the-nest-BksA3_4Y.js"), true ? __vite__mapDeps([8,1,2,6]) : void 0));
const ContactPage = reactExports.lazy(() => __vitePreload(() => import("./contact-XEgnlc0q.js"), true ? __vite__mapDeps([9,1,2]) : void 0));
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {})
  },
  {
    path: "/services",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesPage, {})
  },
  {
    path: "/listings",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(ListingsPage, {})
  },
  {
    path: "/asset-management",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(AssetManagementPage, {})
  },
  {
    path: "/the-nest",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(TheNestPage, {})
  },
  {
    path: "/contact",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPage, {})
  },
  {
    path: "*",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {})
  }
];
function Spinner({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-block ${className || ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      className: "animate-spin h-8 w-8 text-gray-600",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            className: "opacity-10",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "opacity-20",
            fill: "currentColor",
            d: "m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  ) });
}
const SpinnerFallback = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-8 h-screen items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) });
const LayoutWithSuspense = () => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SpinnerFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RootLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
const router = createHashRouter([
  {
    path: "/",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutWithSuspense, {}),
    children: routes
  }
]);
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider2, { router });
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1e3 * 60 * 5,
      // 5 minutes
      gcTime: 1e3 * 60 * 10,
      // 10 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false
    },
    mutations: {
      retry: 0
    }
  }
});
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Root element not found");
const root = ReactDOM.createRoot(rootElement);
root.render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React2.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);
const main = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  cn as c,
  main as m
};
