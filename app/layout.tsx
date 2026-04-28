import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "簿記マスター | 3級・2級",
  description: "スッキリわかる日商簿記3級・2級に沿って効率よく学べるアプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-50">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-bold text-blue-700 text-lg tracking-tight">
              簿記マスター
            </a>
            <nav className="flex gap-6 text-sm text-slate-600">
              <a href="/grade/3" className="hover:text-blue-600 transition-colors">3級</a>
              <a href="/grade/2" className="hover:text-blue-600 transition-colors">2級</a>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
