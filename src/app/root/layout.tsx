import StreamClientProvider from "@/components/providers/StreamClientProvider";

function Layout({ children }: { children: React.ReactNode }) {
  return <StreamClientProvider>{children}</StreamClientProvider>;
}
export default Layout;

// Forced change for feature - 2025-04-06 14:43:29.469591
