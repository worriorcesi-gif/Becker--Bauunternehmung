/* @ds-bundle: {"format":3,"namespace":"CohereDesignSystem_91d6d6","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"Chip","sourcePath":"components/chips/Chip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"26960bf95c73","components/buttons/Button.jsx":"47f34e5ef27f","components/cards/Card.jsx":"403f90dad68d","components/chips/Chip.jsx":"9b2e3e5e31af","components/forms/Input.jsx":"d6eefca64d24","ui_kits/website/editorial.jsx":"f5b0f6c4718e","ui_kits/website/home.jsx":"d22f5242b581","ui_kits/website/shell.jsx":"80b9ae4dd843"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CohereDesignSystem_91d6d6 = window.CohereDesignSystem_91d6d6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cohere Badge — compact status chip / mono label used inside agent-console
 * mockups and on product cards. Quiet by default; product-color accents only
 * where they mark real status.
 */
function Badge({
  tone = 'neutral',
  mono = false,
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'rgba(23,23,28,0.06)',
      color: 'var(--color-ink)',
      border: '1px solid transparent'
    },
    onDark: {
      background: 'rgba(255,255,255,0.10)',
      color: 'var(--color-white)',
      border: '1px solid rgba(255,255,255,0.16)'
    },
    green: {
      background: 'rgba(0,60,51,0.10)',
      color: 'var(--color-green-deep)',
      border: '1px solid transparent'
    },
    coral: {
      background: 'rgba(255,119,89,0.14)',
      color: '#b6411f',
      border: '1px solid transparent'
    },
    blue: {
      background: 'rgba(24,99,220,0.10)',
      color: 'var(--color-blue-action)',
      border: '1px solid transparent'
    }
  };
  const dotColor = {
    neutral: 'var(--color-slate)',
    onDark: '#6ee7b7',
    green: 'var(--color-green-deep)',
    coral: 'var(--color-coral)',
    blue: 'var(--color-blue-action)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
      fontSize: mono ? '12px' : '13px',
      fontWeight: 'var(--weight-regular)',
      letterSpacing: mono ? '0.28px' : 0,
      textTransform: mono ? 'uppercase' : 'none',
      lineHeight: 1.4,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      ...tones[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: dotColor[tone],
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cohere Button.
 * Primary = near-black (or white) pill CTA. Secondary = underlined text link.
 * Outline = transparent pill with a thin border (research/taxonomy filters).
 */
function Button({
  variant = 'primary',
  size = 'md',
  onDark = false,
  disabled = false,
  active = false,
  iconStart = null,
  iconEnd = null,
  href = null,
  children,
  style = {},
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontSize: size === 'sm' ? '14px' : '16px',
    fontWeight: 'var(--weight-medium)',
    lineHeight: 1.2,
    letterSpacing: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    border: '1px solid transparent',
    transition: 'background-color .18s ease, color .18s ease, border-color .18s ease, opacity .18s ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  };
  const pad = size === 'sm' ? {
    padding: '8px 18px'
  } : {
    padding: '12px 24px'
  };
  let variantStyle = {};
  if (variant === 'primary') {
    variantStyle = onDark ? {
      background: 'var(--color-white)',
      color: 'var(--color-near-black)',
      borderRadius: 'var(--radius-pill)',
      ...pad
    } : {
      background: 'var(--color-near-black)',
      color: 'var(--color-white)',
      borderRadius: 'var(--radius-pill)',
      ...pad
    };
  } else if (variant === 'secondary') {
    variantStyle = {
      background: 'transparent',
      color: onDark ? 'var(--color-white)' : 'var(--color-ink)',
      borderRadius: 0,
      padding: size === 'sm' ? '4px 0' : '6px 0',
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
      textDecorationThickness: '1px'
    };
  } else if (variant === 'outline') {
    const on = onDark;
    variantStyle = {
      background: active ? on ? 'var(--color-white)' : 'var(--color-near-black)' : 'transparent',
      color: active ? on ? 'var(--color-near-black)' : 'var(--color-white)' : on ? 'var(--color-white)' : 'var(--color-ink)',
      border: `1px solid ${on ? 'rgba(255,255,255,0.4)' : 'var(--color-near-black)'}`,
      borderRadius: 'var(--radius-xl)',
      padding: size === 'sm' ? '6px 16px' : '10px 22px'
    };
  }
  const Tag = href ? 'a' : 'button';
  const extra = href ? {
    href
  } : {
    type: 'button',
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, extra, {
    style: {
      ...base,
      ...variantStyle,
      ...style
    }
  }, rest), iconStart, children, iconEnd);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cohere Card — a flat, lightly-bordered or warm-stone container. Depth comes
 * from surface alternation and thin rules, never heavy drop shadows.
 *
 * surface: 'white' | 'stone' | 'dark' | 'green' | 'navy'
 */
function Card({
  surface = 'white',
  radius = 'md',
  bordered = true,
  pad = '24px',
  children,
  style = {},
  ...rest
}) {
  const surfaces = {
    white: {
      background: 'var(--color-white)',
      color: 'var(--color-ink)',
      border: bordered ? '1px solid var(--color-card-border)' : 'none'
    },
    stone: {
      background: 'var(--color-stone)',
      color: 'var(--color-ink)',
      border: 'none'
    },
    dark: {
      background: 'var(--color-near-black)',
      color: 'var(--color-white)',
      border: bordered ? '1px solid rgba(255,255,255,0.10)' : 'none'
    },
    green: {
      background: 'var(--color-green-deep)',
      color: 'var(--color-white)',
      border: 'none'
    },
    navy: {
      background: 'var(--color-navy-deep)',
      color: 'var(--color-white)',
      border: 'none'
    }
  };
  const radii = {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-body)',
      borderRadius: radii[radius] || radius,
      padding: pad,
      boxSizing: 'border-box',
      ...surfaces[surface],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/chips/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cohere blog/taxonomy chip. Oversized coral category control used on the blog
 * index — active chips invert to coral fill, inactive use coral outline on a
 * pale fill. A neutral tone covers smaller article labels.
 */
function Chip({
  tone = 'coral',
  active = false,
  size = 'md',
  onClick = null,
  children,
  style = {},
  ...rest
}) {
  const sizing = size === 'lg' ? {
    fontSize: '18px',
    padding: '10px 22px'
  } : {
    fontSize: '14px',
    padding: '7px 16px'
  };
  const tones = {
    coral: active ? {
      background: 'var(--color-coral)',
      color: 'var(--color-near-black)',
      border: '1px solid var(--color-coral)'
    } : {
      background: 'transparent',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-coral-soft)'
    },
    neutral: active ? {
      background: 'var(--color-near-black)',
      color: 'var(--color-white)',
      border: '1px solid var(--color-near-black)'
    } : {
      background: 'transparent',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-hairline)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 1.3,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      borderRadius: 'var(--radius-xl)',
      cursor: 'pointer',
      transition: 'background-color .18s ease, color .18s ease, border-color .18s ease',
      ...sizing,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chips/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cohere text input. Rectangular field with a thin gray border, compact label,
 * and a violet focus border. Used in contact-form cards and footer newsletter.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  id,
  as = 'input',
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || React.useId();
  const Field = as;
  const borderColor = error ? 'var(--color-error)' : focused ? 'var(--color-focus-violet)' : 'var(--color-hairline)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--color-ink)',
      lineHeight: 1.4
    }
  }, label), /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      lineHeight: 1.5,
      color: 'var(--color-ink)',
      background: 'var(--color-white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-xs)',
      padding: as === 'textarea' ? '12px 16px' : '12px 16px',
      outline: 'none',
      boxShadow: focused && !error ? '0 0 0 3px rgba(155,96,170,0.14)' : 'none',
      transition: 'border-color .15s ease, box-shadow .15s ease',
      width: '100%',
      boxSizing: 'border-box',
      resize: as === 'textarea' ? 'vertical' : undefined,
      minHeight: as === 'textarea' ? '96px' : undefined,
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      lineHeight: 1.4,
      color: error ? 'var(--color-error)' : 'var(--color-slate-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/editorial.jsx
try { (() => {
/* global React, Icon */
// Cohere marketing — editorial & contact surfaces.
const DSE = window.CohereDesignSystem_91d6d6;
const {
  useState: useStateE
} = React;
function BlogPage() {
  const {
    Chip,
    Badge
  } = DSE;
  const cats = ['All', 'Generative AI', 'Research', 'Product', 'Enterprise', 'Company'];
  const [active, setActive] = useStateE('All');
  const posts = [['Generative AI', 'Introducing Command A: enterprise performance at lower cost', 'Engineering', 'Jun 12, 2026'], ['Research', 'Grounded generation: reducing hallucination with verifiable RAG', 'Research', 'Jun 4, 2026'], ['Product', 'North is now generally available for regulated industries', 'Product', 'May 28, 2026'], ['Enterprise', 'How financial firms deploy private AI without moving data', 'Customers', 'May 19, 2026'], ['Research', 'Multilingual embeddings: one model, 100+ languages', 'Research', 'May 9, 2026'], ['Company', 'Scaling our security and compliance program', 'Company', 'Apr 30, 2026']];
  const shown = active === 'All' ? posts : posts.filter(p => p[0] === active);
  const gradients = {
    'Generative AI': 'linear-gradient(140deg,#ff9c7a,#d9532f)',
    'Research': 'linear-gradient(140deg,#5b8def,#1863dc)',
    'Product': 'linear-gradient(140deg,#0a3f36,#00120e)',
    'Enterprise': 'linear-gradient(140deg,#17171c,#3a3a44)',
    'Company': 'linear-gradient(140deg,#ffad9b,#ff7759)'
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '64px 28px 96px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 72,
      fontWeight: 400,
      lineHeight: 1.0,
      letterSpacing: '-1.44px',
      color: 'var(--color-near-black)',
      marginBottom: 36
    }
  }, "Blog"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: 48
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    tone: "coral",
    size: "lg",
    active: active === c,
    onClick: () => setActive(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28
    }
  }, shown.map(([cat, title, author, date]) => /*#__PURE__*/React.createElement("article", {
    key: title,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-sm)',
      height: 200,
      background: gradients[cat],
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "coral"
  }, cat)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 22,
      fontWeight: 400,
      lineHeight: 1.25,
      letterSpacing: '-0.2px',
      color: 'var(--color-ink)',
      margin: '0 0 14px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--color-slate-muted)'
    }
  }, author, " \xB7 ", date)))));
}
function ResearchPage() {
  const {
    Button
  } = DSE;
  const filters = ['All', 'LLMs', 'Retrieval', 'Safety', 'Multilingual', 'Efficiency', 'Agents'];
  const [active, setActive] = useStateE('All');
  const papers = [['Verifiable Retrieval-Augmented Generation at Scale', ['Retrieval', 'LLMs'], 'Jun 2026'], ['Compression-Aware Multilingual Embeddings', ['Multilingual', 'Efficiency'], 'May 2026'], ['Tool-Use Planning for Long-Horizon Agents', ['Agents'], 'Apr 2026'], ['Measuring and Mitigating Hallucination in Enterprise Settings', ['Safety', 'LLMs'], 'Mar 2026'], ['Low-Latency Reranking with Cross-Encoders', ['Retrieval', 'Efficiency'], 'Feb 2026']];
  const shown = active === 'All' ? papers : papers.filter(p => p[1].includes(active));
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '64px 28px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '0.28px',
      textTransform: 'uppercase',
      color: 'var(--color-slate)',
      marginBottom: 16
    }
  }, "Cohere For AI"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 72,
      fontWeight: 400,
      lineHeight: 1.0,
      letterSpacing: '-1.44px',
      color: 'var(--color-near-black)',
      marginBottom: 36
    }
  }, "Research"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-xs)',
      padding: '12px 16px',
      maxWidth: 420,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    color: "var(--color-slate-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search publications",
    style: {
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      width: '100%',
      color: 'var(--color-ink)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setActive(f),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      padding: '7px 16px',
      borderRadius: 'var(--radius-xl)',
      border: `1px solid ${active === f ? 'var(--color-near-black)' : 'var(--color-hairline)'}`,
      background: active === f ? 'var(--color-near-black)' : 'transparent',
      color: active === f ? '#fff' : 'var(--color-ink)',
      cursor: 'pointer'
    }
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--color-hairline)'
    }
  }, shown.map(([title, topics, date]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gap: 24,
      alignItems: 'center',
      padding: '28px 0',
      borderBottom: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      color: 'var(--color-ink)',
      textDecoration: 'none',
      lineHeight: 1.3
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, topics.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      padding: '4px 12px',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--color-hairline)',
      color: 'var(--color-slate)'
    }
  }, t))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--color-slate-muted)',
      whiteSpace: 'nowrap'
    }
  }, date)))));
}
function ContactPage() {
  const {
    Input,
    Button
  } = DSE;
  const [sent, setSent] = useStateE(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--color-green-deep)',
      padding: '80px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '0.28px',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.6)',
      marginBottom: 16
    }
  }, "Talk to sales"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 48,
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: '-0.48px',
      margin: '0 0 20px'
    }
  }, "Let's build your AI deployment"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.75)',
      maxWidth: 420
    }
  }, "Tell us about your use case and our team will get you set up with a secure, private deployment.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 36
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 8px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: 'rgba(0,60,51,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 24,
    color: "var(--color-green-deep)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      fontWeight: 400,
      color: 'var(--color-ink)',
      margin: '0 0 8px'
    }
  }, "Thanks \u2014 we'll be in touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--color-slate)'
    }
  }, "Our team typically responds within one business day.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "Jordan"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    placeholder: "Rivera"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "you@company.com",
    type: "email"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Acme Inc."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "How can we help?",
    as: "textarea",
    placeholder: "Tell us about your use case\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Submit"))))));
}
Object.assign(window, {
  BlogPage,
  ResearchPage,
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/editorial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home.jsx
try { (() => {
/* global React, Icon */
// Cohere marketing — Home page surfaces.
const DS = window.CohereDesignSystem_91d6d6;
function AgentConsoleCard() {
  const {
    Badge
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-near-black)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      color: '#fff',
      boxShadow: 'var(--elev-media)',
      border: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: 'var(--color-green-deep)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bot",
    size: 16,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14
    }
  }, "Research Agent"), /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    dot: true
  }, "Running")), /*#__PURE__*/React.createElement(Icon, {
    name: "more-horizontal",
    size: 18,
    color: "rgba(255,255,255,0.6)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    mono: true
  }, "Salesforce"), /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    mono: true
  }, "Slack"), /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    mono: true
  }, "Notion"), /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    mono: true
  }, "+4")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.10)',
      borderRadius: 12,
      padding: '12px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,0.85)',
      marginBottom: 12
    }
  }, "Summarize Q3 enterprise pipeline and flag at-risk accounts."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Pulled 142 opportunities from Salesforce', 'Cross-referenced support tickets in Slack', 'Drafted summary with 6 at-risk accounts'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,0.7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'rgba(110,231,183,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    color: "#6ee7b7"
  })), t))));
}
function TrustStrip() {
  const logos = ['Oracle', 'Fujitsu', 'Notion', 'Bamboo', 'RBC', 'Dell', 'McKinsey'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 28px',
      borderTop: '1px solid var(--color-card-border)',
      borderBottom: '1px solid var(--color-card-border)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--color-slate-muted)',
      marginBottom: 40
    }
  }, "Trusted by enterprises building secure AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 56,
      flexWrap: 'wrap',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: '-0.5px',
      color: '#b9b9c2'
    }
  }, l))));
}
function CapabilityRow() {
  const {
    Button
  } = DS;
  const items = [['layers', 'Retrieval-augmented generation', 'Ground every response in your own data with built-in RAG and verifiable citations.'], ['shield', 'Private by default', 'Deploy in your own cloud or on-prem. Your data never trains our models.'], ['workflow', 'Multi-step agents', 'Connect tools and APIs so agents can plan, act, and complete real work.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 28px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 40
    }
  }, items.map(([icon, title, body]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      paddingTop: 24,
      borderTop: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 28,
    color: "var(--color-near-black)",
    strokeWidth: 1.25
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.3,
      margin: '20px 0 10px',
      color: 'var(--color-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--color-slate)',
      marginBottom: 16
    }
  }, body), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Learn more \u2192")))));
}
function DarkFeatureBand() {
  const {
    Button,
    Badge
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-green-deep)',
      color: '#fff',
      padding: '96px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    mono: true
  }, "North"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 48,
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: '-0.48px',
      margin: '20px 0 16px'
    }
  }, "A secure AI workspace for your whole company"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.75)',
      marginBottom: 28,
      maxWidth: 480
    }
  }, "North brings agents, search, and automation into one private platform \u2014 deployed wherever your data lives."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onDark: true
  }, "Request access"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onDark: true
  }, "See how it works \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.14)',
      borderRadius: 'var(--radius-lg)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement(AgentConsoleCard, null))));
}
function ProductCards() {
  const {
    Card,
    Button,
    Badge
  } = DS;
  const products = [['Command A', 'Most performant', ['Enterprise generative model', '256K context window', 'Tool use & RAG built in']], ['Embed 4', 'Best retrieval', ['Multimodal embeddings', '100+ languages', 'Compression-aware']], ['Rerank 3.5', 'Sharpest search', ['Relevance reranking', 'Drop-in API', 'Sub-100ms latency']]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 28px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 48,
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: '-0.48px',
      marginBottom: 48,
      maxWidth: 640
    }
  }, "Models built for the enterprise"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, products.map(([name, tag, feats]) => /*#__PURE__*/React.createElement(Card, {
    key: name,
    surface: "stone",
    radius: "sm",
    pad: "28px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.28px',
      textTransform: 'uppercase',
      color: 'var(--color-slate)',
      marginBottom: 16
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.2,
      marginBottom: 20,
      color: 'var(--color-ink)'
    }
  }, tag), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--color-hairline)',
      margin: '0 0 20px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 24
    }
  }, feats.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--color-ink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--color-green-deep)"
  }), " ", f))), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Explore \u2192")))));
}
function CtaBand({
  go
}) {
  const {
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 28px 110px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      background: 'var(--color-blue-wash)',
      borderRadius: 'var(--radius-lg)',
      padding: '72px 56px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 400,
      lineHeight: 1.05,
      letterSpacing: '-0.88px',
      color: 'var(--color-ink)'
    }
  }, "Ready to build with secure AI?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contact')
  }, "Request a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Try the Playground \u2192"))));
}
function HomePage({
  go
}) {
  const {
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 28px 64px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '0.28px',
      textTransform: 'uppercase',
      color: 'var(--color-slate)',
      marginBottom: 24
    }
  }, "The enterprise AI company"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 88,
      fontWeight: 400,
      lineHeight: 1.0,
      letterSpacing: '-1.92px',
      color: 'var(--color-near-black)',
      margin: 0
    }
  }, "Build AI that works for your business"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      lineHeight: 1.5,
      color: 'var(--color-slate)',
      maxWidth: 640,
      margin: '28px auto 0'
    }
  }, "Secure, private, and grounded models for enterprise search, agents, and automation \u2014 deployed wherever your data lives."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contact')
  }, "Request a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Explore products \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '64px auto 0',
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--elev-media)',
      background: 'linear-gradient(135deg, #0a3f36 0%, #021a16 60%, #00120e 100%)',
      padding: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(AgentConsoleCard, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--elev-media)',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #ff9c7a 0%, #ff7759 45%, #d9532f 100%)',
      minHeight: 320,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 18,
      left: 20,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.28px',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.85)'
    }
  }, "Abstract media"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 500,
      lineHeight: 1.1,
      letterSpacing: '-0.4px'
    }
  }, "Customer story \u2192")))), /*#__PURE__*/React.createElement(TrustStrip, null), /*#__PURE__*/React.createElement(CapabilityRow, null), /*#__PURE__*/React.createElement(ProductCards, null), /*#__PURE__*/React.createElement(DarkFeatureBand, null), /*#__PURE__*/React.createElement(CtaBand, {
    go: go
  }));
}
Object.assign(window, {
  HomePage,
  AgentConsoleCard,
  TrustStrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shell.jsx
try { (() => {
/* global React */
// Cohere marketing — shared shell: AnnouncementBar, TopNav, Footer.
function Icon({
  name,
  size = 18,
  color = 'currentColor',
  strokeWidth = 1.5,
  style = {}
}) {
  // Lucide replaces <i data-lucide> with an <svg> on lucide.createIcons().
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      display: 'inline-flex',
      ...style
    },
    "data-stroke": strokeWidth
  });
}
function AnnouncementBar({
  onClose,
  show
}) {
  if (!show) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 36,
      background: 'var(--color-black)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.9
    }
  }, "Introducing Command A \u2014 our most performant model yet."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#fff',
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      fontSize: 13
    }
  }, "Learn more"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      opacity: 0.7,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16,
    color: "#fff"
  })));
}
function TopNav({
  route,
  go
}) {
  const links = [['products', 'Products'], ['research', 'Research'], ['blog', 'Blog'], ['safety', 'Safety'], ['pricing', 'Pricing']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 68,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--color-card-border)',
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      padding: '0 28px',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.svg",
    alt: "cohere",
    style: {
      height: 24
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      margin: '0 auto'
    }
  }, links.map(([key, label]) => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(key === 'blog' ? 'blog' : key === 'research' ? 'research' : 'home');
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--color-ink)',
      padding: '8px 14px',
      borderRadius: 8,
      textDecoration: 'none',
      background: route === key ? 'rgba(23,23,28,0.05)' : 'transparent'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--color-ink)',
      textDecoration: 'none'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('contact');
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      color: '#fff',
      background: 'var(--color-near-black)',
      padding: '10px 20px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none'
    }
  }, "Request a demo")));
}
function Footer({
  go
}) {
  const cols = [['Products', ['Command', 'Embed', 'Rerank', 'North', 'Playground']], ['Solutions', ['Financial services', 'Healthcare', 'Customer support', 'Security']], ['Company', ['About', 'Careers', 'Research', 'Blog', 'Contact']], ['Resources', ['Docs', 'API reference', 'Cookbooks', 'Status']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-near-black)',
      color: '#fff',
      padding: '64px 28px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 40,
      flexWrap: 'wrap',
      paddingBottom: 48,
      borderBottom: '1px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '0.28px',
      textTransform: 'uppercase',
      color: 'var(--color-coral)',
      marginBottom: 14
    }
  }, "AI moves fast"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 32,
      lineHeight: 1.15,
      letterSpacing: '-0.32px'
    }
  }, "Stay in the loop"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--color-slate-muted)',
      marginTop: 12
    }
  }, "Get the latest research, product news, and engineering deep-dives. No spam.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 0,
      minWidth: 320,
      flex: 1,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Enter your email",
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      borderBottom: '1px solid rgba(255,255,255,0.3)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      padding: '10px 4px',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Subscribe",
    style: {
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      padding: 10,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 22,
    color: "#fff"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 32,
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-white.svg",
    alt: "cohere",
    style: {
      height: 24
    }
  })), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: '#fff',
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (it === 'Blog') go('blog');
      if (it === 'Research') go('research');
      if (it === 'Contact') go('contact');
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--color-slate-muted)',
      textDecoration: 'none'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--color-slate-muted)'
    }
  }, "\xA9 2026 Cohere Inc. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, ['Privacy', 'Terms', 'Security'].map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--color-slate-muted)',
      textDecoration: 'none'
    }
  }, x))))));
}
Object.assign(window, {
  Icon,
  AnnouncementBar,
  TopNav,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

})();
