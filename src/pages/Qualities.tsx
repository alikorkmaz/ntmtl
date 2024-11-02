import { Link } from "react-router-dom";
import AppBreadcrumb from "../components/AppBreadcrumb";

const qualityData = [
  {
    name: "1.4307 Paslanmaz Çelik (AISI 304L)",
    path: "/qualities/quality-1-4307",
    description:
      "1.4307 paslanmaz çelik, düşük karbon içeriği sayesinde üstün korozyon direncine sahip olan bir çelik türüdür. Kolay işlenebilirliği ve kaynaklanabilirliği ile endüstriyel uygulamalarda tercih edilmektedir.",
    tags: [
      "Gıda ve İçecek Endüstrisi",
      "Kimya ve İlaç Sektörü",
      "Mutfak Ekipmanları",
    ],
  },
  {
    name: "1.4305 Paslanmaz Çelik (AISI 303)",
    path: "/qualities/quality-1-4305",
    description:
      "1.4305 paslanmaz çelik, özellikle işlenebilirliğe öncelik verilen uygulamalar için geliştirilmiş, yüksek sülfür içeriğine sahip bir östenitik paslanmaz çelik türüdür. AISI 303 olarak da bilinir ve hassas parça üretiminde yüksek performans gösterir.",
    tags: ["Otomotiv", "Makine Bileşenleri", "Elektrik Ekipmanları"],
  },
  {
    name: "1.4404 Paslanmaz Çelik (AISI 316L)",
    path: "/qualities/quality-1-4404",
    description:
      "1.4404 paslanmaz çelik, özellikle yüksek korozyon direnci gerektiren uygulamalar için geliştirilmiş, düşük karbonlu bir östenitik paslanmaz çelik kalitesidir. İçeriğindeki molibden sayesinde asidik ve tuzlu ortamlara karşı dayanıklılığı artırır.",
    tags: [
      "Kimya ve Petrokimya",
      "Denizcilik ve Gemi İnşası",
      "Gıda ve İlaç Sanayi",
    ],
  },
  {
    name: "1.4541 Paslanmaz Çelik (AISI 321)",
    path: "/qualities/quality-1-4541",
    description:
      "1.4541 paslanmaz çelik, içeriğinde titanyum bulunan ve yüksek sıcaklıklarda kararlı kalan bir östenitik paslanmaz çelik türüdür. Yüksek sıcaklıklarda kaynak sonrası korozyona karşı dayanıklılığı ile öne çıkar.",
    tags: [
      "Petrokimya",
      "Havacılık",
      "Isıtma ve Enerji Sistemleri",
      "Gıda İşleme",
    ],
  },
  {
    name: "1.4571 Paslanmaz Çelik (AISI 316Ti)",
    path: "/qualities/quality-1-4571",
    description:
      "1.4571 paslanmaz çelik, molibden ve titanyum katkısıyla yüksek korozyon direncine ve dayanıklılığa sahip bir östenitik paslanmaz çeliktir. AISI 316Ti olarak da bilinir ve zorlu koşullarda uzun ömürlü performans gösterir.",
    tags: [
      "Kimya ve Petrokimya",
      "Denizcilik",
      "Enerji ve Isıtma Sistemleri",
      "Gıda ve İlaç Sanayi",
    ],
  },
  {
    name: "1.4841 Paslanmaz Çelik (AISI 314)",
    path: "/qualities/quality-1-4841",
    description:
      "1.4841 kalite paslanmaz çelik, yüksek sıcaklıklarda korozyon ve oksidasyona karşı mükemmel dayanıklılık sunan bir östenitik paslanmaz çelik türüdür. AISI 314 olarak da bilinir ve yüksek ısı direnci sayesinde termal uygulamalarda yaygın olarak kullanılır.",
    tags: ["Isıtma Sistemleri", "Petrokimya", "Cam ve Seramik Üretimi"],
  },
  {
    name: "1.4845 Paslanmaz Çelik (AISI 310S)",
    path: "/qualities/quality-1-4845",
    description:
      "1.4845 kalite paslanmaz çelik, yüksek ısı ve oksidasyon direncine sahip bir östenitik paslanmaz çelik türüdür. Sürekli yüksek sıcaklıklara maruz kalan ortamlarda uzun ömürlü ve güvenilir bir çözümdür.",
    tags: ["Petrokimya", "Isıtma", "Kimya Endüstrisi"],
  },
  {
    name: "1.4542 Paslanmaz Çelik (AISI 630 / 17-4PH)",
    path: "/qualities/quality-1-4542",
    description:
      "1.4542 kalite paslanmaz çelik, hem yüksek mukavemet hem de korozyon direnci gerektiren uygulamalar için geliştirilmiş, martenzitik ve östenitik özellikler gösteren bir çelik türüdür. AISI 630 olarak da bilinir ve yüksek mekanik dayanım gerektiren birçok endüstriyel uygulamada güvenle kullanılır.",
    tags: ["Havacılık ve Uzay", "Enerji", "Savunma Sanayi", "Gıda İşleme"],
  },
  {
    name: "15-5 PH Paslanmaz Çelik",
    path: "/qualities/quality-15-5-ph",
    description:
      "15-5 PH paslanmaz çelik, çökelme sertleşmesi özelliğine sahip martenzitik paslanmaz çelik türlerinden biridir. Yüksek mukavemet, korozyon direnci ve çatlamaya karşı direnç gerektiren uygulamalar için idealdir. 17-4 PH çeliğine benzer şekilde geliştirilmiş olan bu kalite, daha düşük seviyede mikro yapısal safsızlık içerdiği için üstün mekanik özellikler sunar.",
    tags: [
      "Havacılık ve Uzay Endüstrisi",
      "Petrokimya ve Enerji Sektörü",
      "Savunma Sanayi",
      "Tıp ve Gıda İşleme",
    ],
  },
  {
    name: "13-8 PH Paslanmaz Çelik",
    path: "/qualities/quality-13-8-ph",
    description:
      "13-8 PH paslanmaz çelik, yüksek mukavemet, korozyon direnci ve çatlama dayanımı ile öne çıkan, martenzitik yapıya sahip çökelme sertleşmeli bir paslanmaz çelik kalitesidir. Gelişmiş mekanik özellikleri ve yüksek yorulma dayanımı sayesinde zorlu endüstriyel uygulamalarda tercih edilir. Özellikle havacılık ve savunma sektörlerinde yüksek performans gerektiren uygulamalar için idealdir.",
    tags: [
      "Havacılık ve Uzay Endüstrisi",
      "Savunma Sanayi",
      "Petrokimya Sektörü",
      "Medikal ve Gıda Sanayi",
    ],
  },
  {
    name: "1.4462 Duplex Paslanmaz Çelik (AISI S31803 / S32205)",
    path: "/qualities/quality-1-4462",
    description:
      "1.4462 duplex paslanmaz çelik, yüksek mukavemet ve korozyon dayanımı sunan bir çift fazlı (östenitik + ferritik) paslanmaz çelik türüdür. İdeal dengeyi sağlayan çift faz yapısı sayesinde, özellikle kimyasal ve denizcilik sektörlerinde korozyon direnci ve mekanik dayanım gerektiren zorlu ortamlarda yaygın olarak kullanılır.",
    tags: [
      "Petrokimya ve Doğal Gaz Endüstrisi",
      "Kimya Sanayi",
      "Denizcilik ve Gemi İnşası",
      "Kağıt ve Selüloz Endüstrisi",
    ],
  },
  {
    name: "1.4410 Süper Duplex Paslanmaz Çelik (AISI S32750 / S32760)",
    path: "/qualities/quality-1-4410",
    description:
      "1.4410 süper duplex paslanmaz çelik, yüksek mekanik mukavemet ve üstün korozyon dayanımı sunan bir çift fazlı (östenitik + ferritik) paslanmaz çelik türüdür. Özellikle klorür kaynaklı çatlak korozyonu ve çukurlaşmaya karşı dirençli olan bu çelik, zorlu deniz suyu ortamları, kimyasal tesisler ve petrol-doğal gaz endüstrisi gibi aşırı koşullarda güvenilir bir performans sağlar.",
    tags: [
      "Petrol ve Doğal Gaz Endüstrisi",
      "Kimya ve Petrokimya Tesisleri",
      "Denizcilik ve Gemi İnşası",
      "Kağıt ve Selüloz Endüstrisi",
    ],
  },
  {
    name: "1.4501 Paslanmaz Çelik (AISI 254SMo)",
    path: "/qualities/quality-1-4501",
    description:
      "1.4501, yüksek molibden içeriğiyle bilinen östenitik paslanmaz çelik türüdür. Genellikle AISI 254SMo olarak adlandırılan bu kalite, üstün korozyon direnci ve mekanik özellikleri sayesinde denizcilik, kimya ve petrokimya endüstrilerinde zorlu ortamlara dayanıklılık gösterir. Özellikle, klorür içeren ortamlara karşı mükemmel bir direnç sunarak kritik uygulamalarda güvenilir bir seçenek haline gelir.",
    tags: [
      "Kimya ve Petrokimya Endüstrisi",
      "Denizcilik ve Gemi İnşası",
      "Gıda İşleme",
      "Enerji Üretimi",
    ],
  },
  {
    name: "1.4021 Paslanmaz Çelik (AISI 420)",
    path: "/qualities/quality-1-4021",
    description:
      "1.4021, ferritik paslanmaz çelik kategorisine giren bir kalite olup, genellikle AISI 420 olarak da adlandırılmaktadır. Orta seviyede karbon içeren bu paslanmaz çelik, yüksek sertlik ve ısıya dayanıklılık özellikleri ile dikkat çeker. 1.4021, kesici aletler, medikal ekipmanlar ve çeşitli endüstriyel uygulamalarda kullanılmak üzere tasarlanmıştır.",
    tags: [
      "Kesici Aletler",
      "Medikal Ekipmanlar",
      "Otomotiv ve Makine Sanayi",
      "Yapısal Uygulamalar",
    ],
  },
  {
    name: "1.4028 Paslanmaz Çelik (AISI 420F)",
    path: "/qualities/quality-1-4028",
    description:
      "1.4028, ferritik paslanmaz çelik grubuna ait bir kalite olup, genellikle AISI 420F olarak bilinir. Bu paslanmaz çelik türü, özellikle yüksek sertlik ve aşınma direnci gerektiren uygulamalarda kullanılır.",
    tags: [
      "Kesici Aletler",
      "Medikal Ekipmanlar",
      "Otomotiv ve Makine Sanayi",
      "Endüstriyel Uygulamalar",
    ],
  },
  {
    name: "1.4034 Paslanmaz Çelik (AISI 440B)",
    path: "/qualities/quality-1-4034",
    description:
      "1.4034, ferritik ve martensitik paslanmaz çelik arasında yer alan bir kalite olup, genellikle AISI 440B olarak adlandırılmaktadır. Orta düzeyde karbon içeriği ile dikkat çeken bu paslanmaz çelik, yüksek sertlik ve korozyon direnci ile bilinir. Kesici aletler, medikal ekipmanlar ve çeşitli endüstriyel uygulamalarda tercih edilmektedir.",
    tags: [
      "Kesici Aletler",
      "Medikal Ekipmanlar",
      "Otomotiv ve Makine Sanayi",
      "Yapısal Uygulamalar",
    ],
  },
  {
    name: "1.4057 Paslanmaz Çelik (AISI 431)",
    path: "/qualities/quality-1-4057",
    description:
      "1.4057, martensitik paslanmaz çelik grubuna ait bir kalite olup, AISI 431 olarak bilinir. Bu paslanmaz çelik, yüksek sertlik ve iyi korozyon direnci sunarak çeşitli endüstriyel uygulamalarda ve kesici aletlerde tercih edilir. Ayrıca, cam kalıp sanayisinde de yaygın olarak kullanılmaktadır. Isıl işlem ile sertleştirilebilen yapısı, önemli bir mekanik dayanım kazanmasını sağlar.",
    tags: [
      "Kesici Aletler",
      "Cam Kalıp Sanayi",
      "Medikal Ekipmanlar",
      "Otomotiv ve Makine Sanayi",
    ],
  },
];

export function Qualities() {
  return (
    <>
      <AppBreadcrumb
        title="KALİTELER"
        description="Her kalite için özel paslanmaz çelik çözümlerimiz ile hizmet veriyoruz."
        breadcrumbItems={[{ label: "Kaliteler" }]}
      />
      <h2 className="mb-6 text-3xl font-bold">Kaliteler</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {qualityData.map((quality, index) => (
          <Link
            to={quality.path}
            key={index}
            className="block rounded-lg border p-4 shadow-lg transition hover:bg-gray-100"
          >
            <h3 className="text-xl font-semibold">{quality.name}</h3>
            <p className="mt-2 text-gray-600">{quality.description}</p>
            <div className="mt-2">
              {quality.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
