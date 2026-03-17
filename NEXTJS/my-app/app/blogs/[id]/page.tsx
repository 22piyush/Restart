import { use } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default function BlogId({ params }: Props) {
  const { id } = use(params);

  return <div>Blog {id}</div>;
}