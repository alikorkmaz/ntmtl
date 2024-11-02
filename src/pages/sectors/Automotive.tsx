import AppBreadcrumb from "../../components/AppBreadcrumb";

export function Automotive() {
  return (
    <>
      <AppBreadcrumb
        title="OTOMOTİV"
        description="Otomotiv sektörü, yüksek güvenlik, dayanıklılık ve performans gerektiren bir alandır. Firmamız, otomotiv uygulamaları için ideal paslanmaz çelik ve alaşımlı çelik ürünlerini sunarak, sektördeki ihtiyaçlarınıza güvenilir çözümler sunmaktadır."
        breadcrumbItems={[
          { label: "Sektörler", href: "/sectors" },
          { label: "Otomotiv" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          Otomotiv Sektörü İçin Paslanmaz Çelik Stok Çözümlerimiz
        </h2>
        <p className="text-lg leading-relaxed">
          Otomotiv sektörü, yüksek güvenlik, dayanıklılık ve performans
          gerektiren bir alandır. Araçların güvenilirliği ve uzun ömürlülüğü
          için kullanılan malzemelerin kalitesi son derece önemlidir. Firmamız,
          otomotiv uygulamaları için ideal paslanmaz çelik ve alaşımlı çelik
          ürünlerini stoklayarak, sektördeki ihtiyaçlarınıza güvenilir çözümler
          sunmaktadır.
        </p>
        <br />
        <h3 className="font-bold">Geniş Ürün Yelpazesi</h3>
        <p className="text-lg leading-relaxed">
          Otomotiv endüstrisinde ihtiyaç duyulan çeşitli paslanmaz çelik
          ürünleri, motor parçalarından şasi elemanlarına kadar geniş bir
          yelpazede stoklarımızda bulunmaktadır. Yüksek sıcaklık ve aşınmaya
          dayanıklı özel alaşımlarımız, araçların zorlu koşullarda performans
          göstermesini sağlar.
        </p>
        <br />
        <h3 className="font-bold">Güvenilirlik ve Hız</h3>
        <p className="text-lg leading-relaxed">
          Otomotiv sektörünün gerektirdiği kalite ve güvenilirlik standartlarını
          karşılayan ürünlerimiz, projelerinizin aksamadan devam etmesi için
          hızlı bir şekilde temin edilebilir. Stoklarımız, acil ihtiyaçlarınızı
          karşılamak üzere düzenlenmiştir.
        </p>
        <br />
        <h3 className="font-bold">Uygulama Alanları</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Motor Parçaları:</strong> Yüksek sıcaklıklara dayanıklı
            paslanmaz çelik seçenekleri
          </li>
          <li>
            <strong>Egzoz Sistemleri:</strong> Korozyona karşı dirençli
            malzemeler
          </li>
          <li>
            <strong>Şasi Elemanları:</strong> Aşınmaya dayanıklı ve hafif alaşım
            çözümleri
          </li>
        </ul>
        <br />
        <p className="text-lg leading-relaxed">
          Otomotiv projelerinize değer katmak için geniş stok yelpazemizle
          hizmetinizdeyiz. İhtiyacınız olan paslanmaz çelik ürünlerini hızlı ve
          güvenilir bir şekilde temin etmek için bizimle iletişime geçin.
        </p>
      </div>
    </>
  );
}
