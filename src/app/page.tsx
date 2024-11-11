import AddTodo from "@/components/AddTodo";
import Fruits from "@/components/Fruits";
import ListTodo from "@/components/ListTodo";
import RecycleBin from "@/components/RecycleBin";

export default function Home() {
  return (
    <div>
      <div className="grid mt-10 place-items-center grid-cols-3">
        <AddTodo />
        <ListTodo />
        <RecycleBin />
      </div>
      <div>
        <Fruits />
      </div>
    </div>
  );
}
