import type { Locale } from "./config";

export type AffiliateDict = {
  nav: {
    home: string;
    collections: string;
    best: string;
    deals: string;
    reviews: string;
    guides: string;
    compare: string;
    about: string;
  };
  ui: {
    explore: string;
    viewDeal: string;
    viewReview: string;
    checkPrice: string;
    compare: string;
    readGuide: string;
    saveItem: string;
    seeAll: string;
    browse: string;
    explorePicks: string;
    addToCompare: string;
    compareNow: string;
    newsletter: string;
    placeholderEmail: string;
    productsCount: string;
    readTime: string;
    whyWePicked: string;
    addProduct: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    searchAria: string;
    themeToLight: string;
    themeToDark: string;
    savedAria: string;
    languageAria: string;
  };
  disclosure: { full: string };
  hero: {
    runner: { live: string; curated: string; locale: string };
    eyebrow: string;
    titleLine1: string;
    smallPill: string;
    titleLine2: string;
    titleAccent: string;
    lead: string;
    browsingNow: string;
    chips: {
      bestPick: { label: string; val: string };
      hotDeal: { label: string; val: string };
      giftIdea: { label: string; val: string };
    };
    stageLabelTl: string;
    stageLabelBr: string;
    meta: { k: string; v: string }[];
  };
  marquee: string[];
  sections: {
    categories: { eyebrow: string; titlePre: string; titleIt: string; titlePost: string; lead: string; badgeLabels: { best: string; new: string; limited: string } };
    bestPicks: {
      eyebrow: string; titlePre: string; titleIt: string; titlePost: string;
      lead: string; viewAll: string;
      labels: { bestOverall: string; bestBudget: string; bestForGift: string; bestForDesk: string; bestLimited: string; bestCute: string };
    };
    deals: { eyebrow: string; titlePre: string; titleIt: string; titlePost: string; lead: string };
    compare: { eyebrow: string; titlePre: string; titleIt: string; titlePost: string; lead: string; vsLabel: string; plusLabel: string };
    reviews: { eyebrow: string; titlePre: string; titleIt: string; titlePost: string };
    gifts: {
      eyebrow: string; titlePre: string; titleIt: string; titlePost: string;
      bands: { under300k: string; mid: string; high: string; over15M: string };
    };
    merchants: {
      eyebrow: string; titlePre: string; titleIt: string; titlePost: string; lead: string;
      descriptions: { shopee: string; tiktok: string; lazada: string; official: string };
      trackedCounts: { shopee: string; tiktok: string; lazada: string; official: string };
    };
    testimonials: { eyebrow: string; titlePre: string; titleIt: string; titlePost: string };
  };
  productDetail: {
    breadcrumbAria: string;
    breadcrumbHome: string;
    galleryAria: string;
    thumbAria: string;
    reviewsCount: string;
    editorScoreAria: string;
    priceFromLabel: string;
    whereToBuyTitle: string;
    whereToBuyLead: string;
    whereToBuyHeads: { merchant: string; price: string; coupon: string; shipping: string; cta: string };
    aboutTitle: string;
    prosTitle: string;
    consTitle: string;
    bestForTitle: string;
    specsTitle: string;
    specLabels: { scale: string; material: string; size: string; weight: string; origin: string; power: string };
    faqTitle: string;
    relatedTitle: string;
    relatedLead: string;
    pricesMayChange: string;
    seeAllSellers: string;
    saveAria: string;
    pickedForPrefix: string;
    bestSeller: string;
    buybarCta: string;
    noCoupon: string;
    noShipping: string;
  };
  collection: {
    breadcrumbAria: string;
    breadcrumbHome: string;
    introSuffix: string;
    stats: { products: string; avgScore: string; priceRefresh: string };
    priceRefreshValue: string;
    filtersTitle: string;
    filterToggle: string;
    filterCloseAria: string;
    groups: { merchant: string; badge: string; price: string; rating: string };
    priceMin: string;
    priceMax: string;
    ratingOptions: { any: string; r90: string; r85: string; r80: string };
    clearFilters: string;
    resultCount: string;
    sortLabel: string;
    sortOptions: {
      recommended: string;
      priceAsc: string;
      priceDesc: string;
      rated: string;
      deals: string;
    };
    emptyTitle: string;
    emptyBody: string;
    relatedTitle: string;
    relatedLead: string;
    guidesTitle: string;
    guidesLead: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
  };
  bestPicks: {
    breadcrumbAria: string;
    breadcrumbHome: string;
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    stats: { k: string; v: string }[];
    tabAll: string;
    tabLabels: {
      bestOverall: string;
      bestBudget: string;
      bestForGift: string;
      bestForDesk: string;
      bestLimited: string;
      bestCute: string;
    };
    featuredEyebrow: string;
    otherTitle: string;
    altTitle: string;
    altLead: string;
    whyTitle: string;
    whyLead: string;
    whyPoints: string[];
    criteriaTitle: string;
    criteriaLead: string;
    criteria: { title: string; desc: string }[];
  };
  dealsPage: {
    breadcrumbAria: string;
    breadcrumbHome: string;
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    updatedLabel: string;
    stats: { k: string; v: string }[];
    filters: {
      today: string;
      hot: string;
      limited: string;
      coupon: string;
      budget: string;
      gift: string;
    };
    resultCount: string;
    couponPrefix: string;
    endsPrefix: string;
    emptyTitle: string;
    emptyBody: string;
    trustTitle: string;
    trustPoints: string[];
    relatedTitle: string;
    relatedLead: string;
  };
  guidesPage: {
    breadcrumbAria: string;
    breadcrumbHome: string;
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    stats: { k: string; v: string }[];
    tabAll: string;
    featuredEyebrow: string;
    allTitle: string;
    allLead: string;
    popularTitle: string;
    popularLead: string;
    emptyTitle: string;
    emptyBody: string;
  };
  articleDetail: {
    breadcrumbAria: string;
    breadcrumbHome: string;
    breadcrumbGuides: string;
    byPrefix: string;
    tocTitle: string;
    recommendedTitle: string;
    recommendedLead: string;
    relatedTitle: string;
    relatedLead: string;
    faqTitle: string;
    disclosureNote: string;
  };
  editor: { quote: string; signature: string; avatar: string };
  newsletter: {
    eyebrow: string;
    title1: string;
    title2It: string;
    lead: string;
    cta: string;
    placeholder: string;
    floaters: { f1: string; f2: string };
    ok: string;
    err: string;
  };
  footer: {
    brandDesc: string;
    copy: string;
    colTitles: { discover: string; read: string; about: string; legal: string };
    cols: {
      discover: string[];
      read: string[];
      about: string[];
      legal: string[];
    };
  };
};

export type Dictionary = {
  nav: { home: string; collections: string; products: string; new: string; about: string; contact: string };
  cart: string;
  hero: {
    tag: string;
    tagPill: string;
    title1: string;
    title2: string;
    lead: string;
    cta1: string;
    cta2: string;
    meta: { k: string; v: string }[];
    chips: { ship: string; limited: string; auth: string };
    stage: string;
    smallPill: string;
    indexLine: string;
    runnerAtelier: string;
    reviewsLine: string;
  };
  marquee: string[];
  collections: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { name: string; desc: string; badge: string | null; code: string }[];
  };
  products: {
    eyebrow: string;
    title: string;
    lead: string;
    viewAll: string;
    addToCart: string;
    quickView: string;
    badgeLabels: { new: string; limited: string; best: string };
    items: { name: string; cat: string; price: string; rating: string; badge: "new" | "limited" | "best" | null; code: string }[];
  };
  story: {
    eyebrow: string;
    title: string;
    lead: string;
    stepWord: string;
    steps: { title: string; desc: string; icon: string }[];
  };
  drop: {
    eyebrow: string;
    title: string;
    desc: string;
    cta: string;
    cta2: string;
    labels: { days: string; hours: string; mins: string; secs: string };
    stageLabel: string;
  };
  detail: {
    eyebrow: string;
    title: string;
    lead: string;
    breadcrumb: string[];
    productName: string;
    rating: string;
    price: string;
    was: string;
    desc: string;
    qty: string;
    addToCart: string;
    wishlist: string;
    ship: string;
    acc: { title: string; body: string }[];
  };
  why: {
    eyebrow: string;
    title: string;
    items: { title: string; desc: string }[];
  };
  testi: {
    eyebrow: string;
    title: string;
    items: { name: string; loc: string; quote: string; stars: number }[];
  };
  news: {
    title: string;
    desc: string;
    placeholder: string;
    cta: string;
    ok: string;
    err: string;
    tags: [string, string];
  };
  footer: {
    tag: string;
    cols: {
      shop: { title: string; items: string[] };
      coll: { title: string; items: string[] };
      sup: { title: string; items: string[] };
      pol: { title: string; items: string[] };
    };
    copy: string;
  };
  affiliate: AffiliateDict;
  meta: { title: string; description: string };
};

