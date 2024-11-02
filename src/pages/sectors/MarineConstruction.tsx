import AppBreadcrumb from "../../components/AppBreadcrumb";

export function MarineConstruction() {
  return (
    <>
      <AppBreadcrumb
        title="GEMİ İNŞA"
        description="Gemi inşa sektörü, dayanıklılık, güvenlik ve performans gerektiren zorlu bir alandır. Firmamız, gemi inşa uygulamaları için uygun paslanmaz çelik ve alaşımlı çelik ürünlerini stoklayarak, sektördeki ihtiyaçlarınıza güvenilir çözümler sunmaktadır."
        breadcrumbItems={[
          { label: "Sektörler", href: "/sectors" },
          { label: "Gemi İnşa" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          Gemi İnşa Sektörü İçin Paslanmaz Çelik Stok Çözümlerimiz
        </h2>
        <p className="text-lg leading-relaxed">
          Gemi inşa sektörü, dayanıklılık, güvenlik ve performans gerektiren
          zorlu bir alandır. Deniz ortamında maruz kalınan korozyon, aşınma ve
          yüksek basınç gibi faktörlere karşı dirençli malzemeler kullanmak
          hayati önem taşır. Firmamız, gemi inşa uygulamaları için uygun
          paslanmaz çelik ve alaşımlı çelik ürünlerini stoklayarak, sektördeki
          ihtiyaçlarınıza güvenilir çözümler sunmaktadır.
        </p>
        <br />
        <h3 className="font-bold">Yekpare Şaft Malzemeleri</h3>
        <p className="text-lg leading-relaxed">
          Gemi inşasında kritik bir öneme sahip olan yekpare şaft malzemeleri,
          gemilerin güç iletiminde merkezi bir rol oynar. Aşağıda yekpare
          şaftların sağladığı avantajlar ve kullanım alanları hakkında bilgi
          bulabilirsiniz:
        </p>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yüksek Mukavemet:</strong> Yekpare şaftlar, yüksek
            gerilmelere dayanabilen malzemelerden üretilmektedir. Bu özellik,
            geminin ağır yük taşıma kapasitesini artırır.
          </li>
          <li>
            <strong>Korozyon Direnci:</strong> Paslanmaz çelikten üretilen
            yekpare şaftlar, deniz suyunun neden olduğu korozyona karşı
            dirençlidir, bu da uzun ömürlü ve güvenilir performans sağlar.
          </li>
          <li>
            <strong>Düşük Ağırlık:</strong> İleri mühendislik teknikleri ile
            tasarlanan yekpare şaftlar, hafif yapıdadır, bu da geminin genel
            verimliliğini artırır ve enerji tüketimini azaltır.
          </li>
          <li>
            <strong>Dönme Performansı:</strong> Dönme sırasında dengesizliği en
            aza indirir ve titreşimleri kontrol eder. Bu, motor performansını
            artırarak, geminin genel verimliliğini olumlu etkiler.
          </li>
        </ul>
        <br />
        <h3 className="font-bold">Uygulama Alanları</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Ana Motorlar:</strong> Yekpare şaftlar, gemi motorlarında
            güç iletimini sağlamak için kritik bir bileşendir.
          </li>
          <li>
            <strong>Propeller Sistemleri:</strong> Pervanelerin doğru bir
            şekilde dönmesini sağlayarak, geminin manevra kabiliyetini artırır.
          </li>
          <li>
            <strong>Süspansiyon Sistemleri:</strong> Geminin stabilitesini ve
            performansını artırmak için kullanılır.
          </li>
        </ul>
        <br />
        <h3 className="font-bold">Güvenilirlik ve Hız</h3>
        <p className="text-lg leading-relaxed">
          Gemi inşa sektörünün gerektirdiği kalite ve güvenilirlik
          standartlarını karşılayan ürünlerimiz, projelerinizin aksamadan devam
          etmesi için hızlı bir şekilde temin edilebilir. Stoklarımız, acil
          ihtiyaçlarınızı karşılamak üzere düzenlenmiştir.
        </p>
        <p className="text-lg leading-relaxed">
          Gemi inşa projelerinize değer katmak için geniş paslanmaz çelik stok
          yelpazemizle hizmetinizdeyiz. Yekpare şaft çözümlerimizle,
          gemilerinizin güvenilirliğini ve performansını artırmak için bizimle
          iletişime geçin.
        </p>
      </div>
    </>
  );
}
