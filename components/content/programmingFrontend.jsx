import PortfolioBox from "../portfolioBox"
import { classNames } from '/lib/utils-js/domProps'

export default function ProgrammingFrontend(props){
  const websites = [
    {title : "meddkit", link : "http://meddkit.com/", text: "", about : "Digital patient engagement start-up", image : "", },
    {title : "GitHub User Search", link : "https://github-search-nextjs.vercel.app/", text: "", about : "Search GitHub for users via the GitHub API", image : "", },
    {title : "Aviva Dermatology", link : "http://avivaderm.com/", text: "", about : "Dermatology practice in Houston, Texas", image : "", },
    {title : "Suburban Multi-Specialty", link : "https://suburbanmultispecialty.com/", text: "", about : "Multi-specialty healthcare practice", image : "", },
    {title : "Virtual Health Coach", link : "https://virtualhealth.coach/", text: "", about : "Wellness coach and nurse operating virtually", image : "", },
    {title : "Cornerstone Rural Health Center", link : "https://cornerstonerhc.com/", text: "", about : "Multi-location medical clinic serving rural Pennsylvania", image : "", },
    {title : "Everybody's Chiropractic", link : "https://everybodyschiropractic.com/", text: "", about : "Chiropractor serving greater Philadelphia", image : "", },
    {title : "Superior Counseling", link : "https://superiorcounseling.care/", text: "", about : "Multi-location behavioral health agency in Louisiana", image : "", },
    {title : "ClaimsPro", link : "https://claimspronet.meddkit.site/", text: "", about : "Revenue cycle management company", image : "", },
  ]
  return(
    <div id="portfolioWebsites" className={classNames(props.className, "flex flex-row flex-wrap mt-4 gap-4 justify-between")}>
      {websites.map(site => (
        <PortfolioBox key={site.title} className="w-full lg:w-[49%] xl:w-[32%]" {...site} />
      ))}
    </div>
  )
}