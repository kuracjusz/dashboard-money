import { LayoutProps } from '@/.next/types/app/layout';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow overflow-y-auto p-6 md:p-12">{children}</div>
    </div>
  );
}
