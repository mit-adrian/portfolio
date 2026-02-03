import Image from "next/image";
import StatusDot from "./StatusDot";

type Status = "online" | "away" | "offline";

export default function Avatar({ status }: { status: Status }) {
  return (
    <div className="relative w-72 h-72 mx-auto">
      {/* IMAGE MASK */}
      <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/1.webp"
            alt="Adrian Karlo Siangco"
            fill
            priority
            className="object-cover fade"
            style={{ animationDelay: "0s" }}
          />
          <Image
            src="/2.webp"
            alt="Adrian Karlo Siangco"
            fill
            className="object-cover fade"
            style={{ animationDelay: "4s" }}
          />
          <Image
            src="/3.webp"
            alt="Adrian Karlo Siangco"
            fill
            className="object-cover fade"
            style={{ animationDelay: "8s" }}
          />
        </div>

        {/* Avatar border */}
        <div className="absolute inset-0 rounded-full border border-red-500-800 pointer-events-none p-8" />
      </div>

      <div className="absolute bottom-12 right-12 transform-none">
        <StatusDot status={status} />
      </div>
    </div>
  );
}
