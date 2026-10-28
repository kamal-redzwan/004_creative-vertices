export type PriceFilterKey = 'all' | 'free' | 'premium';

export type IndustryFilterKey =
  | 'all'
  | 'studios-agencies'
  | 'software-saas'
  | 'personal-writing'
  | 'architecture-hardware'
  | 'editorial-docs';

export interface ColorSwatch {
  hex: string;
  label: string;
}

export interface EmDashTemplateNode {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  featured: boolean;
  tier: 'PREMIUM' | 'FREE';
  price: number;
  priceDisplay: string;
  industry: Exclude<IndustryFilterKey, 'all'>;
  industryLabel: string;
  styleTag: string;
  featureBullet: string;
  swatches: [ColorSwatch, ColorSwatch, ColorSwatch];
  typefaces: [string, string];
  pageCount: number;
  gridRowRole: 'top-2col' | 'body-3col';
  emdashCollection: string;
  domNodesCount: number;
  cssPayloadKb: string;
  routesIncluded: string[];
  previewSvgDataUri: string;
  previewAlt: string;
}

export interface EmDashWhyBenefit {
  id: string;
  codeRef: string;
  title: string;
  summary: string;
  metricLabel: string;
  metricValue: string;
  specSnippet: string;
  emphasized?: boolean;
}

export interface EmDashFaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface EmDashStorefrontPayload {
  cmsVersion: string;
  collectionSlug: string;
  syncedAtIso: string;
  templates: EmDashTemplateNode[];
  benefits: EmDashWhyBenefit[];
  faqs: EmDashFaqItem[];
}

