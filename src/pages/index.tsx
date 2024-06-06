import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import LandingPage from "@/components/LandingPage";
const MyLayout = dynamic(() => import("@/components/UiComponent/MyLayout"), {
  ssr: false,
});
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MyLayout>
      <LandingPage />
    </MyLayout>
  );
}
