import GithubEvents from "./GithubEvents";
import LastFmRecentTrack from "./RecentMusic";

export default function Nav() {
    return (
        <div className="flex flex-col justify-between w-[23rem]">
            <div className="flex gap-1 items-center">
                <img className="h-24" src="images/profile-icon.webp" alt="Profile Icon" />
                <div>
                    <ul className="flex flex-col gap-1">
                        <li className="text-base">John Rogee Turqueza</li>
                        <li className="flex gap-1">
                            <img className="h-4" src="/images/icons/pin.webp" alt="Location Icon"/>
                            <span className="text-xs text-grei text-nowrap">Metro Manila, Philippines</span>
                        </li>
                        <li className="flex gap-1 text-xs text-grei">
                            <span>🟢</span>
                            <span>Open for work!</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex gap-4 min-h-72">
                <ul className="flex flex-col justify-between h-full">
                    <li className="flex flex-col items-center">
                        <img src="/images/me.png" alt=""/>
                        <div className="w-1 h-16 border-dashed border-r-3 border-grei"></div>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src="/images/creations.png" alt=""/>
                        <div className="w-1 h-16 border-dashed border-r-3 border-grei"></div>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src="/images/journey.png" alt=""/>
                        <div className="w-1 h-16 border-dashed border-r-3 border-grei"></div>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src="/images/connect.png" alt=""/>
                    </li>
                </ul>
                
                <ul className="flex flex-col justify-between h-full">
                    <li>
                        <a className="hover:text-redd" href="#">ABOUT ME</a>
                    </li>
                    <li>
                        <a className="hover:text-redd" href="#">CREATIONS</a>
                    </li>
                    <li>
                        <a className="hover:text-redd" href="#">JOURNEY SO FAR</a>
                    </li>
                    <li>
                        <a className="hover:text-redd" href="#">LET'S CONNECT!</a>
                    </li>
                </ul>
            </div>

            {/* Button Part */}
            <div className="flex flex-col gap-2">
                {/* Email */}
                <div className="flex gap-2 items-center justify-center bg-grei/20 p-2 rounded w-full border-grei border">
                    <img src="/images/socials/email.webp" alt="Email Icon"/>
                    <p className="text-xs">jrogeet@gmail.com</p>
                </div>

                {/* Social Media */}
                <div className="flex justify-between">
                    <a className="flex p-1 gap-1 bg-darkblue/20 border-darkblue border-[0.3px] rounded items-center" href="https://www.linkedin.com/in/jrogeet/" target="_blank">
                        <img className="h-4" src="/images/socials/linkedin.webp" alt="Icon"/>
                        <p className="text-xs">LinkedIn</p>
                    </a>

                    <a className="flex p-1 gap-1 bg-coalblack/20 border-coalblack border-[0.3px] rounded items-center" href="https://github.com/jrogeet" target="_blank">
                        <img className="h-4" src="/images/socials/github.svg" alt="Icon"/>
                        <p className="text-xs">Github</p>
                    </a>

                    <a className="flex p-1 gap-1 bg-redd/20 border-redd border-[0.3px] rounded items-center" href="https://www.instagram.com/a.gee.i/" target="_blank">
                        <img className="h-4" src="/images/socials/instagram.webp" alt="Icon"/>
                        <p className="text-xs">Instagram</p>
                    </a>
                </div>

                
                <div className="flex flex-col gap-2">
                    <GithubEvents username="jrogeet"/>
                    <LastFmRecentTrack/>
                </div>
            </div>
        </div>
    ); 
}