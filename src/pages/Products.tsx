import AppBreadcrumb from "../components/AppBreadcrumb";
import AppTable from "../components/AppTable";

export function Products() {
  const sections = [
    {
      title: "Yuvarlak Kesit",
      data: [
        {
          title: "Soğuk Çekilmiş Yuvarlak",
          rows: [
            { feature: "Çap", metric: "3mm - 32mm", inch: '0.197" - 1.250"' },
          ],
          note: "h8 /h9 / h10 – EN 10278 / ASTM A484",
        },
        {
          title: "Taşlanmış Yuvarlak",
          rows: [
            { feature: "Çap", metric: "3mm - 200mm", inch: '0.197" - 8.000"' },
          ],
          note: "h8 /h9 / h10 – EN 10278 / ASTM A484",
        },
        {
          title: "Sıcak Haddelenmiş Yuvarlak",
          rows: [
            { feature: "Çap", metric: "20mm – 150mm", inch: '0.625" - 7.000"' },
          ],
          note: "k12 /k13 – EN 10060 / ASTM A484 hot-rolled round",
        },
        {
          title: "Dövme Yuvarlak",
          rows: [
            {
              feature: "Çap",
              metric: "150mm – 750mm",
              inch: '7.000" - 23.000"',
            },
          ],
          note: "ASTM A484 - EN20286 (k12 - k13) - EN10031",
        },
      ],
      additionalNote:
        "*** Stoğumuzda bulunan yuvarlak çubuklardan 20mm – 500mm arası çubuklarda min. 20mm boy olmak üzere istenilen adette ve hızlı teslimatla çözüm sunabilmekteyiz.",
    },
    {
      title: "Lama Kesit",
      data: [
        {
          title: "Soğuk Çekilmiş Lama",
          rows: [
            {
              feature: "Genişlik",
              metric: "12 mm - 200 mm",
              inch: '1/2" - 8"',
            },
            { feature: "Kalınlık", metric: "3 mm - 80 mm", inch: '1/8" - 3"' },
            {
              feature: "Uzunluk",
              metric: "3 m - 3,2 m",
              inch: "11 ft - 14 ft",
            },
          ],
          note: "EN 10278/Tolerance h11/ASTM A-484",
        },
        {
          title: "Sıcak Haddelenmiş Lama",
          rows: [
            {
              feature: "Genişlik",
              metric: "12 mm - 200 mm",
              inch: '1/2" - 8"',
            },
            { feature: "Kalınlık", metric: "3 mm - 80 mm", inch: '1/8" - 3"' },
            {
              feature: "Uzunluk",
              metric: "4 m – 6,5 m",
              inch: "11 ft - 14 ft",
            },
          ],
          note: "EN 10058/ASTM A-484",
        },
        {
          title: "Dövme Lama",
          rows: [
            { feature: "Genişlik", metric: "150mm – 750mm", inch: "" },
            { feature: "Kalınlık", metric: "150mm – 750mm", inch: "" },
            { feature: "Uzunluk", metric: "4 m – 6,5 m", inch: "" },
          ],
          note: "EN 10204/3.1 sertifikası ile birlikte - %100 Avrupa menşeili",
        },
        {
          title: "Özel Ölçü Kesim",
          rows: [
            { feature: "Genişlik", metric: "10mm – 500mm", inch: "" },
            { feature: "Kalınlık", metric: "10mm – 500mm", inch: "" },
            { feature: "Uzunluk", metric: "50mm – 5 m", inch: "" },
          ],
          note: "EN 10204/3.1 sertifikalı %100 Avrupa menşeili bloklardan istenilen ölçüde aynı gün teslim ile özel kesim kabiliyetine sahibiz.",
        },
      ],
    },
    {
      title: "Altıköşe Kesit",
      data: [
        {
          title: "Soğuk Çekilmiş Altıköşe",
          rows: [
            { feature: "Ölçü", metric: "8 mm - 100 mm", inch: '3/8" - 4"' },
            {
              feature: "Uzunluk",
              metric: "3 m - 3,2 m",
              inch: "11 ft - 14 ft",
            },
          ],
          note: "EN 10278/Tolerance h11/ASTM A-484",
        },
      ],
    },
    {
      title: "Kare Kesit",
      data: [
        {
          title: "Soğuk Çekilmiş Kare",
          rows: [
            { feature: "Ölçü", metric: "8 mm - 100 mm", inch: '3/8" - 4"' },
            {
              feature: "Uzunluk",
              metric: "3 m - 3,2 m",
              inch: "11 ft - 14 ft",
            },
          ],
          note: "EN 10278/Tolerance h11/ASTM A-484",
        },
        {
          title: "Sıcak Haddelenmiş Kare",
          rows: [
            { feature: "Ölçü", metric: "10 mm - 100 mm", inch: '1/2" - 4"' },
            {
              feature: "Uzunluk",
              metric: "4 m – 6,5 m",
              inch: "11 ft - 14 ft",
            },
          ],
          note: "EN 10059/ASTM A-484",
        },
        {
          title: "Dövme Kare",
          rows: [
            { feature: "Ölçü", metric: "150mm – 750mm", inch: "" },
            { feature: "Uzunluk", metric: "4 m – 6,5 m", inch: "" },
          ],
          note: "EN 10204/3.1 sertifikası ile birlikte - %100 Avrupa menşeili",
        },
      ],
      additionalNote:
        "*** Stoğumuzda bulunan EN 10204/3.1 sertifikalı %100 Avrupa menşeili bloklardan istenilen ölçüde aynı gün teslim ile özel kesim kabiliyetine sahibiz.",
    },
  ];

  return (
    <>
      <AppBreadcrumb
        title="Ürünler"
        description="Geniş ürün yelpazemiz ile yüksek kaliteli malzemeleri uygun fiyatlarla sunuyoruz. İhtiyaçlarınıza özel çözümlerle güvenilir ve sürdürülebilir tedarik anlayışını benimsiyoruz."
        breadcrumbItems={[
          { label: "Ürünler" },
        ]}
      />
      <div>
        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h1 className="mb-4 text-2xl font-bold">{section.title}</h1>
            {section.data.map((item, itemIndex) => (
              <AppTable
                key={itemIndex}
                title={item.title}
                rows={item.rows}
                note={item.note}
              />
            ))}
            {section.additionalNote && (
              <p className="mt-2 text-sm">
                {section.additionalNote}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