function buildBlueprintDataUri(config: {
  id: string;
  bg: string;
  panel: string;
  accent: string;
  secondary: string;
  layoutKind: 'split-hero' | 'telemetry-grid' | 'editorial-index' | 'spec-sheet' | 'studio-reel';
  coordLabel: string;
  headerText: string;
  metricText: string;
}): string {
  const { bg, panel, accent, secondary, layoutKind, coordLabel, headerText, metricText } = config;

  let innerShapes = '';
  if (layoutKind === 'split-hero') {
    innerShapes = `
      <rect x="48" y="92" width="330" height="290" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="68" y="118" width="110" height="14" fill="${accent}"/>
      <rect x="68" y="148" width="260" height="26" fill="#F5F6F8"/>
      <rect x="68" y="184" width="220" height="26" fill="#F5F6F8"/>
      <rect x="68" y="228" width="270" height="10" fill="${secondary}"/>
      <rect x="68" y="248" width="230" height="10" fill="${secondary}"/>
      <rect x="68" y="318" width="128" height="36" fill="${accent}"/>
      <rect x="210" y="318" width="116" height="36" fill="none" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="404" y="92" width="348" height="136" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <line x1="404" y1="92" x2="752" y2="228" stroke="${secondary}" stroke-width="1" stroke-dasharray="4 4"/>
      <circle cx="578" cy="160" r="32" fill="none" stroke="${accent}" stroke-width="2"/>
      <rect x="404" y="246" width="166" height="136" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="586" y="246" width="166" height="136" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="424" y="270" width="84" height="12" fill="${accent}"/>
      <rect x="606" y="270" width="84" height="12" fill="#F5F6F8"/>
    `;
  } else if (layoutKind === 'telemetry-grid') {
    innerShapes = `
      <rect x="48" y="92" width="168" height="290" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="66" y="116" width="90" height="10" fill="${accent}"/>
      <rect x="66" y="142" width="124" height="8" fill="${secondary}"/>
      <rect x="66" y="162" width="112" height="8" fill="${secondary}"/>
      <rect x="66" y="182" width="130" height="8" fill="${secondary}"/>
      <rect x="66" y="218" width="132" height="1" fill="${secondary}"/>
      <rect x="66" y="238" width="104" height="8" fill="#F5F6F8"/>
      <rect x="236" y="92" width="516" height="138" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <polyline points="260,198 330,162 396,176 474,126 556,144 638,112 722,122" fill="none" stroke="${accent}" stroke-width="3"/>
      <rect x="236" y="248" width="248" height="134" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="504" y="248" width="248" height="134" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="260" y="274" width="140" height="16" fill="#F5F6F8"/>
      <rect x="528" y="274" width="140" height="16" fill="${accent}"/>
    `;
  } else if (layoutKind === 'editorial-index') {
    innerShapes = `
      <rect x="48" y="92" width="704" height="72" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="72" y="116" width="380" height="24" fill="#F5F6F8"/>
      <rect x="612" y="116" width="114" height="24" fill="${accent}"/>
      <rect x="48" y="182" width="704" height="60" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="72" y="204" width="46" height="16" fill="${accent}"/>
      <rect x="138" y="204" width="310" height="16" fill="#F5F6F8"/>
      <rect x="630" y="204" width="96" height="16" fill="${secondary}"/>
      <rect x="48" y="256" width="704" height="60" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="72" y="278" width="46" height="16" fill="${secondary}"/>
      <rect x="138" y="278" width="276" height="16" fill="#F5F6F8"/>
      <rect x="630" y="278" width="96" height="16" fill="${secondary}"/>
      <rect x="48" y="330" width="704" height="52" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="72" y="348" width="46" height="16" fill="${secondary}"/>
      <rect x="138" y="348" width="340" height="16" fill="#F5F6F8"/>
    `;
  } else if (layoutKind === 'spec-sheet') {
    innerShapes = `
      <rect x="48" y="92" width="224" height="290" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="288" y="92" width="224" height="290" fill="${panel}" stroke="${accent}" stroke-width="1.5"/>
      <rect x="528" y="92" width="224" height="290" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="72" y="122" width="120" height="16" fill="#F5F6F8"/>
      <rect x="312" y="122" width="136" height="16" fill="${accent}"/>
      <rect x="552" y="122" width="120" height="16" fill="#F5F6F8"/>
      <line x1="72" y1="162" x2="248" y2="162" stroke="${secondary}" stroke-dasharray="3 3"/>
      <line x1="312" y1="162" x2="488" y2="162" stroke="${accent}" stroke-dasharray="3 3"/>
      <line x1="552" y1="162" x2="728" y2="162" stroke="${secondary}" stroke-dasharray="3 3"/>
      <rect x="72" y="324" width="176" height="32" fill="none" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="312" y="324" width="176" height="32" fill="${accent}"/>
      <rect x="552" y="324" width="176" height="32" fill="none" stroke="${secondary}" stroke-width="1.5"/>
    `;
  } else {
    innerShapes = `
      <rect x="48" y="92" width="456" height="290" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="72" y="118" width="180" height="20" fill="${accent}"/>
      <rect x="72" y="152" width="380" height="140" fill="${bg}" stroke="${secondary}" stroke-width="1"/>
      <line x1="72" y1="152" x2="452" y2="292" stroke="${accent}" stroke-width="1.5"/>
      <line x1="452" y1="152" x2="72" y2="292" stroke="${secondary}" stroke-width="1" stroke-dasharray="4 4"/>
      <rect x="72" y="316" width="240" height="14" fill="#F5F6F8"/>
      <rect x="524" y="92" width="228" height="138" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="524" y="244" width="228" height="138" fill="${panel}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="548" y="118" width="110" height="14" fill="#F5F6F8"/>
      <rect x="548" y="270" width="110" height="14" fill="${accent}"/>
    `;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
    <rect width="800" height="500" fill="${bg}"/>
    <line x1="48" y1="0" x2="48" y2="500" stroke="${secondary}" stroke-opacity="0.32" stroke-dasharray="4 4"/>
    <line x1="752" y1="0" x2="752" y2="500" stroke="${secondary}" stroke-opacity="0.32" stroke-dasharray="4 4"/>
    <line x1="0" y1="64" x2="800" y2="64" stroke="${secondary}" stroke-opacity="0.32" stroke-dasharray="4 4"/>
    <line x1="0" y1="416" x2="800" y2="416" stroke="${secondary}" stroke-opacity="0.32" stroke-dasharray="4 4"/>
    <rect x="44" y="60" width="8" height="8" fill="${accent}"/>
    <rect x="748" y="60" width="8" height="8" fill="${accent}"/>
    <rect x="44" y="412" width="8" height="8" fill="${accent}"/>
    <rect x="748" y="412" width="8" height="8" fill="${accent}"/>
    <text x="60" y="42" fill="#A3AAB8" font-family="monospace" font-size="13" letter-spacing="1">${coordLabel}</text>
    <text x="740" y="42" fill="#F5F6F8" font-family="monospace" font-size="13" text-anchor="end">${headerText}</text>
    ${innerShapes}
    <text x="60" y="454" fill="#A3AAB8" font-family="monospace" font-size="12">WIREFRAME PREVIEW // ASTRO v7 + TAILWIND v4</text>
    <text x="740" y="454" fill="${accent}" font-family="monospace" font-size="12" text-anchor="end">${metricText}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const emdashStorefrontData: EmDashStorefrontPayload = {
  cmsVersion: 'EmDash CMS v3.8 (Content Layer API)',
  collectionSlug: 'cv_storefront_templates',
  syncedAtIso: '2026-10-29T00:45:00Z',
  templates: [
    {
      id: 'tpl-vertex-01',
      slug: 'monolith-studio-os',
      title: 'Monolith Studio OS',
      subtitle: 'Case-study ledger and interactive scope calculator for design-engineering agencies.',
      featured: true,
      tier: 'PREMIUM',
      price: 89,
      priceDisplay: '$89',
      industry: 'studios-agencies',
      industryLabel: 'Studios & agencies',
      styleTag: 'LOUD',
      featureBullet: 'CSS Subgrid + View Transitions',
      swatches: [
        { hex: '#0A0B0E', label: 'Obsidian #0A0B0E' },
        { hex: '#FF6A1A', label: 'Signal Orange #FF6A1A' },
        { hex: '#F5F6F8', label: 'Chalk White #F5F6F8' },
      ],
      typefaces: ['Plus Jakarta Sans', 'JetBrains Mono'],
      pageCount: 16,
      gridRowRole: 'top-2col',
      emdashCollection: 'agency_case_studies',
      domNodesCount: 342,
      cssPayloadKb: '7.4 KB',
      routesIncluded: ['/', '/work/[slug]', '/scope-estimator', '/colophon', '/changelog'],
      previewAlt: 'Wireframe blueprint of Monolith Studio OS showing split hero and case-study grid.',
      previewSvgDataUri: buildBlueprintDataUri({
        id: '01',
        bg: '#090A0D',
        panel: '#12151C',
        accent: '#FF6A1A',
        secondary: '#3A404D',
        layoutKind: 'split-hero',
        coordLabel: 'VERTEX // 01-A',
        headerText: '16 ROUTES // SUBGRID',
        metricText: '7.4 KB CSS',
      }),
    },
    {
      id: 'tpl-vertex-02',
      slug: 'vector-cloud-control',
      title: 'Vector Cloud Control',
      subtitle: 'Developer infrastructure storefront with live pricing matrices and changelog feed.',
      featured: true,
      tier: 'PREMIUM',
      price: 95,
      priceDisplay: '$95',
      industry: 'software-saas',
      industryLabel: 'Software & SaaS',
      styleTag: 'DENSE',
      featureBullet: 'Typed EmDash Pricing Matrix',
      swatches: [
        { hex: '#0B0E14', label: 'Deep Slate #0B0E14' },
        { hex: '#22D3EE', label: 'Cyan Trace #22D3EE' },
        { hex: '#E2E8F0', label: 'Zinc Light #E2E8F0' },
      ],
      typefaces: ['Space Grotesk', 'IBM Plex Mono'],
      pageCount: 22,
      gridRowRole: 'top-2col',
      emdashCollection: 'saas_release_matrix',
      domNodesCount: 418,
      cssPayloadKb: '8.9 KB',
      routesIncluded: ['/', '/pricing', '/benchmarks', '/docs/[...slug]', '/status', '/security'],
      previewAlt: 'Wireframe blueprint of Vector Cloud Control showing telemetry graph and sidebar layout.',
      previewSvgDataUri: buildBlueprintDataUri({
        id: '02',
        bg: '#080B10',
        panel: '#101620',
        accent: '#22D3EE',
        secondary: '#334155',
        layoutKind: 'telemetry-grid',
        coordLabel: 'VERTEX // 02-B',
        headerText: '22 ROUTES // TELEMETRY',
        metricText: '8.9 KB CSS',
      }),
    },
    {
      id: 'tpl-vertex-03',
      slug: 'kinetix-field-notes',
      title: 'Kinetix Field Notes',
      subtitle: 'Footnote-first technical notebook with bidirectional citations and local search index.',
      featured: false,
      tier: 'FREE',
      price: 0,
      priceDisplay: '$0',
      industry: 'personal-writing',
      industryLabel: 'Personal & writing',
      styleTag: 'INDEX',
      featureBullet: 'Zero-JS Sidenote Layout',
      swatches: [
        { hex: '#121316', label: 'Graphite #121316' },
        { hex: '#FACC15', label: 'Amber Marker #FACC15' },
        { hex: '#F4F4F5', label: 'Paper White #F4F4F5' },
      ],
      typefaces: ['Newsreader', 'JetBrains Mono'],
      pageCount: 7,
      gridRowRole: 'body-3col',
      emdashCollection: 'essay_backlinks',
      domNodesCount: 194,
      cssPayloadKb: '4.2 KB',
      routesIncluded: ['/', '/notes/[slug]', '/topics', '/rss.xml'],
      previewAlt: 'Wireframe blueprint of Kinetix Field Notes showing indexed rows and sidenote column.',
      previewSvgDataUri: buildBlueprintDataUri({
        id: '03',
        bg: '#0D0E11',
        panel: '#16181D',
        accent: '#FACC15',
        secondary: '#3F3F46',
        layoutKind: 'editorial-index',
        coordLabel: 'VERTEX // 03-C',
        headerText: '07 ROUTES // ZERO-JS',
        metricText: '4.2 KB CSS',
      }),
    },
    {
      id: 'tpl-vertex-04',
      slug: 'datum-hardware-spec',
      title: 'Datum Hardware Spec',
      subtitle: 'Industrial datasheet catalog for audio synthesizers, PCB modules, and robotics kits.',
      featured: true,
      tier: 'PREMIUM',
      price: 79,
      priceDisplay: '$79',
      industry: 'architecture-hardware',
      industryLabel: 'Architecture & hardware',
      styleTag: 'SWISS',
      featureBullet: 'SVG Tolerance Callout Tables',
      swatches: [
        { hex: '#141413', label: 'Anodized Black #141413' },
        { hex: '#FF6A1A', label: 'International Orange #FF6A1A' },
        { hex: '#D6D3CD', label: 'Raw Aluminum #D6D3CD' },
      ],
      typefaces: ['Archivo', 'Commit Mono'],
      pageCount: 14,
      gridRowRole: 'body-3col',
      emdashCollection: 'hardware_datasheets',
      domNodesCount: 310,
      cssPayloadKb: '6.8 KB',
      routesIncluded: ['/', '/modules/[id]', '/bom-table', '/schematics', '/dealers'],
      previewAlt: 'Wireframe blueprint of Datum Hardware Spec showing three-column tolerance specification sheet.',
      previewSvgDataUri: buildBlueprintDataUri({
        id: '04',
        bg: '#0E0E0D',
        panel: '#181816',
        accent: '#FF6A1A',
        secondary: '#44403C',
        layoutKind: 'spec-sheet',
        coordLabel: 'VERTEX // 04-D',
        headerText: '14 ROUTES // DATASHEET',
        metricText: '6.8 KB CSS',
      }),
    },
    {
      id: 'tpl-vertex-05',
      slug: 'atelier-grid-archive',
      title: 'Atelier Grid Archive',
      subtitle: 'Exhibition index and architectural monograph system with keyboard-driven lightbox.',
      featured: false,
      tier: 'PREMIUM',
      price: 69,
      priceDisplay: '$69',
      industry: 'studios-agencies',
      industryLabel: 'Studios & agencies',
      styleTag: 'BRUTAL',
      featureBullet: 'Keyboard Lightbox Web Element',
      swatches: [
        { hex: '#09090B', label: 'Carbon #09090B' },
        { hex: '#A3E635', label: 'Acid Lime #A3E635' },
        { hex: '#FAFAFA', label: 'Gallery White #FAFAFA' },
      ],
      typefaces: ['Syne', 'Space Mono'],
      pageCount: 12,
      gridRowRole: 'body-3col',
      emdashCollection: 'project_monographs',
      domNodesCount: 276,
      cssPayloadKb: '5.9 KB',
      routesIncluded: ['/', '/archive', '/project/[slug]', '/index-table', '/contact'],
      previewAlt: 'Wireframe blueprint of Atelier Grid Archive showing studio reel and monograph index.',
      previewSvgDataUri: buildBlueprintDataUri({
        id: '05',
        bg: '#09090B',
        panel: '#141418',
        accent: '#A3E635',
        secondary: '#3F3F46',
        layoutKind: 'studio-reel',
        coordLabel: 'VERTEX // 05-E',
        headerText: '12 ROUTES // ARCHIVE',
        metricText: '5.9 KB CSS',
      }),
    },
    {
      id: 'tpl-vertex-06',
      slug: 'protocol-rfc-manual',
      title: 'Protocol RFC Manual',
      subtitle: 'Specification-grade documentation portal with versioned EmDash schema diffs.',
      featured: false,
      tier: 'FREE',
      price: 0,
      priceDisplay: '$0',
      industry: 'editorial-docs',
      industryLabel: 'Editorial & docs',
      styleTag: 'MONO',
      featureBullet: 'Multi-Version Schema Diffs',
      swatches: [
        { hex: '#0C0F14', label: 'Terminal Ink #0C0F14' },
        { hex: '#38BDF8', label: 'Signal Sky #38BDF8' },
        { hex: '#E2E8F0', label: 'Manual Paper #E2E8F0' },
      ],
      typefaces: ['Plus Jakarta Sans', 'Fira Code'],
      pageCount: 11,
      gridRowRole: 'body-3col',
      emdashCollection: 'rfc_specifications',
      domNodesCount: 260,
      cssPayloadKb: '5.1 KB',
      routesIncluded: ['/', '/rfc/[number]', '/diff/[v1]/[v2]', '/glossary'],
      previewAlt: 'Wireframe blueprint of Protocol RFC Manual showing indexed RFC rows.',
      previewSvgDataUri: buildBlueprintDataUri({
        id: '06',
        bg: '#0A0D12',
        panel: '#131822',
        accent: '#38BDF8',
        secondary: '#334155',
        layoutKind: 'editorial-index',
        coordLabel: 'VERTEX // 06-F',
        headerText: '11 ROUTES // RFC DOCS',
        metricText: '5.1 KB CSS',
      }),
    },
    {
      id: 'tpl-vertex-07',
      slug: 'chronicle-release-wire',
      title: 'Chronicle Release Wire',
      subtitle: 'High-frequency engineering changelog and incident postmortem publishing system.',
      featured: true,
      tier: 'PREMIUM',
      price: 75,
      priceDisplay: '$75',
      industry: 'software-saas',
      industryLabel: 'Software & SaaS',
      styleTag: 'RAW',
      featureBullet: 'RSS + JSON Feed Auto-Compiler',
      swatches: [
        { hex: '#0D0E12', label: 'Bunker #0D0E12' },
        { hex: '#FB7185', label: 'Coral Trace #FB7185' },
        { hex: '#F1F5F9', label: 'Ash White #F1F5F9' },
      ],
      typefaces: ['Instrument Sans', 'JetBrains Mono'],
      pageCount: 10,
      gridRowRole: 'body-3col',
      emdashCollection: 'changelog_entries',
      domNodesCount: 228,
      cssPayloadKb: '4.9 KB',
      routesIncluded: ['/', '/releases/[version]', '/postmortems', '/feed.json'],
      previewAlt: 'Wireframe blueprint of Chronicle Release Wire showing release timeline and telemetry.',
      previewSvgDataUri: buildBlueprintDataUri({
        id: '07',
        bg: '#0B0C10',
        panel: '#15171F',
        accent: '#FB7185',
        secondary: '#334155',
        layoutKind: 'telemetry-grid',
        coordLabel: 'VERTEX // 07-G',
        headerText: '10 ROUTES // CHANGELOG',
        metricText: '4.9 KB CSS',
      }),
    },
    {
      id: 'tpl-vertex-08',
      slug: 'paragon-foundry-specimen',
      title: 'Paragon Foundry Specimen',
      subtitle: 'Interactive OpenType variable axis tester and license tier calculator for type studios.',
      featured: false,
      tier: 'PREMIUM',
      price: 85,
      priceDisplay: '$85',
      industry: 'studios-agencies',
      industryLabel: 'Studios & agencies',
      styleTag: 'LOUD',
      featureBullet: 'Scoped Variable Font Inspector',
      swatches: [
        { hex: '#0B0B0C', label: 'Lead Black #0B0B0C' },
        { hex: '#FF6A1A', label: 'Signal Orange #FF6A1A' },
        { hex: '#ECEBE6', label: 'Specimen Warm #ECEBE6' },
      ],
      typefaces: ['Plus Jakarta Sans', 'JetBrains Mono'],
      pageCount: 15,
      gridRowRole: 'body-3col',
      emdashCollection: 'typeface_specimens',
      domNodesCount: 305,
      cssPayloadKb: '6.3 KB',
      routesIncluded: ['/', '/typefaces/[slug]', '/glyph-table', '/licensing', '/cart'],
      previewAlt: 'Wireframe blueprint of Paragon Foundry Specimen showing variable axis tester.',
      previewSvgDataUri: buildBlueprintDataUri({
        id: '08',
        bg: '#09090B',
        panel: '#141417',
        accent: '#FF6A1A',
        secondary: '#3F3F46',
        layoutKind: 'spec-sheet',
        coordLabel: 'VERTEX // 08-H',
        headerText: '15 ROUTES // OPENTYPE',
        metricText: '6.3 KB CSS',
      }),
    },
  ],
  benefits: [
    {
      id: 'why-zero-requests',
      codeRef: 'ARCH // 01',
      title: 'Zero Third-Party Requests',
      summary:
        'Every template compiles with zero external CDN calls, zero tracking pixels, and zero runtime font fetches. Assets resolve strictly from your origin.',
      metricLabel: 'EXTERNAL REQUESTS',
      metricValue: '0 HTTP calls',
      specSnippet: 'Content-Security-Policy: default-src \'self\'; font-src \'self\'; connect-src \'self\'',
      emphasized: true,
    },
    {
      id: 'why-custom-elements',
      codeRef: 'ARCH // 02',
      title: 'Scoped Custom Elements',
      summary:
        'Interactive islands (accordions, filter matrices, lightboxes, and cart drawers) mount as native Custom Web Elements without shipping a 45 KB UI runtime.',
      metricLabel: 'CLIENT HYDRATION',
      metricValue: '< 3.8 KB gzip',
      specSnippet: 'customElements.define(\'cv-storefront\', CvStorefrontElement)',
    },
    {
      id: 'why-gdpr-typography',
      codeRef: 'ARCH // 03',
      title: 'GDPR Compliant Typography',
      summary:
        'Variable WOFF2 font subsets are self-hosted with pre-computed fallback metrics, preventing IP leakage to third-party font servers and eliminating layout shift.',
      metricLabel: 'FONT SUBSETTING',
      metricValue: 'Self-hosted WOFF2',
      specSnippet: 'font-display: swap; size-adjust: 100.4%; ascent-override: 94%',
    },
    {
      id: 'why-emdash-schema',
      codeRef: 'ARCH // 04',
      title: 'Typed EmDash Content Layer',
      summary:
        'Each template ships with strict EmDash CMS collection schemas and build-time TypeScript validation so malformed CMS payloads fail before deployment.',
      metricLabel: 'SCHEMA VALIDATION',
      metricValue: '100% Typed AST',
      specSnippet: 'defineCollection({ loader: emdashLoader({ collection: "cv_templates" }) })',
    },
  ],
  faqs: [
    {
      id: 'faq-emdash-sync',
      category: 'CMS INTEGRATION',
      question: 'How do these templates connect to an existing EmDash CMS workspace?',
      answer:
        'Every template includes a pre-configured src/content.config.ts wired to the EmDash Content Layer loader. Set EMDASH_PROJECT_ID and EMDASH_READ_TOKEN in your .env file, or run in local snapshot mode using the bundled JSON fixtures during offline development.',
    },
    {
      id: 'faq-tailwind-v4',
      category: 'STYLING ENGINE',
      question: 'Do the templates rely on legacy tailwind.config.js files or Tailwind CSS v4 CSS-first tokens?',
      answer:
        'All templates are authored strictly for Tailwind CSS v4 using @tailwindcss/vite and CSS custom properties in src/styles/global.css. There are no legacy CommonJS config files or deprecated plugin wrappers.',
    },
    {
      id: 'faq-custom-elements',
      category: 'INTERACTIVITY',
      question: 'Why use native Custom Web Elements instead of React or Vue islands?',
      answer:
        'Storefront filters, drawers, and accordions only need DOM state synchronization and keyboard event handling. Native Custom Elements execute immediately without framework hydration overhead, avoiding global ID collisions when multiple instances mount on the same page.',
    },
    {
      id: 'faq-bundle-license',
      category: 'LICENSING',
      question: 'What does the All-Access Bundle license permit for client agency work?',
      answer:
        'Purchasing the All-Access Bundle grants a perpetual commercial license covering unlimited production domains for both internal studio projects and paid client deliverables. You may not redistribute the raw template source as a competing template product.',
    },
    {
      id: 'faq-wcag-contrast',
      category: 'ACCESSIBILITY',
      question: 'Are both dark and light color tokens verified against WCAG 2.2 AA contrast thresholds?',
      answer:
        'Yes. Every foreground/background text pair across both dark (#0A0B0E canvas) and light (#F7F6F2 canvas) themes is verified above 4.5:1 for body copy and 3.0:1 for interactive borders and focus rings.',
    },
  ],
};

export const totalCatalogRetailValue = emdashStorefrontData.templates.reduce(
  (sum, item) => sum + item.price,
  0
);

export const bundleDiscountPrice = Math.round(totalCatalogRetailValue * 0.5);
