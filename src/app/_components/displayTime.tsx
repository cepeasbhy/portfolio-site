"use client";
interface Props {
  epochTime: number;
}

export default function DisplayTime({ epochTime }: Props) {
  const date = new Date(epochTime * 1000);
  return <span>{date.toLocaleString()}</span>;
}
