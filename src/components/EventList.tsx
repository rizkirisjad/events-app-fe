import { customFetch } from "@/lib/axios";
import Spinner from "./Spinner";

export default async function EventList() {
  const res = await customFetch.get("/events");

  const events = res.data?.events;

  if (!events) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return <div>EventList</div>;
}
