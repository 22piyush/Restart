
export const dynamicParams = false;
export const revalidate = 5;

export async function generateStaticParams() {
    
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/")

  const data = await res.json();

  return data.map((item: { id: number }) => ({
      id: item.id.toString(),
  }))

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