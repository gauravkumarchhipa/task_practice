import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
const MyLayout = dynamic(() => import('@/components/UiComponent/MyLayout'), { ssr: false });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MyLayout>
      <div>Hello</div>
    </MyLayout>
  );
}
