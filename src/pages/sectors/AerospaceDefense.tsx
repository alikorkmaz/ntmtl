import AppBreadcrumb from "../../components/AppBreadcrumb";

export function AerospaceDefense() {
  return (
    <>
      <AppBreadcrumb
        title="HAVACILIK VE SAVUNMA"
        description="Havacılık ve savunma sanayii, dayanıklılık ve güvenlik açısından son derece yüksek standartlara sahip bir sektördür. Firmamız, bu sektörlerdeki ağır koşullara dayanabilen, yüksek mukavemetli ve korozyona dirençli paslanmaz çelik ürünleri güvenilir stok çözümleriyle sunmaktadır."
        breadcrumbItems={[
          { label: "Sektörler", href: "/sectors" },
          { label: "Havacılık ve Savunma" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          Havacılık ve Savunma Sanayii İçin Paslanmaz Çelik Stok Çözümlerimiz
        </h2>
        <p className="text-lg leading-relaxed">
          Havacılık ve savunma sanayii, son derece yüksek dayanıklılık, güvenlik
          ve hassasiyet standartları gerektiren zorlu alanlardır. Bu sektörlerde
          kullanılan malzemelerin ağır koşullara dayanabilmesi ve sürekli
          performans göstermesi esastır. Firmamız, havacılık ve savunma
          uygulamaları için uygun olan, yüksek mukavemetli, korozyona dirençli
          paslanmaz çelik ve alaşımlı çelik ürünlerinin güvenilir stok
          çözümlerini sunmaktadır.
        </p>
        <br/>
        <h3 className="font-bold">Geniş Ürün Yelpazesi</h3>
        <p className="text-lg leading-relaxed">
          Uçak motoru parçalarından iniş takımlarına, zırhlı araçlardan kritik
          savunma bileşenlerine kadar geniş bir uygulama alanına yönelik
          paslanmaz çelik ürünleri stoklarımızda bulunduruyoruz. Titanyum, nikel
          ve krom içeren özel alaşımlar, üstün korozyon direnci ve mukavemet
          sunarak sektördeki yüksek standartlara uygun çözümler sağlar. Inch ve
          metric bazda yuvarlak, lama ve özel ölçü kesimlerimizle stoktan hızlı
          tedarik sağlamaktayız. Özellikle AMS 5643 ve diğer havacılık
          standartlarında stoktan tedarik sağlayabilmekteyiz.
        </p>
        <br/>

        <h3 className="font-bold">Güvenilirlik ve Esneklik</h3>
        <p className="text-lg leading-relaxed">
          Havacılık ve savunma endüstrisinin ihtiyaç duyduğu kalite ve
          güvenilirlik beklentilerini karşılayan paslanmaz çelik ürünlerimiz,
          minimum tolerans ve maksimum hassasiyete sahip, sektörde kullanılan
          nitelikli malzemelerdir. Çeşitli ebat ve özelliklerdeki ürün
          yelpazemizle projelerinize esnek çözümler sağlıyoruz.
        </p>
        <br/>

        <h3 className="font-bold">Uygulama Alanları</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Uçak Motorları ve Yapısal Parçalar:</strong> Yüksek sıcaklık
            dayanımı gerektiren alaşımlar
          </li>
          <li>
            <strong>Zırhlı Araçlar:</strong> Balistik dayanıklılığı yüksek
            paslanmaz çelik türleri
          </li>
          <li>
            <strong>Denizaltı ve Gemi Sistemleri:</strong> Aşındırıcı deniz
            koşullarına dayanıklı ürün seçenekleri
          </li>
        </ul>
      </div>
    </>
  );
}
