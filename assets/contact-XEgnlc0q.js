import { r as reactExports, j as jsxRuntimeExports, z as Root2, V as Value, G as Trigger, I as Icon, C as ChevronDown, J as Portal, K as Content2, N as Viewport, W as Item, Y as ItemIndicator, Z as Check, _ as ItemText, $ as ScrollUpButton, a0 as ChevronUp, a1 as ScrollDownButton, a2 as Label, a3 as Separator, M as MapPin, P as Phone, a as Mail, m as motion, A as ArrowRight, L as Link } from "./vendor-CqeTsLdH.js";
import { c as cn, B as Button } from "./main-QrBkkgpc.js";
import "./preload-VwzZcMtp.js";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
const Select = Root2;
const SelectValue = Value;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = Trigger.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Content2,
  {
    ref,
    className: cn(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = Content2.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = Label.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
    ]
  }
));
SelectItem.displayName = Item.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = Separator.displayName;
function ContactPage() {
  const [formData, setFormData] = reactExports.useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Contact - Tidal Realty Services" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Get in touch with Tidal Realty Services. Real people, real answers. Call us at 832-930-4663 or visit us at 2417 Truxillo Street, Houston TX 77004." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "min-h-screen flex flex-col md:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-1/2 h-[400px] md:h-auto relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/tidal-realty-preview/assets/home-hero.png",
              alt: "Houston Skyline",
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1B2A4A]/90 to-transparent py-12 px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[500px] mx-auto space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-[#C9A84C] flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[15px] text-white", children: [
                "2417 Truxillo Street",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Houston, TX 77004"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-[#C9A84C] flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:832-930-4663", className: "text-[15px] text-white hover:text-[#C9A84C] transition-colors", children: "832-930-4663" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-[#C9A84C] flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@tidalpm.com", className: "text-[15px] text-white hover:text-[#C9A84C] transition-colors", children: "info@tidalpm.com" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-1/2 bg-white flex items-center p-8 md:p-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            className: "max-w-[550px] w-full mx-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] tracking-[0.3em] text-[#1B2A4A] uppercase font-semibold mb-6", children: "Get In Touch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[34px] md:text-[38px] text-[#1B2A4A] font-medium leading-[1.2] mb-6", children: "Let's Talk Real Estate." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] text-[#888888] leading-relaxed mb-10", children: "Whether you're ready to list, looking for management services, or just have questions — we're here. Real people, real answers." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "text",
                    placeholder: "Full Name",
                    value: formData.fullName,
                    onChange: (e) => setFormData({ ...formData, fullName: e.target.value }),
                    className: "border-0 border-b border-[#1B2A4A]/20 rounded-none px-0 py-3 text-[15px] focus:border-[#C9A84C] focus-visible:ring-0",
                    required: true
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "email",
                    placeholder: "Email Address",
                    value: formData.email,
                    onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                    className: "border-0 border-b border-[#1B2A4A]/20 rounded-none px-0 py-3 text-[15px] focus:border-[#C9A84C] focus-visible:ring-0",
                    required: true
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "tel",
                    placeholder: "Phone Number",
                    value: formData.phone,
                    onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
                    className: "border-0 border-b border-[#1B2A4A]/20 rounded-none px-0 py-3 text-[15px] focus:border-[#C9A84C] focus-visible:ring-0",
                    required: true
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => setFormData({ ...formData, interest: value }), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "border-0 border-b border-[#1B2A4A]/20 rounded-none px-0 py-3 text-[15px] focus:border-[#C9A84C] focus:ring-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "I'm interested in..." }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "flat-fee-sale", children: "Flat Fee Listing for Sale" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "flat-fee-rent", children: "Flat Fee Listing for Rent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "property-management", children: "Property Management" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "general", children: "General Inquiry" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    placeholder: "Message",
                    value: formData.message,
                    onChange: (e) => setFormData({ ...formData, message: e.target.value }),
                    className: "border-0 border-b border-[#1B2A4A]/20 rounded-none px-0 py-3 text-[15px] min-h-[100px] resize-none focus:border-[#C9A84C] focus-visible:ring-0",
                    required: true
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "submit",
                    size: "lg",
                    className: "w-full bg-[#1B2A4A] text-white hover:bg-[#1B2A4A]/90 px-8 py-6 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors font-semibold",
                    children: [
                      "Send Message ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#888888] text-center", children: "We typically respond within one business day." })
              ] })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-[#F0EDE6]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1200px] mx-auto px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] tracking-[0.3em] text-[#C9A84C] uppercase font-semibold", children: "Other Ways to Reach Us" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-12 w-12 text-[#C9A84C] stroke-[1.5]" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[20px] text-[#1B2A4A] font-bold mb-3", children: "832-930-4663" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-[#666666] leading-relaxed", children: "Prefer to talk? So do we. Give us a call during business hours." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-12 w-12 text-[#C9A84C] stroke-[1.5]" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[20px] text-[#1B2A4A] font-bold mb-3", children: "info@tidalpm.com" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-[#666666] leading-relaxed", children: "Send us a detailed message and we'll respond promptly." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-12 w-12 text-[#C9A84C] stroke-[1.5]" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[20px] text-[#1B2A4A] font-bold mb-3", children: "2417 Truxillo Street" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-[#666666] leading-relaxed", children: "Houston, Texas 77004. Located in the heart of the city." })
              ] })
            ] })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1400px] mx-auto px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] tracking-[0.3em] text-[#C9A84C] uppercase font-semibold", children: "Find Us" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-[400px] bg-[#F0EDE6] rounded-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "iframe",
              {
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.8234567890123!2d-95.3698028!3d29.7604267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf3b3b3b3b3b%3A0x1234567890abcdef!2s2417%20Truxillo%20St%2C%20Houston%2C%20TX%2077004!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
                width: "100%",
                height: "400",
                style: { border: 0 },
                allowFullScreen: true,
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade",
                title: "Tidal Realty Services Location"
              }
            ) })
          ]
        }
      ) }) }),
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
            className: "bg-white p-12 md:p-16 shadow-2xl max-w-[520px] w-full",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[36px] leading-[1.2] text-[#1B2A4A] mb-8", children: "We're here when it matters most." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] text-[#888888] leading-relaxed mb-6", children: "We invite you to take a quick tour of our site and see how we can serve your real estate needs." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] text-[#888888] leading-relaxed mb-10", children: "The world may be trending toward AI and automation — and we embrace smart technology. But when it comes to your real estate investments, we still believe in the power of personal service and the human touch. Give us a call." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "lg",
                  className: "bg-white border border-[#1B2A4A]/20 text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white px-8 py-6 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors",
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
export {
  ContactPage as default
};
