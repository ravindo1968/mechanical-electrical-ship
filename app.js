/* ===========================
   RAVINDO LEARNING — APP.JS
   =========================== */

const modules = [
  {
    week: "Pertemuan 1–2",
    title: "Pengantar & Konsep Dasar Kelistrikan",
    desc: "Peran kritis listrik pada kapal modern, bahaya listrik, dan prosedur keselamatan LOTO.",
    color: "#00C8FF",
    phase: "basic",
    tags: ["Keselamatan", "LOTO", "APD", "Konteks Kapal"],
    cpmk: ["CPMK 1", "CPMK 5"],
    objectives: [
      "Menjelaskan peran kritis sistem kelistrikan dalam operasi kapal modern (starting, kontrol, monitoring, auxiliary)",
      "Mengidentifikasi potensi bahaya listrik di ruang mesin: electric shock >50mA, arc flash 20.000°C, kebakaran kabel",
      "Menerapkan prosedur LOTO: Identify → Isolate → Lock & Tag → Test → Kerja dengan APD",
      "Memahami evolusi peran Chief Engineer sebagai integrated system manager",
      "Menjelaskan batasan kewenangan C/E dan ETO dalam konteks sistem kelistrikan",
      "Menggunakan APD yang benar: sarung tangan insulated Class 00, sepatu safety, FR clothing"
    ],
    topics: ["LOTO Procedure", "Electric Shock", "Arc Flash", "APD", "Roles C/E vs ETO"],
    note: "Keselamatan adalah prioritas utama. Setiap tindakan diawali pertanyaan: 'Apakah ini aman?'"
  },
  {
    week: "Pertemuan 3–4",
    title: "Besaran & Hukum Dasar Kelistrikan",
    desc: "Tegangan, arus, hambatan, daya, serta penerapan Hukum Ohm dan Kirchhoff pada sistem kapal.",
    color: "#00C8FF",
    phase: "basic",
    tags: ["Hukum Ohm", "Kirchhoff", "Multimeter", "Perhitungan"],
    cpmk: ["CPMK 1"],
    objectives: [
      "Memahami tegangan (V) — analog pressure hidrolik; arus (I) — analog flow rate; hambatan (R) — analog restriction pipa; daya (P = V×I)",
      "Mengukur besaran listrik dasar dengan multimeter secara akurat dan aman",
      "Menerapkan Hukum Ohm V=IR: contoh motor starter sulit start, tegangan turun 24V→18V, arus 300A, hitung resistansi korosi",
      "Menggunakan KCL: total arus incoming generator = jumlah arus feeder keluar. Jika beda → kemungkinan earth leakage",
      "Menggunakan KVL: analisis voltage drop rangkaian kendali panjang",
      "Menghitung arus motor: I = P/(√3×V×pf). Contoh: motor 50kW, 440V, pf=0.8 → I ≈ 82A"
    ],
    topics: ["Ohm's Law", "KCL / KVL", "Multimeter", "Voltage Drop", "Power Factor"],
    note: "Analogi mekanikal sangat membantu: Tegangan = pressure, Arus = flow rate, Hambatan = restriction."
  },
  {
    week: "Pertemuan 5–6",
    title: "Sistem Pembangkitan Listrik Kapal",
    desc: "Prinsip kerja generator, sistem eksitasi AVR, sinkronisasi, dan prosedur start/stop genset.",
    color: "#00C8FF",
    phase: "basic",
    tags: ["Generator", "AVR", "Sinkronisasi", "3-Phase"],
    cpmk: ["CPMK 1", "CPMK 2"],
    objectives: [
      "Menjelaskan prinsip kerja generator kapal: mesin diesel + alternator, stator (induksi tegangan), rotor (medan magnet eksitasi)",
      "Memahami sistem eksitasi AVR: menjaga tegangan 440V±2.5% meskipun beban berubah",
      "Membedakan Brushless Excitation (maintenance rendah) vs Static Excitation (kapasitas besar, response cepat)",
      "Memahami konsep AC 440V/60Hz dan DC 24V: aplikasi, kelebihan masing-masing di kapal",
      "Melakukan prosedur sinkronisasi: sama magnitude, frekuensi, fasa, dan urutan fasa",
      "Menggunakan synchroscope dan lampu sinkronisasi untuk parallel operation",
      "Memahami konsep fasa dan konsekuensi kesalahan urutan fasa (motor berputar terbalik)"
    ],
    topics: ["Stator & Rotor", "AVR", "AC 440V", "DC 24V", "Synchroscope", "Parallel"],
    note: "Saat parallel operation: C/E atur governor (frekuensi), ETO/engineer atur AVR (tegangan). Koordinasi penting!"
  },
  {
    week: "Pertemuan 7",
    title: "Ujian Tengah Semester (UTS)",
    desc: "Evaluasi pemahaman materi pertemuan 1–6. Bobot 15% dari nilai akhir.",
    color: "#FFD700",
    phase: "mid",
    tags: ["UTS", "Evaluasi", "Teori"],
    cpmk: ["CPMK 1", "CPMK 2"],
    objectives: [
      "Evaluasi pemahaman konsep dasar kelistrikan (besaran, hukum Ohm, Kirchhoff)",
      "Evaluasi pemahaman sistem AC/DC dan aplikasinya di kapal",
      "Evaluasi prosedur keselamatan LOTO dan identifikasi bahaya listrik",
      "Evaluasi prinsip kerja generator dan sistem eksitasi"
    ],
    topics: ["Pertemuan 1-6", "Written Test"],
    isExam: true,
    examType: "uts",
    icon: "📝"
  },
  {
    week: "Pertemuan 8–9",
    title: "Sistem Distribusi & Proteksi",
    desc: "Single-line diagram, switchboard utama & darurat, circuit breaker, relay proteksi overcurrent dan earth fault.",
    color: "#FFD700",
    phase: "mid",
    tags: ["Single-Line Diagram", "MSB", "ESB", "Circuit Breaker"],
    cpmk: ["CPMK 2", "CPMK 3"],
    objectives: [
      "Membaca dan menginterpretasikan single-line diagram sistem distribusi kapal",
      "Membedakan Radial System (umum, sederhana) vs Main-Tie-Main System (fleksibel)",
      "Mengidentifikasi komponen MSB: ACB, Synchronizing Panel, Load Sharing Controller, Protection Relay",
      "Mengidentifikasi komponen ESB dan beban vital: navigasi, emergency lighting, GMDSS, fire pump, steering",
      "Mengidentifikasi fungsi fuse, MCCB, ACB, dan relay proteksi dalam hierarki proteksi",
      "Memahami setting proteksi: overcurrent 125% FLC, short circuit 300-500% FLC, earth fault 20-30%",
      "Menjelaskan prinsip Reverse Power Relay: trip dalam 5-10 detik saat generator jadi beban"
    ],
    topics: ["Radial System", "MSB / ESB", "ACB", "MCCB", "Reverse Power", "SOLAS Test"],
    note: "Emergency generator wajib di-test auto-start setiap minggu sesuai SOLAS."
  },
  {
    week: "Pertemuan 10–11",
    title: "Motor Listrik & Sistem Kontrol",
    desc: "Jenis motor induksi, metode starting DOL/Star-Delta/Soft Starter/VFD, dan insulation resistance test.",
    color: "#FFD700",
    phase: "mid",
    tags: ["Induction Motor", "Star-Delta", "VFD", "Megger"],
    cpmk: ["CPMK 2", "CPMK 3", "CPMK 4"],
    objectives: [
      "Mengidentifikasi jenis motor: Squirrel Cage Induction (>90% aplikasi) vs Wound Rotor (cargo pump tanker)",
      "Menjelaskan dan melakukan starting DOL (motor <15kW), Star-Delta (15-75kW, kurangi arus 1/3), Soft Starter (thyristor)",
      "Memahami VFD (Variable Frequency Drive): kontrol kecepatan, hemat energi",
      "Menjelaskan proteksi motor: Overload Relay, Single Phasing Protection, Bearing Temp Sensor PT100",
      "Melakukan insulation resistance test (megger): min 1MΩ LV, 5MΩ HV, test voltage 500V DC untuk sistem 440V",
      "Membaca nameplate motor dan menganalisis karakteristik slip, torque, dan speed-load curve",
      "Memahami motor DC: back EMF, shunt/series/compound, aplikasi di kapal"
    ],
    topics: ["Squirrel Cage", "DOL", "Star-Delta", "Soft Starter", "VFD", "Megger Test"],
    note: "Insulation test motor: minimum 1MΩ untuk LV. Di bawah nilai ini, motor berisiko breakdown."
  },
  {
    week: "Pertemuan 12–13",
    title: "Sistem Emergency & Otomatisasi",
    desc: "Emergency generator, baterai, UPS, Power Management System (PMS), SCADA, dan dasar PLC untuk mesin.",
    color: "#9B59FF",
    phase: "adv",
    tags: ["PMS", "SCADA", "PLC", "Emergency Gen"],
    cpmk: ["CPMK 3", "CPMK 4", "CPMK 5"],
    objectives: [
      "Melakukan prosedur test auto-start emergency generator (wajib SOLAS, dalam 45 detik)",
      "Memahami sumber emergency power: emergency generator + baterai 24V + UPS untuk komputer",
      "Memahami fungsi PMS: Auto Start/Stop, Load Sharing, Load Shedding, Blackout Prevention",
      "Memahami dasar operasi PLC: input/output diagram, ladder logic dasar, troubleshooting I/O failure",
      "Melakukan monitoring parameter melalui SCADA: HMI touchscreen di ECR, remote I/O",
      "Memahami aplikasi PLC di engine room: auto-start pompa standby, level control tank, bridge control",
      "Memahami hierarki alarm: Critical (merah), Important (kuning), Informational (hijau/biru)"
    ],
    topics: ["Emergency Gen", "UPS", "PMS Load Shedding", "PLC I/O", "SCADA HMI", "Alarm Hierarchy"],
    note: "PMS contoh kasus: meninggalkan pelabuhan → beban rendah → PMS stop satu generator untuk efisiensi."
  },
  {
    week: "Pertemuan 14",
    title: "Integrasi Listrik dengan Sistem Permesinan",
    desc: "Sistem kontrol mesin utama, electronic governor, steering gear, purifier, dan fresh water generator.",
    color: "#9B59FF",
    phase: "adv",
    tags: ["Main Engine", "Governor", "Steering", "Integration"],
    cpmk: ["CPMK 4", "CPMK 5"],
    objectives: [
      "Menjelaskan integrasi starting system: air starter dengan solenoid valve elektrik pada mesin utama",
      "Memahami electronic governor: kontrol mesin utama dari anjungan (bridge control)",
      "Menjelaskan safety system: shutdown solenoid untuk overspeed dan low lube oil pressure",
      "Memahami sistem steering gear: motor hydraulic pump dengan control system",
      "Memahami sistem purifier: motor bowl dengan kontrol timer dan sensor",
      "Memahami sistem fresh water generator: kontrol salinitas dan temperature",
      "Menjelaskan batas kewenangan dan koordinasi C/E (system manager) vs ETO (technical specialist)"
    ],
    topics: ["Air Starter", "Electronic Governor", "Bridge Control", "Safety Shutdown", "Steering Gear"],
    note: "Koordinasi C/E dengan ETO harus jelas: C/E bertanggung jawab overall, ETO untuk specialized repairs."
  },
  {
    week: "Pertemuan 15",
    title: "Troubleshooting, Maintenance & Blackout Recovery",
    desc: "Metode 6 langkah troubleshooting, pembacaan wiring diagram, perawatan preventif, dan prosedur blackout recovery.",
    color: "#FF6B6B",
    phase: "prac",
    tags: ["Troubleshooting", "Wiring Diagram", "Blackout", "PMS"],
    cpmk: ["CPMK 3", "CPMK 4"],
    objectives: [
      "Menerapkan prosedur 6 langkah: Collect Info → Analyze → Identify Causes → Test & Isolate → Repair & Verify → Document",
      "Membaca wiring diagram: power circuit, control circuit, interlock circuit dengan simbol standar IEC",
      "Mengidentifikasi dan menangani Short Circuit (megger, isolasi), Open Circuit (continuity test), Ground Fault (insulation tester)",
      "Melakukan jadwal PMS: daily (parameter generator), weekly (emergency gen test), monthly (IR test motor/panel), yearly (thermal imaging)",
      "Melakukan prosedur Blackout Recovery: Bridge Alert → Start Emergency Gen → Restore Vital → Investigate → Restore Main Power",
      "Membuat laporan dalam Engineer's Logbook, Defect List, dan Maintenance Report",
      "Menjelaskan sistem grounding: IT (Isolated Terra/floating) vs TN, dan Insulation Monitoring Device (IMD)"
    ],
    topics: ["6-Step Troubleshooting", "Short/Open/Ground Fault", "IR Test", "Blackout Recovery", "PMS Schedule", "Logbook"],
    note: "Blackout recovery: emergency generator HARUS auto-start dalam 45 detik. Steering, navlights, GMDSS adalah prioritas pertama."
  },
  {
    week: "Pertemuan 16",
    title: "Ujian Akhir Semester (UAS)",
    desc: "Evaluasi komprehensif seluruh materi semester. Bobot 15% dari nilai akhir. Simulasi troubleshooting termasuk.",
    color: "#FF6B6B",
    phase: "prac",
    tags: ["UAS", "Evaluasi", "Simulasi"],
    cpmk: ["CPMK 1", "CPMK 2", "CPMK 3", "CPMK 4", "CPMK 5"],
    objectives: [
      "Evaluasi komprehensif seluruh materi pertemuan 1–15",
      "Simulasi troubleshooting dengan rubrik: Safety Procedure 20%, Systematic Approach 30%, Technical Skill 30%, Documentation 20%",
      "Demonstrasi kemampuan membaca single-line diagram dan wiring diagram",
      "Evaluasi pemahaman prosedur blackout recovery dan emergency power",
      "Evaluasi koordinasi peran C/E dan ETO dalam skenario nyata"
    ],
    topics: ["Pertemuan 1-15", "Simulasi Praktik", "Written Test"],
    isExam: true,
    examType: "uas",
    icon: "🎓"
  }
];

