import { Link } from "react-router-dom";
import AppBreadcrumb from "../components/AppBreadcrumb";

const sectorData = [
  {
    name: "Havacılık ve Savunma",
    path: "/sectors/aerospace-defense",
  },
  {
    name: "Petrol ve Gaz",
    path: "/sectors/oil-gas",
  },
  {
    name: "Enerji",
    path: "/sectors/energy",
  },
  {
    name: "Otomotiv",
    path: "/sectors/automotive",
  },
  {
    name: "Tıbbi",
    path: "/sectors/medical",
  },
  {
    name: "Gıda",
    path: "/sectors/food",
  },
  {
    name: "Denizcilik ve İnşaat",
    path: "/sectors/marine-construction",
  },
];

export function Sectors() {
  return (
    <>
      <AppBreadcrumb
        title="SEKTÖRLER"
        description="Farklı sektörlerin zorlu ihtiyaçlarına uygun, dayanıklı ve yüksek kaliteli paslanmaz çelik çözümlerimizle hizmet veriyoruz. Her sektörün gerektirdiği standartlara uygun özel stok çözümlerimiz sayesinde, projelerinizin sorunsuz ilerlemesini sağlıyor, güvenilir bir iş ortağı olarak yanınızda yer alıyoruz."
        breadcrumbItems={[{ label: "Sektörler" }]}
      />
      <h2 className="mb-6 text-3xl font-bold">Sektörler</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sectorData.map((sector, index) => (
          <Link
            to={sector.path}
            key={index}
            className="block rounded-lg border p-4 shadow-lg transition hover:bg-gray-100"
          >
            <h3 className="text-xl font-semibold">{sector.name}</h3>
            <p className="mt-2 text-gray-600">
              {sector.name} için özel paslanmaz çelik çözümlerimiz hakkında daha fazla bilgi al.
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
