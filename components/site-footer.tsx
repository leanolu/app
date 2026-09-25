import { getCopy, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  return (
    <footer className="border-t border-slate-200 bg-white/60 px-5 py-7 text-center text-sm text-slate-500">
      {text.footer}
    </footer>
  );
}
