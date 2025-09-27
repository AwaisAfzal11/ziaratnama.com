import { useParams } from "react-router-dom";

export default function Workshops() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold">Workshop: {id}</h1>
      {/* Render based on ID */}
    </div>
  );
}
