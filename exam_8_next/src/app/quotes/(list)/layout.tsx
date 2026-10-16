export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <div className="h-full antialiased">
      <div className="min-h-full flex flex-col">{children}</div>
    </div>
  );
}
