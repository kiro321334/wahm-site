export const nav = [
  ["reel", "Showreel"],
  ["about", "About"],
  ["work", "Work"],
  ["create", "Styles"],
  ["process", "Process"],
  ["contact", "Contact"],
];
export const heroStats = [
  ["4 Years", "EXPERIENCE"],
  ["6", "STYLES"],
  ["3", "CORE TOOLS"],
];
export const pillars = [
  ["portal", "PORTAL", "Beyond reality"],
  ["cube", "DIMENSION", "Imagined worlds"],
  ["focus", "FOCUS", "Precision & intent"],
  ["spark", "CREATION", "Bringing to life"],
];
export const tools = ["After Effects", "Blender", "DaVinci Resolve"];
export const filters = [
  "All",
  "3D Animation",
  "Animation",
  "Blender",
  "Intro",
  "Motion Graphics",
  "Promo & Ads",
];

const p = (dir, title, cat, brief, count, reel = false) => {
  const base = `/work/${encodeURIComponent(dir)}`;
  return {
    id: dir,
    title,
    cat,
    brief,
    count,
    reel,
    cover: `${base}/cover.jpg`,
    videos: Array.from({ length: count }, (_, i) => `${base}/${i + 1}.mp4`),
  };
};

export const projects = [
  p(
    "3d-Animation",
    "3D Animation",
    "3D Animation",
    "CGI worlds, textured objects and 3D camera staging.",
    9,
  ),
  p(
    "Animation",
    "Animation",
    "Animation",
    "Character and object animation with polished timing and motion.",
    12,
  ),
  p(
    "blender",
    "Blender Works",
    "Blender",
    "Photoreal modeling, procedural shading, lighting and simulation in Blender.",
    8,
  ),
  p(
    "intro",
    "Intros",
    "Intro",
    "Short, punchy intros and logo reveals built for channels and brands.",
    11,
  ),
  p(
    "Motion-graphic",
    "Motion Graphics",
    "Motion Graphics",
    "Clean animated typography, vector geometry and kinetic graphic systems.",
    15,
  ),
  p(
    "Promo - Ads",
    "Promo & Ads",
    "Promo & Ads",
    "High-impact promos and ad spots calibrated for attention and conversion.",
    3,
  ),
];

export const create = [
  [
    "film",
    "CINEMATIC",
    "Moody, story-driven edits with deep color, pacing, and intentional lighting.",
  ],
  [
    "bolt",
    "ACTION AND HYPE",
    "Fast, punchy cuts built around rhythm, kinetic motion and high impact.",
  ],
  [
    "grid",
    "MOTION GRAPHICS",
    "Clean animated typography, vector geometry and kinetic graphic systems.",
  ],
  [
    "globe",
    "ANIMATION AND 3D",
    "CGI worlds, photorealistic textured objects, simulation and 3D camera staging.",
  ],
  [
    "phone",
    "REELS",
    "Vertical, scroll-stopping short-form video calibrated for virality and high retention.",
  ],
  [
    "file",
    "DOCUMENTARY",
    "Authentic stories shaped with care, nuanced color grading and audio richness.",
  ],
];
export const pipeline = [
  [
    "Ae",
    "AFTER EFFECTS",
    "Advanced compositing, visual effects, rotoscoping, track matte integration, and complex motion design.",
  ],
  [
    "3D",
    "BLENDER",
    "Photoreal 3D modeling, procedural shading, lighting simulation, CGI particle systems and camera rigging.",
  ],
  [
    "Dv",
    "DAVINCI RESOLVE",
    "Precision narrative editing, industry standard ACES color grading, HDR mastering, and sound finishing.",
  ],
];
export const steps = [
  [
    "WE IMAGINE",
    "Concept & Direction",
    "Nothing limits our vision. We deconstruct the brief, develop mood boards, and outline creative rhythm before touching the timeline.",
  ],
  [
    "WE CRAFT",
    "Assembly & VFX",
    "With precision and purpose. Building rough cuts, assembling 3D assets, comping layers and dialing in the sonic landscape.",
  ],
  [
    "WE INSPIRE",
    "Color Grade & Polish",
    "Emotions that leave a mark. Transforming raw scenes into cinematic moods through nuanced color palettes, glow passes and sound design.",
  ],
  [
    "WE DELIVER",
    "Master Finishing",
    "Excellence in every frame. Flawless exports across ProRes 4444, social 9:16 cuts, and cinema deliverable formats.",
  ],
];
export const faqs = [
  [
    "What do you need from me to start?",
    "A creative brief or mood board, your footage/assets via cloud link (Drive, Dropbox, Frame.io), target resolution/aspect ratios, and any specific audio tracks or brand guidelines you have.",
  ],
  [
    "How long does a project take?",
    "Short reels take 2–4 days, branded films 1–2 weeks, and 3D/CGI projects 2–4 weeks depending on complexity.",
  ],
  [
    "Do you work with footage I provide, or create 3D from scratch?",
    "Both. We edit and enhance your footage, or build 3D worlds and assets from scratch in Blender.",
  ],
  [
    "How many revisions are included?",
    "Two focused revision rounds are included in every project. Extra rounds can be added if needed.",
  ],
  [
    "Which formats do you deliver?",
    "ProRes 4444 masters, H.264/H.265 web exports, and social cuts in 9:16, 1:1 and 16:9.",
  ],
];
export const projectTypes = [
  "Cinematic",
  "Action & Hype",
  "Motion Graphics",
  "Animation & 3D",
  "Reels",
  "Documentary",
];
