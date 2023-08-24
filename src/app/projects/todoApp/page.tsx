import "@/app/todo.css";
import { Metadata } from "next";
import TodoApp from "./todoApp";

export const metadata: Metadata = {
  title: "TODO APP",
};

export default function Page() {
  return <TodoApp />;
}