const phaseColors = {
  basic: "#00C8FF",
  mid: "#FFD700",
  adv: "#9B59FF",
  prac: "#FF6B6B"
};

function buildModuleGrid() {
  const grid = document.getElementById("moduleGrid");

  modules.forEach((mod, i) => {
    const card = document.createElement("div");
    card.className = "module-card" + (mod.isExam ? " exam" : "");
    card.style.setProperty("--card-color", mod.color);

    if (mod.isExam) {
      card.classList.add("special-card");
      if (mod.examType === "uts") card.classList.add("uts");
      card.innerHTML = `
        <div class="exam-icon">${mod.icon}</div>
        <div class="exam-info">
          <div class="mc-week">${mod.week}</div>
          <div class="mc-title">${mod.title}</div>
          <div class="mc-desc">${mod.desc}</div>
          <div class="mc-tags">${mod.tags.map(t => `<span class="mc-tag">${t}</span>`).join("")}</div>
        </div>`;
    } else {
      card.innerHTML = `
        <div class="mc-week">${mod.week}</div>
        <div class="mc-title">${mod.title}</div>
        <div class="mc-desc">${mod.desc}</div>
        <div class="mc-tags">${mod.tags.slice(0, 3).map(t => `<span class="mc-tag">${t}</span>`).join("")}</div>
        <div class="mc-more">↗ Detail Materi</div>`;
      card.addEventListener("click", () => openModal(mod));
    }

    grid.appendChild(card);
  });
}

