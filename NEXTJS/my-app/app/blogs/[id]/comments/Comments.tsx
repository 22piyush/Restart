import { use } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

function Comments({params}:Props) {
    const { id } = use(params);

  return <div>Comments {id}</div>;
}

export default Comments;