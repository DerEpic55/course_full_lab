import DashboardNav from './DashboardNav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <DashboardNav />
      
      <main>{children}</main>
    </div>
  );
}