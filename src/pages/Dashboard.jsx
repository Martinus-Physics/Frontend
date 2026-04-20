
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import Overview from '../components/Overview';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <BottomNav />
      <Overview />
    </div>
  );
}
