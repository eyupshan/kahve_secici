/* ============================================
   KAHVE KEŞFİ — APP.JS
   ============================================ */

// ==========================================
// COFFEE DATABASE
// ==========================================
const coffeeDatabase = [
    {
        id: 1, name: "Espresso", emoji: "☕", origin: "İtalya",
        desc: "Yüksek basınçla çekilen, tüm kahve içeceklerinin temeli olan yoğun ve aromatik kahve. İnce öğütülmüş kahve çekirdeklerinden 25-30 saniyede hazırlanır.",
        preparation: "İnce öğütülmüş 7-9g kahve, 9 bar basınçla 25-30 saniyede çekilir. 25-30ml yoğun kahve elde edilir.",
        taste: { sweetness: 2, bitterness: 8, intensity: 9, acidity: 5, milkiness: 0, chocolate: 4, fruity: 2, nutty: 5 },
        caffeine: "63mg", calories: "2 kcal", serving: "Sıcak", ingredients: "Kahve çekirdeği, su",
        tags: ["Yoğun", "Klasik", "Sıcak", "Sütsüz"], temp: "hot", caffeineLevel: "high",
        facts: ["Espresso kelimesi İtalyanca'da 'hızlı' anlamına gelir.", "İtalya'da espresso içmek bir sosyal ritüeldir.", "Mükemmel espresso üzerinde 'crema' denilen altın renkli köpük bulunur."]
    },
    {
        id: 2, name: "Latte", emoji: "🥛", origin: "İtalya / Amerika",
        desc: "Espresso ve bol buharlanmış sütle hazırlanan, kremamsı ve yumuşak bir kahve içeceği. Latte art ile süslenir.",
        preparation: "Bir shot espresso üzerine 240-300ml buharlanmış süt eklenir. Üzerine ince bir süt köpüğü tabakası konur.",
        taste: { sweetness: 6, bitterness: 3, intensity: 3, acidity: 2, milkiness: 9, chocolate: 2, fruity: 1, nutty: 3 },
        caffeine: "63mg", calories: "120 kcal", serving: "Sıcak / Soğuk", ingredients: "Espresso, süt, süt köpüğü",
        tags: ["Kremamsı", "Sütlü", "Yumuşak"], temp: "hot", caffeineLevel: "medium",
        facts: ["Latte art, baristanın ustalığının göstergesidir.", "İtalya'da sadece 'latte' derseniz size süt gelir!", "Dünyada en çok tüketilen kahve içeceklerinden biridir."]
    },
    {
        id: 3, name: "Cappuccino", emoji: "☕", origin: "İtalya",
        desc: "Eşit oranlarda espresso, buharlanmış süt ve süt köpüğünden oluşan dengeli ve klasik İtalyan kahvesi.",
        preparation: "1/3 espresso, 1/3 buharlanmış süt ve 1/3 yoğun süt köpüğü ile hazırlanır. Üzerine kakao serpilir.",
        taste: { sweetness: 4, bitterness: 5, intensity: 5, acidity: 3, milkiness: 6, chocolate: 3, fruity: 1, nutty: 4 },
        caffeine: "63mg", calories: "80 kcal", serving: "Sıcak", ingredients: "Espresso, süt, süt köpüğü",
        tags: ["Dengeli", "Köpüklü", "Klasik"], temp: "hot", caffeineLevel: "medium",
        facts: ["Adını Kapuçin keşişlerinin cüppelerinin renginden almıştır.", "İtalyanlar cappuccino'yu sadece sabahları içer.", "Doğru köpük kalınlığı yaklaşık 1cm olmalıdır."]
    },
    {
        id: 4, name: "Americano", emoji: "🫗", origin: "Amerika / İtalya",
        desc: "Espresso'nun sıcak su ile seyreltilmesiyle elde edilen, filtre kahveye benzer ama daha aromatik bir içecek.",
        preparation: "Bir veya iki shot espresso üzerine sıcak su eklenir. Espresso/su oranı kişisel tercihe göre ayarlanır.",
        taste: { sweetness: 1, bitterness: 6, intensity: 5, acidity: 4, milkiness: 0, chocolate: 3, fruity: 2, nutty: 4 },
        caffeine: "94mg", calories: "5 kcal", serving: "Sıcak", ingredients: "Espresso, sıcak su",
        tags: ["Hafif", "Sade", "Klasik", "Sütsüz"], temp: "hot", caffeineLevel: "high",
        facts: ["2. Dünya Savaşı'nda Amerikan askerleri İtalyan espressosunu suyla seyrelterek içmiştir.", "Adı bu hikayeden gelir.", "Sıcak veya buzlu olarak servis edilebilir."]
    },
    {
        id: 5, name: "Mocha", emoji: "🍫", origin: "Yemen / Amerika",
        desc: "Espresso, çikolata sosu, buharlanmış süt ve krem şantinin birleşimiyle oluşan tatlı ve zengin bir içecek.",
        preparation: "Espresso shot'a çikolata sosu karıştırılır, buharlanmış süt eklenir. Üzerine krem şanti ve çikolata sosu ile süslenir.",
        taste: { sweetness: 8, bitterness: 3, intensity: 4, acidity: 2, milkiness: 7, chocolate: 10, fruity: 1, nutty: 3 },
        caffeine: "63mg", calories: "290 kcal", serving: "Sıcak / Soğuk", ingredients: "Espresso, çikolata, süt, krem şanti",
        tags: ["Çikolatalı", "Tatlı", "Kremamsı"], temp: "hot", caffeineLevel: "medium",
        facts: ["Adını Yemen'deki Mocha limanından alır.", "Mocha çekirdekleri doğal çikolata aromasıyla bilinir.", "Beyaz, sütlü veya bitter çikolata ile yapılabilir."]
    },
    {
        id: 6, name: "Türk Kahvesi", emoji: "🫖", origin: "Türkiye",
        desc: "Cezve'de ince öğütülmüş kahvenin su ve isteğe bağlı şekerle birlikte pişirildiği geleneksel demleme yöntemi.",
        preparation: "İnce öğütülmüş kahve, soğuk su ve şeker cezvede karıştırılır. Kısık ateşte köpürene kadar pişirilir, fincanlara bölünerek servis edilir.",
        taste: { sweetness: 3, bitterness: 7, intensity: 9, acidity: 3, milkiness: 0, chocolate: 3, fruity: 1, nutty: 5 },
        caffeine: "50mg", calories: "5 kcal", serving: "Sıcak", ingredients: "İnce öğütülmüş kahve, su, şeker (opsiyonel)",
        tags: ["Geleneksel", "Yoğun", "Kültürel", "Sütsüz"], temp: "hot", caffeineLevel: "medium",
        facts: ["UNESCO Somut Olmayan Kültürel Miras Listesi'ndedir.", "Türk kahvesi telvesinden fal bakılır.", "Düğün geleneğinde gelinin damada tuzlu kahve servisi yapılır."]
    },
    {
        id: 7, name: "Cold Brew", emoji: "🧊", origin: "Japonya / Amerika",
        desc: "Kahvenin soğuk suda 12-24 saat boyunca demlenmesiyle elde edilen, pürüzsüz ve düşük asitli soğuk kahve.",
        preparation: "Kaba öğütülmüş kahve, oda sıcaklığında veya soğuk suda 12-24 saat demlenir. Süzülür ve buz ile servis edilir.",
        taste: { sweetness: 4, bitterness: 4, intensity: 6, acidity: 2, milkiness: 0, chocolate: 5, fruity: 3, nutty: 6 },
        caffeine: "200mg", calories: "5 kcal", serving: "Soğuk", ingredients: "Kaba öğütülmüş kahve, soğuk su",
        tags: ["Soğuk", "Pürüzsüz", "Yaz", "Sütsüz"], temp: "cold", caffeineLevel: "high",
        facts: ["Sıcak demlemeye göre %67 daha az asidik.", "Buzdolabında 2 haftaya kadar saklanabilir.", "Japonya'da Kyoto-style cold brew yüzyıllardır yapılmaktadır."]
    },
    {
        id: 8, name: "French Press", emoji: "🫖", origin: "Fransa / İtalya",
        desc: "Piston yöntemiyle demlenen, kahvenin yağlarını ve aromasını koruyan dolgun gövdeli kahve.",
        preparation: "Orta-kaba öğütülmüş kahve, sıcak su (93°C) ile karıştırılır. 4 dakika beklendikten sonra piston bastırılır.",
        taste: { sweetness: 3, bitterness: 5, intensity: 7, acidity: 3, milkiness: 0, chocolate: 5, fruity: 2, nutty: 7 },
        caffeine: "80mg", calories: "2 kcal", serving: "Sıcak", ingredients: "Orta-kaba öğütülmüş kahve, sıcak su",
        tags: ["Dolgun", "Zengin", "Ev Yapımı", "Sütsüz"], temp: "hot", caffeineLevel: "high",
        facts: ["İlk patent 1929'da İtalyan Attilio Calimani tarafından alındı.", "Metal filtre sayesinde kahve yağları korunur.", "En iyi sonuç için su sıcaklığı 93-96°C olmalıdır."]
    },
    {
        id: 9, name: "Pour Over (V60)", emoji: "🫗", origin: "Japonya",
        desc: "Sıcak suyun kahve üzerine kontrollü bir şekilde döküldüğü, temiz ve meyvemsi tatlar veren filtreleme yöntemi.",
        preparation: "V60 dripper'a filtre yerleştirilir y kahve konur. Sıcak su dairesel hareketlerle 3-4 dakikada yavaşça dökülür.",
        taste: { sweetness: 4, bitterness: 3, intensity: 4, acidity: 7, milkiness: 0, chocolate: 2, fruity: 8, nutty: 3 },
        caffeine: "75mg", calories: "2 kcal", serving: "Sıcak", ingredients: "Orta öğütülmüş kahve, sıcak su",
        tags: ["Temiz", "Meyvemsi", "Çiçeksi", "Sütsüz"], temp: "hot", caffeineLevel: "medium",
        facts: ["Hario V60, 2004 yılında Japonya'da tasarlandı.", "60 derecelik açısı adını verir.", "3. dalga kahve kültürünün simgesidir."]
    },
    {
        id: 10, name: "Flat White", emoji: "🥛", origin: "Avustralya / Yeni Zelanda",
        desc: "Çift shot espresso ve kadifemsi mikro köpüklü sütle hazırlanan, yoğun ama kremamsı içecek.",
        preparation: "Çift shot espresso çekilir. Üzerine mikro köpüklü buharlanmış süt eklenir. Latte'den daha yoğun kahve tadı verir.",
        taste: { sweetness: 5, bitterness: 5, intensity: 6, acidity: 3, milkiness: 7, chocolate: 3, fruity: 1, nutty: 4 },
        caffeine: "126mg", calories: "100 kcal", serving: "Sıcak", ingredients: "Çift espresso, mikro köpüklü süt",
        tags: ["Kadifemsi", "Yoğun", "Sütlü"], temp: "hot", caffeineLevel: "high",
        facts: ["Avustralya ve Yeni Zelanda arasında köken tartışması sürmektedir.", "Latte'den daha güçlü kahve tadı verir.", "Starbucks 2015'te menüsüne ekledi."]
    },
    {
        id: 11, name: "Cortado", emoji: "☕", origin: "İspanya",
        desc: "Espresso'nun eşit miktarda sıcak sütle dengelendiği, güçlü ama yumuşak İspanyol kahvesi.",
        preparation: "Bir shot espresso üzerine eşit miktarda buharlanmış süt eklenir. Köpük minimum tutulur.",
        taste: { sweetness: 4, bitterness: 6, intensity: 7, acidity: 3, milkiness: 5, chocolate: 3, fruity: 1, nutty: 4 },
        caffeine: "63mg", calories: "30 kcal", serving: "Sıcak", ingredients: "Espresso, buharlanmış süt",
        tags: ["Dengeli", "Güçlü", "Kompakt"], temp: "hot", caffeineLevel: "medium",
        facts: ["'Cortado' İspanyolca'da 'kesilmiş' anlamına gelir.", "Süt, espressonun acılığını 'keser'.", "Genellikle küçük cam bardakta servis edilir."]
    },
    {
        id: 12, name: "Macchiato", emoji: "☕", origin: "İtalya",
        desc: "Espresso üzerine bir damla süt köpüğü eklenen, yoğun ve güçlü İtalyan kahvesi. 'Lekeli' espresso.",
        preparation: "Bir shot espresso çekilir. Üzerine bir kaşık süt köpüğü eklenir. İtalyan geleneğinde çok az süt kullanılır.",
        taste: { sweetness: 2, bitterness: 7, intensity: 8, acidity: 4, milkiness: 2, chocolate: 3, fruity: 2, nutty: 5 },
        caffeine: "63mg", calories: "15 kcal", serving: "Sıcak", ingredients: "Espresso, az süt köpüğü",
        tags: ["Yoğun", "Güçlü", "Klasik"], temp: "hot", caffeineLevel: "high",
        facts: ["'Macchiato' İtalyanca'da 'lekeli' demektir.", "Starbucks versiyonu geleneksel İtalyan macchiato'sundan çok farklıdır.", "Baristalar süt 'lekesi' için espresso çektiklerini ayırt ederdi."]
    },
    {
        id: 13, name: "Affogato", emoji: "🍨", origin: "İtalya",
        desc: "Vanilyalı dondurma üzerine sıcak espresso dökülen, tatlı ve kahve arasında harika bir İtalyan lezzeti.",
        preparation: "Bir top vanilyalı dondurma veya gelato bardağa konur. Üzerine sıcak bir shot espresso dökülür.",
        taste: { sweetness: 9, bitterness: 4, intensity: 5, acidity: 2, milkiness: 6, chocolate: 4, fruity: 2, nutty: 3 },
        caffeine: "63mg", calories: "200 kcal", serving: "Sıcak/Soğuk", ingredients: "Espresso, vanilyalı dondurma",
        tags: ["Tatlı", "Dondurmalı", "Tatlı-Kahve"], temp: "hot", caffeineLevel: "medium",
        facts: ["'Affogato' İtalyanca'da 'boğulmuş' anlamına gelir.", "Tatlı mı yoksa kahve mi olduğu konusunda tartışma vardır.", "Likör eklenerek de yapılabilir."]
    },
    {
        id: 14, name: "Irish Coffee", emoji: "🥃", origin: "İrlanda",
        desc: "Sıcak kahve, İrlanda viskisi, şeker ve krem şanti ile hazırlanan klasik alkollü kahve kokteyli.",
        preparation: "Sıcak kahveye şeker ve İrlanda viskisi eklenir. Üzerine hafifçe çırpılmış krema yüzdürülür.",
        taste: { sweetness: 7, bitterness: 4, intensity: 5, acidity: 2, milkiness: 4, chocolate: 2, fruity: 2, nutty: 3 },
        caffeine: "80mg", calories: "210 kcal", serving: "Sıcak", ingredients: "Kahve, İrlanda viskisi, şeker, krema",
        tags: ["Alkollü", "Tatlı", "Sıcak", "Özel"], temp: "hot", caffeineLevel: "medium",
        facts: ["1943'te İrlanda'nın Foynes havalimanında icat edildi.", "Soğuk yolcuları ısıtmak amacıyla yaratıldı.", "Kremanın kahvenin üzerinde yüzmesi gerekir, karıştırılmaz."]
    },
    {
        id: 15, name: "Ristretto", emoji: "☕", origin: "İtalya",
        desc: "Espresso'dan daha kısa sürede ve daha az suyla çekilen, çok yoğun ve tatlımsı kahve.",
        preparation: "10-15ml su ile 15-20 saniyede çekilir. Aynı miktarda kahve kullanılır ama su yarıya indirilir.",
        taste: { sweetness: 3, bitterness: 6, intensity: 10, acidity: 3, milkiness: 0, chocolate: 5, fruity: 3, nutty: 6 },
        caffeine: "33mg", calories: "2 kcal", serving: "Sıcak", ingredients: "İnce öğütülmüş kahve, az su",
        tags: ["Çok Yoğun", "Tatlımsı", "Kısa", "Sütsüz"], temp: "hot", caffeineLevel: "low",
        facts: ["Espresso'nun en yoğun versiyonudur.", "Daha az kafein içerir çünkü su daha az temas eder.", "İtalyan kahve ustaları tarafından 'gerçek espresso' sayılır."]
    },
    {
        id: 16, name: "Lungo", emoji: "☕", origin: "İtalya",
        desc: "Espresso'dan daha uzun sürede ve daha fazla suyla çekilen, hafif ama aromatik kahve.",
        preparation: "Aynı miktarda kahve kullanılarak, iki kat su ile 45-60 saniyede çekilir. 50-60ml kahve elde edilir.",
        taste: { sweetness: 2, bitterness: 7, intensity: 5, acidity: 5, milkiness: 0, chocolate: 3, fruity: 2, nutty: 4 },
        caffeine: "90mg", calories: "3 kcal", serving: "Sıcak", ingredients: "İnce öğütülmüş kahve, fazla su",
        tags: ["Hafif", "Aromatik", "Uzun", "Sütsüz"], temp: "hot", caffeineLevel: "high",
        facts: ["'Lungo' İtalyanca'da 'uzun' anlamına gelir.", "Espresso'dan daha fazla kafein içerir.", "Daha fazla acılık ve aroma çıkarır."]
    },
    {
        id: 17, name: "Vienna Coffee", emoji: "🍰", origin: "Avusturya",
        desc: "Espresso veya güçlü kahve üzerine bol miktarda krem şanti eklenen, gösterişli Viyana kahvesi.",
        preparation: "Güçlü kahve veya çift espresso hazırlanır. Üzerine bol krem şanti yığılır. Kakao tozu ile süslenir.",
        taste: { sweetness: 7, bitterness: 4, intensity: 5, acidity: 2, milkiness: 6, chocolate: 4, fruity: 1, nutty: 3 },
        caffeine: "80mg", calories: "180 kcal", serving: "Sıcak", ingredients: "Kahve, krem şanti, kakao",
        tags: ["Kremalı", "Gösterişli", "Tatlı"], temp: "hot", caffeineLevel: "medium",
        facts: ["Viyana kahve kültürü UNESCO listesindedir.", "17. yüzyılda Osmanlı kuşatmasından kalan kahve çekirdekleriyle başladı.", "Geleneksel olarak gümüş tepside su ile servis edilir."]
    },
    {
        id: 18, name: "Chemex", emoji: "🧪", origin: "Amerika",
        desc: "Özel kalın filtre kağıdı kullanarak demlenen, temiz ve parlak tatlara sahip pour-over kahve.",
        preparation: "Chemex özel filtresine orta-kaba öğütülmüş kahve konur. 93°C su ile 4-5 dakikada yavaşça demlenir.",
        taste: { sweetness: 4, bitterness: 2, intensity: 4, acidity: 7, milkiness: 0, chocolate: 2, fruity: 8, nutty: 3 },
        caffeine: "80mg", calories: "2 kcal", serving: "Sıcak", ingredients: "Orta-kaba öğütülmüş kahve, su",
        tags: ["Temiz", "Parlak", "Meyvemsi", "Sütsüz"], temp: "hot", caffeineLevel: "medium",
        facts: ["1941'de kimyager Peter Schlumbohm tarafından icat edildi.", "Tasarımı MoMA'nın kalıcı koleksiyonundadır.", "Kalın filtre kağıdı yağları ve sedimenti tutar."]
    },
    {
        id: 19, name: "AeroPress", emoji: "🔧", origin: "Amerika",
        desc: "Hava basıncı ile 1-2 dakikada demlenen, pürüzsüz ve çok yönlü kahve demleme aracı.",
        preparation: "İnce-orta öğütülmüş kahve AeroPress'e konur. Sıcak su eklenir, 1-2 dakika beklenir ve basınçla süzülür.",
        taste: { sweetness: 4, bitterness: 4, intensity: 6, acidity: 4, milkiness: 0, chocolate: 4, fruity: 5, nutty: 5 },
        caffeine: "70mg", calories: "2 kcal", serving: "Sıcak / Soğuk", ingredients: "İnce-orta öğütülmüş kahve, su",
        tags: ["Pürüzsüz", "Çok Yönlü", "Pratik", "Sütsüz"], temp: "hot", caffeineLevel: "medium",
        facts: ["2005'te Aerobie frisbee şirketi tarafından icat edildi.", "Her yıl dünya AeroPress şampiyonası düzenlenir.", "Seyahat için en ideal demleme aracıdır."]
    },
    {
        id: 20, name: "Siphon (Vakum)", emoji: "🔬", origin: "Almanya",
        desc: "Vakum ve buhar basıncı kullanarak demlenen, teatral sunumuyla bilinen temiz ve aromatik kahve.",
        preparation: "Alt hazneye su konur, ısıtılır. Buhar basıncıyla su üst hazneye çıkar, kahveyle temas eder. Soğuyunca geri süzülür.",
        taste: { sweetness: 4, bitterness: 3, intensity: 5, acidity: 6, milkiness: 0, chocolate: 3, fruity: 6, nutty: 4 },
        caffeine: "75mg", calories: "2 kcal", serving: "Sıcak", ingredients: "Orta öğütülmüş kahve, su",
        tags: ["Teatral", "Temiz", "Aromatik", "Sütsüz"], temp: "hot", caffeineLevel: "medium",
        facts: ["1840'larda icat edildi.", "Japonya'da 'sanat formu' olarak kabul edilir.", "Görsel sunumu bir laboratuvar deneyini andırır."]
    },
    {
        id: 21, name: "Café au Lait", emoji: "☕", origin: "Fransa",
        desc: "Eşit oranda güçlü filtre kahve ve sıcak sütle hazırlanan, yumuşak Fransız kahvesi.",
        preparation: "Güçlü demlenen filtre kahve ve sıcak süt eşit oranda birleştirilir. Fransa'da genellikle büyük kase bardakta servis edilir.",
        taste: { sweetness: 5, bitterness: 3, intensity: 4, acidity: 2, milkiness: 8, chocolate: 2, fruity: 1, nutty: 3 },
        caffeine: "80mg", calories: "70 kcal", serving: "Sıcak", ingredients: "Filtre kahve, sıcak süt",
        tags: ["Sütlü", "Yumuşak", "Fransız"], temp: "hot", caffeineLevel: "medium",
        facts: ["Fransız kahvaltısının vazgeçilmezidir.", "Latte'den farkı: espresso yerine filtre kahve kullanılmasıdır.", "Geleneksel olarak kase şeklinde bardakta içilir."]
    },
    {
        id: 22, name: "Iced Latte", emoji: "🧊", origin: "Amerika",
        desc: "Buz üzerine espresso ve soğuk sütle hazırlanan, serinletici ve kremamsı yaz kahvesi.",
        preparation: "Bardağa buz konur. Üzerine espresso shot dökülür ve soğuk süt eklenir. İsteğe göre şurup eklenebilir.",
        taste: { sweetness: 5, bitterness: 3, intensity: 3, acidity: 2, milkiness: 8, chocolate: 2, fruity: 1, nutty: 2 },
        caffeine: "63mg", calories: "100 kcal", serving: "Soğuk", ingredients: "Espresso, soğuk süt, buz",
        tags: ["Soğuk", "Kremamsı", "Serinletici", "Sütlü"], temp: "cold", caffeineLevel: "medium",
        facts: ["Yaz aylarında en çok satılan kahve içeceklerinden biridir.", "Çeşitli şuruplarla (vanilya, karamel) tatlandırılabilir.", "Bitki sütleriyle de yapılabilir."]
    },
    {
        id: 23, name: "Frappe", emoji: "🥤", origin: "Yunanistan",
        desc: "Granül kahve, su, şeker ve buzun blender'da karıştırılmasıyla hazırlanan köpüklü soğuk kahve.",
        preparation: "Granül kahve, şeker ve az su çalkalanarak köpürtülür. Buzlu bardağa dökülür, soğuk su veya süt eklenir.",
        taste: { sweetness: 7, bitterness: 3, intensity: 3, acidity: 1, milkiness: 5, chocolate: 1, fruity: 1, nutty: 2 },
        caffeine: "60mg", calories: "150 kcal", serving: "Soğuk", ingredients: "Granül kahve, su, şeker, buz, süt (opsiyonel)",
        tags: ["Soğuk", "Köpüklü", "Tatlı", "Yaz"], temp: "cold", caffeineLevel: "medium",
        facts: ["1957'de Selanik'te tesadüfen icat edildi.", "Yunanistan'ın gayri resmi ulusal içeceğidir.", "Doğru köpük için en az 30 saniye çalkalanmalıdır."]
    },
    {
        id: 24, name: "Dalgona Coffee", emoji: "☁️", origin: "Güney Kore",
        desc: "Eşit oranda granül kahve, şeker ve sıcak suyun çırpılmasıyla oluşan kremalı köpüğün süt üzerine konduğu viral içecek.",
        preparation: "Eşit miktarda granül kahve, şeker ve sıcak su yoğun kıvamlı köpük oluşana kadar çırpılır. Buzlu süt üzerine kaşıklanır.",
        taste: { sweetness: 8, bitterness: 3, intensity: 4, acidity: 1, milkiness: 7, chocolate: 2, fruity: 0, nutty: 2 },
        caffeine: "50mg", calories: "180 kcal", serving: "Soğuk", ingredients: "Granül kahve, şeker, sıcak su, süt, buz",
        tags: ["Viral", "Kremalı", "Tatlı", "Soğuk"], temp: "cold", caffeineLevel: "medium",
        facts: ["2020 pandemisi sırasında TikTok'ta viral oldu.", "Güney Kore'de bir TV programında popülerleşti.", "400 kez çırpılması gerektiği söylenir."]
    }
];

