# Parmak Futbolu ⚽

[![Lisans: MIT](https://img.shields.io/badge/Lisans-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Hızlı-purple?logo=vite)](https://vitejs.dev/)

Hızlı tempolu, eğlenceli ve tamamen tarayıcı tabanlı bir langırt (masa futbolu) oyunu. React ve Vite ile modern bir Progressive Web App (PWA) olarak geliştirilmiştir. Takımını seç, yapay zekaya karşı farklı modlarda mücadele et ve şampiyonluğa ulaş!

<br>

> ✨ **Oyunu Hemen Oyna!** ✨
>
> **[https://omc725.github.io/parmak-futbolu-js/](https://omc725.github.io/parmak-futbolu-js/)**

<br>

![Oyun Ekran Görüntüsü](https://omc725.github.io/parmak-futbolu-js/icon-512.png)

## 🌟 Temel Özellikler

- **⚡ Hızlı Maç:** Yapay zekaya karşı anında bir maça başlayın.
- **🏆 Lig Modu:** Çift devreli fikstür usulüyle tam bir sezon boyunca mücadele edin ve puan tablosunda zirveye tırmanın.
- **🏅 Turnuva Modu:** 8 takımlı tek elemeli turnuvada şampiyon olmak için yarışın.
- **🥅 Penaltı Atışları:** Eleme maçlarında beraberlik durumunda heyecan dolu penaltı atışlarıyla galibi belirleyin.
- **⚙️ Ayarlanabilir Zorluk:** Yapay zekanın yeteneğini kendi oyun seviyenize göre ayarlayın.
- **📱 PWA Desteği:** Oyunu bir uygulama gibi bilgisayarınıza veya telefonunuza yükleyip **çevrimdışı** oynayın.

## 🚀 Progressive Web App (PWA) Deneyimi

Bu oyun, sıradan bir web sitesinden daha fazlasıdır. Bir PWA olması sayesinde size uygulama benzeri bir deneyim sunar:

- **Yüklenebilirlik:** Oyunu bilgisayarınızın masaüstüne veya telefonunuzun ana ekranına bir uygulama gibi ekleyebilirsiniz.
- **Çevrimdışı Çalışma:** Bir kez yüklendikten sonra, internet bağlantınız olmasa bile oyunu açıp oynayabilirsiniz.
- **Hız ve Güvenilirlik:** Önbelleğe alma teknolojileri sayesinde çok daha hızlı açılır ve zayıf internet bağlantılarında bile güvenilir bir şekilde çalışır.

### PWA Olarak Nasıl Yüklenir?

#### 🖥️ Masaüstü (Chrome, Edge)
1.  [Oyun linkine](https://omc725.github.io/parmak-futbolu-js/) gidin.
2.  Adres çubuğunun sağında görünen **Yükle (Install)** ikonuna tıklayın.
3.  Çıkan pencerede "Yükle" butonuna basın. Oyun artık masaüstünüzde!

#### 📱 Mobil (Android/iOS)
1.  Oyunu tarayıcınızda (Chrome, Safari vb.) açın.
2.  Tarayıcının menüsünü açın (genellikle üç nokta `⋮` veya paylaş `📤` ikonu).
3.  **"Ana Ekrana Ekle" (Add to Home Screen)** veya **"Uygulamayı Yükle" (Install App)** seçeneğine dokunun.

## 🛠️ Kullanılan Teknolojiler

- **Kütüphane:** React
- **Derleme Aracı:** Vite
- **Stil:** Tailwind CSS
- **Dağıtım:** GitHub Pages & GitHub Actions
- **PWA:** Vite PWA Plugin

## 🚀 Kurulum ve Yerel Geliştirme Ortamı

Projeyi yerel makinenizde çalıştırmak ve geliştirmeye başlamak için aşağıdaki adımları izleyin.

### Gereksinimler
- [Node.js](https://nodejs.org/) (v18 veya üstü)
- npm (Node.js ile birlikte gelir)

### Adımlar

1.  **Projeyi klonlayın:**
    ```bash
    git clone [https://github.com/omc725/parmak-futbolu-js.git](https://github.com/omc725/parmak-futbolu-js.git)
    cd parmak-futbolu-js
    ```

2.  **Gerekli paketleri yükleyin:**
    ```bash
    npm install
    ```

3.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```

4.  Tarayıcınızda `http://localhost:3000` (veya Vite'in belirttiği port) adresini açın.

## 📁 Proje Yapısı

Projenin temel dosya yapısı aşağıdaki gibidir:

```
/
├── public/              # Statik varlıklar (ikonlar, manifest.json)
├── src/
│   ├── components/      # Yeniden kullanılabilir React bileşenleri
│   ├── utils/           # Oyun modları ve yardımcı fonksiyonlar
│   ├── App.jsx          # Ana uygulama bileşeni ve durum yönetimi
│   └── index.jsx        # Uygulamanın başlangıç noktası
├── .gitignore           # Git tarafından izlenmeyecek dosyalar
├── index.html           # Ana HTML dosyası
├── package.json         # Proje bağımlılıkları ve script'leri
└── vite.config.js       # Vite yapılandırma dosyası
```

## 🗺️ Gelecek Planları (Roadmap)

- [ ] **Kariyer Modu:** Favori liginizden bir takım seçin, sezonlar boyunca mücadele edin, şampiyonluklar kazanın ve Avrupa kupalarına katılma hakkı elde edin.
- [ ] Gelişmiş oyuncu ve takım istatistikleri.
- [ ] Farklı oyun sahası ve top görünümleri.

## 🤝 Katkıda Bulunma

Katkılarınız projeyi daha iyi bir hale getirecektir! Lütfen bir "issue" açarak veya "pull request" göndererek katkıda bulunmaktan çekinmeyin.

## 📄 Lisans

Bu proje MIT Lisansı altında dağıtılmaktadır. Daha fazla bilgi için `LICENSE` dosyasına göz atın.
