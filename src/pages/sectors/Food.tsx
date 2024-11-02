import AppBreadcrumb from "../../components/AppBreadcrumb";

export function Food() {
  return (
    <>
      <AppBreadcrumb
        title="GIDA"
        description="Gıda sanayi, hijyen ve güvenlik standartlarının en üst seviyede tutulduğu bir sektördür. Firmamız, gıda uygulamaları için uygun paslanmaz çelik ve alaşımlı çelik ürünlerini stoklayarak, güvenilir çözümler sunmaktadır."
        breadcrumbItems={[
          { label: "Sektörler", href: "/sectors" },
          { label: "Gıda" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          Gıda ve İçecek Sektörü İçin Paslanmaz Çelik Stok Çözümlerimiz
        </h2>
        <p className="text-lg leading-relaxed">
          Gıda ve içecek sektörü, hijyen ve kalite standartlarına son derece
          önem veren bir sektördür. Bu alanda kullanılan malzemelerin korozyona,
          lekelere ve aşındırıcı maddelere karşı dayanıklı olması kritik öneme
          sahiptir. Firmamız, gıda ve içecek uygulamaları için uygun paslanmaz
          çelik ve alaşımlı çelik ürünlerini stoklayarak, sektördeki
          ihtiyaçlarınıza güvenilir çözümler sunmaktadır.
        </p>
        <br />
        <h3 className="font-bold">Geniş Ürün Yelpazesi</h3>
        <p className="text-lg leading-relaxed">
          Gıda ve içecek endüstrisinde ihtiyaç duyulan çeşitli paslanmaz çelik
          ürünleri, tanklar, borular ve diğer bileşenler gibi geniş bir
          yelpazede stoklarımızda bulunmaktadır. Yüksek hijyen standartlarına
          uygun özel alaşımlarımız, gıda güvenliğini sağlamada önemli bir rol
          oynamaktadır.
        </p>
        <br />
        <h3 className="font-bold">Güvenilirlik ve Hız</h3>
        <p className="text-lg leading-relaxed">
          Gıda ve içecek sektörünün gerektirdiği güvenilirlik ve hijyen
          standartlarını karşılayan ürünlerimiz, projelerinizin aksamadan devam
          etmesi için hızlı bir şekilde temin edilebilir. Stoklarımız, acil
          ihtiyaçlarınızı karşılamak üzere düzenlenmiştir.
        </p>
        <br />
        <h3 className="font-bold">Uygulama Alanları</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Üretim Ekipmanları:</strong> Hijyenik paslanmaz çelik
            borular ve tanklar
          </li>
          <li>
            <strong>İşleme Tesisleri:</strong> Aşındırıcı gıda maddelerine karşı
            dirençli ürünler
          </li>
          <li>
            <strong>Ambalajlama Ekipmanları:</strong> Yüksek kalitede ve
            dayanıklı malzeme seçenekleri
          </li>
        </ul>
        <br />
        <p className="text-lg leading-relaxed">
          Gıda ve içecek projelerinize değer katmak için geniş stok yelpazemizle
          hizmetinizdeyiz. İhtiyacınız olan paslanmaz çelik ürünlerini hızlı ve
          güvenilir bir şekilde temin etmek için bizimle iletişime geçin.
        </p>
      </div>
    </>
  );
}
