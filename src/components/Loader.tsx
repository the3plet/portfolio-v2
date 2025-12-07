import { Spinner } from "./ui/spinner";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
      <Spinner/>
    </div>
  );
}
