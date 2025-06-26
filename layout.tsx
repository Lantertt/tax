export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head />
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}