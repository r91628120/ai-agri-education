// =======================
// 📈 農產品價格走勢圖
// =======================

const ctx = document.getElementById('priceChart');

if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '第1週',
        '第2週',
        '第3週',
        '第4週',
        '第5週',
        '第6週',
        '第7週'
      ],
      datasets: [{
        label: '愛文芒果價格 (元/公斤)',
        data: [55, 58, 60, 59, 63, 67, 68],
        borderWidth: 3,
        tension: 0.35,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true
        }
      },
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}


// =======================
// 🌱 青農經營模擬器
// =======================

function calculateProfit() {

  const price =
    Number(document.getElementById("priceInput").value);

  const yieldKg =
    Number(document.getElementById("yieldInput").value);

  const cost =
    Number(document.getElementById("costInput").value);

  const result =
    document.getElementById("result");

  if (
    !price ||
    !yieldKg ||
    !cost
  ) {

    result.innerHTML =
      "⚠️ 請完整輸入價格、產量與成本。";

    return;
  }

  const income =
    price * yieldKg;

  const profit =
    income - cost;

  const balancePrice =
    cost / yieldKg;

  result.innerHTML = `
    <h3>📊 經營分析結果</h3>
    <br>

    💰 預估收入：
    <strong>${income.toLocaleString()} 元</strong>

    <br><br>

    💸 生產成本：
    <strong>${cost.toLocaleString()} 元</strong>

    <br><br>

    🌱 預估毛利：
    <strong>${profit.toLocaleString()} 元</strong>

    <br><br>

    📈 損益平衡價格：
    <strong>${balancePrice.toFixed(1)} 元/公斤</strong>
  `;
}


// =======================
// 📅 自動更新頁尾年份
// =======================

document.addEventListener("DOMContentLoaded", () => {

  const footer = document.querySelector("footer");

  if (!footer) return;

  footer.innerHTML += `
    <br>
    © ${new Date().getFullYear()}
  `;
});
