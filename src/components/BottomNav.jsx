import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineQrcode,
  HiOutlineClock,
  HiOutlineUser,
} from 'react-icons/hi';

export default function BottomNav() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto flex max-w-[430px] items-center justify-center gap-6 bg-black px-5 py-4 shadow-2xl shadow-slate-950/20 ring-1 ring-white/10">
        <button className="flex flex-col items-center gap-1 text-xs text-slate-400 transition hover:text-white">
          <HiOutlineHome className="h-6 w-6" />
          <span>Home</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-xs text-slate-400 transition hover:text-white">
          <HiOutlineSearch className="h-6 w-6" />
          <span>Search</span>
        </button>

        <button className="relative -translate-y-3 inline-flex h-16 w-16 items-center justify-center rounded-full border-5 border-black-200 bg-white text-slate-950 shadow-2xl shadow-slate-950/20 transition hover:scale-105">
          <HiOutlineQrcode className="h-6 w-6" />
        </button>

        <button className="flex flex-col items-center gap-1 text-xs text-slate-400 transition hover:text-white">
          <HiOutlineClock className="h-6 w-6" />
          <span>History</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-xs text-slate-400 transition hover:text-white">
          <HiOutlineUser className="h-6 w-6" />
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
}
