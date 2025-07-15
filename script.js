// --- データ定義 ---
const restaurants = {
    "ラーメン": [
        { name: "横浜ラーメン 武蔵家", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-1:00", 1: "11:00-1:00", 2: "11:00-1:00", 3: "11:00-1:00", 4: "11:00-1:00", 5: "11:00-1:00", 6: "11:00-1:00" } },
        { name: "家系ラーメン 大輝家", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-23:00", 1: "11:00-0:00", 2: "11:00-0:00", 3: "11:00-0:00", 4: "11:00-0:00", 5: "11:00-0:00", 6: "11:00-0:00" } },
        { name: "横浜家系ラーメン 銀家", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "5:00-2:00", 1: "5:00-2:00", 2: "5:00-2:00", 3: "5:00-2:00", 4: "5:00-2:00", 5: "5:00-2:00", 6: "5:00-2:00" } },
        { name: "麺場 ハマトラ", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "10:30-0:00", 1: "10:30-0:00", 2: "10:30-0:00", 3: "10:30-0:00", 4: "10:30-0:00", 5: "10:30-0:00", 6: "10:30-0:00" } },
        { name: "極楽汁麺 らすた", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:30-1:00", 1: "11:30-1:00", 2: "11:30-1:00", 3: "11:30-1:00", 4: "11:30-1:00", 5: "11:30-1:00", 6: "11:30-1:00" } },
        { name: "麺屋 あびすけ", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-22:30", 1: "11:00-22:30", 2: "11:00-22:30", 3: "11:00-22:30", 4: "11:00-22:30", 5: "11:00-22:30", 6: "11:00-22:30" } },
        { name: "花木流味噌", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-23:00", 1: "11:00-23:00", 2: "11:00-23:00", 3: "11:00-23:00", 4: "11:00-23:00", 5: "11:00-23:00", 6: "11:00-23:00" } },
        { name: "大勝軒", opening_days: [0, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-16:00", 1: "定休日", 2: "11:00-15:00/18:00-20:00", 3: "11:00-15:00/18:00-20:00", 4: "11:00-15:00/18:00-20:00", 5: "11:00-15:00/18:00-20:00", 6: "11:00-16:00" } },
        { name: "らぁ麺 善治", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-0:00", 1: "11:00-0:00", 2: "11:00-0:00", 3: "11:00-0:00", 4: "11:00-0:00", 5: "11:00-0:00", 6: "11:00-0:00" } },
        { name: "がっとん", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-3:00", 1: "11:00-3:00", 2: "11:00-3:00", 3: "11:00-3:00", 4: "11:00-3:00", 5: "11:00-3:00", 6: "11:00-3:00" } },
        { name: "豚山", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-23:00", 1: "11:00-23:00", 2: "11:00-23:00", 3: "11:00-23:00", 4: "11:00-23:00", 5: "11:00-23:00", 6: "11:00-23:00" } },
        { name: "ラーメン どん", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-2:00", 1: "11:00-2:00", 2: "11:00-2:00", 3: "11:00-2:00", 4: "11:00-2:00", 5: "11:00-2:00", 6: "11:00-2:00" } },
        { name: "壱角家", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-22:30", 1: "10:30-2:00", 2: "10:30-2:00", 3: "10:30-2:00", 4: "10:30-2:00", 5: "10:30-2:00", 6: "10:30-2:00" } },
        { name: "らーめん 柴田商店 ver.2.0", opening_days: [0, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-1:00", 1: "定休日", 2: "11:00-0:00", 3: "11:00-0:00", 4: "11:00-0:00", 5: "11:00-0:00", 6: "11:00-0:00" } },
        { name: "貝麺 あおみ", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-1:00", 1: "11:00-1:00", 2: "11:00-1:00", 3: "11:00-1:00", 4: "11:00-1:00", 5: "11:00-1:00", 6: "11:00-1:00" } },
        { name: "中華麺・飯 太楼", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-22:00", 1: "11:00-22:00", 2: "11:00-22:00", 3: "11:00-22:00", 4: "11:00-22:00", 5: "11:00-22:00", 6: "11:00-22:00" } },
        { name: "ひよし家", opening_days: [0, 1, 2, 4, 5, 6], hours_by_day: { 0: "11:00-15:00", 1: "11:00-15:00", 2: "11:00-15:00", 3: "定休日", 4: "11:00-15:00", 5: "11:00-15:00", 6: "11:00-15:00" } }
    ],
    "うどん・そば": [
        { name: "讃岐うどん 徳すけ", opening_days: [1, 2, 3, 4, 5, 6], hours_by_day: { 0: "定休日", 1: "11:00-22:00", 2: "11:00-22:00", 3: "11:00-22:00", 4: "11:00-22:00", 5: "11:00-22:00", 6: "11:00-22:00" } },
        { name: "そば処 たつ吉", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-21:30", 1: "11:00-21:30", 2: "11:00-21:30", 3: "11:00-21:30", 4: "11:00-21:30", 5: "11:00-21:30", 6: "11:00-21:30" } },
        { name: "鴨屋 そば香", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-15:00/17:30-22:00", 1: "11:00-15:00/17:30-22:00", 2: "11:00-15:00/17:30-22:00", 3: "11:00-15:00/17:30-22:00", 4: "11:00-15:00/17:30-22:00", 5: "11:00-15:00/17:30-22:00", 6: "11:00-15:00/17:30-22:00" } },
        { name: "おらがそば 六三", opening_days: [1, 2, 3, 4, 5, 6], hours_by_day: { 0: "定休日", 1: "11:00-19:00", 2: "11:00-19:00", 3: "11:00-19:00", 4: "11:00-19:00", 5: "11:00-19:00", 6: "11:00-19:00" } }
    ],
    "定食": [
        { name: "小満津", opening_days: [1, 2, 3, 4, 5, 6], hours_by_day: { 0: "定休日", 1: "16:00-0:00", 2: "16:00-0:00", 3: "16:00-0:00", 4: "16:00-0:00", 5: "16:00-0:00", 6: "16:00-0:00" } },
        { name: "まちノ食堂", opening_days: [1, 2, 3, 4, 5, 6], hours_by_day: { 0: "定休日", 1: "11:30-15:00/16:00-23:00", 2: "11:30-15:00/17:30-23:00", 3: "11:30-15:00/17:30-23:00", 4: "11:30-15:00/17:30-23:00", 5: "11:30-15:00/17:30-23:00", 6: "11:30-15:00/16:00-23:00" } },
        { name: "とらの息子", opening_days: [0, 1, 2, 3, 5, 6], hours_by_day: { 0: "12:00-14:30/17:30-22:00", 1: "12:00-14:30/17:30-22:00", 2: "12:00-14:30/17:30-22:00", 3: "12:00-14:30/17:30-22:00", 4: "定休日", 5: "12:00-14:30/17:30-22:00", 6: "12:00-14:30/17:30-22:00" } },
        { name: "沖縄食堂 チャンプル×チャンプル", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-4:00", 1: "11:00-4:00", 2: "11:00-4:00", 3: "11:00-4:00", 4: "11:00-4:00", 5: "11:00-4:00", 6: "11:00-4:00" } },
        { name: "洋食とらひげ", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:30-14:00/17:30-21:30", 1: "11:30-14:00/17:30-21:30", 2: "11:30-14:00/17:30-21:30", 3: "11:30-14:00/17:30-21:30", 4: "11:30-14:00/17:30-21:30", 5: "11:30-14:00/17:30-21:30", 6: "11:30-14:00/17:30-21:30" } },
        { name: "飯場 松の葉", opening_days: [2, 3, 4, 5, 6], hours_by_day: { 0: "定休日", 1: "定休日", 2: "11:00-15:00/17:00-21:30", 3: "11:00-15:00/17:00-21:30", 4: "11:00-15:00/17:00-21:30", 5: "11:00-15:00/17:00-21:30", 6: "11:00-15:00/17:00-21:30" } },
        { name: "とんかつ 和栗", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-15:00", 1: "11:00-15:00", 2: "11:00-15:00", 3: "11:00-15:00", 4: "11:00-15:00", 5: "11:00-15:00", 6: "11:00-15:00" } },
        { name: "とんかつ 神楽坂 さくら", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-22:00", 1: "11:00-22:00", 2: "11:00-22:00", 3: "11:00-22:00", 4: "11:00-22:00", 5: "11:00-22:00", 6: "11:00-22:00" } },
        { name: "魚よし", opening_days: [0, 1, 2, 4, 5, 6], hours_by_day: { 0: "17:30-21:00", 1: "11:30-13:50/17:30-21:30", 2: "11:30-13:50/17:30-21:30", 3: "定休日", 4: "11:30-13:50/17:30-21:30", 5: "11:30-13:50/17:30-21:30", 6: "11:30-13:50/17:30-21:30" } }
    ],
    "カレー": [
        { name: "HI, HOW ARE YOU", opening_days: [2, 3, 4, 5, 6], hours_by_day: { 0: "定休日", 1: "定休日", 2: "11:30-21:00", 3: "11:30-21:00", 4: "11:30-21:00", 5: "11:30-21:00", 6: "11:30-21:00" } },
        { name: "食事 さとう", opening_days: [0, 1, 2, 4, 5, 6], hours_by_day: { 0: "11:00-14:30/17:30-20:30", 1: "11:00-14:30/17:30-20:30", 2: "11:00-14:30/17:30-20:30", 3: "定休日", 4: "11:00-14:30/17:30-20:30", 5: "11:00-14:30/17:30-20:30", 6: "11:00-14:30/17:30-20:30" } },
        { name: "クークリ", opening_days: [1, 2, 3, 4, 5, 6], hours_by_day: { 0: "定休日", 1: "11:00-15:00/17:00-22:00", 2: "11:00-15:00/17:00-22:00", 3: "11:00-15:00/17:00-22:00", 4: "11:00-15:00/17:00-22:00", 5: "11:00-15:00/17:00-22:00", 6: "11:00-15:00/17:00-22:00" } },
        { name: "アジアンレストラン ジャッキー", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-22:00", 1: "11:00-22:00", 2: "11:00-22:00", 3: "11:00-22:00", 4: "11:00-22:00", 5: "11:00-22:00", 6: "11:00-22:00" } }
    ],
    "イタリアン": [
        { name: "アクイロット", opening_days: [0, 1, 2, 5, 6], hours_by_day: { 0: "11:30-15:30/17:30-23:00", 1: "11:30-15:30/17:30-23:00", 2: "11:30-15:30/17:30-23:00", 3: "定休日", 4: "定休日", 5: "11:30-15:30/17:30-23:00", 6: "11:30-15:30/17:30-23:00" } },
        { name: "ドマーレ湘南", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:30-16:00/17:00-22:00", 1: "11:30-16:00/17:00-22:00", 2: "11:30-16:00/17:00-22:00", 3: "11:30-16:00/17:00-22:00", 4: "11:30-16:00/17:00-22:00", 5: "11:30-16:00/17:00-22:00", 6: "11:30-16:00/17:00-22:00" } },
        { name: "VERANDAH", opening_days: [0, 1, 2, 5, 6], hours_by_day: { 0: "11:30-14:30/18:00-22:00", 1: "11:30-14:30/18:00-22:00", 2: "11:30-14:30/18:00-22:00", 3: "定休日", 4: "定休日", 5: "11:30-14:30/18:00-22:00", 6: "11:30-14:30/18:00-22:00" } },
        { name: "Le Solo", opening_days: [1, 2, 3, 4, 5, 6], hours_by_day: { 0: "定休日", 1: "17:00-0:00", 2: "17:00-0:00", 3: "17:00-0:00", 4: "17:00-0:00", 5: "17:00-0:00", 6: "17:00-0:00" } },
        { name: "サンティノ", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:00-21:30", 1: "11:00-21:30", 2: "11:00-21:30", 3: "11:00-21:30", 4: "11:00-21:30", 5: "11:00-21:30", 6: "11:00-21:30" } },
        { name: "アルピノ", opening_days: [0, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:30-14:30/18:00-22:00", 1: "定休日", 2: "11:30-14:30/18:00-22:00", 3: "11:30-14:30/18:00-22:00", 4: "11:30-14:30/18:00-22:00", 5: "11:30-14:30/18:00-22:00", 6: "11:30-14:30/18:00-22:00" } },
        { name: "trattoria Mon GATTO", opening_days: [0, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:30-14:30/18:00-23:00", 1: "定休日", 2: "11:30-14:30/18:00-23:00", 3: "11:30-14:30/18:00-23:00", 4: "11:30-14:30/18:00-23:00", 5: "11:30-14:30/18:00-23:00", 6: "11:30-14:30/18:00-23:00" } },
        { name: "Oyster House Pisca", opening_days: [0, 1, 2, 3, 4, 5, 6], hours_by_day: { 0: "11:30-14:30/17:30-23:00", 1: "11:30-14:30/17:30-23:00", 2: "11:30-14:30/17:30-23:00", 3: "11:30-14:30/17:30-23:00", 4: "11:30-14:30/17:30-23:00", 5: "11:30-14:30/17:30-23:00", 6: "11:30-14:30/17:30-23:00" } },
        { name: "Ma Cachet", opening_days: [2, 3, 4, 5, 6], hours_by_day: { 0: "定休日", 1: "定休日", 2: "11:30-14:30/17:30-22:00", 3: "11:30-14:30/17:30-22:00", 4: "11:30-14:30/17:30-22:00", 5: "11:30-14:30/17:30-22:00", 6: "11:30-14:30/17:30-22:00" } },
        { name: "パスタバルMiKiYA's", opening_days: [0, 3, 4, 5, 6], hours_by_day: { 0: "11:30-23:00", 1: "定休日", 2: "定休日", 3: "11:30-23:00", 4: "11:30-23:00", 5: "11:30-23:00", 6: "11:30-23:00" } }
    ]
};

// --- 初期設定 ---
const today = new Date().getDay();
const mainContents = document.getElementById("main-contents");
const resultsTitle = document.getElementById("results-title");
const genreButtons = document.querySelectorAll(".genre-btn");
const restaurantList = document.getElementById("restaurant-list");
const gachaButton = document.getElementById("gacha-btn");
const backButton = document.getElementById("back-btn");

let lastShownGenreList = null; // ▼▼▼ 履歴を保存する変数を追加 ▼▼▼

// --- イベントリスナー ---
// ジャンルボタンの処理
genreButtons.forEach(button => {
    button.addEventListener("click", () => {
        genreButtons.forEach(btn => btn.classList.remove("active-btn"));
        button.classList.add("active-btn");

        const genre = button.textContent;
        const shops = restaurants[genre];
        const openShops = shops.filter(shop => shop.opening_days.includes(today));
        
        resultsTitle.textContent = `今日行ける、${genre}のお店`;
        resultsTitle.classList.remove("hidden");

        displayShops(openShops, false);
    });
});

// 全体ガチャボタンの処理
gachaButton.addEventListener("click", () => {
    genreButtons.forEach(btn => btn.classList.remove("active-btn"));
    lastShownGenreList = null; // ▼▼▼ 全体ガチャの時は履歴を消す ▼▼▼

    const allShops = Object.values(restaurants).flat();
    const openShops = allShops.filter(shop => shop.opening_days.includes(today));

    if (openShops.length > 0) {
        const randomIndex = Math.floor(Math.random() * openShops.length);
        const randomShop = openShops[randomIndex];
        displayShops([randomShop], true);
    } else {
        resultsTitle.textContent = "残念！";
        resultsTitle.classList.remove("hidden");
        displayShops([], false);
    }
});

// 戻るボタンの処理
backButton.addEventListener("click", () => {
    // ▼▼▼ 履歴があるかどうかで処理を分岐 ▼▼▼
    if (lastShownGenreList) {
        // 履歴がある場合は、そのジャンルの一覧に戻る
        const activeBtn = document.querySelector('.genre-btn.active-btn');
        if (activeBtn) {
            resultsTitle.textContent = `今日行ける、${activeBtn.textContent}のお店`;
            resultsTitle.classList.remove("hidden");
        }
        displayShops(lastShownGenreList, false);
        lastShownGenreList = null; // 履歴をリセット
    } else {
        // 履歴がない場合は、最初の画面に戻る
        genreButtons.forEach(btn => btn.classList.remove("active-btn"));
        mainContents.classList.remove("hidden");
        resultsTitle.classList.add("hidden");
        restaurantList.innerHTML = "";
        backButton.classList.add("hidden");
    }
});


// --- 表示用関数 ---
function displayShops(shopsToDisplay, isGachaResult) {
    restaurantList.innerHTML = "";

    if (isGachaResult) {
        mainContents.classList.add("hidden");
        resultsTitle.classList.add("hidden");
        backButton.classList.remove("hidden");
    } else {
        mainContents.classList.remove("hidden");
        backButton.classList.add("hidden");
    }

    if (shopsToDisplay.length === 0) {
        restaurantList.innerHTML = "<p>今日この条件で開いているお店はありませんでした。</p>";
        return;
    }

    if (!isGachaResult && shopsToDisplay.length > 1) {
        const genreGachaButtonHTML = `
            <div class="genre-gacha-section">
                <button id="genre-gacha-btn">この中からランダムで決める！</button>
            </div>
        `;
        restaurantList.insertAdjacentHTML("beforeend", genreGachaButtonHTML);

        const genreGachaButton = document.getElementById("genre-gacha-btn");
        genreGachaButton.addEventListener("click", () => {
            lastShownGenreList = shopsToDisplay; // ▼▼▼ 現在の一覧を履歴に保存 ▼▼▼
            const randomIndex = Math.floor(Math.random() * shopsToDisplay.length);
            const randomShop = shopsToDisplay[randomIndex];
            displayShops([randomShop], true);
        });
    }

    shopsToDisplay.forEach(shop => {
        const todaysHours = shop.hours_by_day[today] || "情報なし";
        const shopInfo = `
            <div class="shop-card">
                <h3>${shop.name}</h3>
                <p>本日の営業時間: ${todaysHours}</p>
            </div>
        `;
        restaurantList.insertAdjacentHTML("beforeend", shopInfo);
    });
}