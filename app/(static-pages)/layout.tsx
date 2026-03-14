import { ReactNode } from "react";

export default function StaticLayout({ children }: { children: ReactNode }) {
	return <div className="text-2xl">{children}</div>;
}
