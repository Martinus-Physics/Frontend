
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto min-h-[calc(100vh-100px)] max-w-[430px] px-4 pb-28 pt-6">
        <Header />

        <div className="mt-6 flex flex-1 items-center justify-center">
          <div className="rounded-[2rem] bg-slate-900/95 p-6 text-center text-white shadow-2xl shadow-slate-950/20 ring-1 ring-white/10">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Bottom navigation demo</p>
            <h1 className="mt-4 text-2xl font-semibold">Mobile tab bar</h1>
            <p className="mt-3 text-sm text-slate-300">This page shows the completed nav bar component at the bottom.</p>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