function openModal(mod) {
  const overlay = document.getElementById("modalOverlay");
  const content = document.getElementById("modalContent");

  const cpmkBadges = mod.cpmk.map(c => `<span class="modal-cpmk-badge">${c}</span>`).join("");
  const topicPills = mod.topics.map(t => `<span class="modal-topic">${t}</span>`).join("");
  const objectives = mod.objectives.map(o => `<li>${o}</li>`).join("");
  const noteHtml = mod.note ? `<div class="modal-note">${mod.note}</div>` : "";

  content.innerHTML = `
    <div class="modal-week">${mod.week}</div>
    <div class="modal-title">${mod.title}</div>
    <div class="modal-subtitle" style="color:${mod.color}">${mod.desc}</div>
    
    <div class="modal-section-label">Capaian Pembelajaran</div>
    <div>${cpmkBadges}</div>
    
    <div class="modal-divider"></div>
    
    <div class="modal-section-label">Topik Bahasan</div>
    <div class="modal-topics">${topicPills}</div>
    
    <div class="modal-section-label">Sub-CPMK & Tujuan Pembelajaran</div>
    <ul class="modal-objectives">${objectives}</ul>
    
    ${noteHtml}
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// Hamburger
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("open");
});

// Close modal
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Smooth scroll for mobile menu
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.remove("open");
  });
});

// Intersection Observer for fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

// Nav highlight on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.style.background = link.getAttribute("href") === "#" + current
      ? "var(--surface)"
      : "";
    link.style.color = link.getAttribute("href") === "#" + current
      ? "var(--text)"
      : "";
  });
});

// Init
buildModuleGrid();
