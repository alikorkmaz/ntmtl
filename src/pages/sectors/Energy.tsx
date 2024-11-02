import AppBreadcrumb from "../../components/AppBreadcrumb";

export function Energy() {
  return (
    <>
      <AppBreadcrumb
        title="ENERJİ"
        description="Enerji sektörü, sürekli değişen talepler ve zorlu çalışma koşulları ile karakterizedir. Firmamız, enerji uygulamaları için uygun paslanmaz çelik ve alaşımlı çelik ürünlerini stoklayarak, güvenilir çözümler sunmaktadır."
        breadcrumbItems={[
          { label: "Sektörler", href: "/sectors" },
          { label: "Enerji" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          Enerji Sektörü İçin Paslanmaz Çelik Stok Çözümlerimiz
        </h2>
        <p className="text-lg leading-relaxed">
          Enerji sektörü, sürekli değişen talepler ve zorlu çalışma koşulları
          ile karakterizedir. Bu alanda kullanılan malzemelerin yüksek
          dayanıklılığa, korozyon direncine ve uzun ömürlülüğe sahip olması
          büyük önem taşır. Firmamız, enerji uygulamaları için uygun paslanmaz
          çelik ve alaşımlı çelik ürünlerini stoklayarak, sektördeki
          ihtiyaçlarınıza güvenilir çözümler sunmaktadır.
        </p>
        <br />
        <h3 className="font-bold">Geniş Ürün Yelpazesi</h3>
        <p className="text-lg leading-relaxed">
          Enerji üretim tesislerinde ve altyapılarında ihtiyaç duyulan çeşitli
          paslanmaz çelik ürünleri, borular, bağlantı elemanları ve diğer
          bileşenler gibi geniş bir yelpazede stoklarımızda bulunmaktadır.
          Yüksek sıcaklık ve basınca dayanıklı özel alaşımlarımız, enerji
          projelerinde güvenle kullanılabilir.
        </p>
        <br />
        <h3 className="font-bold">Güvenilirlik ve Hız</h3>
        <p className="text-lg leading-relaxed">
          Enerji sektörünün gerektirdiği güvenilirlik ve dayanıklılık
          standartlarını karşılayan ürünlerimiz, projelerinizin aksamadan devam
          etmesi için hızlı bir şekilde temin edilebilir. Stoklarımız, acil
          ihtiyaçlarınızı karşılamak üzere düzenlenmiştir.
        </p>
        <br />
        <h3 className="font-bold">Uygulama Alanları</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Termal Enerji Tesisleri:</strong> Yüksek sıcaklıklara
            dayanıklı paslanmaz çelik borular
          </li>
          <li>
            <strong>Rüzgar Enerjisi Sistemleri:</strong> Aşındırıcı çevre
            koşullarına uygun dayanıklı parçalar
          </li>
          <li>
            <strong>Güneş Enerjisi Ekipmanları:</strong> Korozyona karşı
            dirençli malzeme seçenekleri
          </li>
          <li>
            <strong>Nükleer Enerji Tesisleri:</strong> Yüksek güvenlik
            standartlarına uygun, dayanıklı ve korozyon direnci yüksek
            malzemeler
          </li>
        </ul>
        <br />
        <p className="text-lg leading-relaxed">
          Enerji projelerinize değer katmak için geniş stok yelpazemizle
          hizmetinizdeyiz. İhtiyacınız olan paslanmaz çelik ürünlerini hızlı ve
          güvenilir bir şekilde temin etmek için bizimle iletişime geçin.
        </p>
      </div>
    </>
  );
}
