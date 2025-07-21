import gsap from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger , SplitText);
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Cocktails from '@/components/Cocktails';
export default function Home() {
  return (
<>
<Navbar />
<Hero/>
<Cocktails/>
</>
  );
}
