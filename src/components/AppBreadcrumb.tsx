import { HiHome } from "react-icons/hi";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface AppBreadcrumbProps {
  title: string;
  description: string;
  breadcrumbItems: BreadcrumbItem[];
}

const AppBreadcrumb: React.FC<AppBreadcrumbProps> = ({
  title,
  description,
  breadcrumbItems,
}) => {
  return (
    <div
      className="-mx-4 mb-16 h-[250px] w-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://static.wixstatic.com/media/954fc7_1f7a6f06e84a4ce5b18cf947e4273b68~mv2.jpg/v1/fill/w_1024,h_314,al_c,q_80,enc_auto/954fc7_1f7a6f06e84a4ce5b18cf947e4273b68~mv2.jpg)",
      }}
    >
      <div className="relative h-full">
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="container relative mx-auto flex h-full flex-col  justify-center">
          <br />
          <h1 className="px-4 text-4xl font-bold text-white">
            {title.toLocaleUpperCase()}
          </h1>
          <br />
          <div className="px-4 text-base text-gray-300">{description}</div>
          <br />
          <div className="px-4">
            <Breadcrumb>
              <BreadcrumbItem href="/" style={{ color: "red" }}>
                <span className="flex items-center text-gray-400">
                  <HiHome className="mr-2" /> NET Metal
                </span>
              </BreadcrumbItem>
              {breadcrumbItems.map((item, index) => (
                <BreadcrumbItem href={item.href} key={index}>
                  <span
                    className={
                      index === breadcrumbItems.length - 1
                        ? "text-gray-300"
                        : "text-gray-400"
                    }
                  >
                    {item.label}
                  </span>
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBreadcrumb;