// ==========================================
// TASTE LABELS (Turkish)
// ==========================================
const tasteLabels = {
    sweetness: "Tatlılık", bitterness: "Acılık", intensity: "Yoğunluk", acidity: "Asidite",
    milkiness: "Sütlülük", chocolate: "Çikolata", fruity: "Meyvemsilik", nutty: "Fındıksılık"
};

// ==========================================
// PRESETS
// ==========================================
const presets = {
    "sweet-lover": { sweetness: 9, bitterness: 2, intensity: 3, acidity: 2, milkiness: 7, chocolate: 8, fruity: 3, nutty: 3 },
    "strong": { sweetness: 1, bitterness: 9, intensity: 10, acidity: 5, milkiness: 0, chocolate: 3, fruity: 1, nutty: 5 },
    "fruity": { sweetness: 5, bitterness: 2, intensity: 4, acidity: 8, milkiness: 1, chocolate: 1, fruity: 10, nutty: 2 },
    "classic": { sweetness: 3, bitterness: 6, intensity: 6, acidity: 4, milkiness: 3, chocolate: 4, fruity: 2, nutty: 5 },
    "milky": { sweetness: 6, bitterness: 2, intensity: 3, acidity: 2, milkiness: 10, chocolate: 3, fruity: 1, nutty: 3 },
    "adventurous": { sweetness: 5, bitterness: 5, intensity: 7, acidity: 6, milkiness: 2, chocolate: 3, fruity: 6, nutty: 4 }
};

