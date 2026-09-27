


export function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }];
}



interface BlogProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Blog({ params }: BlogProps) {

  const { id } = await params;

  return (
    <div>
      <h1>Blog {id}</h1>

      <p>This is Blog {id} page.</p>
    </div>
  );
  
}