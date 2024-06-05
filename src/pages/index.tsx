import { Inter } from "next/font/google";
import MyLayout from "@/components/UiComponent/MyLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MyLayout>
      <div>Hellooo</div>
    </MyLayout>
  );
}