// ==========================================
// STATE
// ==========================================
let currentFilters = { temp: "all", caffeine: "all" };
let currentMatchScores = {};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initSliders();
    initPresets();
    initFilters();
    initFindButton();
    initGuideGrid();
    initFlavorWheel();
    initHeroStats();
    initScrollAnimations();
});

// ==========================================
// NAVBAR
// ==========================================
function initNavbar() {
    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("navToggle");
    const links = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    toggle.addEventListener("click", () => {
        links.classList.toggle("open");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            links.classList.remove("open");
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) current = section.getAttribute("id");
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) link.classList.add("active");
        });
    });
}

// ==========================================
// SLIDERS
// ==========================================
function initSliders() {
    const sliders = document.querySelectorAll(".taste-slider");
    sliders.forEach(slider => {
        const valueEl = document.getElementById(slider.id + "Value");
        slider.addEventListener("input", () => {
            valueEl.textContent = slider.value;
            updateSliderTrack(slider);
        });
        updateSliderTrack(slider);
    });
}

function updateSliderTrack(slider) {
    const percent = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #d4a574 0%, #f0c27f ${percent}%, rgba(212,165,116,0.15) ${percent}%)`;
}

function getUserTaste() {
    return {
        sweetness: +document.getElementById("sweetness").value,
        bitterness: +document.getElementById("bitterness").value,
        intensity: +document.getElementById("intensity").value,
        acidity: +document.getElementById("acidity").value,
        milkiness: +document.getElementById("milkiness").value,
        chocolate: +document.getElementById("chocolate").value,
        fruity: +document.getElementById("fruity").value,
        nutty: +document.getElementById("nutty").value
    };
}

