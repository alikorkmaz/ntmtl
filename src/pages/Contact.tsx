import { Card, Button, Label, TextInput, Textarea } from "flowbite-react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import AppBreadcrumb from "../components/AppBreadcrumb";

export function Contact() {
  return (
    <>
      <AppBreadcrumb
        title="İLETİŞİM"
        description="Bizimle iletişime geçerek ihtiyaçlarınız hakkında bilgi alabilir, çözüm önerilerimizi öğrenebilirsiniz. Ekibimiz, sorularınızı en kısa sürede yanıtlamak için burada."
        breadcrumbItems={[{ label: "İletişim" }]}
      />
      <div className="mx-auto max-w-4xl p-6">
  <h1 className="mb-6 text-center text-3xl font-bold">İletişim Bilgileri</h1>

  <div className="flex w-full flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
    {/* Sol Sütun - İletişim Bilgileri */}
    <div className="w-full lg:flex-1">
      <p>444 7 882</p>
      <p>+90 (262) 658 2178</p>
      <p>info@netmetal.net</p>
      <p>İstim Sanayi Sitesi, No: 270 Tuzla/İstanbul</p>
    </div>

    {/* Sağ Sütun - İletişim Formu */}
    <div className="w-full lg:flex-1">
      <Card>
        <h2 className="mb-4 text-xl font-semibold">İletişim Formu</h2>
        <p className="mb-4 text-gray-600">
          Mesajınız yetkililerimiz tarafından incelendikten sonra ilgili
          departmanlara ulaştırılacak ve en kısa sürede cevaplanacaktır.
        </p>

        <form className="grid gap-4">
          <div>
            <Label htmlFor="firstName" value="Ad" />
            <TextInput id="firstName" type="text" required />
          </div>

          <div>
            <Label htmlFor="lastName" value="Soyad" />
            <TextInput id="lastName" type="text" required />
          </div>

          <div>
            <Label htmlFor="company" value="Firma Adı" />
            <TextInput id="company" type="text" />
          </div>

          <div>
            <Label htmlFor="phone" value="GSM" />
            <TextInput id="phone" type="tel" />
          </div>

          <div>
            <Label htmlFor="email" value="E-posta" />
            <TextInput id="email" type="email" required />
          </div>

          <div>
            <Label htmlFor="message" value="Mesaj" />
            <Textarea id="message" rows={4} required />
          </div>

          <Button type="submit">Gönder</Button>
        </form>
      </Card>
    </div>
  </div>
</div>

    </>
  );
}
