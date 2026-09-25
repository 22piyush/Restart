

export const metadata = {
  title: {
    default: "My App",
    template: "%s | My App",
  }
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <h1>Header</h1>
        <div>{children}</div>
        <h1>Footer</h1>
      </body>
    </html>
  );
}
