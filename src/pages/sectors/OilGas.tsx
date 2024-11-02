import AppBreadcrumb from "../../components/AppBreadcrumb";

export function OilGas() {
  return (
    <>
      <AppBreadcrumb
        title="PETROL VE GAZ"
        description="Petrol ve gaz endüstrisi, zorlu çalışma koşulları ve yüksek güvenlik standartları gerektiren bir sektördür. Firmamız, bu alanda ideal paslanmaz çelik ve alaşımlı çelik ürünlerini stoklayarak, güvenilir çözümler sunmaktadır."
        breadcrumbItems={[
          { label: "Sektörler", href: "/sectors" },
          { label: "Petrol ve Gaz" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          Petrol ve Gaz Sektörü İçin Paslanmaz Çelik Stok Çözümlerimiz
        </h2>
        <p className="text-lg leading-relaxed">
          Petrol ve gaz endüstrisi, zorlu çalışma koşulları ve yüksek güvenlik
          standartları gerektiren bir sektördür. Bu alanda kullanılan
          malzemelerin, aşındırıcı ortamlara ve yüksek basınç ile sıcaklıklara
          dayanıklı olması kritik öneme sahiptir. Firmamız, petrol ve gaz
          uygulamaları için ideal paslanmaz çelik ve alaşımlı çelik ürünlerini
          stoklayarak, sektördeki ihtiyaçlarınıza güvenilir çözümler
          sunmaktadır.
        </p>
        <br />
        <h3 className="font-bold">Geniş Ürün Yelpazesi</h3>
        <p className="text-lg leading-relaxed">
          Sektörde ihtiyaç duyulan çeşitli paslanmaz çelik türleri, borular,
          bağlantı elemanları ve diğer bileşenler gibi geniş bir yelpazede
          stoklarımızda mevcuttur. Yüksek korozyon direncine sahip özel
          alaşımlarımız, deniz, kara ve hava koşullarında güvenle
          kullanılabilir.
        </p>
        <br />
        <h3 className="font-bold">Güvenilirlik ve Hız</h3>
        <p className="text-lg leading-relaxed">
          Petrol ve gaz sektörünün gerektirdiği dayanıklılık ve güvenilirlik
          standartlarını karşılayan ürünlerimiz, projelerinize kesintisiz bir
          destek sağlamak amacıyla hızlı bir şekilde temin edilebilir.
          Stoklarımız, acil ihtiyaç durumlarında anında çözüm sunacak şekilde
          düzenlenmiştir.
        </p>
        <br />
        <h3 className="font-bold">Uygulama Alanları</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Borulama Sistemleri:</strong> Yüksek basınç ve sıcaklığa
            dayanıklı paslanmaz çelik borular
          </li>
          <li>
            <strong>Kompresör ve Pompa Parçaları:</strong> Aşındırıcı ortamlara
            karşı dirençli ürünler
          </li>
          <li>
            <strong>Sondaj Ekipmanları:</strong> Dayanıklı ve hafif alaşım
            seçenekleri
          </li>
        </ul>
        <br />
        <p className="text-lg leading-relaxed">
          Petrol ve gaz endüstrisindeki projelerinize değer katmak için geniş
          stok yelpazemizle hizmetinizdeyiz. İhtiyacınız olan paslanmaz çelik
          ürünlerini hızlı ve güvenilir bir şekilde temin edebilmek için bizimle
          iletişime geçin.
        </p>
      </div>
    </>
  );
}
