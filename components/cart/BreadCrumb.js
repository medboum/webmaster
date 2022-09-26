import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";

export default function Breadcrumb() {
  return (
    <Breadcrumbs>
      <Link
        href="/cart"
        className="opacity-60 text-[16px] tracking-wide text-green-700 font-bold"
      >
        محتويات السلة
      </Link>
      <Link
        href="#"
        className="opacity-60 text-[16px] tracking-wide  font-bold"
      >
        المنتجات
      </Link>
      <Link
        href="/"
        className="opacity-60 text-[16px] tracking-wide  font-bold"
      >
        الرئيسية
      </Link>
    </Breadcrumbs>
  );
}