const vi: Dictionary = {
  nav: { home: "Trang chủ", collections: "Bộ sưu tập", products: "Sản phẩm", new: "Hàng mới", about: "Giới thiệu", contact: "Liên hệ" },
  cart: "Giỏ hàng",
  hero: {
    tag: "Bộ sưu tập mùa mới",
    tagPill: "DROP 07",
    title1: "Thế Giới Nhỏ,",
    title2: "Cảm Hứng Lớn",
    lead: "Mô hình thủ công, figure giới hạn và phụ kiện trưng bày được tuyển chọn cho người sưu tầm tỉ mỉ và bàn làm việc đẹp đến từng centimet.",
    cta1: "Khám phá bộ sưu tập",
    cta2: "Hàng mới về",
    meta: [
      { k: "240+", v: "Tác phẩm tuyển chọn" },
      { k: "100%", v: "Chính hãng" },
      { k: "48h", v: "Giao toàn quốc" },
    ],
    chips: { ship: "Giao hỏa tốc 48h", limited: "Phiên bản giới hạn", auth: "Đảm bảo chính hãng" },
    stage: "MÔ HÌNH NỔI BẬT — FIG.07",
    smallPill: "+240 pcs",
    indexLine: "N°07 / Drop · 26.05.26",
    runnerAtelier: "1/200 · KYOTO ATELIER",
    reviewsLine: "4.9 · 2,340 đánh giá",
  },
  marquee: ["Anime Figures", "Mini Cars", "Fantasy Worlds", "Desk Decor", "Limited Editions", "Hand-painted", "1:64 Scale", "Premium Cast"],
  collections: {
    eyebrow: "BỘ SƯU TẬP",
    title: "Mỗi bộ sưu tập, một thế giới riêng.",
    lead: "Năm bộ sưu tập tinh tuyển — từ figure anime đến mô hình xe mini và phụ kiện bàn làm việc cao cấp.",
    items: [
      { name: "Anime Figures", desc: "Nhân vật biểu tượng, đúc chi tiết tỉ mỉ.", badge: "Bán chạy", code: "AF" },
      { name: "Mini Cars", desc: "Xe mô hình 1:64 chính hãng.", badge: "Hàng mới", code: "MC" },
      { name: "Fantasy Worlds", desc: "Diorama, sinh vật và lâu đài huyền thoại.", badge: null, code: "FW" },
      { name: "Desk Decor", desc: "Phụ kiện trưng bày bàn làm việc.", badge: null, code: "DD" },
      { name: "Limited Editions", desc: "Phiên bản đánh số, sản xuất giới hạn.", badge: "Limited", code: "LE" },
    ],
  },
  products: {
    eyebrow: "SẢN PHẨM NỔI BẬT",
    title: "Tuyển chọn từng món, kể từng câu chuyện.",
    lead: "Mỗi sản phẩm được kiểm tra thủ công, đóng gói kỹ lưỡng và giao đến tay người sưu tầm.",
    viewAll: "Xem tất cả sản phẩm",
    addToCart: "Thêm vào giỏ",
    quickView: "Xem nhanh",
    badgeLabels: { new: "MỚI", limited: "GIỚI HẠN", best: "BÁN CHẠY" },
    items: [
      { name: "Astro Pilot — Ver. Blue", cat: "Anime Figures", price: "1.890.000₫", rating: "4.9", badge: "new", code: "AP-01" },
      { name: "GT Roadster '67", cat: "Mini Cars", price: "620.000₫", rating: "4.8", badge: null, code: "GT-67" },
      { name: "Sage of the Hollow", cat: "Fantasy", price: "2.450.000₫", rating: "5.0", badge: "limited", code: "SH-09" },
      { name: "Desk Lantern Mini", cat: "Desk Decor", price: "340.000₫", rating: "4.7", badge: "best", code: "DL-02" },
      { name: "Mecha Drifter X9", cat: "Anime Figures", price: "1.640.000₫", rating: "4.9", badge: null, code: "MD-X9" },
      { name: "Rally Coupe Vintage", cat: "Mini Cars", price: "580.000₫", rating: "4.8", badge: "new", code: "RC-21" },
      { name: "Cloud Castle Diorama", cat: "Fantasy", price: "3.200.000₫", rating: "4.9", badge: "limited", code: "CC-04" },
      { name: "Brass Stand No.5", cat: "Desk Decor", price: "220.000₫", rating: "4.6", badge: null, code: "BS-05" },
    ],
  },
  story: {
    eyebrow: "CÂU CHUYỆN SẢN PHẨM",
    title: "Một mô hình, bốn lớp tinh tế.",
    lead: "Từ tuyển chọn đến giao tận tay — mỗi bước đều được chăm chút như chính món đồ bạn sắp sưu tầm.",
    stepWord: "BƯỚC",
    steps: [
      { title: "Tuyển chọn thủ công", desc: "Mỗi món đồ đều được đội ngũ tuyển chọn từ nhà sản xuất chính hãng, kiểm tra trực tiếp trước khi nhập kho.", icon: "01" },
      { title: "Trưng bày đẳng cấp", desc: "Thiết kế và chi tiết đạt chuẩn premium — phù hợp đặt trang trọng trên kệ, bàn làm việc hay tủ kính sưu tầm.", icon: "02" },
      { title: "Đóng gói cẩn thận", desc: "Hộp xốp định hình, túi chống ẩm và niêm phong bảo chứng — đảm bảo đến tay bạn nguyên vẹn như khi rời xưởng.", icon: "03" },
      { title: "Drop phiên bản giới hạn", desc: "Những đợt mở bán đánh số cố định, đăng ký sớm để giữ chỗ trước khi cánh cửa đóng lại.", icon: "04" },
    ],
  },
  drop: {
    eyebrow: "PHIÊN BẢN GIỚI HẠN",
    title: "Drop 07 — Aurora Pilot",
    desc: "Phiên bản đánh số 1/200, sơn hand-painted tại Kyoto, đế trưng bày bằng đồng thau khắc laser. Mở bán đến hết tuần này.",
    cta: "Đặt trước ngay",
    cta2: "Chi tiết sản phẩm",
    labels: { days: "Ngày", hours: "Giờ", mins: "Phút", secs: "Giây" },
    stageLabel: "AURORA PILOT — 1/200",
  },
  detail: {
    eyebrow: "XEM TRƯỚC TRANG CHI TIẾT",
    title: "Trang chi tiết — cảm giác cầm sản phẩm trên tay.",
    lead: "Bố cục gallery + thông tin sản phẩm + accordion chính sách, tối ưu cho mua hàng và SEO.",
    breadcrumb: ["Trang chủ", "Anime Figures", "Astro Pilot — Ver. Blue"],
    productName: "Astro Pilot — Ver. Blue",
    rating: "4.9 / 5 · 128 đánh giá",
    price: "1.890.000₫",
    was: "2.190.000₫",
    desc: "Figure cao 22cm, sơn thủ công, khớp cử động linh hoạt. Đi kèm chân đế kim loại khắc số sê-ri và hộp lưu niệm.",
    qty: "Số lượng",
    addToCart: "Thêm vào giỏ",
    wishlist: "Yêu thích",
    ship: "Giao toàn quốc 48h · Đổi trả miễn phí trong 7 ngày",
    acc: [
      { title: "Thông tin chi tiết", body: "Cao 22cm · 18 khớp cử động · Trọng lượng 480g · Tỉ lệ 1/7 · Hộp đi kèm 28×16×12cm." },
      { title: "Chất liệu", body: "Nhựa ABS cao cấp, sơn acrylic không độc, đế kim loại mạ chống xước." },
      { title: "Vận chuyển", body: "Đóng gói chống va đập 3 lớp. Giao hỏa tốc nội thành 24h, toàn quốc 48-72h." },
      { title: "Đổi trả", body: "Đổi trả miễn phí trong 7 ngày nếu sản phẩm còn nguyên seal và hộp gốc." },
    ],
  },
  why: {
    eyebrow: "LÝ DO CHỌN GIODICHO",
    title: "Bốn cam kết, một trải nghiệm sưu tầm trọn vẹn.",
    items: [
      { title: "Hàng chính hãng", desc: "100% nhập trực tiếp từ nhà sản xuất, kèm tem niêm phong và chứng nhận." },
      { title: "Đóng gói cẩn thận", desc: "Hộp xốp định hình, túi chống ẩm, bọc thêm carton bảo vệ ngoài." },
      { title: "Giao hàng nhanh", desc: "Hỏa tốc 24h nội thành, 48-72h toàn quốc, có theo dõi đơn hàng." },
      { title: "Hỗ trợ collector", desc: "Đội ngũ tư vấn am hiểu, cộng đồng review thật, ưu đãi cho thành viên." },
    ],
  },
  testi: {
    eyebrow: "KHÁCH HÀNG NÓI",
    title: "Những bàn làm việc và tủ trưng bày đã có Giodicho.",
    items: [
      { name: "Minh Anh", loc: "TP. Hồ Chí Minh", quote: "Đóng gói cực kỳ chắc chắn, figure đến tay nguyên seal. Đã mua đợt 3 và sẽ còn quay lại.", stars: 5 },
      { name: "Trần Hải", loc: "Hà Nội", quote: "Mini car 1:64 chính hãng giá rất hợp lý, sơn không bị xước. Bàn làm việc lên đời thật sự.", stars: 5 },
      { name: "Phương Linh", loc: "Đà Nẵng", quote: "Mua phiên bản giới hạn, được tặng kèm thẻ đánh số. Cảm giác như sưu tầm thật sự, không phải mua hàng.", stars: 5 },
      { name: "Đức Long", loc: "Cần Thơ", quote: "Shop tư vấn tận tâm, có ảnh thật trước khi gửi đi. Sẽ ủng hộ dài dài.", stars: 5 },
    ],
  },
  news: {
    title: "Đăng ký nhận hàng hiếm.",
    desc: "Nhận thông báo khi có mô hình hiếm mới về — trước cộng đồng đến 24 giờ.",
    placeholder: "Email của bạn",
    cta: "Đăng ký",
    ok: "Cảm ơn! Bạn sẽ là người đầu tiên biết drop mới.",
    err: "Vui lòng nhập email hợp lệ.",
    tags: ["DROP 08", "SOON"],
  },
  footer: {
    tag: "Giodicho — Mô hình & vật phẩm trưng bày được tuyển chọn cho người sưu tầm tinh tế.",
    cols: {
      shop: { title: "Mua sắm", items: ["Hàng mới", "Bán chạy", "Phiên bản giới hạn", "Quà tặng"] },
      coll: { title: "Bộ sưu tập", items: ["Anime Figures", "Mini Cars", "Fantasy Worlds", "Desk Decor"] },
      sup: { title: "Hỗ trợ", items: ["Liên hệ", "Vận chuyển", "Đổi trả", "Câu hỏi thường gặp"] },
      pol: { title: "Chính sách", items: ["Bảo mật", "Điều khoản", "Cookies", "Bảo hành"] },
    },
    copy: "© 2026 Giodicho. Tất cả quyền được bảo lưu.",
  },
  affiliate: {
    nav: {
      home: "Trang chủ",
      collections: "Bộ sưu tập",
      best: "Gợi ý đáng mua",
      deals: "Ưu đãi",
      reviews: "Đánh giá",
      guides: "Hướng dẫn",
      compare: "So sánh",
      about: "Giới thiệu",
    },
    ui: {
      explore: "Khám phá",
      viewDeal: "Xem nơi bán",
      viewReview: "Xem review",
      checkPrice: "Kiểm tra giá",
      compare: "So sánh",
      readGuide: "Đọc hướng dẫn",
      saveItem: "Lưu",
      seeAll: "Xem tất cả",
      browse: "Khám phá bộ sưu tập",
      explorePicks: "Xem Best Picks",
      addToCompare: "+ Thêm để so sánh",
      compareNow: "So sánh ngay",
      newsletter: "Đăng ký",
      placeholderEmail: "địa chỉ email của bạn",
      productsCount: "sản phẩm",
      readTime: "phút đọc",
      whyWePicked: "Vì sao chúng tôi chọn",
      addProduct: "THÊM SẢN PHẨM",
      skipToContent: "Đi tới nội dung chính",
      openMenu: "Mở menu",
      closeMenu: "Đóng menu",
      searchAria: "Tìm kiếm",
      themeToLight: "Chuyển sang chế độ sáng",
      themeToDark: "Chuyển sang chế độ tối",
      savedAria: "Sản phẩm đã lưu",
      languageAria: "Ngôn ngữ",
    },
    disclosure: {
      full: "Một số liên kết trên website là affiliate link. Khi bạn mua hàng qua các liên kết này, chúng tôi có thể nhận được hoa hồng mà không làm thay đổi giá bạn phải trả.",
    },
    hero: {
      runner: {
        live: "ĐANG CẬP NHẬT TRỰC TIẾP",
        curated: "BIÊN TẬP TUYỂN CHỌN · ĐẢM BẢO MINH BẠCH",
        locale: "VIETNAM · 2026",
      },
      eyebrow: "CURATED DISCOVERY · KHÔNG BÁN TRỰC TIẾP",
      titleLine1: "Khám phá những",
      smallPill: "GIODICHO 2026",
      titleLine2: "mô hình nhỏ",
      titleAccent: "đáng sưu tầm",
      lead: "Tuyển chọn mô hình nhỏ, figure và đồ decor bàn làm việc từ các nền tảng uy tín — có review thật, giá so sánh và gợi ý mua phù hợp.",
      browsingNow: "248 ĐANG XEM",
      chips: {
        bestPick: { label: "Best Pick", val: "SCORE 9.4" },
        hotDeal: { label: "Hot Deal", val: "−25% SHOPEE" },
        giftIdea: { label: "Gift Idea", val: "DƯỚI 2TR" },
      },
      stageLabelTl: "FIG · 07",
      stageLabelBr: "1/7 · 240MM",
      meta: [
        { k: "240+", v: "SP TUYỂN CHỌN" },
        { k: "4",    v: "NỀN TẢNG · 1 TRANG" },
        { k: "24h",  v: "GIÁ CẬP NHẬT" },
        { k: "12",   v: "BIÊN TẬP VIÊN" },
      ],
    },
    marquee: [
      "ĐÃ REVIEW",
      "ĐÃ SO SÁNH",
      "TUYỂN CHỌN",
      "CẬP NHẬT HÀNG NGÀY",
      "ANIME FIGURES",
      "MINI CARS",
      "FANTASY",
      "DESK DECOR",
      "HÀNG HIẾM",
    ],
    sections: {
      categories: {
        eyebrow: "BỘ SƯU TẬP",
        titlePre: "Mỗi bộ sưu tập,",
        titleIt: "một thế giới riêng",
        titlePost: ".",
        lead: "Sáu nhóm chính — từ figure anime đến mô hình xe và phụ kiện bàn làm việc cao cấp.",
        badgeLabels: { best: "BEST", new: "MỚI", limited: "LIMITED" },
      },
      bestPicks: {
        eyebrow: "GỢI Ý ĐÁNG MUA",
        titlePre: "Sáu hạng mục,",
        titleIt: "sáu winner",
        titlePost: ".",
        lead: "Mỗi tháng, biên tập chọn ra một winner cho từng nhu cầu — không “top 10 SEO rỗng tuếch”.",
        viewAll: "Xem tất cả Best Picks",
        labels: {
          bestOverall: "BEST OVERALL",
          bestBudget: "BEST BUDGET",
          bestForGift: "BEST CHO QUÀ TẶNG",
          bestForDesk: "BEST CHO DESK",
          bestLimited: "BEST LIMITED",
          bestCute: "BEST CUTE",
        },
      },
      deals: {
        eyebrow: "DEAL HÔM NAY",
        titlePre: "Cập nhật 24h,",
        titleIt: "không flash sale rởm",
        titlePost: ".",
        lead: "Chúng tôi chỉ surface deal khi giá thực sự tốt — nếu không thấy gì hấp dẫn, danh sách này sẽ trống.",
      },
      compare: {
        eyebrow: "SO SÁNH",
        titlePre: "Phân vân giữa hai mẫu?",
        titleIt: "So sánh trong 10 giây",
        titlePost: ".",
        lead: "Chọn 2-4 sản phẩm bất kỳ, chúng tôi xếp thành bảng cạnh nhau với editor's verdict.",
        vsLabel: "vs",
        plusLabel: "+",
      },
      reviews: {
        eyebrow: "REVIEW & HƯỚNG DẪN MỚI",
        titlePre: "Đọc trước khi mua,",
        titleIt: "tin tốt hơn click",
        titlePost: ".",
      },
      gifts: {
        eyebrow: "QUÀ TẶNG THEO NGÂN SÁCH",
        titlePre: "Chọn theo túi tiền,",
        titleIt: "không phải theo dịp",
        titlePost: ".",
        bands: {
          under300k: "DƯỚI 300K",
          mid: "300 – 700K",
          high: "700K – 1.5TR",
          over15M: "TRÊN 1.5TR",
        },
      },
      merchants: {
        eyebrow: "NỀN TẢNG ĐỐI TÁC",
        titlePre: "Chúng tôi điều hướng bạn đến",
        titleIt: "4 nền tảng tin cậy",
        titlePost: ".",
        lead: "Mỗi merchant được track giá theo thời gian, có coupon code và ghi chú về vận chuyển + bảo hành.",
        descriptions: {
          shopee:   "Phổ biến nhất tại VN — giá cạnh tranh, ship nhanh, hay có coupon.",
          tiktok:   "Drop livestream và limited-run thường xuyên — giá có thể tốt nhất.",
          lazada:   "Hàng official store và LazMall — bảo hành chính hãng đầy đủ.",
          official: "Cửa hàng thương hiệu chính thức — limited drops, COA đi kèm.",
        },
        trackedCounts: {
          shopee:   "97 SP TRACKED",
          tiktok:   "58 SP TRACKED",
          lazada:   "44 SP TRACKED",
          official: "23 SP TRACKED",
        },
      },
      testimonials: {
        eyebrow: "NGƯỜI SƯU TẦM NÓI GÌ",
        titlePre: "Niềm tin của 12.000+",
        titleIt: "người sưu tầm",
        titlePost: ".",
      },
    },
    productDetail: {
      breadcrumbAria: "Đường dẫn điều hướng",
      breadcrumbHome: "Trang chủ",
      galleryAria: "Bộ ảnh sản phẩm",
      thumbAria: "Ảnh thu nhỏ",
      reviewsCount: "{n} đánh giá",
      editorScoreAria: "Điểm biên tập",
      priceFromLabel: "Từ",
      whereToBuyTitle: "Mua ở đâu",
      whereToBuyLead: "Chúng tôi so giá thực giữa các nền tảng, ưu tiên hiển thị nơi đang có giá tốt nhất.",
      whereToBuyHeads: {
        merchant: "Nền tảng",
        price: "Giá",
        coupon: "Ưu đãi",
        shipping: "Vận chuyển",
        cta: "Đến nơi bán",
      },
      aboutTitle: "Về sản phẩm",
      prosTitle: "Ưu điểm",
      consTitle: "Hạn chế",
      bestForTitle: "Phù hợp cho",
      specsTitle: "Thông số kỹ thuật",
      specLabels: {
        scale: "Tỉ lệ",
        material: "Chất liệu",
        size: "Kích thước",
        weight: "Trọng lượng",
        origin: "Xuất xứ",
        power: "Nguồn điện",
      },
      faqTitle: "Câu hỏi thường gặp",
      relatedTitle: "Sản phẩm liên quan",
      relatedLead: "Cùng phân khúc, được biên tập gợi ý xem song song.",
      pricesMayChange: "Giá có thể thay đổi theo thời điểm — kiểm tra lại trên nền tảng trước khi đặt.",
      seeAllSellers: "Xem tất cả nơi bán",
      saveAria: "Lưu sản phẩm",
      pickedForPrefix: "Editor Pick",
      bestSeller: "Đề xuất tốt nhất",
      buybarCta: "Xem nơi bán",
      noCoupon: "—",
      noShipping: "—",
    },
    collection: {
      breadcrumbAria: "Đường dẫn điều hướng",
      breadcrumbHome: "Trang chủ",
      introSuffix: "Tất cả sản phẩm dưới đây đều được biên tập kiểm tra thực tế, so giá giữa các nền tảng và chỉ giữ lại những lựa chọn thật sự đáng tiền.",
      stats: { products: "Sản phẩm", avgScore: "Điểm trung bình", priceRefresh: "Cập nhật giá" },
      priceRefreshValue: "24h",
      filtersTitle: "Bộ lọc",
      filterToggle: "Bộ lọc",
      filterCloseAria: "Đóng bộ lọc",
      groups: { merchant: "Nền tảng", badge: "Nhãn", price: "Khoảng giá (₫)", rating: "Điểm tối thiểu" },
      priceMin: "Từ",
      priceMax: "Đến",
      ratingOptions: { any: "Tất cả", r90: "9.0+", r85: "8.5+", r80: "8.0+" },
      clearFilters: "Xoá bộ lọc",
      resultCount: "{n} sản phẩm",
      sortLabel: "Sắp xếp theo",
      sortOptions: {
        recommended: "Gợi ý",
        priceAsc: "Giá thấp đến cao",
        priceDesc: "Giá cao đến thấp",
        rated: "Điểm cao nhất",
        deals: "Đang có deal",
      },
      emptyTitle: "Không có sản phẩm phù hợp",
      emptyBody: "Thử nới rộng khoảng giá hoặc bỏ bớt bộ lọc để xem thêm lựa chọn.",
      relatedTitle: "Bộ sưu tập liên quan",
      relatedLead: "Khám phá thêm các nhóm sản phẩm khác trong cùng hệ sinh thái Giodicho.",
      guidesTitle: "Hướng dẫn & review liên quan",
      guidesLead: "Đọc trước khi mua — phân tích thật, không tô hồng.",
      faqTitle: "Câu hỏi thường gặp",
      faqs: [
        {
          q: "Giodicho chọn sản phẩm cho bộ sưu tập này như thế nào?",
          a: "Biên tập viên mở hộp, đo đạc và đặt thử sản phẩm thật rồi mới chấm điểm. Chỉ những món đạt tiêu chí về chi tiết, độ bền và giá trị mới được giữ lại trong danh sách.",
        },
        {
          q: "Giá hiển thị có chính xác không?",
          a: "Giá được tham chiếu từ các nền tảng và có thể thay đổi theo thời điểm hoặc theo coupon. Hãy kiểm tra lại trên trang nền tảng trước khi đặt mua.",
        },
        {
          q: "Mua qua link của Giodicho có đắt hơn không?",
          a: "Không. Đây là affiliate link — bạn trả đúng giá niêm yết của nền tảng, Giodicho có thể nhận hoa hồng mà không làm tăng giá của bạn.",
        },
      ],
    },
    bestPicks: {
      breadcrumbAria: "Đường dẫn điều hướng",
      breadcrumbHome: "Trang chủ",
      eyebrow: "GỢI Ý ĐÁNG MUA",
      title: "Gợi ý mô hình",
      titleAccent: "đáng mua",
      lead: "Mỗi hạng mục chỉ có một winner do biên tập chọn — đã mở hộp, đo đạc và so giá thật. Không “top 10 SEO” rỗng tuếch, chỉ những món thật sự đáng tiền.",
      stats: [
        { k: "6", v: "HẠNG MỤC" },
        { k: "12", v: "BIÊN TẬP VIÊN" },
        { k: "24h", v: "CẬP NHẬT GIÁ" },
      ],
      tabAll: "Tất cả",
      tabLabels: {
        bestOverall: "Tốt nhất tổng thể",
        bestBudget: "Đáng tiền nhất",
        bestForGift: "Hợp làm quà",
        bestForDesk: "Cho bàn làm việc",
        bestLimited: "Hàng giới hạn",
        bestCute: "Cute nhất",
      },
      featuredEyebrow: "ĐỀ XUẤT HÀNG ĐẦU",
      otherTitle: "Các winner khác",
      altTitle: "Lựa chọn thay thế",
      altLead: "Cùng phân khúc với winner — cân nhắc nếu bạn muốn một hướng khác.",
      whyTitle: "Vì sao chúng tôi chọn những món này",
      whyLead: "Mỗi gợi ý đều phải vượt qua quy trình đánh giá thực tế trước khi lên danh sách.",
      whyPoints: [
        "Mở hộp và cầm thử sản phẩm thật, không chấm điểm qua ảnh nhà bán.",
        "So giá giữa Shopee, TikTok Shop, Lazada và Official Store theo thời gian.",
        "Chỉ giữ lại một winner cho mỗi nhu cầu — ưu tiên giá trị, độ bền và độ hoàn thiện.",
      ],
      criteriaTitle: "Tiêu chí đánh giá",
      criteriaLead: "Bốn tiêu chí cố định áp dụng cho mọi sản phẩm trong danh sách.",
      criteria: [
        { title: "Chất lượng hoàn thiện", desc: "Độ chi tiết, nước sơn và độ chắc chắn khi quan sát ở khoảng cách trưng bày thật." },
        { title: "Giá trị theo tầm giá", desc: "Cảm giác cầm tay và chất liệu so với mức giá — đáng tiền chứ không chỉ rẻ." },
        { title: "Độ tin cậy nơi bán", desc: "Ưu tiên shop uy tín, giá minh bạch và chính sách đổi trả rõ ràng." },
        { title: "Phù hợp nhu cầu", desc: "Mỗi winner được chọn cho một mục đích cụ thể: quà tặng, bàn làm việc, sưu tầm…" },
      ],
    },
    dealsPage: {
      breadcrumbAria: "Đường dẫn điều hướng",
      breadcrumbHome: "Trang chủ",
      eyebrow: "ƯU ĐÃI TUYỂN CHỌN",
      title: "Ưu đãi",
      titleAccent: "thật sự đáng để ý",
      lead: "Chúng tôi chỉ đưa vào danh sách khi giá thực sự tốt — so giá giữa các nền tảng, không flash sale rởm và không đếm ngược giả.",
      updatedLabel: "Cập nhật hôm nay",
      stats: [
        { k: "24h", v: "CẬP NHẬT GIÁ" },
        { k: "4", v: "NỀN TẢNG" },
        { k: "0", v: "ĐẾM NGƯỢC GIẢ" },
      ],
      filters: {
        today: "Hôm nay",
        hot: "Giảm sâu",
        limited: "Sắp kết thúc",
        coupon: "Có mã giảm",
        budget: "Dưới 300K",
        gift: "Quà tặng",
      },
      resultCount: "{n} ưu đãi",
      couponPrefix: "Mã",
      endsPrefix: "Kết thúc",
      emptyTitle: "Chưa có ưu đãi phù hợp",
      emptyBody: "Hôm nay nhóm này chưa có deal đủ tốt. Thử bộ lọc khác hoặc quay lại sau.",
      trustTitle: "Lưu ý khi săn deal",
      trustPoints: [
        "Giá và mã giảm có thể thay đổi theo thời điểm — luôn kiểm tra lại trên nền tảng trước khi đặt.",
        "Ưu tiên shop uy tín, có đánh giá thật và chính sách đổi trả rõ ràng.",
        "Áp mã giảm ở bước thanh toán; một số voucher chỉ có trong livestream.",
        "Deal giới hạn thời gian có thể hết sớm hơn ngày kết thúc nếu cháy hàng.",
      ],
      relatedTitle: "Có thể bạn cũng thích",
      relatedLead: "Những sản phẩm được biên tập chấm điểm cao, đáng cân nhắc song song.",
    },
    guidesPage: {
      breadcrumbAria: "Đường dẫn điều hướng",
      breadcrumbHome: "Trang chủ",
      eyebrow: "HƯỚNG DẪN & ĐÁNH GIÁ",
      title: "Đọc trước",
      titleAccent: "khi xuống tiền",
      lead: "Phân tích thật từ người cầm sản phẩm trên tay — hướng dẫn mua, đánh giá, gợi ý quà tặng và mẹo setup bàn làm việc.",
      stats: [
        { k: "6", v: "BÀI VIẾT" },
        { k: "100%", v: "TỰ TRẢI NGHIỆM" },
        { k: "0", v: "NỘI DUNG COPY" },
      ],
      tabAll: "Tất cả",
      featuredEyebrow: "BÀI NỔI BẬT",
      allTitle: "Tất cả bài viết",
      allLead: "Cập nhật thường xuyên theo drop mới và mùa quà tặng.",
      popularTitle: "Chủ đề phổ biến",
      popularLead: "Bắt đầu từ những chủ đề được đọc nhiều nhất.",
      emptyTitle: "Chưa có bài viết",
      emptyBody: "Chủ đề này chưa có bài. Thử chọn chủ đề khác hoặc xem tất cả.",
    },
    articleDetail: {
      breadcrumbAria: "Đường dẫn điều hướng",
      breadcrumbHome: "Trang chủ",
      breadcrumbGuides: "Hướng dẫn",
      byPrefix: "Bởi",
      tocTitle: "Trong bài này",
      recommendedTitle: "Gợi ý trong bài",
      recommendedLead: "Những sản phẩm được nhắc tới — so giá trước khi mua.",
      relatedTitle: "Bài viết liên quan",
      relatedLead: "Đọc thêm để chọn cho chắc.",
      faqTitle: "Câu hỏi thường gặp",
      disclosureNote: "Bài viết có chứa liên kết affiliate.",
    },
    editor: {
      quote: "Mỗi món bạn thấy ở đây đều phải trả lời được câu này: nếu là tiền của mình, mình có mua không?",
      signature: "— LINH · BIÊN TẬP TRƯỞNG",
      avatar: "L",
    },
    newsletter: {
      eyebrow: "NEWSLETTER",
      title1: "Nhận gợi ý mô hình đẹp,",
      title2It: "deal tốt và hàng hiếm.",
      lead: "Một email/tuần · Best Picks, drop giới hạn, deal đáng để ý.",
      cta: "Đăng ký",
      placeholder: "địa chỉ email của bạn",
      floaters: { f1: "GỬI HÀNG TUẦN", f2: "KHÔNG SPAM" },
      ok: "Cảm ơn! Số bạn đã được ghi nhận.",
      err: "Vui lòng nhập email hợp lệ.",
    },
    footer: {
      brandDesc: "Curated discovery cho người sưu tầm mô hình, figure và đồ decor bàn làm việc.",
      copy: "© 2026 GIODICHO · CURATED DISCOVERY",
      colTitles: { discover: "Khám phá", read: "Đọc", about: "Về Giodicho", legal: "Pháp lý" },
      cols: {
        discover: ["Bộ sưu tập", "Gợi ý đáng mua", "Ưu đãi", "So sánh"],
        read: ["Đánh giá", "Hướng dẫn", "Gợi ý quà tặng", "Setup ý tưởng"],
        about: ["Giới thiệu", "Cách tuyển chọn", "Liên hệ", "Newsletter"],
        legal: ["Công bố Affiliate", "Chính sách bảo mật", "Điều khoản"],
      },
    },
  },
  meta: {
    title: "Giodicho — Khám phá mô hình nhỏ đáng sưu tầm",
    description: "Curated affiliate discovery cho mô hình anime, xe mini, fantasy diorama và decor bàn làm việc — review thật, so sánh giá từ Shopee, TikTok Shop, Lazada và Official Store.",
  },
};

