import Link from "next/link";
import { Calendar } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center flex-shrink-0">
      <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" />
      <span className="ml-2 text-lg sm:text-xl font-bold text-indigo-900">
        Eventin
      </span>
    </Link>
  );
}
