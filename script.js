/* ===== 书架数据配置 =====
 * 每本书对应一个功能工具。
 * url 先用占位地址（#）
 * type: "announce" 表示公告书本（点击展示翻开的公告内容，不跳转）。
 */
const BOOKS = [
    { title: "迷你调色板",   url: "https://qiugf.cn/kfz/tsb/",       color: "c1" },
    { title: "像素画生成器", url: "https://qiugf.cn/kfz/xshsc/",     color: "c2" },
    { title: "像素字生成",   url: "https://qiugf.cn/kfz/xszsc/",     color: "c3" },
    { title: "代码编辑器",   url: "https://qiugf.cn/lua/",           color: "c4" },
    { title: "执行指令",     url: "https://www.qiugf.cn/kfz/#/luazx/", color: "c5" },
    { title: "开源代码",     url: "https://www.qiugf.cn/kfz/#/", color: "c5" },
    { title: "PS网页版",     url: "https://qiugf.cn/kfz/ps",                       color: "c8" },
    { title: "全物品图鉴",   url: "https://qiugf.cn/kfz/tujian/",    color: "c6" },
    { title: "ID查询器",     url: "https://qiugf.cn/kfz/cxid/",      color: "c7" },
    { title: "蓝图编辑器",     url: "https://qiult.qiugf.cn",                       color: "c8" },
    { title: "星砂岛弹琴模拟器",     url: "https://midi.qiugf.cn",                       color: "c8" },
    { title: "问题反馈",     url: "https://support.qq.com/products/606355/",                       color: "c8" },
    // { title: "赛事",         type: "#",                       color: "c9" },
    { title: "公告",         type: "announce",                       color: "c9" },
];

const overlay = document.getElementById("pulloutOverlay");
const coverPanel = document.getElementById("coverPanel");
const openPanel = document.getElementById("openPanel");
const coverTitle = document.getElementById("coverTitle");

/* 是否正在执行取书动画，防止重复点击 */
let isAnimating = false;
/* 待跳转的链接：封面展示后，再次点击时使用 */
let pendingUrl = null;

/* 书本各部位图片 */
const IMG_SPINE = "book/秋秋工坊书本侧面.png";  // 书脊（默认朝外）
const IMG_FRONT = "book/秋秋工坊书本正面.png";  // 封面正面（悬停展示）
const IMG_OPEN  = "book/秋秋工坊书本打开.png";  // 翻开（公告展示）

/**
 * 创建一本书的 DOM 元素（3D 结构：书脊 + 封面）
 * 默认展示书脊侧面图；鼠标悬停时翻转展示封面正面图。
 */
function createBook(book) {
    const el = document.createElement("div");
    el.className = `book ${book.color}`;
    el.dataset.title = book.title;

    // 3D 翻转内层
    const inner = document.createElement("div");
    inner.className = "book-inner";

    // 书脊（默认朝外）—— 侧面图 + 竖排书名
    const spine = document.createElement("div");
    spine.className = "book-spine";
    const spineImg = document.createElement("img");
    spineImg.className = "book-spine-img";
    spineImg.src = IMG_SPINE;
    spineImg.alt = "";
    const label = document.createElement("span");
    label.className = "book-label";
    label.textContent = book.title;
    spine.appendChild(spineImg);
    spine.appendChild(label);

    // 封面（悬停时朝外）—— 正面图 + 标题
    const cover = document.createElement("div");
    cover.className = "book-cover";
    const img = document.createElement("img");
    img.className = "book-cover-img";
    img.src = IMG_FRONT;
    img.alt = book.title;
    const coverName = document.createElement("span");
    coverName.className = "book-cover-title";
    coverName.textContent = book.title;
    cover.appendChild(img);
    cover.appendChild(coverName);

    inner.appendChild(spine);
    inner.appendChild(cover);
    el.appendChild(inner);

    el.addEventListener("click", () => pullOutBook(el, book));
    return el;
}

/**
 * 点击书本：
 * - 公告书 → 展示翻开的公告内容面板
 * - 工具书 → 悬停已翻到正面，点击直接在新标签页打开网址
 */
function pullOutBook(el, book) {
    if (book.type === "announce") {
        // 公告书：抽出并展示翻开面板
        if (isAnimating) return;
        isAnimating = true;
        el.classList.add("pulling");
        pendingUrl = null;
        coverPanel.classList.remove("show");
        openPanel.classList.add("show");
        setTimeout(() => {
            overlay.classList.add("active");
        }, 200);
        return;
    }

    // 工具书：直接跳转
    navigateTo(book.url);
}

/**
 * 关闭遮罩、还原书架状态
 */
function closeOverlay() {
    overlay.classList.remove("active");
    setTimeout(() => {
        document.querySelectorAll(".book.pulling")
            .forEach(b => b.classList.remove("pulling"));
        coverPanel.classList.remove("show");
        openPanel.classList.remove("show");
        isAnimating = false;
        pendingUrl = null;
    }, 350);
}

/**
 * 跳转到目标网页
 * 占位链接（以 # 开头）时只做提示，不真正跳转。
 */
function navigateTo(url) {
    if (!url || url.startsWith("#")) {
        console.info(`[书架] 目标「${url}」暂为占位链接，请在 script.js 的 BOOKS 中替换为真实地址。`);
        closeOverlay();
        return;
    }
    // 真实链接：新标签页打开工具，同时关闭遮罩还原书架
    window.open(url, "_blank", "noopener");
    closeOverlay();
}

/**
 * 点击遮罩：
 * - 正在展示封面 → 再次点击执行跳转（“再点击才跳转网页”）
 * - 正在展示公告 → 点击任意处关闭
 */
overlay.addEventListener("click", () => {
    // 公告面板：点击任意处关闭
    if (openPanel.classList.contains("show")) {
        closeOverlay();
    }
});

/**
 * 初始化：把书按前后两层分配到书架上
 */
function initBookcase() {
    const row1 = document.getElementById("shelfRow1");
    const row2 = document.getElementById("shelfRow2");
    const half = Math.ceil(BOOKS.length / 2);

    BOOKS.forEach((book, i) => {
        const el = createBook(book);
        (i < half ? row1 : row2).appendChild(el);
    });
}

initBookcase();
