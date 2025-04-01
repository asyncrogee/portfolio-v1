import Hero from './Sections/Hero';
import Creations from './Sections/Creations';

export default function Content() {
    return (
        <div className="w-full h-full bg-offwhite rounded-b-xl shadow-inner shadow-black/25">
            <div className="w-full flex flex-col items-center gap-10">
                <Hero />
                <Creations />
            </div>
        </div>

    );
}