import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AuthButtons({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex items-center space-x-4">
      <Link href="/sign-in">
        <Button variant="link">{t("signIn")}</Button>
      </Link>
      <Link href="/sign-up">
        <Button>{t("signUp")}</Button>
      </Link>
    </div>
  );
}