const en: Dictionary = {
  nav: { home: "Home", collections: "Collections", products: "Products", new: "New Arrivals", about: "About", contact: "Contact" },
  cart: "Cart",
  hero: {
    tag: "New season collection",
    tagPill: "DROP 07",
    title1: "Tiny Worlds,",
    title2: "Big Imagination",
    lead: "Hand-picked figures, limited drops, and display-grade décor for collectors who care about the smallest details.",
    cta1: "Shop the collection",
    cta2: "New arrivals",
    meta: [
      { k: "240+", v: "Curated pieces" },
      { k: "100%", v: "Authentic" },
      { k: "48h", v: "Nationwide ship" },
    ],
    chips: { ship: "48h delivery", limited: "Limited drop", auth: "Authenticity guaranteed" },
    stage: "FEATURED MODEL — FIG.07",
    smallPill: "+240 pcs",
    indexLine: "N°07 / Drop · 26.05.26",
    runnerAtelier: "1/200 · KYOTO ATELIER",
    reviewsLine: "4.9 · 2,340 reviews",
  },
  marquee: ["Anime Figures", "Mini Cars", "Fantasy Worlds", "Desk Decor", "Limited Editions", "Hand-painted", "1:64 Scale", "Premium Cast"],
  collections: {
    eyebrow: "COLLECTIONS",
    title: "Every collection, a world of its own.",
    lead: "Five curated worlds — from anime figures and 1:64 die-cast to desk-grade décor and numbered drops.",
    items: [
      { name: "Anime Figures", desc: "Iconic characters, detail-rich casts.", badge: "Best seller", code: "AF" },
      { name: "Mini Cars", desc: "Authentic 1:64 die-cast classics.", badge: "New", code: "MC" },
      { name: "Fantasy Worlds", desc: "Dioramas, creatures and mythic castles.", badge: null, code: "FW" },
      { name: "Desk Decor", desc: "Display-grade pieces for your desk.", badge: null, code: "DD" },
      { name: "Limited Editions", desc: "Numbered drops, limited runs.", badge: "Limited", code: "LE" },
    ],
  },
  products: {
    eyebrow: "FEATURED PRODUCTS",
    title: "Each piece picked. Each story kept.",
    lead: "Every item is hand-inspected, carefully packed, and delivered to collectors who notice.",
    viewAll: "View all products",
    addToCart: "Add to cart",
    quickView: "Quick view",
    badgeLabels: { new: "NEW", limited: "LIMITED", best: "BEST SELLER" },
    items: [
      { name: "Astro Pilot — Blue Ver.", cat: "Anime Figures", price: "$72.00", rating: "4.9", badge: "new", code: "AP-01" },
      { name: "GT Roadster '67", cat: "Mini Cars", price: "$24.00", rating: "4.8", badge: null, code: "GT-67" },
      { name: "Sage of the Hollow", cat: "Fantasy", price: "$96.00", rating: "5.0", badge: "limited", code: "SH-09" },
      { name: "Desk Lantern Mini", cat: "Desk Decor", price: "$14.00", rating: "4.7", badge: "best", code: "DL-02" },
      { name: "Mecha Drifter X9", cat: "Anime Figures", price: "$62.00", rating: "4.9", badge: null, code: "MD-X9" },
      { name: "Rally Coupe Vintage", cat: "Mini Cars", price: "$22.00", rating: "4.8", badge: "new", code: "RC-21" },
      { name: "Cloud Castle Diorama", cat: "Fantasy", price: "$128.00", rating: "4.9", badge: "limited", code: "CC-04" },
      { name: "Brass Stand No.5", cat: "Desk Decor", price: "$9.00", rating: "4.6", badge: null, code: "BS-05" },
    ],
  },
  story: {
    eyebrow: "PRODUCT STORY",
    title: "One model, four careful layers.",
    lead: "From hand-pick to hand-off — every step treated like the piece you're about to collect.",
    stepWord: "STEP",
    steps: [
      { title: "Hand-picked collectibles", desc: "Each item is sourced directly from authorized makers and inspected by hand before it enters our shelves.", icon: "01" },
      { title: "Premium display quality", desc: "Cast and paint finishes built for shelves, desks and glass cabinets — display-grade, not toy-grade.", icon: "02" },
      { title: "Carefully packed", desc: "Foam-shaped trays, anti-moisture pouches and tamper seals — yours arrives the way it left the studio.", icon: "03" },
      { title: "Limited edition drops", desc: "Numbered runs with fixed inventory. Subscribe early to hold your spot before the door closes.", icon: "04" },
    ],
  },
  drop: {
    eyebrow: "LIMITED DROP",
    title: "Drop 07 — Aurora Pilot",
    desc: "Numbered 1/200. Hand-painted in Kyoto, laser-etched brass base. Window closes end of week.",
    cta: "Reserve now",
    cta2: "Product details",
    labels: { days: "Days", hours: "Hours", mins: "Mins", secs: "Secs" },
    stageLabel: "AURORA PILOT — 1/200",
  },
  detail: {
    eyebrow: "DETAIL PAGE PREVIEW",
    title: "A detail page that feels like holding the piece.",
    lead: "Gallery + product info + accordion policies, tuned for buying confidence and SEO.",
    breadcrumb: ["Home", "Anime Figures", "Astro Pilot — Blue Ver."],
    productName: "Astro Pilot — Blue Ver.",
    rating: "4.9 / 5 · 128 reviews",
    price: "$72.00",
    was: "$84.00",
    desc: "22cm hand-painted figure with 18-point articulation. Includes laser-etched metal base and keepsake box.",
    qty: "Quantity",
    addToCart: "Add to cart",
    wishlist: "Wishlist",
    ship: "Nationwide 48h ship · Free returns within 7 days",
    acc: [
      { title: "Details", body: "Height 22cm · 18 articulation points · 480g · Scale 1/7 · Box 28×16×12cm." },
      { title: "Materials", body: "Premium ABS, non-toxic acrylic paint, scratch-resistant metal base." },
      { title: "Delivery", body: "Triple-layer impact packaging. Same-city 24h, nationwide 48-72h." },
      { title: "Return policy", body: "Free returns within 7 days, sealed and in original box." },
    ],
  },
  why: {
    eyebrow: "WHY GIODICHO",
    title: "Four promises. One unforgettable collecting experience.",
    items: [
      { title: "Authentic Products", desc: "Sourced directly from authorized makers. Sealed and certified." },
      { title: "Carefully Packed", desc: "Foam-shaped trays, moisture pouches, extra carton sleeve." },
      { title: "Fast Delivery", desc: "24h same-city, 48-72h nationwide, fully tracked." },
      { title: "Collector Friendly", desc: "Specialist support, honest reviews, member perks." },
    ],
  },
  testi: {
    eyebrow: "COLLECTORS SAY",
    title: "Desks and cabinets that now have a Giodicho on them.",
    items: [
      { name: "Minh Anh", loc: "Ho Chi Minh City", quote: "Packaging is rock-solid, figure arrived sealed. Third order in, more to come.", stars: 5 },
      { name: "Hai Tran", loc: "Hanoi", quote: "Real 1:64 die-cast at honest prices, paint is flawless. My desk just leveled up.", stars: 5 },
      { name: "Phuong Linh", loc: "Da Nang", quote: "Got the numbered card with my limited edition. Feels like real collecting, not shopping.", stars: 5 },
      { name: "Duc Long", loc: "Can Tho", quote: "Genuine support, real photos before shipping. They've earned a long-time customer.", stars: 5 },
    ],
  },
  news: {
    title: "Get notified on rare drops.",
    desc: "Be first to know when a rare miniature arrives — a full 24 hours before public.",
    placeholder: "Your email address",
    cta: "Subscribe",
    ok: "Thanks! You'll be first to know.",
    err: "Please enter a valid email address.",
    tags: ["DROP 08", "SOON"],
  },
  footer: {
    tag: "Giodicho — curated miniatures and display pieces for collectors who notice details.",
    cols: {
      shop: { title: "Shop", items: ["New arrivals", "Best sellers", "Limited drops", "Gift cards"] },
      coll: { title: "Collections", items: ["Anime Figures", "Mini Cars", "Fantasy Worlds", "Desk Decor"] },
      sup: { title: "Support", items: ["Contact", "Shipping", "Returns", "FAQ"] },
      pol: { title: "Policies", items: ["Privacy", "Terms", "Cookies", "Warranty"] },
    },
    copy: "© 2026 Giodicho. All rights reserved.",
  },
  affiliate: {
    nav: {
      home: "Home",
      collections: "Collections",
      best: "Best Picks",
      deals: "Deals",
      reviews: "Reviews",
      guides: "Guides",
      compare: "Compare",
      about: "About",
    },
    ui: {
      explore: "Explore",
      viewDeal: "View Deal",
      viewReview: "Read Review",
      checkPrice: "Check Price",
      compare: "Compare",
      readGuide: "Read Guide",
      saveItem: "Save",
      seeAll: "See all",
      browse: "Browse Collections",
      explorePicks: "Explore Best Picks",
      addToCompare: "+ Add to Compare",
      compareNow: "Compare now",
      newsletter: "Subscribe",
      placeholderEmail: "your email address",
      productsCount: "products",
      readTime: "min read",
      whyWePicked: "Why we picked it",
      addProduct: "ADD PRODUCT",
      skipToContent: "Skip to main content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      searchAria: "Search",
      themeToLight: "Switch to light mode",
      themeToDark: "Switch to dark mode",
      savedAria: "Saved items",
      languageAria: "Language",
    },
    disclosure: {
      full: "Some links on this website are affiliate links. We may earn a commission when you purchase through them, at no extra cost to you.",
    },
    hero: {
      runner: {
        live: "LIVE PRICE TRACKING",
        curated: "EDITOR-CURATED · TRANSPARENT BY DEFAULT",
        locale: "VIETNAM · 2026",
      },
      eyebrow: "CURATED DISCOVERY · NOT A STORE",
      titleLine1: "Discover",
      smallPill: "GIODICHO 2026",
      titleLine2: "tiny worlds",
      titleAccent: "worth collecting",
      lead: "Curated miniatures, figures and desk collectibles from trusted marketplaces — reviewed, compared and organized for collectors.",
      browsingNow: "248 BROWSING NOW",
      chips: {
        bestPick: { label: "Best Pick", val: "SCORE 9.4" },
        hotDeal: { label: "Hot Deal", val: "−25% SHOPEE" },
        giftIdea: { label: "Gift Idea", val: "UNDER 2M" },
      },
      stageLabelTl: "FIG · 07",
      stageLabelBr: "1/7 · 240MM",
      meta: [
        { k: "240+", v: "CURATED PICKS" },
        { k: "4",    v: "MERCHANTS · 1 PLACE" },
        { k: "24h",  v: "PRICE REFRESH" },
        { k: "12",   v: "EDITORS" },
      ],
    },
    marquee: [
      "REVIEWED",
      "COMPARED",
      "CURATED",
      "UPDATED DAILY",
      "ANIME FIGURES",
      "MINI CARS",
      "FANTASY",
      "DESK DECOR",
      "LIMITED EDITIONS",
    ],
    sections: {
      categories: {
        eyebrow: "COLLECTIONS",
        titlePre: "Each collection,",
        titleIt: "its own world",
        titlePost: ".",
        lead: "Six core groups — from anime figures to mini cars and premium desk accessories.",
        badgeLabels: { best: "BEST", new: "NEW", limited: "LIMITED" },
      },
      bestPicks: {
        eyebrow: "BEST PICKS",
        titlePre: "Six categories,",
        titleIt: "six winners",
        titlePost: ".",
        lead: "Each month, our editors pick a single winner per use-case — no fake top-10 SEO lists.",
        viewAll: "View all Best Picks",
        labels: {
          bestOverall: "BEST OVERALL",
          bestBudget: "BEST BUDGET",
          bestForGift: "BEST FOR GIFT",
          bestForDesk: "BEST FOR DESK SETUP",
          bestLimited: "BEST LIMITED",
          bestCute: "BEST CUTE",
        },
      },
      deals: {
        eyebrow: "TODAY'S DEALS",
        titlePre: "Updated 24h,",
        titleIt: "no fake countdowns",
        titlePost: ".",
        lead: "We only surface a deal when it's actually a deal. If nothing's good today, this is empty.",
      },
      compare: {
        eyebrow: "COMPARE",
        titlePre: "Stuck between two?",
        titleIt: "Compare in 10 seconds",
        titlePost: ".",
        lead: "Pick any 2-4 products and we lay them out side-by-side with an editor's verdict.",
        vsLabel: "vs",
        plusLabel: "+",
      },
      reviews: {
        eyebrow: "LATEST REVIEWS & GUIDES",
        titlePre: "Read before you buy,",
        titleIt: "trust over clicks",
        titlePost: ".",
      },
      gifts: {
        eyebrow: "GIFT IDEAS BY BUDGET",
        titlePre: "Pick by budget,",
        titleIt: "not by occasion",
        titlePost: ".",
        bands: {
          under300k: "UNDER 300K",
          mid: "300 – 700K",
          high: "700K – 1.5M",
          over15M: "ABOVE 1.5M",
        },
      },
      merchants: {
        eyebrow: "TRUSTED MARKETPLACES",
        titlePre: "We point you toward",
        titleIt: "4 trusted platforms",
        titlePost: ".",
        lead: "Each merchant is price-tracked, coupon-noted, and annotated with shipping & warranty info.",
        descriptions: {
          shopee:   "Most popular in Vietnam — competitive prices, fast shipping, frequent coupons.",
          tiktok:   "Frequent livestream drops and limited runs — sometimes the best price.",
          lazada:   "Official store and LazMall items with authentic-brand warranty.",
          official: "Official brand storefronts — limited drops with certificate of authenticity.",
        },
        trackedCounts: {
          shopee:   "97 ITEMS TRACKED",
          tiktok:   "58 ITEMS TRACKED",
          lazada:   "44 ITEMS TRACKED",
          official: "23 ITEMS TRACKED",
        },
      },
      testimonials: {
        eyebrow: "WHAT COLLECTORS SAY",
        titlePre: "Trust of 12,000+",
        titleIt: "collectors",
        titlePost: ".",
      },
    },
    productDetail: {
      breadcrumbAria: "Breadcrumb",
      breadcrumbHome: "Home",
      galleryAria: "Product gallery",
      thumbAria: "Thumbnail",
      reviewsCount: "{n} reviews",
      editorScoreAria: "Editor score",
      priceFromLabel: "From",
      whereToBuyTitle: "Where to buy",
      whereToBuyLead: "We track real prices across platforms and surface the best one first.",
      whereToBuyHeads: {
        merchant: "Merchant",
        price: "Price",
        coupon: "Coupon",
        shipping: "Shipping",
        cta: "Go to store",
      },
      aboutTitle: "About this product",
      prosTitle: "Pros",
      consTitle: "Cons",
      bestForTitle: "Best for",
      specsTitle: "Specifications",
      specLabels: {
        scale: "Scale",
        material: "Material",
        size: "Size",
        weight: "Weight",
        origin: "Origin",
        power: "Power",
      },
      faqTitle: "Frequently asked",
      relatedTitle: "You may also like",
      relatedLead: "Same category, editor-paired to browse side by side.",
      pricesMayChange: "Prices change over time — re-check on the platform before buying.",
      seeAllSellers: "See all sellers",
      saveAria: "Save product",
      pickedForPrefix: "Editor Pick",
      bestSeller: "Top pick",
      buybarCta: "View Deal",
      noCoupon: "—",
      noShipping: "—",
    },
    collection: {
      breadcrumbAria: "Breadcrumb",
      breadcrumbHome: "Home",
      introSuffix: "Every product below is hand-checked by our editors, price-compared across platforms, and kept on the list only if it's genuinely worth the money.",
      stats: { products: "Products", avgScore: "Avg score", priceRefresh: "Price refresh" },
      priceRefreshValue: "24h",
      filtersTitle: "Filters",
      filterToggle: "Filters",
      filterCloseAria: "Close filters",
      groups: { merchant: "Merchant", badge: "Badge", price: "Price range (₫)", rating: "Min score" },
      priceMin: "Min",
      priceMax: "Max",
      ratingOptions: { any: "Any", r90: "9.0+", r85: "8.5+", r80: "8.0+" },
      clearFilters: "Clear filters",
      resultCount: "{n} products",
      sortLabel: "Sort by",
      sortOptions: {
        recommended: "Recommended",
        priceAsc: "Price: low to high",
        priceDesc: "Price: high to low",
        rated: "Best rated",
        deals: "On deal",
      },
      emptyTitle: "No products match",
      emptyBody: "Try widening the price range or removing some filters to see more options.",
      relatedTitle: "Related collections",
      relatedLead: "Explore other product groups across the Giodicho ecosystem.",
      guidesTitle: "Related guides & reviews",
      guidesLead: "Read before you buy — real analysis, no fluff.",
      faqTitle: "Frequently asked",
      faqs: [
        {
          q: "How does Giodicho pick products for this collection?",
          a: "Our editors unbox, measure and handle each product before scoring it. Only pieces that meet our bar for detail, durability and value stay on the list.",
        },
        {
          q: "Are the prices shown accurate?",
          a: "Prices are referenced from the platforms and can change over time or with coupons. Always re-check on the platform page before buying.",
        },
        {
          q: "Does buying through Giodicho links cost more?",
          a: "No. These are affiliate links — you pay the platform's listed price, and Giodicho may earn a commission at no extra cost to you.",
        },
      ],
    },
    bestPicks: {
      breadcrumbAria: "Breadcrumb",
      breadcrumbHome: "Home",
      eyebrow: "BEST PICKS",
      title: "Best picks",
      titleAccent: "worth your money",
      lead: "One editor-chosen winner per use-case — each unboxed, measured and price-checked for real. No empty top-10 SEO lists, just pieces actually worth buying.",
      stats: [
        { k: "6", v: "CATEGORIES" },
        { k: "12", v: "EDITORS" },
        { k: "24h", v: "PRICE REFRESH" },
      ],
      tabAll: "All",
      tabLabels: {
        bestOverall: "Best overall",
        bestBudget: "Best budget",
        bestForGift: "Best for gift",
        bestForDesk: "Best for desk",
        bestLimited: "Best limited",
        bestCute: "Best cute",
      },
      featuredEyebrow: "EDITOR'S TOP PICK",
      otherTitle: "Other top picks",
      altTitle: "Alternatives",
      altLead: "Same segment as the winner — worth a look if you want a different direction.",
      whyTitle: "Why we picked these",
      whyLead: "Every pick has to clear a real evaluation process before it makes the list.",
      whyPoints: [
        "We unbox and handle the actual product — never score from seller photos.",
        "We track prices across Shopee, TikTok Shop, Lazada and Official Store over time.",
        "Only one winner per use-case stays — judged on value, durability and finish.",
      ],
      criteriaTitle: "How we judge",
      criteriaLead: "Four fixed criteria applied to every product on the list.",
      criteria: [
        { title: "Build quality", desc: "Detail, paint and sturdiness seen at real display distance." },
        { title: "Value for the tier", desc: "Heft and materials versus the price — worth it, not just cheap." },
        { title: "Seller reliability", desc: "Trusted shops, transparent pricing and clear return policies first." },
        { title: "Fit for purpose", desc: "Each winner is chosen for a specific need: gifting, desk, collecting…" },
      ],
    },
    dealsPage: {
      breadcrumbAria: "Breadcrumb",
      breadcrumbHome: "Home",
      eyebrow: "CURATED DEALS",
      title: "Deals",
      titleAccent: "actually worth a look",
      lead: "We only list a deal when the price is genuinely good — compared across platforms, with no fake flash sales or countdown timers.",
      updatedLabel: "Updated today",
      stats: [
        { k: "24h", v: "PRICE REFRESH" },
        { k: "4", v: "MARKETPLACES" },
        { k: "0", v: "FAKE COUNTDOWNS" },
      ],
      filters: {
        today: "Today",
        hot: "Hot deals",
        limited: "Ending soon",
        coupon: "Coupon",
        budget: "Under 300K",
        gift: "Gift deals",
      },
      resultCount: "{n} deals",
      couponPrefix: "Code",
      endsPrefix: "Ends",
      emptyTitle: "No matching deals",
      emptyBody: "Nothing in this group is good enough today. Try another filter or check back later.",
      trustTitle: "Before you grab a deal",
      trustPoints: [
        "Prices and coupon codes can change over time — always re-check on the platform before buying.",
        "Prefer trusted shops with real reviews and a clear return policy.",
        "Apply coupon codes at checkout; some vouchers are livestream-only.",
        "Limited-time deals can end before their listed date if stock runs out.",
      ],
      relatedTitle: "You may also like",
      relatedLead: "Editor-scored picks worth considering alongside today's deals.",
    },
    guidesPage: {
      breadcrumbAria: "Breadcrumb",
      breadcrumbHome: "Home",
      eyebrow: "GUIDES & REVIEWS",
      title: "Read this",
      titleAccent: "before you spend",
      lead: "Real analysis from people who handled the products — buying guides, reviews, gift ideas and desk-setup tips.",
      stats: [
        { k: "6", v: "ARTICLES" },
        { k: "100%", v: "HANDS-ON" },
        { k: "0", v: "COPIED CONTENT" },
      ],
      tabAll: "All",
      featuredEyebrow: "FEATURED",
      allTitle: "All articles",
      allLead: "Updated regularly around new drops and gifting seasons.",
      popularTitle: "Popular topics",
      popularLead: "Start with what people read the most.",
      emptyTitle: "No articles yet",
      emptyBody: "Nothing in this topic yet. Try another topic or view all.",
    },
    articleDetail: {
      breadcrumbAria: "Breadcrumb",
      breadcrumbHome: "Home",
      breadcrumbGuides: "Guides",
      byPrefix: "By",
      tocTitle: "In this article",
      recommendedTitle: "Recommended in this guide",
      recommendedLead: "The products mentioned — compare prices before you buy.",
      relatedTitle: "Related articles",
      relatedLead: "Keep reading to choose with confidence.",
      faqTitle: "Frequently asked questions",
      disclosureNote: "This article contains affiliate links.",
    },
    editor: {
      quote: "Every piece you see here has to answer one question: would I buy this with my own money?",
      signature: "— LINH · HEAD CURATOR",
      avatar: "L",
    },
    newsletter: {
      eyebrow: "NEWSLETTER",
      title1: "Get curated miniature picks,",
      title2It: "rare finds in your inbox.",
      lead: "One email/week · Best Picks, limited drops, deals worth your time.",
      cta: "Subscribe",
      placeholder: "your email address",
      floaters: { f1: "SENT WEEKLY", f2: "NO SPAM EVER" },
      ok: "Thanks! You're on the list.",
      err: "Please enter a valid email address.",
    },
    footer: {
      brandDesc: "Curated discovery for collectors of miniatures, figures and desk décor.",
      copy: "© 2026 GIODICHO · CURATED DISCOVERY",
      colTitles: { discover: "Discover", read: "Read", about: "Giodicho", legal: "Legal" },
      cols: {
        discover: ["Collections", "Best Picks", "Deals", "Compare"],
        read: ["Reviews", "Guides", "Gift ideas", "Setup ideas"],
        about: ["About", "Curation method", "Contact", "Newsletter"],
        legal: ["Affiliate Disclosure", "Privacy", "Terms"],
      },
    },
  },
  meta: {
    title: "Giodicho — Discover Tiny Worlds Worth Collecting",
    description: "Curated affiliate discovery for anime figures, mini cars, fantasy dioramas and desk décor — real reviews and price comparisons from Shopee, TikTok Shop, Lazada and Official Stores.",
  },
};

const DICTIONARIES: Record<Locale, Dictionary> = { vi, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
