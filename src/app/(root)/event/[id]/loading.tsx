import { Skeleton } from "@/components/ui/skeleton";

export default function EventDetailLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6 animate-pulse">
      {/* Gambar */}
      <Skeleton className="w-full h-64 md:h-96 rounded-xl" />

      {/* Title */}
      <Skeleton className="h-10 w-2/3 rounded-md" />

      {/* Info Bar (Tanggal, Lokasi, Kategori) */}
      <div className="flex flex-wrap gap-4">
        <Skeleton className="h-6 w-40 rounded-md" />
        <Skeleton className="h-6 w-32 rounded-md" />
        <Skeleton className="h-6 w-28 rounded-md" />
      </div>

      {/* Deskripsi */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-5/6 rounded-md" />
        <Skeleton className="h-4 w-2/3 rounded-md" />
      </div>

      {/* Harga & Tombol */}
      <div className="flex items-center justify-between pt-4 border-t mt-6">
        <div className="space-y-2">
          <Skeleton className="h-6 w-32 rounded-md" />
          <Skeleton className="h-4 w-24 rounded-md" />
        </div>
        <Skeleton className="h-10 w-32 rounded-md" />
      </div>
    </div>
  );
}
