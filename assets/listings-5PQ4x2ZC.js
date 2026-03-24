import { r as reactExports, j as jsxRuntimeExports, m as motion, k as Search, F as Filter, C as ChevronDown, T as TrendingUp, H as Heart, M as MapPin, B as Bed, l as Bath, n as Square, o as House, D as DollarSign, L as Link } from "./vendor-CqeTsLdH.js";
import { B as Button } from "./main-QrBkkgpc.js";
import { B as Badge, C as Card, a as CardContent } from "./badge-qDlWSost.js";
import "./preload-VwzZcMtp.js";
const properties = [
  {
    id: 1,
    title: "Modern Luxury Estate",
    address: "123 Waterfront Drive",
    city: "Houston",
    state: "TX",
    price: 285e4,
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: "Residential",
    status: "For Sale",
    image: "/tidal-realty-preview/airo-assets/images/pages/listings/property-1",
    featured: true
  },
  {
    id: 2,
    title: "Waterfront Condo",
    address: "456 Bay Street",
    city: "Galveston",
    state: "TX",
    price: 875e3,
    beds: 3,
    baths: 2,
    sqft: 2200,
    type: "Residential",
    status: "For Sale",
    image: "/tidal-realty-preview/airo-assets/images/pages/listings/property-2",
    featured: true
  },
  {
    id: 3,
    title: "Downtown Loft",
    address: "789 Main Street",
    city: "Houston",
    state: "TX",
    price: 65e4,
    beds: 2,
    baths: 2,
    sqft: 1800,
    type: "Residential",
    status: "For Sale",
    image: "/tidal-realty-preview/airo-assets/images/pages/listings/property-3"
  },
  {
    id: 4,
    title: "Family Home",
    address: "321 Oak Avenue",
    city: "Sugar Land",
    state: "TX",
    price: 525e3,
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "Residential",
    status: "For Sale",
    image: "/tidal-realty-preview/airo-assets/images/pages/listings/property-4"
  },
  {
    id: 5,
    title: "Commercial Office Building",
    address: "555 Business Parkway",
    city: "Houston",
    state: "TX",
    price: 45e5,
    beds: 0,
    baths: 8,
    sqft: 12e3,
    type: "Commercial",
    status: "For Sale",
    image: "/tidal-realty-preview/airo-assets/images/pages/listings/property-5"
  },
  {
    id: 6,
    title: "Townhouse Complex",
    address: "888 Park Lane",
    city: "The Woodlands",
    state: "TX",
    price: 185e4,
    beds: 12,
    baths: 12,
    sqft: 8500,
    type: "Investment",
    status: "For Sale",
    image: "/tidal-realty-preview/airo-assets/images/pages/listings/property-6"
  }
];
function ListingsPage() {
  const [selectedType, setSelectedType] = reactExports.useState("All");
  const [selectedStatus, setSelectedStatus] = reactExports.useState("All");
  const [priceRange, setPriceRange] = reactExports.useState("All");
  const filteredProperties = properties.filter((property) => {
    if (selectedType !== "All" && property.type !== selectedType) return false;
    if (selectedStatus !== "All" && property.status !== selectedStatus) return false;
    if (priceRange !== "All") {
      const price = property.price;
      if (priceRange === "Under $500k" && price >= 5e5) return false;
      if (priceRange === "$500k - $1M" && (price < 5e5 || price >= 1e6)) return false;
      if (priceRange === "$1M - $2M" && (price < 1e6 || price >= 2e6)) return false;
      if (priceRange === "Over $2M" && price < 2e6) return false;
    }
    return true;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Property Listings - Tidal Realty Services" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Browse our curated selection of residential, commercial, and investment properties. Find your perfect property with Tidal Realty Services." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[400px] bg-primary text-primary-foreground overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/tidal-realty-preview/airo-assets/images/pages/listings/hero",
              alt: "Property listings",
              className: "w-full h-full object-cover opacity-30"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 h-full flex items-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "max-w-3xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-bold mb-6", children: "Find Your Perfect Property" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl opacity-90 mb-8", children: "Explore our curated selection of residential, commercial, and investment opportunities." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background rounded-lg p-2 flex gap-2 shadow-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center gap-2 px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Search by location, property type, or features...",
                      className: "flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "px-8", children: "Search" })
              ] })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 bg-muted/30 border-b sticky top-20 z-40 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Filter by:" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: selectedType,
              onChange: (e) => setSelectedType(e.target.value),
              className: "appearance-none bg-background border border-border rounded-lg px-4 py-2 pr-10 text-sm font-medium cursor-pointer hover:border-primary transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Types" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Residential", children: "Residential" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Commercial", children: "Commercial" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Investment", children: "Investment" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: selectedStatus,
              onChange: (e) => setSelectedStatus(e.target.value),
              className: "appearance-none bg-background border border-border rounded-lg px-4 py-2 pr-10 text-sm font-medium cursor-pointer hover:border-primary transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "For Sale", children: "For Sale" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "For Rent", children: "For Rent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Sold", children: "Sold" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Pending", children: "Pending" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: priceRange,
              onChange: (e) => setPriceRange(e.target.value),
              className: "appearance-none bg-background border border-border rounded-lg px-4 py-2 pr-10 text-sm font-medium cursor-pointer hover:border-primary transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Prices" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Under $500k", children: "Under $500k" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "$500k - $1M", children: "$500k - $1M" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "$1M - $2M", children: "$1M - $2M" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Over $2M", children: "Over $2M" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto text-sm text-muted-foreground", children: [
          filteredProperties.length,
          " ",
          filteredProperties.length === 1 ? "property" : "properties",
          " found"
        ] })
      ] }) }) }),
      selectedType === "All" && selectedStatus === "All" && priceRange === "All" && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-2", children: "Featured Properties" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Hand-picked premium listings" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-sm px-4 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 mr-2" }),
            "Hot Listings"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: properties.filter((p) => p.featured).map((property, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: index * 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden group hover:shadow-2xl transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[400px] overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: property.image,
                    alt: property.title,
                    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-4 left-4 bg-primary text-primary-foreground", children: property.status }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-4 right-4 bg-accent text-accent-foreground", children: "Featured" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute bottom-4 right-4 p-3 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 text-muted-foreground hover:text-accent hover:fill-accent transition-colors" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-bold text-white", children: [
                  "$",
                  (property.price / 1e3).toFixed(0),
                  "k"
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "mb-3", children: property.type }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-2 group-hover:text-primary transition-colors", children: property.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
                    property.address,
                    ", ",
                    property.city,
                    ", ",
                    property.state
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 mb-6 pb-6 border-b", children: [
                  property.beds > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "h-5 w-5 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      property.beds,
                      " Beds"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Bath, { className: "h-5 w-5 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      property.baths,
                      " Baths"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "h-5 w-5 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      property.sqft.toLocaleString(),
                      " sqft"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "flex-1", children: "View Details" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Schedule Tour" })
                ] })
              ] })
            ] })
          },
          property.id
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8", children: selectedType !== "All" || selectedStatus !== "All" || priceRange !== "All" ? "Filtered Results" : "All Properties" }),
        filteredProperties.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-16 w-16 text-muted-foreground mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-2", children: "No properties found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Try adjusting your filters to see more results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => {
            setSelectedType("All");
            setSelectedStatus("All");
            setPriceRange("All");
          }, children: "Clear Filters" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredProperties.map((property, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.3, delay: index * 0.05 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[280px] overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: property.image,
                    alt: property.title,
                    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-3 left-3 bg-primary text-primary-foreground text-xs", children: property.status }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-3 right-3 p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-muted-foreground hover:text-accent hover:fill-accent transition-colors" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-white", children: [
                  "$",
                  property.price >= 1e6 ? `${(property.price / 1e6).toFixed(2)}M` : `${(property.price / 1e3).toFixed(0)}k`
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex-1 flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "mb-3 w-fit text-xs", children: property.type }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2 group-hover:text-primary transition-colors", children: property.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm line-clamp-1", children: [
                    property.address,
                    ", ",
                    property.city
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4 pb-4 border-b text-sm", children: [
                  property.beds > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "h-4 w-4 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: property.beds })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Bath, { className: "h-4 w-4 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: property.baths })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "h-4 w-4 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: property.sqft.toLocaleString() })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "flex-1", children: "Details" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", children: "Tour" })
                ] })
              ] })
            ] })
          },
          property.id
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "max-w-4xl mx-auto text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-16 w-16 mx-auto mb-6 opacity-90" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Don't See What You're Looking For?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 opacity-90", children: "We have access to exclusive off-market properties and can help you find exactly what you need." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "secondary", className: "text-lg px-8 py-6", children: "Contact an Agent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Request Custom Search" }) })
            ] })
          ]
        }
      ) }) })
    ] })
  ] });
}
export {
  ListingsPage as default
};
