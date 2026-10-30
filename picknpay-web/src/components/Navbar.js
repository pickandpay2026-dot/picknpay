import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between gap-1 border-b border-white/20 bg-[#191923]/60 px-2 py-3 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] min-[375px]:gap-2 min-[375px]:px-3 sm:gap-4 sm:px-6 sm:py-4" >
      {/* Brand: stays compact without being squeezed */}
      <Link
        href="/"
        className="shrink-0 text-sm font-bold text-brand min-[375px]:text-base sm:text-xl"
      >
        PicknPay
      </Link>

      {/* Navigation: always visible, with responsive spacing */}
      <ul className="flex min-w-0 items-center justify-center gap-1 min-[375px]:gap-2 sm:gap-4 lg:gap-6">
        <li className="shrink">
          <Link
            href="/shops"
            className="whitespace-nowrap text-[10px] text-ink hover:text-brand min-[375px]:text-xs sm:text-sm"
          >
            Shops
          </Link>
        </li>

        <li className="shrink">
          <Link
            href="/services"
            className="whitespace-nowrap text-[10px] text-ink hover:text-brand min-[375px]:text-xs sm:text-sm"
          >
            Services
          </Link>
        </li>

        <li className="shrink">
          <Link
            href="/delivery"
            className="whitespace-nowrap text-[10px] text-ink hover:text-brand min-[375px]:text-xs sm:text-sm"
          >
            Delivery
          </Link>
        </li>
      </ul>

      {/* Sign-in button: compact on small screens */}
      <Link
        href="/login"
        className="shrink-0 whitespace-nowrap rounded-md bg-brand px-2 py-1.5 text-[10px] font-semibold text-white hover:opacity-90 min-[375px]:px-3 min-[375px]:text-xs sm:px-4 sm:py-2 sm:text-sm"
      >
        Sign in
      </Link>
    </nav>
  );
}
