import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  vertical?: boolean;
  onClick?: () => void;
};

export default function AuthLinks({ vertical = false, onClick }: Props) {
  return (
    <div
      className={`flex ${
        vertical
          ? "flex-col space-y-3 pt-6 border-t"
          : "items-center space-x-4 flex-shrink-0"
      }`}
    >
      <Link href="/login" onClick={onClick}>
        <Button
          variant="ghost"
          className={vertical ? "w-full justify-start" : ""}
        >
          Sign In
        </Button>
      </Link>
      <Link href="/register" onClick={onClick}>
        <Button className={vertical ? "w-full bg-indigo-700" : "bg-indigo-700"}>
          Get Started
        </Button>
      </Link>
    </div>
  );
}
