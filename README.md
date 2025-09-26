# Parmak Futbolu  ⚽

![alt text](https://omc725.github.io/parmak-futbolu-js/icon-512.png)

Hızlı tempolu, eğlenceli ve tamamen tarayıcı tabanlı bir masa futbolu (langırt) oyunu! Takımını seç, yapay zekaya karşı farklı modlarda mücadele et ve şampiyonluğa ulaş!

✨ Oyunu Hemen Oyna! ✨

Bu proje, React ve Vite kullanılarak geliştirilmiştir ve modern bir Progressive Web App (PWA) olarak tasarlanmıştır.
🚀 Bu Bir Progressive Web App (PWA)!

Bu oyun, sıradan bir web sitesinden daha fazlasıdır. Bir PWA olması sayesinde size uygulama benzeri bir deneyim sunar.
PWA Nedir?

Progressive Web App (PWA), modern web teknolojilerini kullanarak kullanıcılara mobil uygulama benzeri bir deneyim sunan web uygulamasıdır. Bunun anlamı:

    Yüklenebilirlik: Oyunu bilgisayarınızın masaüstüne veya telefonunuzun ana ekranına bir uygulama gibi ekleyebilirsiniz.

    Çevrimdışı Çalışma: Bir kez yüklendikten sonra, internet bağlantınız olmasa bile oyunu açıp oynayabilirsiniz. Kariyeriniz her zaman sizinle!

    Hız: Uygulama, önbelleğe alma teknolojileri sayesinde çok daha hızlı açılır ve çalışır.

    Güvenilirlik: İnternet bağlantınız zayıf olsa bile güvenilir bir şekilde çalışır.

PWA Olarak Nasıl Yüklenir?

Oyunu bir uygulama gibi yüklemek çok kolaydır:

🖥️ Bilgisayarda (Chrome, Edge):

    Oyun linkine gidin.

    Adres çubuğunun en sağında, ekran veya bilgisayar monitörü gibi görünen Yükle (Install) ikonuna tıklayın.

    Çıkan pencerede "Yükle" butonuna basın.

    Oyun artık masaüstünüzde bir kısayol ile açabileceğiniz bağımsız bir uygulama olarak görünecektir.

📱 Mobil Cihazlarda (Android/iOS):

    Oyun linkini tarayıcınızda (Chrome, Safari vb.) açın.

    Tarayıcının menüsünü açın (genellikle üç nokta ⋮ veya paylaş 📤 ikonu).

    "Ana Ekrana Ekle" (Add to Home Screen) veya "Uygulamayı Yükle" (Install App) seçeneğini bulun ve tıklayın.

    Oyun, diğer uygulamalarınızın yanında bir ikon olarak ana ekranınıza eklenecektir.

🎮 Oyun Modları

    Kariyer Modu: (Çok Yakında) Favori liginden bir takım seç, sezonlar boyunca mücadele et, şampiyonluklar kazan ve Avrupa kupalarına katılma hakkı elde et!
    (Şimdilik sadece Lig Modu mevcut.)

    Hızlı Maç: Canın sıkıldığında anında bir maça başla.

    Turnuva Modu: (Çok Yakında) Tek elemeli turnuvalarda zafere ulaşmaya çalış.

🛠️ Kullanılan Teknolojiler

    Kütüphane: React

    Derleme Aracı: Vite

    Stil: Tailwind CSS

    Dağıtım: GitHub Pages & GitHub Actions

    PWA: Vite PWA Plugin


# Parmak Futbolu (JavaScript & React Versiyonu)

React ile geliştirilmiş dinamik ve etkileşimli bir langırt (masa futbolu) oyunudur. Bu proje, TypeScript ile yazılmış orijinal versiyonun JavaScript'e dönüştürülmüş halidir.

## Özellikler

- **Hızlı Maç:** Anında bir yapay zeka rakibe karşı oynamaya başlayın.
- **Lig Modu:** Tam bir sezon boyunca tüm takımlarla çift devreli fikstür usulü mücadele edin ve puan tablosunda zirveye oynamaya çalışın.
- **Turnuva Modu:** 8 takımlı tek elemeli bir turnuvada şampiyon olmak için yarışın.
- **Penaltı Atışları:** Eleme maçlarında beraberlik durumunda heyecan dolu penaltı atışları.
- **Farklı Zorluk Seviyeleri:** Yapay zekanın yeteneğini kendinize göre ayarlayın.
- **PWA Desteği:** Oyunu bir uygulama gibi bilgisayarınıza veya telefonunuza yükleyip çevrimdışı oynayabilirsiniz.

## Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

### Gereksinimler

- [Node.js](https://nodejs.org/) (v18 veya üstü)
- npm (Node.js ile birlikte gelir)

### Adımlar

1.  **Projeyi klonlayın (veya dosyaları indirin):**
    ```bash
    git clone <proje-linki>
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

4.  Tarayıcınızda `http://localhost:3000` adresini açın.

## Proje Yapısı

- **`/public`**: İkonlar ve `manifest.json` gibi statik varlıkların bulunduğu klasör.
- **`/src`**: Tüm React kaynak kodlarının bulunduğu ana klasör.
  - **`/components`**: Yeniden kullanılabilir React bileşenleri (Oyun alanı, tablolar vb.).
  - **`/utils`**: Oyun modları ve yardımcı fonksiyonlar.
  - **`App.jsx`**: Ana uygulama bileşeni ve durum yönetimi.
  - **`index.jsx`**: Uygulamanın başlangıç noktası.
- **`vite.config.js`**: Projenin derleme ve geliştirme sunucusu ayarlarını içeren Vite yapılandırma dosyası.
