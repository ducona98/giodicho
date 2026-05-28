import type { ArticleTopic, BadgeKey, BestPickSlot, Bi, MerchantKey } from "./affiliate-data";

export type CtaLabelKey =
  | "viewDeal"
  | "viewSeller"
  | "checkPrice"
  | "buyOnShopee"
  | "viewOnTiktok"
  | "viewOnLazada"
  | "viewOfficial";

export const CTA_LABELS: Record<CtaLabelKey, Bi> = {
  viewDeal:     { vi: "Xem nơi bán",            en: "View Deal" },
  viewSeller:   { vi: "Xem nơi bán",            en: "See where to buy" },
  checkPrice:   { vi: "Kiểm tra giá",           en: "Check Price" },
  buyOnShopee:  { vi: "Mua trên Shopee",        en: "Buy on Shopee" },
  viewOnTiktok: { vi: "Xem trên TikTok Shop",   en: "View on TikTok Shop" },
  viewOnLazada: { vi: "Xem trên Lazada",        en: "View on Lazada" },
  viewOfficial: { vi: "Xem ở Official Store",   en: "View at Official Store" },
};

export const MERCHANT_CTA: Record<MerchantKey, CtaLabelKey> = {
  shopee:   "buyOnShopee",
  tiktok:   "viewOnTiktok",
  lazada:   "viewOnLazada",
  official: "viewOfficial",
};

export const BADGE_LABELS: Record<BadgeKey, Bi> = {
  best:    { vi: "Bán chạy",  en: "Best Pick" },
  value:   { vi: "Giá tốt",   en: "Best Value" },
  limited: { vi: "Hàng hiếm", en: "Limited" },
  gift:    { vi: "Quà tặng",  en: "Gift Idea" },
  deal:    { vi: "Ưu đãi",    en: "Hot Deal" },
  new:     { vi: "Mới",       en: "New" },
};

export const ARTICLE_TOPIC_LABELS: Record<ArticleTopic, Bi> = {
  buying:     { vi: "Hướng dẫn mua",  en: "Buying Guides" },
  review:     { vi: "Đánh giá",       en: "Reviews" },
  comparison: { vi: "So sánh",        en: "Comparisons" },
  gift:       { vi: "Quà tặng",       en: "Gift Ideas" },
  setup:      { vi: "Desk Setup",     en: "Desk Setup" },
  collecting: { vi: "Mẹo sưu tầm",    en: "Collecting Tips" },
};

export const MERCHANT_LABELS: Record<MerchantKey, Bi> = {
  shopee:   { vi: "Shopee",         en: "Shopee" },
  tiktok:   { vi: "TikTok Shop",    en: "TikTok Shop" },
  lazada:   { vi: "Lazada",         en: "Lazada" },
  official: { vi: "Official Store", en: "Official Store" },
};

export const DISCLOSURE_TEXT: { short: Bi; full: Bi } = {
  short: {
    vi: "Một số liên kết là affiliate.",
    en: "Some links are affiliate.",
  },
  full: {
    vi: "Một số liên kết trên website là affiliate link. Khi bạn mua hàng qua các liên kết này, chúng tôi có thể nhận được hoa hồng mà không làm thay đổi giá bạn phải trả.",
    en: "Some links on this website are affiliate links. We may earn a commission when you purchase through them, at no extra cost to you.",
  },
};

export const BEST_PICK_SLOTS: readonly BestPickSlot[] = [
  "bestOverall",
  "bestBudget",
  "bestForGift",
  "bestForDesk",
  "bestLimited",
  "bestCute",
] as const;
