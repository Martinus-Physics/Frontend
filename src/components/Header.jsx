import { HiOutlineDotsVertical } from 'react-icons/hi';

export default function Header() {
  return (
    <header className="w-full h-[60px] bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200 justify-center flex">
      <div className="w-full flex items-center justify-around gap-4">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
              alt="User avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-slate-500">Welcome back,</p>
            <h1 className="text-lg font-semibold text-slate-950">Sarah Jenkins</h1>
          </div>
        </div>

        <button className="inline-flex h-10 w-10 items-center justify-center rounded-3xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50">
          <HiOutlineDotsVertical className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
