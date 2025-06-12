export default function Creations() {
    return (
        <div className="flex flex-col gap-2 items-center">
            <h1 className="font-megren text-6xl text-coalblack">my creations</h1>

            {/* <div className="flex">
                <img src="/images/meme/difficulty.jpg" className="h-40"/>
                <img src="/images/meme/DANGER.jpg" className="h-40"/>
                <img src="/images/meme/TT.jpg" className="h-40"/>
                <img src="/images/meme/WIP.jpg" className="h-40"/>
            </div> */}
            <div className="h-[29.875rem] flex justify-center gap-2.5">
                {/* PREVIEW */}
                <div className="border border-coalblack h-full p-2.5">
                    <div className="w-[40rem] h-[20rem] border border-coalblack">
                        {/* preview */}
                    </div>

                    <div className="h-[6.25rem] p-2 flex gap-4">
                        <div className="h-full w-[15rem] border border-coalblack p-2 flex gap-1">
                            {/* TECH STACK */} 
                            <div className="h-fit w-3/12 p-1 border border-coalblack  rounded text-xs">Python</div>

                        </div>

                        <div className="w-[23.25rem]">
                            {/* DESCRIPTION */}
                            <p className="text-xs">Lorem ipsum dolor sit amet consectetur. Morbi adipiscing eu orci morbi rhoncus sem. Dolor praesent nunc eget faucibus porttitor ornare mattis. Elit urna id faucibus sociis. Amet metus eget sit orci posuere.</p>
                        </div>
                    </div>
                </div>

                {/* LIST */}
                <ul className="flex flex-col gap-2 h-full overflow-y-scroll">
                    <li className="border-2 border-redd p-1 text-right">
                        <p className="text-base ">Project # X</p>
                        <p className="text-xs text-grei">Short one sentence description of the project</p>
                    </li>

                    <li className="border-2 border-redd p-1 text-right">
                        <p className="text-base ">Project # X</p>
                        <p className="text-xs text-grei">Short one sentence description of the project</p>
                    </li>

                    <li className="border-2 border-redd p-1 text-right">
                        <p className="text-base ">Project # X</p>
                        <p className="text-xs text-grei">Short one sentence description of the project</p>
                    </li>

                    <li className="border-2 border-redd p-1 text-right">
                        <p className="text-base ">Project # X</p>
                        <p className="text-xs text-grei">Short one sentence description of the project</p>
                    </li>

                    <li className="border-2 border-redd p-1 text-right">
                        <p className="text-base ">Project # X</p>
                        <p className="text-xs text-grei">Short one sentence description of the project</p>
                    </li>

                    <li className="border-2 border-redd p-1 text-right">
                        <p className="text-base ">Project # X</p>
                        <p className="text-xs text-grei">Short one sentence description of the project</p>
                    </li>

                    <li className="border-2 border-redd p-1 text-right">
                        <p className="text-base ">Project # X</p>
                        <p className="text-xs text-grei">Short one sentence description of the project</p>
                    </li>

                    <li className="border-2 border-redd p-1 text-right">
                        <p className="text-base ">Project # X</p>
                        <p className="text-xs text-grei">Short one sentence description of the project</p>
                    </li>

                    <li className="border-2 border-redd p-1 text-right">
                        <p className="text-base ">Project # X</p>
                        <p className="text-xs text-grei">Short one sentence description of the project</p>
                    </li>

                    <li className="border-2 border-redd p-1 text-right">
                        <p className="text-base ">Project # X</p>
                        <p className="text-xs text-grei">Short one sentence description of the project</p>
                    </li>

                    <li className="border-2 border-redd p-1 text-right">
                        <p className="text-base ">Project # X</p>
                        <p className="text-xs text-grei">Short one sentence description of the project</p>
                    </li>
                </ul>
            </div>
        </div>


    );
}