// ==========================================
// PRESETS
// ==========================================
function initPresets() {
    document.querySelectorAll(".preset-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const preset = presets[btn.dataset.preset];
            if (!preset) return;
            document.querySelectorAll(".preset-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            Object.entries(preset).forEach(([key, val]) => {
                const slider = document.getElementById(key);
                if (slider) {
                    slider.value = val;
                    document.getElementById(key + "Value").textContent = val;
                    updateSliderTrack(slider);
                }
            });
        });
    });
}

// ==========================================
// FILTERS
// ==========================================
function initFilters() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.dataset.filter;
            const value = btn.dataset.value;
            currentFilters[filter] = value;
            btn.closest(".filter-buttons").querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
}

// ==========================================
// MATCHING ALGORITHM
// ==========================================
function calculateMatch(userTaste, coffeeTaste) {
    const keys = Object.keys(userTaste);
    let totalDiff = 0;
    keys.forEach(key => {
        totalDiff += Math.abs(userTaste[key] - coffeeTaste[key]);
    });
    const maxDiff = keys.length * 10;
    return Math.round((1 - totalDiff / maxDiff) * 100);
}

function getRecommendations() {
    const userTaste = getUserTaste();
    let filtered = coffeeDatabase.filter(c => {
        if (currentFilters.temp !== "all" && c.temp !== currentFilters.temp) return false;
        if (currentFilters.caffeine !== "all" && c.caffeineLevel !== currentFilters.caffeine) return false;
        return true;
    });
    filtered.forEach(c => { c.matchScore = calculateMatch(userTaste, c.taste); });
    filtered.sort((a, b) => b.matchScore - a.matchScore);
    filtered.forEach(c => { currentMatchScores[c.id] = c.matchScore; });
    return filtered;
}

