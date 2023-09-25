import { Metadata } from "next";
import TodoApp from "./todoApp";
import "../../_styles/todo.css";

export const metadata: Metadata = {
  title: "TODO APP",
};

export default function Page() {
  return <TodoApp />;
}
