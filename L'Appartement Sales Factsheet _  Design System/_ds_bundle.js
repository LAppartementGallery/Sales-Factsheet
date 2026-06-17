/* @ds-bundle: {"format":3,"namespace":"LAdvisoryDesignSystem_294ff6","components":[],"sourceHashes":{"ui_kits/presentation/PresentationApp.jsx":"2aa2e4da122e","ui_kits/presentation/components/Lockup.jsx":"cd668c15a380","ui_kits/presentation/components/Logo.jsx":"f0fb805461d7","ui_kits/presentation/components/Page.jsx":"28274c1eeaf7","ui_kits/presentation/data/logos.js":"54b2f4806a48","ui_kits/presentation/data/sample.js":"3e4897a411a6","ui_kits/presentation/pages/Biography.jsx":"de44f06a7ab4","ui_kits/presentation/pages/Closeup.jsx":"1e9cd04df452","ui_kits/presentation/pages/Cover.jsx":"007ca4c27759","ui_kits/presentation/pages/Detail.jsx":"142bbd92af2c","ui_kits/presentation/pages/End.jsx":"1425a6d1c029","ui_kits/presentation/pages/Notes.jsx":"8511e32b40be","ui_kits/presentation/pages/Quote.jsx":"05e9f5532dfb","ui_kits/presentation/pages/Work.jsx":"f462388b8eab"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LAdvisoryDesignSystem_294ff6 = window.LAdvisoryDesignSystem_294ff6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/presentation/PresentationApp.jsx
try { (() => {
// PresentationApp — assembles the canonical sequence from a data object.
function PresentationApp({
  data
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "la-deck"
  }, /*#__PURE__*/React.createElement(Cover, {
    data: data
  }), /*#__PURE__*/React.createElement(Biography, {
    data: data
  }), /*#__PURE__*/React.createElement(Quote, {
    data: data
  }), data.works.flatMap((work, i) => {
    const key = `w${i}`;
    return [/*#__PURE__*/React.createElement(Work, {
      key: `${key}-work`,
      data: data,
      work: work
    }), /*#__PURE__*/React.createElement(Closeup, {
      key: `${key}-closeup`,
      data: data,
      work: work
    }), /*#__PURE__*/React.createElement(Detail, {
      key: `${key}-detail`,
      work: work
    }), work.notes && work.notes.length ? /*#__PURE__*/React.createElement(Notes, {
      key: `${key}-notes`,
      work: work
    }) : null].filter(Boolean);
  }), /*#__PURE__*/React.createElement(End, null));
}
window.PresentationApp = PresentationApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/PresentationApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/presentation/components/Lockup.jsx
try { (() => {
// Lockup — "Jean Arp" with first-name light + family-name bold.
// Used on cover, biography, and fiche; each context overrides the size.
function Lockup({
  first,
  last,
  sizePt = 26,
  inline = false,
  style
}) {
  if (inline) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        ...style,
        letterSpacing: "0.02em",
        textTransform: "uppercase"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 300
      }
    }, first), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, last));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1,
      letterSpacing: "0.01em",
      textTransform: "uppercase",
      color: "#010101",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: `${sizePt}pt`
    }
  }, first), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: `${sizePt}pt`,
      marginTop: "0.5mm"
    }
  }, last));
}
window.Lockup = Lockup;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/components/Lockup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/presentation/components/Logo.jsx
try { (() => {
// Logo — inlines the SVG so `color` becomes the path fill (via currentColor).
// Width is in mm to match print spec. Aspect ratio comes from the natural viewBox.

function Logo({
  kind,
  color = "#010101",
  widthMm = 40,
  style
}) {
  const aspect = window.LA_LOGO_ASPECTS[kind];
  const svg = window.LA_LOGOS[kind];
  // Inject width/height onto the root <svg> so it scales to its container.
  const sized = svg.replace(/<svg\b/, '<svg style="width:100%;height:100%;display:block" preserveAspectRatio="xMidYMid meet"');
  return /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": kind === "ladvisory" ? "L'Advisory" : "L'Appartement",
    style: {
      width: `${widthMm}mm`,
      height: `${widthMm / aspect}mm`,
      color: color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: sized
    }
  });
}
window.Logo = Logo;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/components/Logo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/presentation/components/Page.jsx
try { (() => {
// Page — an A4 portrait frame at real (210 × 297 mm) proportions.
// Renders a white sheet with overflow:hidden; children position themselves.
function Page({
  background = "#ffffff",
  children,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "la-page",
    "data-screen-label": label,
    style: {
      width: "210mm",
      height: "297mm",
      position: "relative",
      overflow: "hidden",
      background,
      boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)",
      ...style
    }
  }, children);
}
window.Page = Page;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/components/Page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/presentation/data/logos.js
try { (() => {
// Inline SVG strings — fill set to currentColor so the parent sets the color.
window.LA_LOGOS = {
  ladvisory: "<svg id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 539.17 182.52\" width=\"539.17\" height=\"182.52\">\n  \n  \n  <g>\n    <path fill=\"currentColor\" d=\"M218.58,172.54c0-6.22,3.55-9.97,8.53-9.97,2.55,0,4.23,1.2,5.31,2.34l-1.41,1.56c-.91-.97-2.05-1.73-3.9-1.73-3.6,0-5.95,2.96-5.95,7.74s2.14,7.86,5.89,7.86c1.35,0,2.61-.41,3.31-1.12v-5.02h-3.81v-2.02h6.1v8.09c-1.2,1.23-3.26,2.23-5.75,2.23-4.84,0-8.33-3.7-8.33-9.98Z\"></path>\n    <path fill=\"currentColor\" d=\"M237.97,162.92h11.91v2.08h-9.45v6.01h7.98v2.08h-7.98v6.98h9.74v2.08h-12.2v-19.24Z\"></path>\n    <path fill=\"currentColor\" d=\"M254.63,162.92h2.7l6.16,12.08,1.85,3.99h.05c-.09-1.9-.32-4.08-.32-6.1v-9.97h2.35v19.24h-2.7l-6.16-12.08-1.85-3.99h-.06c.09,1.97.32,4.02.32,6.01v10.06h-2.35v-19.24Z\"></path>\n    <path fill=\"currentColor\" d=\"M273.18,162.92h11.91v2.08h-9.45v6.01h7.98v2.08h-7.98v6.98h9.74v2.08h-12.2v-19.24ZM275.93,158.34l1.38-1.64,4.16,3.79-1.08,1.23-4.46-3.37Z\"></path>\n    <path fill=\"currentColor\" d=\"M288.67,162.92h2.64l3.08,10.38c.68,2.26,1.14,4.11,1.85,6.34h.12c.7-2.23,1.2-4.08,1.85-6.34l3.08-10.38h2.53l-6.1,19.24h-2.88l-6.16-19.24Z\"></path>\n    <path fill=\"currentColor\" d=\"M308.39,162.92h11.91v2.08h-9.45v6.01h7.98v2.08h-7.98v6.98h9.74v2.08h-12.2v-19.24Z\"></path>\n  </g>\n  <g>\n    <g>\n      <path fill=\"currentColor\" d=\"M213.97,128.87c-5.46,2.6-10.66,4.94-15.73,7.8v-11.7c-4.29,6.11-11.57,10.27-18.59,10.27-15.21,0-24.83-15.6-24.83-29.9,0-16.38,11.83-31.07,28.73-31.07,5.2,0,10.4,2.08,14.69,5.85v-38.87c0-3.38-.91-5.98-3.25-5.98-.78,0-1.82.39-2.99,1.17l-.78-1.04c5.07-2.47,11.05-5.46,15.73-9.36v96.98c0,3.9.78,5.85,3.12,5.85,1.04,0,2.08-.39,3.38-.91l.52.91ZM183.16,130.95c5.46.13,11.31-4.29,15.08-8.84v-28.21c0-9.88-8.71-17.29-17.68-17.29-14.17,0-17.68,16.25-17.68,27.17,0,12.87,5.72,26.78,20.28,27.17Z\"></path>\n      <path fill=\"currentColor\" d=\"M267.16,82.6c1.17-3.12,0-5.2-3.64-5.59v-1.3c2.21.13,4.16.26,6.76.26,2.21,0,4.55-.13,6.63-.26v1.3c-3.9.39-6.63,3.25-8.58,8.71-1.69,4.29-3.38,8.58-5.07,12.87l-10.14,25.61c-1.69,4.29-3.38,8.58-5.07,12.87l-21.84-50.18c-2.21-5.98-5.59-9.35-9.62-9.87v-1.3c3.51.26,6.89.39,10.92.39,3.64,0,7.66-.13,10.79-.39v1.3c-3.51.39-5.59,2.47-4.03,5.72,5.07,11.83,10.01,23.14,14.95,34.97.78,1.69,1.56,2.47,2.08,2.47.91,0,1.56-1.17,2.34-3.12l13.52-34.45Z\"></path>\n      <path fill=\"currentColor\" d=\"M292.39,133.81c-4.16,0-8.58.26-12.74.52v-1.3c4.68-.26,8.32-2.47,8.32-8.19v-36.26c0-3.51-.91-5.72-3.25-5.72-.78,0-1.82.26-2.99.78l-.65-1.17c5.07-2.34,10.92-5.72,15.6-9.23v51.61c0,5.72,3.51,7.93,8.32,8.19v1.3c-4.29-.26-8.58-.52-12.61-.52Z\"></path>\n      <path fill=\"currentColor\" d=\"M337.51,99.37c9.1,2.73,18.59,6.24,18.85,17.03-.26,11.31-6.76,18.85-21.58,18.85-7.02,0-14.69-1.56-20.67-5.72.13-1.69.13-3.25.13-4.68,0-2.73-.13-5.59-.26-8.32l.78-.39c6.11,9.75,14.81,15.73,23.92,15.73,5.2,0,12.22-2.86,12.48-8.84.39-8.97-9.75-12.48-18.07-15.08-9.23-2.99-18.33-5.85-18.33-16.5,0-11.57,10.66-16.9,20.67-17.16,5.07,0,10.53,1.56,15.21,3.51,0,2.73.26,5.72.65,8.45l-.13.13c-5.85-5.72-12.48-9.1-18.71-9.1-4.94,0-11.96,3.9-11.96,9.1.26,7.66,8.71,10.27,17.03,13Z\"></path>\n      <path fill=\"currentColor\" d=\"M423.31,104.18c0,16.64-13.13,31.2-29.9,31.2s-28.73-13.78-28.73-30.03,13.13-31.07,29.9-31.07,28.73,13.78,28.73,29.9ZM414.22,108.08c0-12.22-7.54-31.72-22.36-31.72-12.61,0-18.07,14.95-18.07,25.35,0,11.96,7.54,31.72,22.36,31.72,12.61,0,18.07-15.21,18.07-25.34Z\"></path>\n      <path fill=\"currentColor\" d=\"M471.95,82.21c0,2.99-2.2,5.46-5.07,5.46-2.47,0-5.07-2.34-5.33-5.2-.13-2.21-2.47-3.64-5.46-3.64-4.68,0-11.57,4.03-11.57,15.08v30.94c0,5.72,3.64,7.93,8.32,8.19v1.3c-4.42-.26-8.32-.52-12.61-.52s-8.71.26-12.87.52v-1.3c4.81-.26,8.45-2.47,8.45-8.19v-36.14c0-4.55-2.08-7.28-6.5-5.07l-.65-1.04c5.2-2.6,10.79-5.33,15.86-9.23v10.53c4.16-5.33,11.44-9.88,17.55-9.88,4.16,0,9.87,3.38,9.87,8.19Z\"></path>\n      <path fill=\"currentColor\" d=\"M505.11,150.58c-2.08,5.46-5.07,12.61-11.96,12.87-5.59.26-13-2.47-13.39-9.23-.13-2.86,1.3-6.11,3.9-6.37,3.77-.39,6.24.91,6.24,5.2,0,2.73-1.69,2.73-1.69,4.68,0,1.56,1.56,3.51,4.81,3.51,5.98,0,8.45-7.28,10.14-11.57,1.95-5.07,3.9-10.53,5.98-15.47l-20.8-47.32c-2.6-5.98-5.59-9.35-9.75-9.87v-1.3c3.9.13,7.8.39,11.7.39,3.38,0,7.15-.13,10.01-.39v1.3c-3.38.26-5.46,2.47-4.03,5.72,5.2,12.09,9.62,21.97,15.08,34.45.78,1.69,1.43,2.47,2.21,2.47.91,0,1.82-1.3,2.6-3.12,4.42-11.18,8.71-22.36,13.13-33.67,1.3-3.25-.26-5.46-3.64-5.85v-1.3c2.34.26,4.81.39,7.15.39,2.21,0,4.42-.13,6.37-.26v1.17c-3.77.39-6.63,3.25-8.58,8.71l-25.48,64.86Z\"></path>\n    </g>\n    <g>\n      <path fill=\"currentColor\" d=\"M0,134.3V8.67h9.28v125.09c3.22-.27,6.3-.49,9.37-.8,6.97-.72,13.48-2.95,19.73-6.05,3.42-1.69,6.96-3.15,10.44-4.7.36-.16.73-.29,1.19-.47v12.58H0Z\"></path>\n      <path fill=\"currentColor\" d=\"M50.54,40.93c5.81-4.83,7.52-11.26,7.74-18.5-.28.1-.45.12-.56.2-2.43,1.72-4.93,1.34-6.71-1.04-2.14-2.86-2.38-7.55-.53-10.59,1.11-1.83,2.7-2.87,4.89-2.81,2.22.06,3.68,1.26,4.6,3.2,1.38,2.93,1.63,6.05,1.48,9.22-.28,5.93-1.86,11.44-5.72,16.07-1.22,1.46-2.85,2.58-4.31,3.83-.24.2-.58.28-.87.41Z\"></path>\n      <path fill=\"currentColor\" d=\"M139.44,134.3h-9.28v-43.06c-.56-.03-1.03-.09-1.49-.09-8.87,0-17.75.02-26.62-.03-1.1,0-1.58.38-2.02,1.35-6.22,13.76-11.26,26.49-14.64,41.22-.04.18-.1.36-.16.6h-9.27c19.87-42.14,39.69-84.17,59.51-126.2.13.03,2.76.06,2.89.1.36,42.01.72,84.01,1.09,126.1ZM130.25,27.33c-.1-.02-.19-.04-.29-.07-9.58,20.42-19.15,40.84-28.85,61.52.8,0,1.31,0,1.82,0,8.48,0,16.97-.04,25.45.03,1.46.01,1.85-.36,1.84-1.84-.04-19.43,0-38.85.02-58.28,0-.46,0-.91,0-1.37Z\"></path>\n    </g>\n  </g>\n  <path fill=\"currentColor\" d=\"M298.11,53.07c0,3.76-2.6,6.61-5.72,6.61s-5.85-3.01-5.85-6.76,2.73-6.91,5.98-6.91,5.59,3.16,5.59,7.06Z\"></path>\n</svg>",
  lappartement: "<svg id=\"Calque_1\" data-name=\"Calque 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 514.03 77.57\" width=\"514.03\" height=\"77.57\">\n  \n  <path fill=\"currentColor\" d=\"M334.55,1.94c-.33,25.26.21,50.45,3.72,75.63h-4.54V.29c.84,0,1.68,0,2.53,0,.89,0,1.77.03,2.66-.01.57-.03.86.13,1.06.73,3.47,10.57,6.97,21.14,10.47,31.7,1.65,4.97,3.3,9.94,4.95,14.9.05.15.11.29.24.62.73-2.33,1.4-4.49,2.07-6.66,4.16-13.51,8.33-27.01,12.47-40.52.19-.61.44-.81,1.08-.79,1.73.05,3.47.02,5.26.02v77.23h-5.64V2.28c-.07-.01-.14-.03-.2-.04-5.71,18.79-11.42,37.58-17.13,56.36-.05.01-.11.02-.16.03-6.28-18.9-12.56-37.79-18.83-56.69Z\"></path>\n  <path fill=\"currentColor\" d=\"M227.93,37.37c2.38.45,4.81.71,7.13,1.37,5.51,1.57,8.93,5.26,10.11,10.85.63,2.99,1.03,6.03,1.34,9.07.59,5.63,1.34,11.22,3.01,16.66.22.73.53,1.43.84,2.26-1.98,0-3.91.02-5.83-.03-.22,0-.54-.37-.62-.62-.54-1.88-1.2-3.74-1.51-5.66-.71-4.46-1.23-8.96-1.86-13.44-.51-3.63-.94-7.28-1.67-10.86-.94-4.58-3.94-7.36-8.43-8.47-3.85-.96-7.8-.57-11.8-.68v39.71h-5.74V.25c1.12,0,2.22,0,3.32,0,3.21.02,6.42-.03,9.62.07,4.64.15,9.19.83,13.36,3.05,5.01,2.67,7.64,6.93,8.31,12.48.41,3.39.23,6.73-1.01,9.95-1.81,4.72-5.31,7.76-9.9,9.66-2.65,1.1-5.43,1.65-8.27,1.97-.15.02-.31.04-.46.07l.04-.13ZM218.69.89v36.76c3.36-.24,6.66-.25,9.89-.75,5.84-.91,9.96-4.2,11.98-9.81,1.97-5.48,1.94-11.04.03-16.54-1.31-3.79-3.9-6.49-7.56-8.13-1.88-.85-3.86-1.41-5.91-1.49-2.81-.11-5.62-.03-8.44-.03Z\"></path>\n  <path fill=\"currentColor\" d=\"M95.23.29c1.08,0,2.1,0,3.12,0,3.9,0,7.8-.06,11.7.04,5.05.13,9.88,1.17,14.17,3.98,5.62,3.68,8.22,8.96,8.15,15.63-.09,8.93-5.76,15.37-14.44,17.99-3.31,1-6.72,1.27-10.16,1.29-2.24.01-4.48,0-6.8,0v38.29h-5.74V.29ZM100.97,38.62c3.24,0,6.41.21,9.53-.04,6.34-.52,11.07-3.68,13.99-9.35,2.2-4.27,2.52-8.84,1.87-13.54-1.16-8.45-7.8-14.55-16.36-14.87-2.82-.11-5.64-.06-8.46-.09-.19,0-.37.04-.58.07v37.83Z\"></path>\n  <path fill=\"currentColor\" d=\"M145.26,39.22v38.3h-5.7V.34c.28-.02.52-.04.76-.04,4.7,0,9.41-.07,14.11.04,5.13.12,10.03,1.22,14.37,4.13,5.47,3.68,7.98,8.9,7.92,15.42-.06,5.42-2.02,10.01-6.14,13.6-3.21,2.79-7.01,4.34-11.15,5.13-4,.76-8.04.58-12.08.61-.66,0-1.32,0-2.08,0ZM145.28,38.62c3.24,0,6.43.19,9.58-.04,5.4-.4,9.78-2.85,12.8-7.39,3.64-5.47,4.12-11.5,2.53-17.71-1.78-7.02-7.16-11.74-14.33-12.47-3.42-.35-6.9-.19-10.35-.26-.07,0-.14.06-.23.1v37.77Z\"></path>\n  <path fill=\"currentColor\" d=\"M437.07,77.53h-4.55V.34c.26-.02.52-.05.78-.05,1.63,0,3.27.03,4.9-.02.67-.02,1,.17,1.27.83,3.34,8.22,6.72,16.43,10.08,24.64,5.14,12.55,10.29,25.09,15.43,37.64.12.29.25.58.52.85v-.95c0-20.59,0-41.17,0-61.76,0-.25-.05-.51.02-.74.05-.18.24-.33.37-.49.11.15.26.29.31.46.05.18.01.38.01.58,0,25.06,0,50.12,0,75.19v.92c-.69.37-.81-.15-.99-.57-3.12-7.36-6.24-14.72-9.36-22.08-7.4-17.46-14.81-34.92-22.22-52.38-.1-.25-.22-.49-.42-.95-.31,25.55.27,50.83,3.84,76.06Z\"></path>\n  <path fill=\"currentColor\" d=\"M490.62.8c-6.64.24-12.32,2.58-17.6,6.35V.34h41.01v6.85c-5.36-3.46-10.92-6.17-17.49-6.38v76.71h-5.92V.8Z\"></path>\n  <path fill=\"currentColor\" d=\"M271.28.81v76.71h-5.85V.81c-6.62.2-12.34,2.57-17.66,6.36V.34h41.02v6.84c-5.36-3.47-10.92-6.17-17.52-6.37Z\"></path>\n  <path fill=\"currentColor\" d=\"M0,77.5V.34h5.7v76.82c1.98-.17,3.87-.3,5.75-.49,4.28-.44,8.28-1.81,12.12-3.72,2.1-1.04,4.27-1.93,6.41-2.89.22-.1.45-.18.73-.29v7.73H0Z\"></path>\n  <path fill=\"currentColor\" d=\"M31.04,20.16c3.57-2.96,4.62-6.91,4.75-11.36-.17.06-.27.07-.35.13-1.49,1.06-3.02.82-4.12-.64-1.32-1.75-1.46-4.63-.33-6.5.68-1.12,1.66-1.76,3-1.73,1.36.04,2.26.78,2.83,1.97.85,1.8,1,3.72.91,5.66-.17,3.64-1.14,7.03-3.51,9.87-.75.9-1.75,1.58-2.65,2.35-.14.12-.36.17-.54.25Z\"></path>\n  <path fill=\"currentColor\" d=\"M301.1,1.07h29.28c-.54,2.29-1.07,4.53-1.62,6.88-1.97-1.01-3.86-1.9-5.68-2.94-3.75-2.13-7.83-2.95-12.06-3.28-1.22-.09-2.45-.15-3.67-.25-.54-.05-.77.14-.89.68-1.68,7.33-3.38,14.66-5.08,21.99-.99,4.29-1.98,8.57-2.99,12.91,6.82.05,13.31-1.6,19.96-3.45-.58,2.49-1.12,4.82-1.68,7.22-2.43-.66-4.79-1.27-7.13-1.95-3.43-.99-6.94-1.27-10.47-1.39-.46-.02-.73.06-.86.6-2.95,12.75-5.92,25.5-8.89,38.25-.02.08,0,.17,0,.38,1.69-.12,3.34-.24,4.99-.34,6.15-.39,11.71-2.75,17.29-5.08,1.48-.62,2.97-1.19,4.65-1.87-.62,2.64-1.19,5.12-1.79,7.66h-30.96c5.87-25.34,11.73-50.67,17.59-76.02Z\"></path>\n  <path fill=\"currentColor\" d=\"M398.67,1.07h29.28c-.54,2.29-1.07,4.53-1.62,6.88-1.97-1.01-3.86-1.9-5.68-2.94-3.75-2.13-7.83-2.95-12.06-3.28-1.22-.09-2.45-.15-3.67-.25-.54-.05-.77.14-.89.68-1.68,7.33-3.38,14.66-5.08,21.99-.99,4.29-1.98,8.57-2.99,12.91,6.82.05,13.31-1.6,19.96-3.45-.58,2.49-1.12,4.82-1.68,7.22-2.43-.66-4.79-1.27-7.13-1.95-3.43-.99-6.94-1.27-10.47-1.39-.46-.02-.73.06-.86.6-2.95,12.75-5.92,25.5-8.89,38.25-.02.08,0,.17,0,.38,1.69-.12,3.34-.24,4.99-.34,6.15-.39,11.71-2.75,17.29-5.08,1.48-.62,2.97-1.19,4.65-1.87-.62,2.64-1.19,5.12-1.79,7.66h-30.96c5.87-25.34,11.73-50.67,17.59-76.02Z\"></path>\n  <path fill=\"currentColor\" d=\"M199.74,77.5h-5.7v-27.31c-.35-.02-.63-.05-.92-.05-5.45,0-10.9.01-16.35-.02-.67,0-.97.24-1.24.83-3.82,8.45-6.91,17.14-8.99,26.19-.03.11-.06.22-.1.37h-4.17c12.2-25.88,24.38-51.69,36.55-77.5.08.02.16.04.25.06.22,25.8.44,51.59.67,77.44ZM194.1,11.81c-.06-.01-.12-.03-.18-.04-5.88,12.54-11.76,25.08-17.72,37.78.49,0,.8,0,1.12,0,5.21,0,10.42-.02,15.63.02.89,0,1.13-.22,1.13-1.13-.02-11.93,0-23.86.01-35.79,0-.28,0-.56,0-.84Z\"></path>\n  <path fill=\"currentColor\" d=\"M85.63,77.5h-5.7v-27.31c-.35-.02-.63-.05-.92-.05-5.45,0-10.9.01-16.35-.02-.67,0-.97.24-1.24.83-3.82,8.45-6.91,17.14-8.99,26.19-.03.11-.06.22-.1.37h-4.17C60.37,51.62,72.55,25.81,84.72,0c.08.02.16.04.25.06.22,25.8.44,51.59.67,77.44ZM79.99,11.81c-.06-.01-.12-.03-.18-.04-5.88,12.54-11.76,25.08-17.72,37.78.49,0,.8,0,1.12,0,5.21,0,10.42-.02,15.63.02.89,0,1.13-.22,1.13-1.13-.02-11.93,0-23.86.01-35.79,0-.28,0-.56,0-.84Z\"></path>\n</svg>"
};
window.LA_LOGO_ASPECTS = {
  ladvisory: 539.17 / 182.52,
  lappartement: 514.03 / 77.57
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/data/logos.js", error: String((e && e.message) || e) }); }

// ui_kits/presentation/data/sample.js
try { (() => {
// Sample data — Jean Arp / Poupée Borgne (baseline)
window.LA_DATA = {
  artist: {
    first_name: "Jean",
    family_name: "Arp",
    portrait: "../../sample/jean-arp/artist-portrait.png",
    bio: ["Jean Arp (1886–1966), also known as Hans Arp, was a pioneering French-German artist whose work played a central role in the development of Dada and Surrealism. Working across sculpture, collage, poetry and reliefs, Arp rejected rigid artistic conventions in favour of chance, organic form and intuition. His practice emerged in response to the violence and rationalism associated with the First World War, positioning abstraction as a poetic and spiritual alternative to order and control.", "Arp was a founding member of the Dada movement in Zurich during the 1910s, where he collaborated with artists and writers who sought to challenge traditional ideas of art, authorship and meaning. His early collages, often composed according to chance arrangements, became foundational works in the history of abstraction. Through these experiments, Arp helped redefine artistic creation as something instinctive and fluid rather than fixed by academic rules.", "Throughout his career, Arp developed a distinctive visual language based on biomorphic forms inspired by nature, the human body and processes of growth and transformation. His sculptures and reliefs avoid sharp geometry in favour of smooth, rounded shapes that appear both abstract and alive. This approach deeply influenced later movements including organic abstraction, modernist sculpture and post-war minimalism, while also opening new possibilities for the relationship between art and the natural world.", "Arp's importance lies not only in his formal innovation, but also in his belief that art could exist beyond nationalism, hierarchy and logic. His work proposed a more intuitive and universal visual language during a period marked by political upheaval and industrialisation. Today, his influence continues to resonate through contemporary sculpture and conceptual practices, and his works are held in major collections including Museum of Modern Art, Tate Modern and Centre Pompidou."],
    quote: "Art is a fruit that grows in man, like a fruit on a plant, or a child in its mother's womb.",
    quote_author: "Jean Arp"
  },
  cover: {
    image: "../../sample/jean-arp/cover.jpeg"
  },
  accent: {
    color: "#f6f2eb",
    text_color: "#010101"
  },
  works: [{
    title: "Poupée Borgne",
    year: "Conceived 1963; executed c. 1966",
    medium: "Black granite",
    dimensions_cm: "Height 95.3 cm",
    dimensions_in: "37 ½ in",
    real_size_cm: 95.3,
    // for proportional scaling across multi-work
    presentation: "full-bleed",
    // sculpture → full-bleed work + closeup
    price: null,
    image_main: "../../sample/jean-arp/work-main.jpeg",
    image_closeup: "../../sample/jean-arp/work-closeup.jpeg",
    closeup_caption: "The present work is the only unique stone version of *Poupée borgne* of this scale. A bronze edition of three plus one artist's proof was cast in the late 1960s–early 1970s, while a cement cast was created in 1970.",
    provenance: ["Gallery d'Art Moderne, Basel", "Sidney Janis Gallery, New York, 1967", "Private Collection, 1978 (acquired from the above)", "Sale: Sotheby's, New York, 20 November 2025, lot 23", "Acquired by the present owner from the above sale"],
    exhibitions: ["St. Gallen, Galerie im Erker am Gallusplatz, *Hans Arp*, 1966–67, no. 9, p. 13, 73, illustrated (dated 1964).", "New York, Sidney Janis Gallery, *Jean Arp*, 1968, no. 9 (dated 1964).", "New York, Sidney Janis Gallery, *20th Century European Art*, 1970, no. 12, illustrated in an installation photograph (dated 1964).", "New York, Sidney Janis Gallery, *An Arp Garden of Marbles and Bronzes*, 1971, no. 3, illustrated in an installation photograph.", "New York, Solomon R. Guggenheim Museum, *Surrealism: Two Private Eyes*, 1999, vol. I, no. 255, p. 337, illustrated in color."],
    literature: ["H. Read, *The Art of Jean Arp*, New York, 1968, fig. 199, p. 181, illustrated; p. 211 (dated 1964).", "E. Trier, Marguerite Arp-Hagenbach and François Arp, *Jean Arp: Sculpture, His Last Ten Years*, Stuttgart, 1968, no. 293a, p. 121, illustrated.", "The Museum of Modern Art, ed., *Three Generations of Twentieth-Century Art: The Sidney and Harriet Janis Collection of the Museum of Modern Art*, Greenwich, 1972, p. 62 (dated 1964).", "Ionel Jianou, *Jean Arp*, Paris, 1973, no. 293a, p. 81.", "*Jean Arp 1886–1966. Esculturas. Relieves, Obra sobre papel. Tapices*, exh. cat., Museo Español de Arte Contemporaneo, Madrid, 1985, no. 45, p. 126, bronze version illustrated.", "J. Hancock, S. Poley, et al., *Arp, 1886–1966*, exh. cat., Württembergischer Kunstverein, Stuttgart, 1987, no. 256, p. 237, 310, bronze version illustrated in color.", "M. L. Borràs, *Jean Arp. Invenció de formes*, exh. cat., Fundació Joan Miró, Barcelona, 2001, p. 238, 239, 276, bronze version illustrated in color.", "*Jean Arp. L'invention de la forme*, exh. cat., Palais des Beaux-Arts, Brussels, 2004, p. 157, p. 180, bronze version.", "K. Fischer and A. Hertog, eds., *Hans Arp: Sculptures — A Critical Survey*, Ostfildern, 2012, no. 293a, p. 190, bronze version illustrated."],
    notes: ["*Poupée borgne* was conceived by Jean Arp in 1963 and executed around 1966 in black granite. The sculpture belongs to the artist's late body of work, a period in which Arp refined the human figure into smooth, biomorphic forms that appear simultaneously abstract and bodily. According to Sotheby's, the work represents a culmination of his lifelong exploration of the human form through abstraction, combining a sense of monumentality with an almost meditative stillness.", "The title, which translates to \"One-Eyed Doll\", connects the work to Arp's recurring \"poupée\" motif developed in the 1950s and 1960s. Rather than depicting a doll literally, Arp used the motif as a way of simplifying and transforming the body into organic forms that feel both playful and mysterious. The sculpture's asymmetrical head and singular protruding form suggest a face or gaze without becoming fully figurative. Sotheby's notes that the reference to the \"one eye\" creates a contemplative focal point, linking the physical object to a more spiritual or psychological dimension.", "Like many of Arp's sculptures from this period, *Poupée borgne* reflects his idea of \"human concretions\" — forms that seem to have grown naturally rather than been constructed. Museums and institutions discussing his sculpture frequently describe his works as organic presences inspired by growth, nature and the body, rather than purely geometric abstraction. The polished granite surface further reinforces this sense of permanence and quiet vitality, allowing the sculpture to appear at once ancient, modern and strangely alive."]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/data/sample.js", error: String((e && e.message) || e) }); }

// ui_kits/presentation/pages/Biography.jsx
try { (() => {
// Page 2 — Biography.
// Layout:
//   - L'Appartement mark top-left (35mm).
//   - Below it, the bio block is vertically centered in the remaining page
//     so empty space above and below it is equal.
//   - Portrait floats left. The artist lockup (Inter Thin + Ivy Mode) sits
//     to the RIGHT of the portrait, aligned to its TOP. Justified bio text
//     follows under the lockup, wrapping around the portrait.
function Biography({
  data
}) {
  const {
    artist
  } = data;
  return /*#__PURE__*/React.createElement(Page, {
    label: "02 Biography",
    style: {
      padding: "12mm",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    kind: "lappartement",
    widthMm: 35,
    color: "#000000"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      fontFamily: "'Inter', sans-serif",
      fontWeight: 300,
      fontSize: "10pt",
      lineHeight: 1.6,
      textAlign: "justify",
      color: "#010101"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: artist.portrait,
    alt: `Portrait of ${artist.first_name} ${artist.family_name}`,
    style: {
      float: "left",
      width: "72mm",
      height: "auto",
      objectFit: "cover",
      margin: "0 8mm 4mm 0",
      shapeOutside: "margin-box",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "8px",
      fontSize: "30pt",
      lineHeight: 1,
      marginBottom: "8mm",
      textTransform: "uppercase",
      letterSpacing: "0.02em",
      color: "#010101"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      fontWeight: 200
    }
  }, artist.first_name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Ivy Mode', 'Times New Roman', serif",
      fontWeight: 400,
      letterSpacing: "0.005em"
    }
  }, artist.family_name)), artist.bio.map((para, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      marginBottom: "4mm"
    }
  }, i === 0 ? renderBioOpener(para, artist) : para)))));
}
function renderBioOpener(text, artist) {
  const pattern = new RegExp(`(${artist.first_name} ${artist.family_name} \\(\\d{4}–\\d{4}\\))`);
  const parts = text.split(pattern);
  return parts.map((p, i) => pattern.test(p) ? /*#__PURE__*/React.createElement("strong", {
    key: i,
    style: {
      fontWeight: 500
    }
  }, p) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, p));
}
window.Biography = Biography;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/pages/Biography.jsx", error: String((e && e.message) || e) }); }

// ui_kits/presentation/pages/Closeup.jsx
try { (() => {
// Page 5 — Close-up / detail.
// Two presentation modes mirror the work page:
//   - "full-bleed": detail image covers the whole page. Italic caption sits
//     as a small overlay bottom-right.
//   - "proportional" (default): close-up sits centered on a white page,
//     scaled relative to the work's real dimensions, caption below.
function Closeup({
  data,
  work
}) {
  const {
    artist
  } = data;
  const mode = work.presentation === "full-bleed" ? "full-bleed" : "proportional";

  // Markdown-italic helper
  const caption = (work.closeup_caption || "").split(/(\*[^*]+\*)/g).map((seg, i) => /^\*[^*]+\*$/.test(seg) ? /*#__PURE__*/React.createElement("em", {
    key: i
  }, seg.slice(1, -1)) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, seg));
  const realCm = work.real_size_cm || 100;
  const proportionalHeightMm = Math.max(60, Math.min(225, 70 + realCm * 0.78));
  if (mode === "full-bleed") {
    // Full-bleed close-up: image fills the top, caption sits in a clean
    // white strip below it so type NEVER overlays the artwork.
    return /*#__PURE__*/React.createElement(Page, {
      label: "05 Close-up"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "230mm",
        // image strip
        background: "#d8d6d2",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: work.image_closeup,
      alt: `${artist.first_name} ${artist.family_name}, ${work.title}, detail`,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "240mm",
        left: "12mm",
        right: "12mm",
        fontFamily: "'Inter', sans-serif",
        fontSize: "10pt",
        fontWeight: 300,
        fontStyle: "italic",
        lineHeight: 1.6,
        color: "#010101",
        textAlign: "justify",
        maxWidth: "120mm"
      }
    }, caption));
  }
  return /*#__PURE__*/React.createElement(Page, {
    label: "05 Close-up",
    style: {
      padding: "12mm",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "12mm",
      left: "50%",
      transform: "translateX(-50%)",
      height: `${proportionalHeightMm}mm`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: work.image_closeup,
    alt: `${artist.first_name} ${artist.family_name}, ${work.title}, detail`,
    style: {
      height: "100%",
      width: "auto",
      maxWidth: "180mm",
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "18mm",
      left: "12mm",
      right: "12mm",
      maxWidth: "120mm",
      fontFamily: "'Inter', sans-serif",
      fontSize: "10pt",
      fontStyle: "italic",
      fontWeight: 300,
      lineHeight: 1.6,
      color: "#010101",
      textAlign: "justify"
    }
  }, caption));
}
window.Closeup = Closeup;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/pages/Closeup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/presentation/pages/Cover.jsx
try { (() => {
// Page 1 — Cover.
// Full-bleed work image. L'Advisory mark top centre, modest size. Artist
// lockup bottom-right using Inter Thin + Ivy Mode. Title + year on same line.
function Cover({
  data
}) {
  const {
    artist,
    cover,
    works
  } = data;
  const work = works[0];
  return /*#__PURE__*/React.createElement(Page, {
    background: "#d8d6d2",
    label: "01 Cover"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: cover.image,
    alt: `${artist.first_name} ${artist.family_name}, ${work.title}`,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "6mm",
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    kind: "ladvisory",
    color: "#010101",
    widthMm: 75
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "24mm",
      left: "12mm",
      right: "12mm",
      zIndex: 2,
      color: "#010101",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "10px",
      fontSize: "38pt",
      lineHeight: 1,
      textTransform: "uppercase",
      letterSpacing: "0.02em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      fontWeight: 200
    }
  }, artist.first_name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Ivy Mode', 'Times New Roman', serif",
      fontWeight: 400,
      letterSpacing: "0.005em"
    }
  }, artist.family_name)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "5mm",
      fontFamily: "'Inter', sans-serif",
      fontWeight: 300,
      fontSize: "14pt",
      letterSpacing: "0.01em"
    }
  }, work.title, ", ", extractYear(work.year))));
}
function extractYear(yearString) {
  // "Conceived 1963; executed c. 1966" → first 4-digit year
  const m = (yearString || "").match(/\d{4}/);
  return m ? m[0] : yearString;
}
window.Cover = Cover;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/pages/Cover.jsx", error: String((e && e.message) || e) }); }

// ui_kits/presentation/pages/Detail.jsx
try { (() => {
// Page 6 — Provenance / Exhibitions / Literature.
// Section headings: large Inter Light, uppercase, modest tracking.
// Hierarchy through SIZE, not weight. Entries set in Inter Regular
// with institutions in semibold.

const INSTITUTIONS = ["Gallery d'Art Moderne", "Galerie im Erker am Gallusplatz", "Sidney Janis Gallery", "Solomon R. Guggenheim Museum", "Sotheby's", "The Museum of Modern Art", "Museo Español de Arte Contemporaneo", "Württembergischer Kunstverein", "Kunsthalle Nürnberg", "Fundació Joan Miró", "Palais des Beaux-Arts", "Museo Correr", "Kunsthalle Ziegelhütte", "Fondation Arp"];
function renderEntry(text) {
  const parts = text.split(/(\*[^*]+\*|\*\*[^*]+\*\*)/g).map((seg, i) => {
    if (/^\*\*[^*]+\*\*$/.test(seg)) return /*#__PURE__*/React.createElement("strong", {
      key: i,
      style: {
        fontWeight: 600
      }
    }, seg.slice(2, -2));
    if (/^\*[^*]+\*$/.test(seg)) return /*#__PURE__*/React.createElement("em", {
      key: i
    }, seg.slice(1, -1));
    let acc = [seg];
    INSTITUTIONS.forEach(name => {
      acc = acc.flatMap(piece => {
        if (typeof piece !== "string") return piece;
        const idx = piece.indexOf(name);
        if (idx === -1) return piece;
        return [piece.slice(0, idx), /*#__PURE__*/React.createElement("strong", {
          key: `${i}-${name}`,
          style: {
            fontWeight: 600
          }
        }, name), piece.slice(idx + name.length)];
      });
    });
    return acc.map((piece, j) => typeof piece === "string" ? /*#__PURE__*/React.createElement(React.Fragment, {
      key: `${i}-t-${j}`
    }, piece) : piece);
  });
  return parts.flat();
}
function Detail({
  work
}) {
  const sectionHeader = {
    fontFamily: "'Ivy Mode', 'Times New Roman', serif",
    fontSize: "14pt",
    fontWeight: 400,
    letterSpacing: "0.035em",
    textTransform: "uppercase",
    lineHeight: 1,
    margin: "18mm 0 4.5mm 0"
  };
  const entry = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    fontSize: "9.5pt",
    lineHeight: 1.55,
    marginBottom: "2mm",
    textAlign: "left"
  };
  return /*#__PURE__*/React.createElement(Page, {
    label: "06 Detail",
    style: {
      padding: "12mm",
      color: "#010101"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...sectionHeader,
      marginTop: 0
    }
  }, "Provenance"), work.provenance.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: entry
  }, renderEntry(e))), /*#__PURE__*/React.createElement("h2", {
    style: sectionHeader
  }, "Exhibitions"), work.exhibitions.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: entry
  }, renderEntry(e))), /*#__PURE__*/React.createElement("h2", {
    style: sectionHeader
  }, "Literature"), work.literature.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: entry
  }, renderEntry(e))));
}
window.Detail = Detail;
window.renderEntry = renderEntry;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/pages/Detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/presentation/pages/End.jsx
try { (() => {
// Page 8 — End / disclaimer.
// L'Advisory mark in beige, centered, LARGE. Disclaimer in same beige.
function End() {
  return /*#__PURE__*/React.createElement(Page, {
    label: "08 End",
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "12mm",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "22mm"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    kind: "ladvisory",
    color: "#cec2ba",
    widthMm: 130
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 300,
      fontSize: "8.5pt",
      lineHeight: 1.65,
      color: "#cec2ba",
      maxWidth: "140mm",
      textAlign: "center",
      margin: 0
    }
  }, "The artworks presented in this presentation are not owned by L\u2019Appartement \u2013 Gallery & Advisory. The gallery does not hold exclusivity over them; this selection of artworks is sourced from a third party, including private collections and other professional art entities."));
}
window.End = End;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/pages/End.jsx", error: String((e && e.message) || e) }); }

// ui_kits/presentation/pages/Notes.jsx
try { (() => {
// Page 7 — Note on work (optional).
// Paragraphs use the same body type as Biography + Detail entries:
//   Inter Light 10pt, line-height 1.6, justified. Italics via *...* markdown.
function Notes({
  work
}) {
  if (!work.notes || !work.notes.length) return null;
  function withItalics(text) {
    return text.split(/(\*[^*]+\*)/g).map((seg, i) => /^\*[^*]+\*$/.test(seg) ? /*#__PURE__*/React.createElement("em", {
      key: i
    }, seg.slice(1, -1)) : /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, seg));
  }
  return /*#__PURE__*/React.createElement(Page, {
    label: "07 Notes",
    style: {
      padding: "12mm",
      color: "#010101"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "160mm",
      margin: "12mm auto 0"
    }
  }, work.notes.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 300,
      fontSize: "10pt",
      lineHeight: 1.6,
      marginBottom: "4mm",
      textAlign: "justify"
    }
  }, withItalics(p)))));
}
window.Notes = Notes;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/pages/Notes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/presentation/pages/Quote.jsx
try { (() => {
// Page 3 — Quote.
// White background. Oversized Ivy Mode marks framing a wide column of
// Ivy Mode body text with a drop cap. Signature uses the Inter Thin + Ivy Mode
// lockup, right-aligned to the text column.
function Quote({
  data
}) {
  const {
    artist
  } = data;
  return /*#__PURE__*/React.createElement(Page, {
    background: "#ffffff",
    label: "03 Quote"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "40%",
      left: "36mm",
      right: "36mm"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Ivy Mode', 'Times New Roman', serif",
      fontSize: "180pt",
      lineHeight: 0.55,
      position: "absolute",
      top: "-14mm",
      left: "-24mm",
      color: "#010101"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Ivy Mode', 'Times New Roman', serif",
      fontWeight: 400,
      fontSize: "28pt",
      lineHeight: 1.18,
      letterSpacing: "-0.005em",
      color: "#010101",
      margin: 0,
      textAlign: "justify",
      textAlignLast: "left"
    },
    className: "la-quote-body"
  }, artist.quote), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Ivy Mode', 'Times New Roman', serif",
      fontSize: "180pt",
      lineHeight: 0.55,
      position: "absolute",
      bottom: "-14mm",
      right: "-24mm",
      transform: "rotate(180deg)",
      color: "#010101"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      bottom: "-38mm",
      display: "flex",
      alignItems: "baseline",
      gap: "1.5mm",
      textTransform: "uppercase",
      color: "#010101"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 200,
      fontSize: "11pt",
      letterSpacing: "0.04em",
      marginRight: "2mm"
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      fontWeight: 200,
      fontSize: "11pt",
      letterSpacing: "0.05em"
    }
  }, artist.first_name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Ivy Mode', 'Times New Roman', serif",
      fontWeight: 400,
      fontSize: "11pt",
      letterSpacing: "0.01em"
    }
  }, artist.family_name))), /*#__PURE__*/React.createElement("style", null, `
        .la-quote-body::first-letter {
          font-family: 'Ivy Mode', 'Times New Roman', serif;
          font-size: 96pt;
          line-height: 0.92;
          float: left;
          padding-right: 3.5mm;
          padding-top: 1mm;
          font-weight: 400;
        }
      `));
}
window.Quote = Quote;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/pages/Quote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/presentation/pages/Work.jsx
try { (() => {
// Page 4 — Work + commercial fiche.
// Two presentation modes:
//   - "full-bleed": image covers the whole page, fiche overlays bottom-right.
//     Used for sculpture / 3D works where the studio ground is part of the image.
//     L'Appartement mark is OMITTED so it doesn't sit on the artwork.
//   - "proportional" (default): the work sits centered on a white A4 plate
//     at a size proportional to its real-world dimensions, with generous
//     white space around it. L'Appartement mark sits top-left.
//
// Proportional scaling rule (applied across multi-work presentations):
//   A 200 × 150 cm canvas dominates without filling the page;
//   a 30 × 40 cm work sits small inside generous white space.
//   No plate fills the page edge-to-edge.

function Work({
  data,
  work
}) {
  const {
    artist
  } = data;
  const year = (work.year || "").match(/\d{4}/)?.[0] || work.year;
  const mode = work.presentation === "full-bleed" ? "full-bleed" : "proportional";

  // Proportional height: map real_size_cm (longest dimension in cm) to
  // a 0–230mm scale where:
  //   200 cm → 215mm on page (dominant but not filling)
  //   100 cm → ~130mm
  //   30 cm  →  ~50mm  (timbre-poste guarded against by 50mm floor)
  const realCm = work.real_size_cm || 100;
  const proportionalHeightMm = Math.max(50, Math.min(215, 60 + realCm * 0.78));
  if (mode === "full-bleed") {
    return /*#__PURE__*/React.createElement(Page, {
      label: "04 Work",
      background: "#d8d6d2"
    }, /*#__PURE__*/React.createElement("img", {
      src: work.image_main,
      alt: `${artist.first_name} ${artist.family_name}, ${work.title}`,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement(WorkFiche, {
      artist: artist,
      work: work,
      year: year,
      color: "#010101",
      style: {
        position: "absolute",
        bottom: "18mm",
        right: "18mm",
        zIndex: 2
      }
    }));
  }

  // Proportional plate
  return /*#__PURE__*/React.createElement(Page, {
    label: "04 Work",
    style: {
      padding: "12mm",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "12mm",
      left: "12mm"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    kind: "lappartement",
    widthMm: 35,
    color: "#000000"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -54%)",
      height: `${proportionalHeightMm}mm`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: work.image_main,
    alt: `${artist.first_name} ${artist.family_name}, ${work.title}`,
    style: {
      height: "100%",
      width: "auto",
      maxWidth: "180mm",
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement(WorkFiche, {
    artist: artist,
    work: work,
    year: year,
    color: "#010101",
    style: {
      position: "absolute",
      bottom: "18mm",
      right: "18mm"
    }
  }));
}

// Fiche component reused across modes
function WorkFiche({
  artist,
  work,
  year,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "2.4mm",
      textTransform: "uppercase",
      letterSpacing: "0.02em",
      lineHeight: 1,
      fontSize: "16pt"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      fontWeight: 200
    }
  }, artist.first_name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Ivy Mode', 'Times New Roman', serif",
      fontWeight: 400,
      letterSpacing: "0.005em"
    }
  }, artist.family_name)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 300,
      fontSize: "11pt",
      lineHeight: 1.45,
      marginTop: "3mm"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, work.title, ", ", year), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "4mm"
    }
  }, work.medium), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, work.dimensions_cm), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, work.dimensions_in)), work.price && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: "11pt",
      marginTop: "5mm",
      letterSpacing: "-0.005em"
    }
  }, "Price (excl. VAT): ", work.price));
}
window.Work = Work;
window.WorkFiche = WorkFiche;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/pages/Work.jsx", error: String((e && e.message) || e) }); }

})();
