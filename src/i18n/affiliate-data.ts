import type { Locale } from "./config";

export type MerchantKey = "shopee" | "tiktok" | "lazada" | "official";
export type BadgeKey = "best" | "value" | "limited" | "gift" | "deal" | "new";
export type Bi<T = string> = Record<Locale, T>;

export type AffiliateProduct = {
  id: string;
  name: Bi;
  cat: Bi;
  catSlug: string;
  price: string;
  priceLow: string;
  score: number;
  stars: number;
  reviews: number;
  badge: BadgeKey | null;
  tags: Bi<string[]>;
  why: Bi;
  merchants: MerchantKey[];
  ph: { a: string; b: string };
};

export type AffiliateDeal = {
  pid: string;
  old: string;
  now: string;
  pct: string;
  merchant: MerchantKey;
  at: string;
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

export type AffiliateArticle = {
  id: string;
  cat: Bi;
  title: Bi;
  excerpt: Bi;
  read: number;
  updated: Bi;
  ph: { a: string; b: string };
};

export type AffiliateTestimonial = {
  name: string;
  loc: string;
  quote: Bi;
  stars: string;
};

export const MERCHANTS: Record<MerchantKey, { label: string; short: string }> = {
  shopee:   { label: "Shopee",         short: "S" },
  tiktok:   { label: "TikTok Shop",    short: "T" },
  lazada:   { label: "Lazada",         short: "L" },
  official: { label: "Official Store", short: "O" },
};

export const AFFILIATE_DATA = {
  products: [
    {
      id: "astro-pilot",
      name: { vi: "Astro Pilot — Ver. Blue", en: "Astro Pilot — Ver. Blue" },
      cat: { vi: "Figure Anime · 1/7", en: "Anime Figure · 1/7" },
      catSlug: "anime-figures",
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
      merchants: ["shopee", "tiktok", "lazada"],
      ph: { a: "var(--accent)", b: "var(--primary)" },
    },
    {
      id: "gt-roadster-67",
      name: { vi: "GT Roadster '67", en: "GT Roadster '67" },
      cat: { vi: "Xe mô hình · 1:64", en: "Mini Car · 1:64" },
      catSlug: "mini-cars",
      price: "580.000 – 720.000₫",
      priceLow: "580.000₫",
      score: 8.9,
      stars: 4.7,
      reviews: 86,
      badge: "value",
      tags: {
        vi: ["Diecast", "Vintage", "Quà tặng"],
        en: ["Diecast", "Vintage", "Gift"],
      },
      why: {
        vi: "Đúc kim loại nặng tay, sơn nhám cao cấp — hiếm thấy ở tầm giá này.",
        en: "Heavy diecast body and matte paint job — rare at this price.",
      },
      merchants: ["shopee", "tiktok"],
      ph: { a: "#FF6F1E", b: "var(--primary)" },
    },
    {
      id: "sage-hollow",
      name: { vi: "Sage of the Hollow", en: "Sage of the Hollow" },
      cat: { vi: "Fantasy · 1/6 resin", en: "Fantasy · 1/6 resin" },
      catSlug: "fantasy-worlds",
      price: "2.300.000 – 2.650.000₫",
      priceLow: "2.300.000₫",
      score: 9.1,
      stars: 4.9,
      reviews: 42,
      badge: "limited",
      tags: {
        vi: ["Limited", "Resin", "Trưng bày"],
        en: ["Limited", "Resin", "Display"],
      },
      why: {
        vi: "Đánh số 350 bản — sơn tay từng diorama, hộp đi kèm chứng nhận.",
        en: "Numbered run of 350 — hand-painted with COA.",
      },
      merchants: ["official"],
      ph: { a: "var(--accent-2)", b: "var(--primary)" },
    },
    {
      id: "desk-lantern",
      name: { vi: "Desk Lantern Mini", en: "Desk Lantern Mini" },
      cat: { vi: "Decor bàn làm việc", en: "Desk Decor" },
      catSlug: "desk-decor",
      price: "320.000 – 380.000₫",
      priceLow: "320.000₫",
      score: 8.5,
      stars: 4.6,
      reviews: 217,
      badge: "gift",
      tags: {
        vi: ["Đèn", "Quà tặng", "Cute"],
        en: ["Light", "Gift", "Cute"],
      },
      why: {
        vi: "Ánh sáng ấm, dùng pin AAA — đặt bàn làm việc ban đêm rất hợp.",
        en: "Warm glow, AAA-powered — perfect bedside or desk ambient.",
      },
      merchants: ["shopee", "tiktok", "lazada"],
      ph: { a: "#FFB86B", b: "var(--accent)" },
    },
    {
      id: "mecha-drifter",
      name: { vi: "Mecha Drifter X9", en: "Mecha Drifter X9" },
      cat: { vi: "Figure Anime · 1/8", en: "Anime Figure · 1/8" },
      catSlug: "anime-figures",
      price: "1.500.000 – 1.700.000₫",
      priceLow: "1.500.000₫",
      score: 8.9,
      stars: 4.8,
      reviews: 73,
      badge: "new",
      tags: {
        vi: ["Mecha", "Diecast", "Khớp"],
        en: ["Mecha", "Diecast", "Articulated"],
      },
      why: {
        vi: "Khớp linh hoạt 32 điểm, đi kèm 3 set vũ khí thay đổi.",
        en: "32 articulated joints with 3 swappable weapon sets.",
      },
      merchants: ["shopee", "tiktok"],
      ph: { a: "var(--primary)", b: "var(--accent)" },
    },
    {
      id: "rally-coupe",
      name: { vi: "Rally Coupe Vintage", en: "Rally Coupe Vintage" },
      cat: { vi: "Xe mô hình · 1:43", en: "Mini Car · 1:43" },
      catSlug: "mini-cars",
      price: "520.000 – 640.000₫",
      priceLow: "520.000₫",
      score: 8.7,
      stars: 4.7,
      reviews: 51,
      badge: null,
      tags: {
        vi: ["Rally", "Decals", "Bàn học"],
        en: ["Rally", "Decals", "Study Desk"],
      },
      why: {
        vi: "Decal in offset thật, cửa và mui mở được — bất ngờ ở tầm giá.",
        en: "Offset-printed decals, opening doors and hood — wild for the price.",
      },
      merchants: ["shopee", "lazada"],
      ph: { a: "var(--accent)", b: "var(--accent-2)" },
    },
    {
      id: "cloud-castle",
      name: { vi: "Cloud Castle Diorama", en: "Cloud Castle Diorama" },
      cat: { vi: "Fantasy · Diorama", en: "Fantasy · Diorama" },
      catSlug: "fantasy-worlds",
      price: "3.100.000 – 3.450.000₫",
      priceLow: "3.100.000₫",
      score: 9.3,
      stars: 4.9,
      reviews: 28,
      badge: "limited",
      tags: {
        vi: ["Limited", "LED", "Diorama"],
        en: ["Limited", "LED", "Diorama"],
      },
      why: {
        vi: "Hiệu ứng LED chìm trong mây, đế gỗ óc chó — đỉnh cao trưng bày.",
        en: "Hidden LED cloud effects on walnut base — showcase-tier piece.",
      },
      merchants: ["official", "tiktok"],
      ph: { a: "var(--accent-2)", b: "var(--primary)" },
    },
    {
      id: "brass-stand",
      name: { vi: "Brass Stand No.5", en: "Brass Stand No.5" },
      cat: { vi: "Decor bàn làm việc", en: "Desk Decor" },
      catSlug: "desk-decor",
      price: "210.000 – 260.000₫",
      priceLow: "210.000₫",
      score: 8.2,
      stars: 4.6,
      reviews: 145,
      badge: "value",
      tags: {
        vi: ["Đồng thau", "Đa năng"],
        en: ["Brass", "Versatile"],
      },
      why: {
        vi: "Đứng được mọi figure 1/12 đến 1/7 — bệ đỡ chắc, không trượt.",
        en: "Holds 1/12 to 1/7 figures — solid, non-slip base.",
      },
      merchants: ["shopee", "tiktok", "lazada"],
      ph: { a: "var(--accent)", b: "var(--text-3)" },
    },
    {
      id: "neon-ronin",
      name: { vi: "Neon Ronin — Ver. Crimson", en: "Neon Ronin — Crimson Ver." },
      cat: { vi: "Figure Anime · 1/7", en: "Anime Figure · 1/7" },
      catSlug: "anime-figures",
      price: "2.100.000 – 2.400.000₫",
      priceLow: "2.100.000₫",
      score: 9.0,
      stars: 4.8,
      reviews: 64,
      badge: "best",
      tags: {
        vi: ["Neon", "Limited", "1/7"],
        en: ["Neon", "Limited", "1/7"],
      },
      why: {
        vi: "LED âm, kiếm phát sáng — bản giới hạn 800.",
        en: "Embedded LEDs, glowing sword — limited to 800 units.",
      },
      merchants: ["official", "shopee"],
      ph: { a: "var(--danger)", b: "var(--primary)" },
    },
    {
      id: "study-buddy",
      name: { vi: "Study Buddy Capybara", en: "Study Buddy Capybara" },
      cat: { vi: "Cute · Desk", en: "Cute · Desk" },
      catSlug: "desk-decor",
      price: "180.000 – 240.000₫",
      priceLow: "180.000₫",
      score: 8.6,
      stars: 4.7,
      reviews: 312,
      badge: "gift",
      tags: {
        vi: ["Cute", "Quà tặng", "Pocket"],
        en: ["Cute", "Gift", "Pocket"],
      },
      why: {
        vi: "Best-seller quà tặng — 5 màu, vỏ nhựa thân thiện.",
        en: "Gift best-seller — 5 colors, friendly resin shell.",
      },
      merchants: ["shopee", "tiktok"],
      ph: { a: "var(--accent)", b: "#FDBA74" },
    },
    {
      id: "ocean-explorer",
      name: { vi: "Ocean Explorer Sub", en: "Ocean Explorer Sub" },
      cat: { vi: "Diecast · 1:72", en: "Diecast · 1:72" },
      catSlug: "mini-cars",
      price: "740.000 – 820.000₫",
      priceLow: "740.000₫",
      score: 8.8,
      stars: 4.7,
      reviews: 38,
      badge: null,
      tags: {
        vi: ["Diecast", "Ocean"],
        en: ["Diecast", "Ocean"],
      },
      why: {
        vi: "Mô hình tàu ngầm đúc kim loại đặc, đế acrylic kèm.",
        en: "Solid diecast sub with bundled acrylic stand.",
      },
      merchants: ["shopee", "lazada"],
      ph: { a: "var(--accent-2)", b: "var(--primary)" },
    },
    {
      id: "frost-warrior",
      name: { vi: "Frost Warrior — Argent", en: "Frost Warrior — Argent" },
      cat: { vi: "Fantasy · 1/7", en: "Fantasy · 1/7" },
      catSlug: "fantasy-worlds",
      price: "1.880.000 – 2.060.000₫",
      priceLow: "1.880.000₫",
      score: 8.9,
      stars: 4.8,
      reviews: 55,
      badge: null,
      tags: {
        vi: ["Sơn tay", "Tuyết"],
        en: ["Hand-paint", "Snow"],
      },
      why: {
        vi: "Sơn tuyết hiệu ứng băng — nghiêng đèn thấy lấp lánh.",
        en: "Frost paint effect — gleams under angled light.",
      },
      merchants: ["shopee", "tiktok", "lazada"],
      ph: { a: "var(--accent-2)", b: "var(--text-3)" },
    },
  ] satisfies AffiliateProduct[],

  deals: [
    { pid: "astro-pilot",    old: "1.890.000₫", now: "1.420.000₫", pct: "-25%", merchant: "shopee",  at: "Updated 2h ago" },
    { pid: "gt-roadster-67", old: "720.000₫",   now: "499.000₫",   pct: "-31%", merchant: "tiktok",  at: "Updated 25m ago" },
    { pid: "mecha-drifter",  old: "1.700.000₫", now: "1.290.000₫", pct: "-24%", merchant: "shopee",  at: "Updated 1h ago" },
    { pid: "desk-lantern",   old: "380.000₫",   now: "249.000₫",   pct: "-34%", merchant: "lazada",  at: "Updated today" },
    { pid: "study-buddy",    old: "240.000₫",   now: "159.000₫",   pct: "-34%", merchant: "shopee",  at: "Updated 3h ago" },
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
    { id: "anime-mini-desk",     cat: { vi: "Top list",   en: "Top list" },      title: { vi: "Top 10 figure anime mini đáng mua cho góc làm việc 2025",    en: "Top 10 Anime Mini Figures Worth Buying for Your Desk in 2025" }, excerpt: { vi: "Tuyển chọn những figure dưới 2 triệu vừa đẹp vừa đứng vững trên desk setup hằng ngày.", en: "A curated set of sub-2M figures that look amazing and survive daily desk life." }, read: 8, updated: { vi: "Cập nhật 2 ngày trước",  en: "Updated 2 days ago" },  ph: { a: "var(--primary)",  b: "var(--accent)" } },
    { id: "pvc-vs-resin",        cat: { vi: "Hướng dẫn",  en: "Buying guide" },  title: { vi: "Nên chọn mô hình PVC hay resin? Hướng dẫn cho người mới",     en: "PVC vs Resin: A Beginner's Guide to Choosing Your First Figure" }, excerpt: { vi: "Khác biệt rõ ràng về độ chi tiết, độ bền, giá và cách bảo quản.", en: "How they differ in detail, durability, price, and care." },                read: 6, updated: { vi: "Cập nhật tuần này",     en: "Updated this week" },   ph: { a: "var(--accent-2)", b: "var(--accent)" } },
    { id: "gift-under-500k",     cat: { vi: "Quà tặng",   en: "Gift ideas" },    title: { vi: "Quà tặng dưới 500k cho người thích collectibles",              en: "Collectibles Under 500k VND for the Hard-to-Shop-For" },          excerpt: { vi: "9 gợi ý vừa túi tiền, vừa đẹp, vừa thật sự hữu ích cho người sưu tầm.", en: "9 affordable picks that look great and are actually useful." },          read: 5, updated: { vi: "Cập nhật hôm nay",      en: "Updated today" },        ph: { a: "#FFB86B",         b: "var(--primary)" } },
    { id: "mini-cars-desk",      cat: { vi: "Setup",      en: "Setup" },         title: { vi: "Mẫu xe mô hình nhỏ đẹp để decor bàn học",                      en: "Mini Cars That Make Your Study Desk Feel Like a Garage" },        excerpt: { vi: "Từ 200k đến 1tr, đây là những mẫu nhìn rất ổn trên kệ sách.", en: "200k to 1M — here's what actually looks good on a bookshelf." },                       read: 7, updated: { vi: "Cập nhật 3 ngày trước", en: "Updated 3 days ago" },   ph: { a: "var(--accent)",   b: "var(--primary)" } },
    { id: "limited-this-month",  cat: { vi: "Đánh giá",   en: "Review" },        title: { vi: "Drop giới hạn tháng này — món nào đáng tiền?",                 en: "Limited Drops This Month — What's Actually Worth It" },           excerpt: { vi: "Phân tích 6 drop giới hạn vừa mở — pre-order khôn ngoan hơn.", en: "Six limited drops just opened — here's how to pre-order smart." },                read: 9, updated: { vi: "Cập nhật hôm qua",     en: "Updated yesterday" },   ph: { a: "var(--danger)",   b: "var(--accent)" } },
    { id: "best-stands",         cat: { vi: "Hướng dẫn",  en: "Buying guide" },  title: { vi: "Cách chọn đế figure không trượt, không cong",                  en: "How to Pick a Figure Stand That Won't Slip or Warp" },            excerpt: { vi: "Đế đồng thau, đế acrylic, đế xoay — đâu là lựa chọn đúng?", en: "Brass, acrylic, rotating — which one matches your shelf?" },                           read: 4, updated: { vi: "Cập nhật tuần trước",   en: "Updated last week" },   ph: { a: "var(--text-3)",   b: "var(--accent)" } },
  ] satisfies AffiliateArticle[],

  testimonials: [
    { name: "Minh Khôi", loc: "HCMC · Collector",      quote: { vi: "Mua theo Best Pick của Giodicho 4 lần, không lần nào hối hận. Review thật, không tô hồng.", en: "Bought 4 times based on Giodicho Best Picks. Reviews are real — no fluff." }, stars: "★★★★★" },
    { name: "Linh Anh",  loc: "Hà Nội · Gift hunter",  quote: { vi: "Đi tìm quà cho bạn trai mê figure xong rồi thì tới đây tìm là gọn nhất.",                      en: "Hunting figure gifts for my partner — Giodicho is the cleanest place to start." },    stars: "★★★★★" },
    { name: "Quang Tú",  loc: "Đà Nẵng · Desk setup",  quote: { vi: "Mục Best for Desk Setup chọn rất chuẩn — không bị to lố trên bàn làm việc.",                  en: "The Best for Desk Setup picks are spot-on — never overpowering on the desk." },         stars: "★★★★★" },
  ] satisfies AffiliateTestimonial[],
} as const;

export function findProduct(id: string): AffiliateProduct | undefined {
  return AFFILIATE_DATA.products.find((p) => p.id === id);
}
