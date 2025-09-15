import { Input } from "@/app/components/Input";

export default function Home() {
  return (
    <main>
      <div>Hello world!</div>
      <Input placeholder="text 1" />
      <Input placeholder="text 2" error />
    </main>
  );
}
