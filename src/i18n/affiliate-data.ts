import type { Locale } from "./config";

export type MerchantKey = "shopee" | "tiktok" | "lazada" | "official";
export type BadgeKey = "best" | "value" | "limited" | "gift" | "deal" | "new";
export type Bi<T = string> = Record<Locale, T>;

export type BestPickSlot =
  | "bestOverall"
  | "bestBudget"
  | "bestForGift"
  | "bestForDesk"
  | "bestLimited"
  | "bestCute";

export type AffiliateFaq = { q: Bi; a: Bi };

export type MerchantOffer = {
  url: string;
  price?: string;
  couponNote?: Bi;
  shippingNote?: Bi;
};

export type AffiliateSpec = {
  scale?: string;
  material?: string;
  size?: string;
  weight?: string;
  origin?: string;
  power?: string;
};

export type AffiliateProduct = {
  id: string;
  slug?: string;
  name: Bi;
  cat: Bi;
  catSlug: string;
  description?: Bi;
  price: string;
  priceLow: string;
  score: number;
  stars: number;
  reviews: number;
  badge: BadgeKey | null;
  tags: Bi<string[]>;
  why: Bi;
  pros?: Bi<string[]>;
  cons?: Bi<string[]>;
  bestFor?: Bi<string[]>;
  specs?: Bi<AffiliateSpec>;
  merchants: MerchantKey[];
  merchantOffers?: Partial<Record<MerchantKey, MerchantOffer>>;
  relatedIds?: string[];
  bestPickFor?: BestPickSlot;
  images?: string[];
  faqs?: AffiliateFaq[];
  ph: { a: string; b: string };
};

export type AffiliateDeal = {
  pid: string;
  old: string;
  now: string;
  pct: string;
  merchant: MerchantKey;
  at: string;
  coupon?: string;
  endsAt?: string;
  note?: Bi;
};

export type AffiliateCategory = {
  slug: string;
  vi: string;
  en: string;
  desc: Bi;
  count: number;
  badge: "best" | "limited" | "new" | null;
  ph: { a: string; b: string };
};

export type AffiliateArticleSection = {
  heading: Bi;
  content: Bi;
};

export type AffiliateAuthor = {
  name: string;
  role: Bi;
};

export type AffiliateArticle = {
  id: string;
  slug?: string;
  cat: Bi;
  title: Bi;
  excerpt: Bi;
  read: number;
  updated: Bi;
  ph: { a: string; b: string };
  body?: AffiliateArticleSection[];
  relatedProductIds?: string[];
  faqs?: AffiliateFaq[];
  author?: AffiliateAuthor;
};

export type AffiliateTestimonial = {
  name: string;
  loc: string;
  quote: Bi;
  stars: string;
};

export type AffiliateCompareSpec = {
  key: string;
  label: Bi;
};

export const MERCHANTS: Record<MerchantKey, { label: string; short: string }> = {
  shopee:   { label: "Shopee",         short: "S" },
  tiktok:   { label: "TikTok Shop",    short: "T" },
  lazada:   { label: "Lazada",         short: "L" },
  official: { label: "Official Store", short: "O" },
};

export const COMPARE_SPECS: AffiliateCompareSpec[] = [
  { key: "scale",    label: { vi: "Tỉ lệ",       en: "Scale" } },
  { key: "material", label: { vi: "Chất liệu",   en: "Material" } },
  { key: "size",     label: { vi: "Kích thước",  en: "Size" } },
  { key: "weight",   label: { vi: "Trọng lượng", en: "Weight" } },
  { key: "origin",   label: { vi: "Xuất xứ",     en: "Origin" } },
];

