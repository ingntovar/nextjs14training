import SideNav from '@/app/ui/dashboard/sidenav';

/**
  * Just to remember: This layout is going to affect 
  * the inner pages we declare from here and out. 
  * That means not only dashboard will take this layout
  * But also the invoices page which belongs to the dashboard three.
  *
  */

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-80">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
  