// ==========================================
// FIND BUTTON & RENDER CARDS
// ==========================================
function initFindButton() {
    document.getElementById("findCoffeeBtn").addEventListener("click", () => {
        const results = getRecommendations();
        renderRecommendations(results);
        document.getElementById("recommendations").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    document.getElementById("startBtn").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("taste-selector").scrollIntoView({ behavior: "smooth" });
    });
}

function renderRecommendations(coffees) {
    const container = document.getElementById("recommendationCards");
    const desc = document.getElementById("recommendationDesc");

    if (coffees.length === 0) {
        container.innerHTML = `<div class="empty-state"><div class="empty-icon">😕</div><h3>Sonuç bulunamadı</h3><p>Filtreleri değiştirerek tekrar deneyin.</p></div>`;
        return;
    }

    desc.textContent = `${coffees.length} kahve çeşidi arasından sizin damak tadınıza en uygun ${Math.min(6, coffees.length)} kahveyi sıraladık.`;
    const top = coffees.slice(0, 6);
    container.innerHTML = top.map((c, i) => `
        <div class="coffee-card" data-id="${c.id}" style="animation-delay:${i * 0.1}s">
            <span class="card-rank">#${i + 1}</span>
            <span class="card-emoji">${c.emoji}</span>
            <h3 class="card-name">${c.name}</h3>
            <span class="card-origin">📍 ${c.origin}</span>
            <p class="card-desc">${c.desc}</p>
            <div class="card-tags">${c.tags.map(t => `<span class="card-tag">${t}</span>`).join("")}</div>
            <div class="card-match">
                <span style="font-size:0.82rem;color:var(--color-text-muted);">Uyum:</span>
                <div class="match-bar-bg"><div class="match-bar-fill" style="width:0%"></div></div>
                <span class="match-text">${c.matchScore}%</span>
            </div>
            <div class="card-footer">
                <span class="card-info-item">☕ ${c.caffeine}</span>
                <span class="card-info-item">🔥 ${c.calories}</span>
                <button class="card-detail-btn" onclick="openModal(${c.id})">Detay →</button>
            </div>
        </div>
    `).join("");

    // Animate match bars
    requestAnimationFrame(() => {
        setTimeout(() => {
            container.querySelectorAll(".match-bar-fill").forEach((bar, i) => {
                bar.style.width = top[i].matchScore + "%";
            });
        }, 100);
    });

    // Card click => modal
    container.querySelectorAll(".coffee-card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.classList.contains("card-detail-btn")) return;
            openModal(+card.dataset.id);
        });
    });
}

