import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { links } from "../../../constants/links";

export default function WhatsAppButton() {
  return (
    <Link
      href={links.whatsapp} className="fixed top-1/2 right-1 -translate-y-1/2 z-50">
      <div className="bg-[#14bb2a] rounded-full p-3 shadow-lg transition-transform hover:scale-110 border border-[#FF4420]/20">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
    </Link>
  );
}
