import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Form from "next/form";

type Props = {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function SearchForm({ query, onChange, onSubmit }: Props) {
  return (
    <Form onSubmit={onSubmit} className="relative w-full" action={"/search"}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          name="q" // query
          placeholder="Search events..."
          value={query}
          onChange={onChange}
          className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </Form>
  );
}
