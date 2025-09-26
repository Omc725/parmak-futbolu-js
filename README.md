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