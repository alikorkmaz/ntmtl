import AppBreadcrumb from "../../components/AppBreadcrumb";

export function Medical() {
  return (
    <>
      <AppBreadcrumb
        title="MEDİKAL"
        description="Medikal sektörü, hijyen ve güvenlik standartlarının son derece yüksek olduğu bir alandır. Firmamız, medikal uygulamalar için uygun paslanmaz çelik ve alaşımlı çelik ürünlerini stoklayarak, güvenilir çözümler sunmaktadır."
        breadcrumbItems={[
          { label: "Sektörler", href: "/sectors" },
          { label: "Medikal" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          Medikal Sektör İçin Paslanmaz Çelik Stok Çözümlerimiz
        </h2>
        <p className="text-lg leading-relaxed">
          Medikal sektörü, hijyen ve güvenlik standartlarının son derece yüksek
          olduğu bir alandır. Bu nedenle, kullanılan malzemelerin korozyona,
          aşınmaya ve yüksek sıcaklıklara karşı dayanıklı olması gerekmektedir.
          Firmamız, medikal uygulamalar için uygun paslanmaz çelik ve alaşımlı
          çelik ürünlerini stoklayarak, sağlık sektöründeki ihtiyaçlarınıza
          güvenilir çözümler sunmaktadır.
        </p>
        <br />
        <h3 className="font-bold">Geniş Ürün Yelpazesi</h3>
        <p className="text-lg leading-relaxed">
          Medikal endüstride ihtiyaç duyulan çeşitli paslanmaz çelik ürünleri,
          cerrahi aletlerden tıbbi cihazlara kadar geniş bir yelpazede
          stoklarımızda bulunmaktadır. Yüksek hijyen standartlarına uygun,
          korozyon direnci yüksek özel alaşımlarımız, güvenilir ve uzun ömürlü
          çözümler sunar.
        </p>
        <br />
        <h3 className="font-bold">Güvenilirlik ve Hız</h3>
        <p className="text-lg leading-relaxed">
          Medikal sektörün gerektirdiği kalite ve güvenilirlik standartlarını
          karşılayan ürünlerimiz, projelerinizin aksamadan devam etmesi için
          hızlı bir şekilde temin edilebilir. Stoklarımız, acil ihtiyaçlarınızı
          karşılamak üzere düzenlenmiştir.
        </p>
        <br />
        <h3 className="font-bold">Uygulama Alanları</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Cerrahi Aletler:</strong> Yüksek hijyen standartlarına uygun
            paslanmaz çelik malzemeler.
          </li>
          <li>
            <strong>Tıbbi Cihazlar:</strong> Dayanıklı ve hafif alaşım
            seçenekleri.
          </li>
          <li>
            <strong>İmplante Edilebilir Bileşenler:</strong> Uzun ömürlü ve
            güvenilir paslanmaz çelik parçalar.
          </li>
          <li>
            <strong>Laboratuvar Ekipmanları:</strong> Korozyona karşı dirençli
            ve sterilizasyona uygun malzemeler.
          </li>
        </ul>
        <br />
        <p className="text-lg leading-relaxed">
          Medikal projelerinize değer katmak için geniş stok yelpazemizle
          hizmetinizdeyiz. İhtiyacınız olan paslanmaz çelik ürünlerini hızlı ve
          güvenilir bir şekilde temin etmek için bizimle iletişime geçin.
        </p>
      </div>
    </>
  );
}
