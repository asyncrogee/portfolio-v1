export default function Hero() {
    return (
        
            <div className="flex flex-col items-center   max-w-[59.5rem] gap-4">
                <div className="h-44">
                    <img className="" src="images/MEET-ROGEE.svg" alt="MEET ROGEE text" />
                </div>

                <div className="flex w-full justify-between">
                    <div className="flex flex-col w-[32.75rem] gap-7">
                        <div className="flex flex-col gap-3 text-sm">
                            <p>a passionate creator who loves bringing <span className="text-darkblue">ideas</span> to life, whether through clever designs, engaging interfaces, or thoughtful solutions.</p>
                            <p>My journey is fueled by <span className="text-darkblue">curiosity</span>, <span className="text-darkblue">collaboration</span>, and a sprinkle of <span className="text-darkblue">fun</span>, as I aim to inspire and leave a spark of creativity wherever I go. </p>
                            <p>Let’s create something amazing together!</p>
                        </div>

                        <div className="border-2 border-dashed border-grei p-10">
                            <div className="border border-coalblack p-1">

                            </div>
                        </div>
                    </div>

                    <div className="">
                        <img className="h-[23rem] rounded-xl grayscale w-64 object-cover" src="images/portrait.jpg" />
                    </div>
                </div>

            </div>
    );
}