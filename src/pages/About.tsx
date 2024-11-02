import AppBreadcrumb from "../components/AppBreadcrumb";

export function About() {
  return (
    <>
      <AppBreadcrumb
        title="Hakkımızda"
        description="Müşteri memnuniyetini önceliğimiz yaparak, yenilikçi ve sürdürülebilir malzeme tedarik ediyoruz. Amacımız, güvenilir bir iş ortağı olarak sektörde değer katmaktır."
        breadcrumbItems={[{ label: "Hakkımızda" }]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">Hakkımızda</h2>
        <p className="text-lg leading-relaxed">
          Paslanmaz çelik sektöründe öncü bir stokçu olarak, kaliteli ürün
          yelpazemizle müşterilerimize güvenilir çözümler sunmayı hedefliyoruz.
          Vizyonumuz, yenilikçi ve sürdürülebilir malzeme tedarikine
          odaklanarak, endüstriyel ihtiyaçlara uygun yüksek kaliteli paslanmaz
          çelik kalitelerini sunmaktır.
          <br />
          <br />
          Avrupa'daki en iyi üreticilerle ve stokçularla kurduğumuz güçlü
          ilişkiler, müşteri memnuniyetini her zaman önceliğimiz haline
          getiriyor. Farklı uygulamalara yönelik özelleşmiş paslanmaz çelik
          ürünleri sunarak, talepleri karşılamak için sürekli olarak
          çalışıyoruz.
          <br />
          <br />
          Müşterilerimizin ihtiyaçlarını anlamak ve onlara en uygun çözümleri
          sunmak için pazar araştırmaları yapıyor, yenilikçi ürünleri takip
          ediyor ve teknolojik gelişmeleri izliyoruz. Mükemmel hizmet
          anlayışımızla, zamanında ve doğru tedarik sağlamak için sürekli çaba
          gösteriyoruz.
          <br />
          <br />
          Amacımız, sadece bir stokçu olmak değil, aynı zamanda güvenilir bir iş
          ortağı olmaktır. Paslanmaz çelik sektöründeki bilgi birikimimiz ve
          deneyimimizle, müşterilerimize değer katmaya devam edeceğiz.
          Sektördeki yerimizi sağlamlaştırarak, sürdürülebilir büyümeyi ve
          yüksek standartları hedefliyoruz.
          <br />
          <br />
          Bizimle iş yapmayı tercih ettiğiniz için teşekkür ederiz!
        </p>
      </div>
    </>
  );
}
