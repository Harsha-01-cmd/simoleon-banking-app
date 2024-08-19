import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth_asset">
        <div>
          <Image src="/icons/lines.png" height={1000} width={1000} alt="auth image"/>
        </div>
      </div>
    </main>
  );
}
