import gsap from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger , SplitText);
export default function Home() {
  return (
 <>
 <div className='flex-center h-[100vh]'>
 <h1 className="text-6xl text-indigo-300">Hey Gsap!</h1>
 </div>
 </>
  );
}