export const AFFILIATE_DATA = {
  products: [
    {
      id: "astro-pilot",
      slug: "astro-pilot-ver-blue",
      name: { vi: "Astro Pilot — Ver. Blue", en: "Astro Pilot — Ver. Blue" },
      cat: { vi: "Figure Anime · 1/7", en: "Anime Figure · 1/7" },
      catSlug: "anime-figures",
      description: {
        vi: "Figure phi hành gia 1/7 với sơn chuyển sắc xanh ngọc, đứng vững không cần đế phụ. Cân bằng nhất giữa chi tiết và giá ở phân khúc dưới 2 triệu.",
        en: "1/7 astronaut figure with iridescent blue paint that holds its stance without an extra base. The best balance of detail and value under 2M VND.",
      },
      price: "1.690.000 – 1.890.000₫",
      priceLow: "1.690.000₫",
      score: 9.4,
      stars: 4.8,
      reviews: 124,
      badge: "best",
      tags: {
        vi: ["Cute", "Premium", "Bàn làm việc"],
        en: ["Cute", "Premium", "Desk Setup"],
      },
      why: {
        vi: "Tỉ lệ chi tiết tốt nhất trong phân khúc dưới 2 triệu, đứng vững không cần đế phụ.",
        en: "Best paint detail under 2M, stands rock-solid without an extra base.",
      },
      pros: {
        vi: ["Sơn chuyển sắc rất sạch", "Đế cân bằng tốt", "Hộp đi kèm chắc chắn"],
        en: ["Crisp iridescent paint", "Well-balanced base", "Solid retail box"],
      },
      cons: {
        vi: ["Khớp tay khá cứng lúc mới", "Hết hàng nhanh khi có deal"],
        en: ["Joints stiff out of the box", "Sells out fast on deals"],
      },
      bestFor: {
        vi: ["Người mới sưu tầm", "Trưng bày bàn làm việc", "Quà cho fan anime"],
        en: ["First-time collectors", "Desk display", "Gift for anime fans"],
      },
      specs: {
        vi: { scale: "1/7", material: "PVC + ABS", size: "240mm", weight: "480g", origin: "Nhật Bản" },
        en: { scale: "1/7", material: "PVC + ABS", size: "240mm", weight: "480g", origin: "Japan" },
      },
      merchants: ["shopee", "tiktok", "lazada"],
      merchantOffers: {
        shopee:   { url: "https://shopee.vn/i/astro-pilot",        price: "1.690.000₫", couponNote: { vi: "Mã GIODI giảm 50K", en: "Code GIODI saves 50K" } },
        tiktok:   { url: "https://shop.tiktok.com/p/astro-pilot",  price: "1.790.000₫" },
        lazada:   { url: "https://lazada.vn/p/astro-pilot",        price: "1.890.000₫", shippingNote: { vi: "LazMall · ship 3-5 ngày", en: "LazMall · 3-5 day shipping" } },
      },
      relatedIds: ["neon-ronin", "mecha-drifter"],
      bestPickFor: "bestOverall",
      faqs: [
        { q: { vi: "Figure có cần đế phụ không?", en: "Does the figure need an extra base?" },
          a: { vi: "Không. Đế nguyên bản đã cân bằng tốt cho toàn bộ tư thế.", en: "No. The bundled base balances the full pose on its own." } },
        { q: { vi: "Có thay được tay phụ kiện?", en: "Are the hands swappable?" },
          a: { vi: "Có. Hộp đi kèm 2 cặp tay thay thế.", en: "Yes. The box ships with 2 spare hand pairs." } },
      ],
      ph: { a: "var(--accent)", b: "var(--primary)" },
    },
    {
      id: "gt-roadster-67",
      slug: "gt-roadster-67",
      name: { vi: "GT Roadster '67", en: "GT Roadster '67" },
      cat: { vi: "Xe mô hình · 1:64", en: "Mini Car · 1:64" },
      catSlug: "mini-cars",
      description: {
        vi: "Diecast 1:64 đúc kim loại nặng tay, sơn nhám cao cấp hiếm thấy ở tầm giá dưới 800K.",
        en: "Heavy 1:64 diecast with matte finish — rare quality at the sub-800K price point.",
      },
      price: "580.000 – 720.000₫",
      priceLow: "580.000₫",
      score: 8.9,
      stars: 4.7,
      reviews: 86,
      badge: "value",
      tags: { vi: ["Diecast", "Vintage", "Quà tặng"], en: ["Diecast", "Vintage", "Gift"] },
      why: {
        vi: "Đúc kim loại nặng tay, sơn nhám cao cấp — hiếm thấy ở tầm giá này.",
        en: "Heavy diecast body and matte paint job — rare at this price.",
      },
      pros: {
        vi: ["Sơn nhám cao cấp", "Đế trưng bày đi kèm"],
        en: ["Premium matte finish", "Display base included"],
      },
      cons: {
        vi: ["Bánh xe nhựa, không lăn được mượt"],
        en: ["Plastic wheels don't roll smoothly"],
      },
      bestFor: {
        vi: ["Quà tặng dưới 800K", "Bàn học/desk nhỏ"],
        en: ["Gifts under 800K", "Compact desks"],
      },
      specs: {
        vi: { scale: "1:64", material: "Hợp kim kẽm", size: "70mm", weight: "85g", origin: "Trung Quốc" },
        en: { scale: "1:64", material: "Zinc alloy",   size: "70mm", weight: "85g", origin: "China" },
      },
      merchants: ["shopee", "tiktok"],
      merchantOffers: {
        shopee: { url: "https://shopee.vn/i/gt-roadster-67",       price: "580.000₫" },
        tiktok: { url: "https://shop.tiktok.com/p/gt-roadster-67", price: "499.000₫", couponNote: { vi: "Voucher livestream 80K", en: "Live voucher 80K" } },
      },
      relatedIds: ["rally-coupe", "ocean-explorer"],
      bestPickFor: "bestBudget",
      ph: { a: "#FF6F1E", b: "var(--primary)" },
    },
    {
      id: "sage-hollow",
      slug: "sage-of-the-hollow",
      name: { vi: "Sage of the Hollow", en: "Sage of the Hollow" },
      cat: { vi: "Fantasy · 1/6 resin", en: "Fantasy · 1/6 resin" },
      catSlug: "fantasy-worlds",
      description: {
        vi: "Resin 1/6 đánh số 350 bản, sơn tay từng diorama, đi kèm chứng nhận chính hãng (COA).",
        en: "Numbered 1/6 resin (limited to 350), hand-painted dioramas, ships with a certificate of authenticity.",
      },
      price: "2.300.000 – 2.650.000₫",
      priceLow: "2.300.000₫",
      score: 9.1,
      stars: 4.9,
      reviews: 42,
      badge: "limited",
      tags: { vi: ["Limited", "Resin", "Trưng bày"], en: ["Limited", "Resin", "Display"] },
      why: {
        vi: "Đánh số 350 bản — sơn tay từng diorama, hộp đi kèm chứng nhận.",
        en: "Numbered run of 350 — hand-painted with COA.",
      },
      pros: {
        vi: ["Sơn tay từng bản", "Đi kèm COA đánh số", "Đế gỗ thật"],
        en: ["Each piece hand-painted", "Numbered COA included", "Solid wood base"],
      },
      cons: {
        vi: ["Hộp nặng, ship xa phải gia cố", "Khó tìm lại sau khi sold-out"],
        en: ["Heavy box, needs reinforced shipping", "Hard to find post-launch"],
      },
      bestFor: {
        vi: ["Người sưu tầm cao cấp", "Trưng bày tủ kính"],
        en: ["Advanced collectors", "Glass-cabinet display"],
      },
      specs: {
        vi: { scale: "1/6", material: "Resin",   size: "320mm", weight: "1.8kg", origin: "Việt Nam (xưởng riêng)" },
        en: { scale: "1/6", material: "Resin",   size: "320mm", weight: "1.8kg", origin: "Vietnam (in-house studio)" },
      },
      merchants: ["official"],
      merchantOffers: {
        official: { url: "https://shop.giodicho.example/sage-of-the-hollow", price: "2.450.000₫", shippingNote: { vi: "Đóng gói hộp gỗ riêng", en: "Ships in custom wooden crate" } },
      },
      relatedIds: ["cloud-castle", "frost-warrior"],
      bestPickFor: "bestLimited",
      ph: { a: "var(--accent-2)", b: "var(--primary)" },
    },
    {
      id: "desk-lantern",
      slug: "desk-lantern-mini",
      name: { vi: "Desk Lantern Mini", en: "Desk Lantern Mini" },
      cat: { vi: "Decor bàn làm việc", en: "Desk Decor" },
      catSlug: "desk-decor",
      description: {
        vi: "Đèn lồng mini ánh sáng ấm, dùng pin AAA — hợp đặt bàn làm việc hoặc đầu giường ban đêm.",
        en: "Mini lantern with warm glow, AAA-powered — fits desks or bedside nightstands.",
      },
      price: "320.000 – 380.000₫",
      priceLow: "320.000₫",
      score: 8.5,
      stars: 4.6,
      reviews: 217,
      badge: "gift",
      tags: { vi: ["Đèn", "Quà tặng", "Cute"], en: ["Light", "Gift", "Cute"] },
      why: {
        vi: "Ánh sáng ấm, dùng pin AAA — đặt bàn làm việc ban đêm rất hợp.",
        en: "Warm glow, AAA-powered — perfect bedside or desk ambient.",
      },
      pros: {
        vi: ["Ánh sáng dịu mắt", "Có timer hẹn 1/3/5h"],
        en: ["Eye-friendly glow", "1/3/5h timer"],
      },
      cons: {
        vi: ["Không kèm pin", "Nút chỉnh nhỏ"],
        en: ["Batteries not included", "Small toggle button"],
      },
      bestFor: {
        vi: ["Quà tặng dưới 500K", "Decor bàn làm việc", "Ánh sáng đầu giường"],
        en: ["Gifts under 500K", "Desk décor", "Bedside ambient light"],
      },
      specs: {
        vi: { material: "Kim loại + giấy washi", size: "120mm cao", weight: "180g", power: "3× AAA", origin: "Nhật Bản" },
        en: { material: "Metal + washi paper",   size: "120mm tall", weight: "180g", power: "3× AAA", origin: "Japan" },
      },
      merchants: ["shopee", "tiktok", "lazada"],
      merchantOffers: {
        shopee: { url: "https://shopee.vn/i/desk-lantern-mini",        price: "320.000₫" },
        tiktok: { url: "https://shop.tiktok.com/p/desk-lantern-mini",  price: "299.000₫" },
        lazada: { url: "https://lazada.vn/p/desk-lantern-mini",        price: "249.000₫", couponNote: { vi: "LazMall sale -34%", en: "LazMall sale -34%" } },
      },
      relatedIds: ["brass-stand", "study-buddy"],
      bestPickFor: "bestForGift",
      ph: { a: "#FFB86B", b: "var(--accent)" },
    },
    {
      id: "mecha-drifter",
      slug: "mecha-drifter-x9",
      name: { vi: "Mecha Drifter X9", en: "Mecha Drifter X9" },
      cat: { vi: "Figure Anime · 1/8", en: "Anime Figure · 1/8" },
      catSlug: "anime-figures",
      description: {
        vi: "Mecha 1/8 với 32 khớp cử động linh hoạt, đi kèm 3 set vũ khí thay đổi tùy pose.",
        en: "1/8 mecha with 32 articulated joints and 3 swappable weapon sets for varied poses.",
      },
      price: "1.500.000 – 1.700.000₫",
      priceLow: "1.500.000₫",
      score: 8.9,
      stars: 4.8,
      reviews: 73,
      badge: "new",
      tags: { vi: ["Mecha", "Diecast", "Khớp"], en: ["Mecha", "Diecast", "Articulated"] },
      why: {
        vi: "Khớp linh hoạt 32 điểm, đi kèm 3 set vũ khí thay đổi.",
        en: "32 articulated joints with 3 swappable weapon sets.",
      },
      pros: {
        vi: ["Khớp giữ tư thế chắc", "3 set vũ khí đi kèm"],
        en: ["Joints hold pose firmly", "3 weapon sets bundled"],
      },
      cons: {
        vi: ["Decal phải tự dán", "Pose cần kiên nhẫn"],
        en: ["Decals are user-applied", "Posing takes patience"],
      },
      bestFor: {
        vi: ["Fan mecha/gunpla", "Người thích pose figure"],
        en: ["Mecha/Gunpla fans", "Posing enthusiasts"],
      },
      specs: {
        vi: { scale: "1/8", material: "ABS + diecast", size: "210mm", weight: "560g", origin: "Trung Quốc" },
        en: { scale: "1/8", material: "ABS + diecast", size: "210mm", weight: "560g", origin: "China" },
      },
      merchants: ["shopee", "tiktok"],
      merchantOffers: {
        shopee: { url: "https://shopee.vn/i/mecha-drifter-x9",       price: "1.500.000₫" },
        tiktok: { url: "https://shop.tiktok.com/p/mecha-drifter-x9", price: "1.290.000₫", couponNote: { vi: "Voucher livestream -24%", en: "Live voucher -24%" } },
      },
      relatedIds: ["astro-pilot", "neon-ronin"],
      ph: { a: "var(--primary)", b: "var(--accent)" },
    },
    {
      id: "rally-coupe",
      slug: "rally-coupe-vintage",
      name: { vi: "Rally Coupe Vintage", en: "Rally Coupe Vintage" },
      cat: { vi: "Xe mô hình · 1:43", en: "Mini Car · 1:43" },
      catSlug: "mini-cars",
      description: {
        vi: "Xe rally 1:43 với decal in offset thật, cửa và mui mở được — bất ngờ ở tầm giá.",
        en: "1:43 rally car with real offset-printed decals, opening doors and hood — wild at this price.",
      },
      price: "520.000 – 640.000₫",
      priceLow: "520.000₫",
      score: 8.7,
      stars: 4.7,
      reviews: 51,
      badge: null,
      tags: { vi: ["Rally", "Decals", "Bàn học"], en: ["Rally", "Decals", "Study Desk"] },
      why: {
        vi: "Decal in offset thật, cửa và mui mở được — bất ngờ ở tầm giá.",
        en: "Offset-printed decals, opening doors and hood — wild for the price.",
      },
      pros: {
        vi: ["Cửa, mui, cốp mở được", "Decal in offset bền màu"],
        en: ["Opening doors, hood, trunk", "Color-stable offset decals"],
      },
      cons: {
        vi: ["Bản lề mảnh, mở nhẹ tay"],
        en: ["Delicate hinges — open gently"],
      },
      bestFor: {
        vi: ["Bàn học/desk decor", "Người thích rally"],
        en: ["Study-desk décor", "Rally fans"],
      },
      specs: {
        vi: { scale: "1:43", material: "Hợp kim kẽm", size: "105mm", weight: "140g", origin: "Trung Quốc" },
        en: { scale: "1:43", material: "Zinc alloy",   size: "105mm", weight: "140g", origin: "China" },
      },
      merchants: ["shopee", "lazada"],
      merchantOffers: {
        shopee: { url: "https://shopee.vn/i/rally-coupe-vintage", price: "520.000₫" },
        lazada: { url: "https://lazada.vn/p/rally-coupe-vintage", price: "479.000₫" },
      },
      relatedIds: ["gt-roadster-67", "ocean-explorer"],
      ph: { a: "var(--accent)", b: "var(--accent-2)" },
    },
    {
      id: "cloud-castle",
      slug: "cloud-castle-diorama",
      name: { vi: "Cloud Castle Diorama", en: "Cloud Castle Diorama" },
      cat: { vi: "Fantasy · Diorama", en: "Fantasy · Diorama" },
      catSlug: "fantasy-worlds",
      description: {
        vi: "Diorama lâu đài bay với hiệu ứng LED chìm trong mây, đế gỗ óc chó — đỉnh cao trưng bày.",
        en: "Floating-castle diorama with hidden LED cloud effects on a walnut base — showcase-tier piece.",
      },
      price: "3.100.000 – 3.450.000₫",
      priceLow: "3.100.000₫",
      score: 9.3,
      stars: 4.9,
      reviews: 28,
      badge: "limited",
      tags: { vi: ["Limited", "LED", "Diorama"], en: ["Limited", "LED", "Diorama"] },
      why: {
        vi: "Hiệu ứng LED chìm trong mây, đế gỗ óc chó — đỉnh cao trưng bày.",
        en: "Hidden LED cloud effects on walnut base — showcase-tier piece.",
      },
      pros: {
        vi: ["LED ấm chìm trong mây", "Đế gỗ óc chó thật"],
        en: ["Warm LEDs hidden in clouds", "Real walnut base"],
      },
      cons: {
        vi: ["Cần ổ cắm gần", "Khó di chuyển sau lắp"],
        en: ["Needs nearby outlet", "Hard to move once placed"],
      },
      bestFor: {
        vi: ["Trưng bày phòng khách", "Sưu tầm cao cấp"],
        en: ["Living-room centerpiece", "Advanced collecting"],
      },
      specs: {
        vi: { material: "Resin + gỗ óc chó", size: "420mm",  weight: "3.2kg", power: "USB 5V",  origin: "Việt Nam" },
        en: { material: "Resin + walnut",    size: "420mm",  weight: "3.2kg", power: "USB 5V",  origin: "Vietnam" },
      },
      merchants: ["official", "tiktok"],
      merchantOffers: {
        official: { url: "https://shop.giodicho.example/cloud-castle-diorama", price: "3.100.000₫", shippingNote: { vi: "Ship riêng, có bảo hiểm", en: "White-glove insured ship" } },
        tiktok:   { url: "https://shop.tiktok.com/p/cloud-castle-diorama",     price: "3.250.000₫" },
      },
      relatedIds: ["sage-hollow", "frost-warrior"],
      ph: { a: "var(--accent-2)", b: "var(--primary)" },
    },
    {
      id: "brass-stand",
      slug: "brass-stand-no-5",
      name: { vi: "Brass Stand No.5", en: "Brass Stand No.5" },
      cat: { vi: "Decor bàn làm việc", en: "Desk Decor" },
      catSlug: "desk-decor",
      description: {
        vi: "Bệ đỡ figure bằng đồng thau, đỡ được mọi figure từ 1/12 đến 1/7, chắc và không trượt.",
        en: "Brass figure stand that holds 1/12 to 1/7 figures — solid and non-slip.",
      },
      price: "210.000 – 260.000₫",
      priceLow: "210.000₫",
      score: 8.2,
      stars: 4.6,
      reviews: 145,
      badge: "value",
      tags: { vi: ["Đồng thau", "Đa năng"], en: ["Brass", "Versatile"] },
      why: {
        vi: "Đứng được mọi figure 1/12 đến 1/7 — bệ đỡ chắc, không trượt.",
        en: "Holds 1/12 to 1/7 figures — solid, non-slip base.",
      },
      pros: {
        vi: ["Đồng thau thật, lên màu đẹp", "Đáy nỉ chống trượt"],
        en: ["Real brass with nice patina", "Felt-lined anti-slip base"],
      },
      cons: {
        vi: ["Hơi nặng cho figure nhỏ"],
        en: ["A bit heavy for small figures"],
      },
      bestFor: {
        vi: ["Mọi bộ sưu tập figure", "Bàn làm việc"],
        en: ["Any figure collection", "Desk setup"],
      },
      specs: {
        vi: { material: "Đồng thau", size: "80×80mm", weight: "210g", origin: "Đài Loan" },
        en: { material: "Brass",     size: "80×80mm", weight: "210g", origin: "Taiwan" },
      },
      merchants: ["shopee", "tiktok", "lazada"],
      merchantOffers: {
        shopee: { url: "https://shopee.vn/i/brass-stand-no-5",        price: "210.000₫", couponNote: { vi: "Mua 2 giảm 10%", en: "Buy 2 save 10%" } },
        tiktok: { url: "https://shop.tiktok.com/p/brass-stand-no-5",  price: "229.000₫" },
        lazada: { url: "https://lazada.vn/p/brass-stand-no-5",        price: "260.000₫" },
      },
      relatedIds: ["desk-lantern", "study-buddy"],
      bestPickFor: "bestForDesk",
      ph: { a: "var(--accent)", b: "var(--text-3)" },
    },
    {
      id: "neon-ronin",
      slug: "neon-ronin-crimson",
      name: { vi: "Neon Ronin — Ver. Crimson", en: "Neon Ronin — Crimson Ver." },
      cat: { vi: "Figure Anime · 1/7", en: "Anime Figure · 1/7" },
      catSlug: "anime-figures",
      description: {
        vi: "Figure ronin 1/7 với LED âm thân và kiếm phát sáng — phiên bản giới hạn 800 bản.",
        en: "1/7 ronin figure with embedded LEDs and a glowing katana — limited to 800 units.",
      },
      price: "2.100.000 – 2.400.000₫",
      priceLow: "2.100.000₫",
      score: 9.0,
      stars: 4.8,
      reviews: 64,
      badge: "best",
      tags: { vi: ["Neon", "Limited", "1/7"], en: ["Neon", "Limited", "1/7"] },
      why: {
        vi: "LED âm, kiếm phát sáng — bản giới hạn 800.",
        en: "Embedded LEDs, glowing sword — limited to 800 units.",
      },
      pros: {
        vi: ["LED không lộ dây", "Đánh số 800 bản"],
        en: ["Hidden LED wiring", "Numbered run of 800"],
      },
      cons: {
        vi: ["Cần thay pin nút áo", "Giá cao hơn bản thường"],
        en: ["Coin-cell battery swap needed", "Pricier than standard ver."],
      },
      bestFor: {
        vi: ["Sưu tầm anime cao cấp", "Trưng bày tối"],
        en: ["High-end anime collecting", "Low-light display"],
      },
      specs: {
        vi: { scale: "1/7", material: "PVC + ABS + LED", size: "260mm", weight: "620g", origin: "Nhật Bản" },
        en: { scale: "1/7", material: "PVC + ABS + LED", size: "260mm", weight: "620g", origin: "Japan" },
      },
      merchants: ["official", "shopee"],
      merchantOffers: {
        official: { url: "https://shop.giodicho.example/neon-ronin-crimson", price: "2.100.000₫" },
        shopee:   { url: "https://shopee.vn/i/neon-ronin-crimson",           price: "2.400.000₫" },
      },
      relatedIds: ["astro-pilot", "mecha-drifter"],
      ph: { a: "var(--danger)", b: "var(--primary)" },
    },
    {
      id: "study-buddy",
      slug: "study-buddy-capybara",
      name: { vi: "Study Buddy Capybara", en: "Study Buddy Capybara" },
      cat: { vi: "Cute · Desk", en: "Cute · Desk" },
      catSlug: "desk-decor",
      description: {
        vi: "Capybara mini cute, 5 màu lựa chọn, vỏ resin thân thiện — best-seller quà tặng dưới 250K.",
        en: "Mini capybara in 5 colors with a friendly resin shell — a sub-250K gift best-seller.",
      },
      price: "180.000 – 240.000₫",
      priceLow: "180.000₫",
      score: 8.6,
      stars: 4.7,
      reviews: 312,
      badge: "gift",
      tags: { vi: ["Cute", "Quà tặng", "Pocket"], en: ["Cute", "Gift", "Pocket"] },
      why: {
        vi: "Best-seller quà tặng — 5 màu, vỏ nhựa thân thiện.",
        en: "Gift best-seller — 5 colors, friendly resin shell.",
      },
      pros: {
        vi: ["5 màu sưu tầm", "Cầm vừa lòng bàn tay"],
        en: ["5 collectible colors", "Fits in your palm"],
      },
      cons: {
        vi: ["Đế nhỏ, dễ ngã trên bề mặt nghiêng"],
        en: ["Small base — tips on uneven surfaces"],
      },
      bestFor: {
        vi: ["Quà tặng dưới 250K", "Decor bàn nhỏ", "Bạn bè/đồng nghiệp"],
        en: ["Gifts under 250K", "Tiny desk décor", "Friends & coworkers"],
      },
      specs: {
        vi: { material: "Resin", size: "55mm", weight: "60g", origin: "Việt Nam" },
        en: { material: "Resin", size: "55mm", weight: "60g", origin: "Vietnam" },
      },
      merchants: ["shopee", "tiktok"],
      merchantOffers: {
        shopee: { url: "https://shopee.vn/i/study-buddy-capybara",       price: "180.000₫", couponNote: { vi: "Mua 3 tặng 1", en: "Buy 3 get 1" } },
        tiktok: { url: "https://shop.tiktok.com/p/study-buddy-capybara", price: "159.000₫" },
      },
      relatedIds: ["desk-lantern", "brass-stand"],
      bestPickFor: "bestCute",
      ph: { a: "var(--accent)", b: "#FDBA74" },
    },
    {
      id: "ocean-explorer",
      slug: "ocean-explorer-sub",
      name: { vi: "Ocean Explorer Sub", en: "Ocean Explorer Sub" },
      cat: { vi: "Diecast · 1:72", en: "Diecast · 1:72" },
      catSlug: "mini-cars",
      description: {
        vi: "Tàu ngầm diecast 1:72, đúc kim loại đặc, đế acrylic kèm — chi tiết khoang lái rõ nét.",
        en: "1:72 diecast submarine with a solid metal body and bundled acrylic stand — crisp cockpit detail.",
      },
      price: "740.000 – 820.000₫",
      priceLow: "740.000₫",
      score: 8.8,
      stars: 4.7,
      reviews: 38,
      badge: null,
      tags: { vi: ["Diecast", "Ocean"], en: ["Diecast", "Ocean"] },
      why: {
        vi: "Mô hình tàu ngầm đúc kim loại đặc, đế acrylic kèm.",
        en: "Solid diecast sub with bundled acrylic stand.",
      },
      pros: {
        vi: ["Kim loại đặc, cảm giác đầm tay", "Đế acrylic trong"],
        en: ["Solid metal heft", "Clear acrylic stand"],
      },
      cons: {
        vi: ["Sơn hơi tối khi đứng xa"],
        en: ["Paint reads dark from distance"],
      },
      bestFor: {
        vi: ["Fan đại dương", "Decor bàn làm việc nam"],
        en: ["Ocean enthusiasts", "Masculine desk décor"],
      },
      specs: {
        vi: { scale: "1:72", material: "Hợp kim kẽm", size: "180mm", weight: "320g", origin: "Trung Quốc" },
        en: { scale: "1:72", material: "Zinc alloy",   size: "180mm", weight: "320g", origin: "China" },
      },
      merchants: ["shopee", "lazada"],
      merchantOffers: {
        shopee: { url: "https://shopee.vn/i/ocean-explorer-sub", price: "740.000₫" },
        lazada: { url: "https://lazada.vn/p/ocean-explorer-sub", price: "620.000₫", couponNote: { vi: "LazMall -24%", en: "LazMall -24%" } },
      },
      relatedIds: ["gt-roadster-67", "rally-coupe"],
      ph: { a: "var(--accent-2)", b: "var(--primary)" },
    },
    {
      id: "frost-warrior",
      slug: "frost-warrior-argent",
      name: { vi: "Frost Warrior — Argent", en: "Frost Warrior — Argent" },
      cat: { vi: "Fantasy · 1/7", en: "Fantasy · 1/7" },
      catSlug: "fantasy-worlds",
      description: {
        vi: "Chiến binh băng 1/7 với sơn tuyết hiệu ứng băng — nghiêng đèn thấy lấp lánh.",
        en: "1/7 frost warrior with snow paint that catches light at an angle.",
      },
      price: "1.880.000 – 2.060.000₫",
      priceLow: "1.880.000₫",
      score: 8.9,
      stars: 4.8,
      reviews: 55,
      badge: null,
      tags: { vi: ["Sơn tay", "Tuyết"], en: ["Hand-paint", "Snow"] },
      why: {
        vi: "Sơn tuyết hiệu ứng băng — nghiêng đèn thấy lấp lánh.",
        en: "Frost paint effect — gleams under angled light.",
      },
      pros: {
        vi: ["Hiệu ứng băng độc đáo", "Khớp che kín tự nhiên"],
        en: ["Unique frost effect", "Hidden joint seams"],
      },
      cons: {
        vi: ["Cần đèn để khoe hiệu ứng"],
        en: ["Needs lighting to show off"],
      },
      bestFor: {
        vi: ["Fan fantasy", "Trưng bày có đèn spot"],
        en: ["Fantasy fans", "Spot-lit display"],
      },
      specs: {
        vi: { scale: "1/7", material: "PVC + ABS", size: "250mm", weight: "510g", origin: "Trung Quốc" },
        en: { scale: "1/7", material: "PVC + ABS", size: "250mm", weight: "510g", origin: "China" },
      },
      merchants: ["shopee", "tiktok", "lazada"],
      merchantOffers: {
        shopee: { url: "https://shopee.vn/i/frost-warrior-argent",       price: "1.880.000₫" },
        tiktok: { url: "https://shop.tiktok.com/p/frost-warrior-argent", price: "1.690.000₫" },
        lazada: { url: "https://lazada.vn/p/frost-warrior-argent",       price: "2.060.000₫" },
      },
      relatedIds: ["sage-hollow", "cloud-castle"],
      ph: { a: "var(--accent-2)", b: "var(--text-3)" },
    },
  ] satisfies AffiliateProduct[],

  deals: [
    { pid: "astro-pilot",    old: "1.890.000₫", now: "1.420.000₫", pct: "-25%", merchant: "shopee",  at: "Updated 2h ago",   coupon: "GIODI50",   endsAt: "2026-06-02", note: { vi: "Áp mã GIODI50 ở bước thanh toán", en: "Apply code GIODI50 at checkout" } },
    { pid: "gt-roadster-67", old: "720.000₫",   now: "499.000₫",   pct: "-31%", merchant: "tiktok",  at: "Updated 25m ago",  endsAt: "2026-05-31", note: { vi: "Voucher chỉ trong livestream", en: "Live-stream voucher only" } },
    { pid: "mecha-drifter",  old: "1.700.000₫", now: "1.290.000₫", pct: "-24%", merchant: "shopee",  at: "Updated 1h ago",   coupon: "MECHA24" },
    { pid: "desk-lantern",   old: "380.000₫",   now: "249.000₫",   pct: "-34%", merchant: "lazada",  at: "Updated today" },
    { pid: "study-buddy",    old: "240.000₫",   now: "159.000₫",   pct: "-34%", merchant: "shopee",  at: "Updated 3h ago",   coupon: "BUDDY3" },
    { pid: "rally-coupe",    old: "640.000₫",   now: "479.000₫",   pct: "-25%", merchant: "lazada",  at: "Updated today" },
    { pid: "brass-stand",    old: "260.000₫",   now: "189.000₫",   pct: "-27%", merchant: "shopee",  at: "Updated 6h ago" },
    { pid: "ocean-explorer", old: "820.000₫",   now: "620.000₫",   pct: "-24%", merchant: "lazada",  at: "Updated 4h ago" },
    { pid: "frost-warrior",  old: "2.060.000₫", now: "1.690.000₫", pct: "-18%", merchant: "tiktok",  at: "Updated 12h ago" },
  ] satisfies AffiliateDeal[],

  categories: [
    { slug: "anime-figures",  vi: "Figure Anime",        en: "Anime Figures",     desc: { vi: "Nhân vật biểu tượng, đúc chi tiết tỉ mỉ.", en: "Iconic characters, exquisitely cast." },         count: 64, badge: "best",    ph: { a: "var(--primary)", b: "var(--accent)" } },
    { slug: "mini-cars",      vi: "Xe mô hình",          en: "Mini Cars",          desc: { vi: "Xe mô hình 1:64 đến 1:18 chính hãng.", en: "1:64 to 1:18 authentic diecast." },                  count: 42, badge: null,      ph: { a: "var(--accent)",  b: "var(--primary)" } },
    { slug: "desk-decor",     vi: "Decor bàn làm việc",  en: "Desk Decor",         desc: { vi: "Phụ kiện trưng bày bàn làm việc.",     en: "Display pieces for the working desk." },             count: 38, badge: null,      ph: { a: "var(--accent-2)", b: "var(--primary)" } },
    { slug: "fantasy-worlds", vi: "Fantasy",             en: "Fantasy Worlds",     desc: { vi: "Diorama, sinh vật và lâu đài huyền thoại.", en: "Dioramas, beasts and mythic castles." },        count: 27, badge: "new",     ph: { a: "var(--primary)", b: "var(--accent-2)" } },
    { slug: "gift-ideas",     vi: "Quà tặng",            en: "Gift Ideas",         desc: { vi: "Gợi ý quà cho người sưu tầm.",         en: "Picks for the collector in your life." },             count: 51, badge: null,      ph: { a: "#FFB86B",        b: "var(--accent-2)" } },
    { slug: "limited-finds",  vi: "Hàng hiếm",           en: "Limited Finds",      desc: { vi: "Phiên bản đánh số, sản xuất giới hạn.", en: "Numbered, limited-run editions." },                  count: 18, badge: "limited", ph: { a: "var(--danger)",   b: "var(--accent)" } },
  ] satisfies AffiliateCategory[],

  articles: [
    {
      id: "anime-mini-desk",
      slug: "top-10-anime-mini-desk-2025",
      cat: { vi: "Top list", en: "Top list" },
      title: { vi: "Top 10 figure anime mini đáng mua cho góc làm việc 2025", en: "Top 10 Anime Mini Figures Worth Buying for Your Desk in 2025" },
      excerpt: { vi: "Tuyển chọn những figure dưới 2 triệu vừa đẹp vừa đứng vững trên desk setup hằng ngày.", en: "A curated set of sub-2M figures that look amazing and survive daily desk life." },
      read: 8,
      updated: { vi: "Cập nhật 2 ngày trước", en: "Updated 2 days ago" },
      ph: { a: "var(--primary)", b: "var(--accent)" },
      author: { name: "Linh Nguyễn", role: { vi: "Biên tập trưởng", en: "Head Curator" } },
      body: [
        {
          heading: { vi: "Vì sao danh sách này có ý nghĩa", en: "Why this list matters" },
          content: {
            vi: "Hầu hết các top-list figure trên Google đều copy nhau và không ai cầm thử sản phẩm. Chúng tôi mở hộp, đo kích thước, đặt thử trên bàn làm việc thật rồi mới xếp hạng.",
            en: "Most figure top-lists on Google copy each other and no one actually handles the products. We unbox each piece, measure it, place it on a real desk, and only then rank.",
          },
        },
        {
          heading: { vi: "Tiêu chí chọn", en: "Selection criteria" },
          content: {
            vi: "Ba tiêu chí: (1) chi tiết sơn ở khoảng cách 30cm — đúng khoảng cách bàn làm việc, (2) độ ổn định đứng không cần đế phụ, (3) chiều cao dưới 280mm để không lấn không gian.",
            en: "Three criteria: (1) paint detail at 30cm — actual desk viewing distance, (2) stability without an extra base, (3) under 280mm tall so it doesn't crowd the desk.",
          },
        },
        {
          heading: { vi: "Lựa chọn dưới 1.5 triệu", en: "Picks under 1.5M VND" },
          content: {
            vi: "Mecha Drifter X9 ăn điểm khớp linh hoạt; GT Roadster '67 nhỏ gọn mà sơn nhám rất sạch. Cả hai đều dễ tìm trên Shopee với coupon thường xuyên.",
            en: "Mecha Drifter X9 wins on articulation; GT Roadster '67 stays compact with a crisp matte finish. Both easy to find on Shopee with frequent coupons.",
          },
        },
        {
          heading: { vi: "Lựa chọn trên 1.5 triệu", en: "Picks above 1.5M VND" },
          content: {
            vi: "Astro Pilot là best overall — đáng tiền nếu bạn chỉ mua một figure cho cả năm. Neon Ronin dành cho ai trưng bày phòng tối với đèn spot.",
            en: "Astro Pilot is the best overall — worth it if you only buy one figure all year. Neon Ronin shines in low-light displays under spot lamps.",
          },
        },
      ],
      relatedProductIds: ["astro-pilot", "mecha-drifter", "neon-ronin"],
      faqs: [
        { q: { vi: "Mua figure trên Shopee có sợ fake không?", en: "Are Shopee figures safe from fakes?" },
          a: { vi: "Hãy ưu tiên shop có Yêu thích+ và xem ảnh thật từ review. Tránh giá rẻ bất thường so với chính hãng.", en: "Prefer Preferred+ shops and check real-photo reviews. Avoid prices abnormally below MSRP." } },
        { q: { vi: "Có nên mua bản pre-order không?", en: "Should I pre-order?" },
          a: { vi: "Có nếu là limited run đánh số. Bản phổ thông thì chờ đợt restock thường rẻ hơn 10-15%.", en: "Yes for numbered limited runs. For standard versions, waiting for restocks usually saves 10-15%." } },
      ],
    },
    { id: "pvc-vs-resin",        cat: { vi: "Hướng dẫn",  en: "Buying guide" },  slug: "pvc-vs-resin-beginner-guide", title: { vi: "Nên chọn mô hình PVC hay resin? Hướng dẫn cho người mới",     en: "PVC vs Resin: A Beginner's Guide to Choosing Your First Figure" }, excerpt: { vi: "Khác biệt rõ ràng về độ chi tiết, độ bền, giá và cách bảo quản.", en: "How they differ in detail, durability, price, and care." },                read: 6, updated: { vi: "Cập nhật tuần này",     en: "Updated this week" },   ph: { a: "var(--accent-2)", b: "var(--accent)" }, relatedProductIds: ["astro-pilot", "sage-hollow"] },
    { id: "gift-under-500k",     cat: { vi: "Quà tặng",   en: "Gift ideas" },    slug: "collectible-gifts-under-500k", title: { vi: "Quà tặng dưới 500k cho người thích collectibles",              en: "Collectibles Under 500k VND for the Hard-to-Shop-For" },          excerpt: { vi: "9 gợi ý vừa túi tiền, vừa đẹp, vừa thật sự hữu ích cho người sưu tầm.", en: "9 affordable picks that look great and are actually useful." },          read: 5, updated: { vi: "Cập nhật hôm nay",      en: "Updated today" },        ph: { a: "#FFB86B",         b: "var(--primary)" }, relatedProductIds: ["desk-lantern", "study-buddy", "brass-stand"] },
    { id: "mini-cars-desk",      cat: { vi: "Setup",      en: "Setup" },         slug: "mini-cars-study-desk-decor",   title: { vi: "Mẫu xe mô hình nhỏ đẹp để decor bàn học",                      en: "Mini Cars That Make Your Study Desk Feel Like a Garage" },        excerpt: { vi: "Từ 200k đến 1tr, đây là những mẫu nhìn rất ổn trên kệ sách.", en: "200k to 1M — here's what actually looks good on a bookshelf." },                       read: 7, updated: { vi: "Cập nhật 3 ngày trước", en: "Updated 3 days ago" },   ph: { a: "var(--accent)",   b: "var(--primary)" }, relatedProductIds: ["gt-roadster-67", "rally-coupe", "ocean-explorer"] },
    { id: "limited-this-month",  cat: { vi: "Đánh giá",   en: "Review" },        slug: "limited-drops-this-month",     title: { vi: "Drop giới hạn tháng này — món nào đáng tiền?",                 en: "Limited Drops This Month — What's Actually Worth It" },           excerpt: { vi: "Phân tích 6 drop giới hạn vừa mở — pre-order khôn ngoan hơn.", en: "Six limited drops just opened — here's how to pre-order smart." },                read: 9, updated: { vi: "Cập nhật hôm qua",     en: "Updated yesterday" },   ph: { a: "var(--danger)",   b: "var(--accent)" }, relatedProductIds: ["sage-hollow", "cloud-castle", "neon-ronin"] },
    { id: "best-stands",         cat: { vi: "Hướng dẫn",  en: "Buying guide" },  slug: "best-figure-stands-guide",     title: { vi: "Cách chọn đế figure không trượt, không cong",                  en: "How to Pick a Figure Stand That Won't Slip or Warp" },            excerpt: { vi: "Đế đồng thau, đế acrylic, đế xoay — đâu là lựa chọn đúng?", en: "Brass, acrylic, rotating — which one matches your shelf?" },                           read: 4, updated: { vi: "Cập nhật tuần trước",   en: "Updated last week" },   ph: { a: "var(--text-3)",   b: "var(--accent)" }, relatedProductIds: ["brass-stand"] },
  ] satisfies AffiliateArticle[],

  testimonials: [
    { name: "Minh Khôi", loc: "HCMC · Collector",      quote: { vi: "Mua theo Best Pick của Giodicho 4 lần, không lần nào hối hận. Review thật, không tô hồng.", en: "Bought 4 times based on Giodicho Best Picks. Reviews are real — no fluff." }, stars: "★★★★★" },
    { name: "Linh Anh",  loc: "Hà Nội · Gift hunter",  quote: { vi: "Đi tìm quà cho bạn trai mê figure xong rồi thì tới đây tìm là gọn nhất.",                      en: "Hunting figure gifts for my partner — Giodicho is the cleanest place to start." },    stars: "★★★★★" },
    { name: "Quang Tú",  loc: "Đà Nẵng · Desk setup",  quote: { vi: "Mục Best for Desk Setup chọn rất chuẩn — không bị to lố trên bàn làm việc.",                  en: "The Best for Desk Setup picks are spot-on — never overpowering on the desk." },         stars: "★★★★★" },
  ] satisfies AffiliateTestimonial[],
} as const;

export function findProduct(idOrSlug: string): AffiliateProduct | undefined {
  return AFFILIATE_DATA.products.find(
    (p) => p.id === idOrSlug || p.slug === idOrSlug
  );
}

export function productsByCategory(catSlug: string): AffiliateProduct[] {
  return AFFILIATE_DATA.products.filter((p) => p.catSlug === catSlug);
}

export function productsByBestPick(slot: BestPickSlot): AffiliateProduct[] {
  return AFFILIATE_DATA.products.filter((p) => p.bestPickFor === slot);
}

export function dealsByProduct(pid: string): AffiliateDeal[] {
  return AFFILIATE_DATA.deals.filter((d) => d.pid === pid);
}

export function articleBySlug(slugOrId: string): AffiliateArticle | undefined {
  return AFFILIATE_DATA.articles.find(
    (a) => a.slug === slugOrId || a.id === slugOrId
  );
}
