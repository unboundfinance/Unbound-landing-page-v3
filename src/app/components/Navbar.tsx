import Image from "next/image";
import UnboundLogo from "@/app/assets/images/svg/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between py-4">
      <Image src={UnboundLogo.src} width={32} height={32} alt="logo" />
      {/* <Link
        href={"https://app.unbound.finance/"}
        target="_blank"
        rel="noreferrer"
      >
        <button className="text-sm rounded-full bg-primary uppercase py-2 px-4">
          Launch App
        </button>
      </Link> */}
    </div>
  );
};

export default Navbar;