// ==========================================
// MODAL
// ==========================================
function openModal(id) {
    const c = coffeeDatabase.find(x => x.id === id);
    if (!c) return;

    document.getElementById("modalIcon").textContent = c.emoji;
    document.getElementById("modalTitle").textContent = c.name;
    document.getElementById("modalOrigin").textContent = "📍 " + c.origin;
    document.getElementById("modalDescription").textContent = c.desc;
    document.getElementById("modalPreparation").textContent = c.preparation;
    document.getElementById("modalCaffeine").textContent = c.caffeine;
    document.getElementById("modalCalories").textContent = c.calories;
    document.getElementById("modalServing").textContent = c.serving;
    document.getElementById("modalIngredients").textContent = c.ingredients;

    // Taste bars
    const barsContainer = document.getElementById("modalTasteBars");
    barsContainer.innerHTML = Object.entries(c.taste).map(([key, val]) => `
        <div class="taste-bar-item">
            <span class="taste-bar-label">${tasteLabels[key]}</span>
            <div class="taste-bar-bg"><div class="taste-bar-fill ${key}" style="width:0%"></div></div>
            <span class="taste-bar-value">${val}/10</span>
        </div>
    `).join("");

    setTimeout(() => {
        barsContainer.querySelectorAll(".taste-bar-fill").forEach((bar, i) => {
            const val = Object.values(c.taste)[i];
            bar.style.width = (val * 10) + "%";
        });
    }, 200);

    // Facts
    document.getElementById("modalFacts").innerHTML = c.facts.map(f => `<li>${f}</li>`).join("");

    // Match score
    const score = currentMatchScores[c.id] || calculateMatch(getUserTaste(), c.taste);
    document.getElementById("matchPercent").textContent = score + "%";
    setTimeout(() => {
        document.getElementById("matchFill").setAttribute("stroke-dasharray", `${score}, 100`);
    }, 300);

    // Show
    const overlay = document.getElementById("modalOverlay");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

function closeModal() {
    document.getElementById("modalOverlay").classList.remove("active");
    document.body.style.overflow = "";
    document.getElementById("matchFill").setAttribute("stroke-dasharray", "0, 100");
}

// ==========================================
// GUIDE GRID
// ==========================================
function initGuideGrid() {
    const grid = document.getElementById("guideGrid");
    grid.innerHTML = coffeeDatabase.map(c => `
        <div class="guide-card" onclick="openModal(${c.id})">
            <span class="guide-emoji">${c.emoji}</span>
            <h3 class="guide-name">${c.name}</h3>
            <span class="guide-origin">📍 ${c.origin}</span>
            <p class="guide-desc">${c.desc}</p>
            <div class="guide-tags">${c.tags.slice(0, 3).map(t => `<span class="guide-tag">${t}</span>`).join("")}</div>
        </div>
    `).join("");
}

// ==========================================
// FLAVOR WHEEL (Canvas)
// ==========================================
function initFlavorWheel() {
    const canvas = document.getElementById("flavorWheelCanvas");
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const size = 600;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + "px";
    canvas.style.height = size + "px";
    ctx.scale(dpr, dpr);

    const cx = size / 2, cy = size / 2;
    const categories = [
        { name: "Tatlı", color: "#f0c27f", sub: ["Karamel", "Bal", "Vanilya", "Şeker"], icon: "🍯", coffees: "Mocha, Latte, Affogato" },
        { name: "Çikolata", color: "#8B4513", sub: ["Bitter", "Sütlü", "Kakao", "Brownie"], icon: "🍫", coffees: "Mocha, Espresso, Vienna" },
        { name: "Fındıksı", color: "#c9a96e", sub: ["Fındık", "Badem", "Ceviz", "Fıstık"], icon: "🥜", coffees: "French Press, Cold Brew" },
        { name: "Meyvemsi", color: "#e17055", sub: ["Çilek", "Vişne", "Narenciye", "Tropikal"], icon: "🍒", coffees: "V60, Chemex, Siphon" },
        { name: "Çiçeksi", color: "#fd79a8", sub: ["Yasemin", "Gül", "Lavanta", "Papatya"], icon: "🌸", coffees: "Pour Over, Chemex" },
        { name: "Baharatlı", color: "#e8985a", sub: ["Tarçın", "Karanfil", "Zencefil", "Biber"], icon: "🌶️", coffees: "Türk Kahvesi, Espresso" },
        { name: "Kavrulmuş", color: "#6d4c41", sub: ["Tost", "Duman", "Kül", "Tahıl"], icon: "🔥", coffees: "Espresso, Ristretto, Lungo" },
        { name: "Acı/Ekşi", color: "#b2bec3", sub: ["Limon", "Sirke", "Yeşil Elma", "Turunç"], icon: "🍋", coffees: "Pour Over, AeroPress" }
    ];

    const ringCount = 2;
    const outerR = 250, midR = 170, innerR = 70;
    const sliceAngle = (Math.PI * 2) / categories.length;

    function drawWheel() {
        ctx.clearRect(0, 0, size, size);

        // Center circle
        ctx.beginPath();
        ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
        const cGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, innerR);
        cGrad.addColorStop(0, "#2c1d13");
        cGrad.addColorStop(1, "#1a120b");
        ctx.fillStyle = cGrad;
        ctx.fill();
        ctx.strokeStyle = "rgba(212,165,116,0.3)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Center text
        ctx.fillStyle = "#d4a574";
        ctx.font = "bold 16px Inter";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("KAHVE", cx, cy - 10);
        ctx.font = "12px Inter";
        ctx.fillStyle = "#8b7355";
        ctx.fillText("Lezzet Çarkı", cx, cy + 12);

        // Draw slices
        categories.forEach((cat, i) => {
            const startA = i * sliceAngle - Math.PI / 2;
            const endA = startA + sliceAngle;

            // Outer ring (sub-categories)
            cat.sub.forEach((sub, j) => {
                const subStart = startA + (j * sliceAngle / cat.sub.length);
                const subEnd = subStart + sliceAngle / cat.sub.length;
                ctx.beginPath();
                ctx.arc(cx, cy, outerR, subStart, subEnd);
                ctx.arc(cx, cy, midR, subEnd, subStart, true);
                ctx.closePath();
                const alpha = 0.4 + (j % 2) * 0.15;
                ctx.fillStyle = hexToRgba(cat.color, alpha);
                ctx.fill();
                ctx.strokeStyle = "rgba(26,18,11,0.6)";
                ctx.lineWidth = 1.5;
                ctx.stroke();

                // Sub label
                const midA = (subStart + subEnd) / 2;
                const labelR = (outerR + midR) / 2;
                const lx = cx + Math.cos(midA) * labelR;
                const ly = cy + Math.sin(midA) * labelR;
                ctx.save();
                ctx.translate(lx, ly);
                ctx.rotate(midA + Math.PI / 2);
                if (midA > Math.PI / 2 && midA < Math.PI * 1.5) ctx.rotate(Math.PI);
                ctx.fillStyle = "rgba(245,230,211,0.8)";
                ctx.font = "10px Inter";
                ctx.textAlign = "center";
                ctx.fillText(sub, 0, 0);
                ctx.restore();
            });

            // Middle ring (main category)
            ctx.beginPath();
            ctx.arc(cx, cy, midR, startA, endA);
            ctx.arc(cx, cy, innerR, endA, startA, true);
            ctx.closePath();
            ctx.fillStyle = hexToRgba(cat.color, 0.7);
            ctx.fill();
            ctx.strokeStyle = "rgba(26,18,11,0.6)";
            ctx.lineWidth = 2;
            ctx.stroke();

            // Main label
            const midAngle = startA + sliceAngle / 2;
            const labelRadius = (midR + innerR) / 2;
            const tx = cx + Math.cos(midAngle) * labelRadius;
            const ty = cy + Math.sin(midAngle) * labelRadius;
            ctx.save();
            ctx.translate(tx, ty);
            ctx.rotate(midAngle + Math.PI / 2);
            if (midAngle > Math.PI / 2 && midAngle < Math.PI * 1.5) ctx.rotate(Math.PI);
            ctx.fillStyle = "#f5e6d3";
            ctx.font = "bold 13px Inter";
            ctx.textAlign = "center";
            ctx.fillText(cat.icon + " " + cat.name, 0, 0);
            ctx.restore();
        });
    }

    drawWheel();

    // Hover/Click interaction
    canvas.addEventListener("click", (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (size / rect.width) - cx;
        const y = (e.clientY - rect.top) * (size / rect.height) - cy;
        const dist = Math.sqrt(x * x + y * y);
        let angle = Math.atan2(y, x) + Math.PI / 2;
        if (angle < 0) angle += Math.PI * 2;
        const idx = Math.floor(angle / sliceAngle) % categories.length;

        if (dist > innerR && dist < outerR) {
            const cat = categories[idx];
            document.getElementById("wheelInfoTitle").textContent = cat.icon + " " + cat.name;
            document.getElementById("wheelInfoDesc").innerHTML =
                `<strong>Alt notalar:</strong> ${cat.sub.join(", ")}<br><br>` +
                `<strong>Bu tada sahip kahveler:</strong> ${cat.coffees}<br><br>` +
                `Bu lezzet kategorisindeki kahveler, damak tadınızda ${cat.name.toLowerCase()} notaları hissetmenizi sağlar.`;
            document.getElementById("wheelInfoIcon").textContent = cat.icon;
        }
    });
}

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
}

// ==========================================
// HERO STATS COUNTER
// ==========================================
function initHeroStats() {
    const counters = document.querySelectorAll(".stat-number");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = +el.dataset.count;
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
    }, 30);
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
    const elements = document.querySelectorAll(".section-header, .slider-group, .guide-card, .wheel-container");
    elements.forEach(el => el.classList.add("fade-in"));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    elements.forEach(el => observer.observe(el));
}
