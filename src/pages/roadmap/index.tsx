import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./roadmap.module.css";
import circle from "../../assets/icons/Ondas.svg";
import star from "../../assets/icons/Misc_01.svg";
import Nav from "../../components/Nav";

const RoadMap = () => {
  const navigate = useNavigate();

  const items = [
      {
          title: "Treasure Vault",
          content: `We plan to save 15% of Magic Eden royalties bi-monthly for different plans which will be majorly influenced by
           members of the community and be of utmost benefit to them. Some of these 
          plans include; hosting events and IRL meetups with known people in the nft space so our
           community can share, learn and enjoy. There will also be raffle and auctions.`
    },
    {
        title: "Merchandise",
        content: `We want to encourage our community to feel one with the project even on non –online life aspects, that’s why we will be deciding with the community what merchandise they want and the most voted nfts will appear on those. Collab with big clothing brands are coming too.`
    },
    {
        title: "Charity",
        content: `The collection is about 10,000 affluent Jackals building their valley, the Silicon valley collectively, hence as a demonstration of that, we will be donating to various community building and environmental NGOs in various countries especially those in Africa.`
    },
    {
        title: "Part 2",
        content: `The Silicon Valley: The Punk Jackals will have a part 2 where we will go on adventure into the Silicon Valley, a metaverse and be amazed by just how well these 10,000 Jackals have built and are building their community.`
    },
    {
        title: "Metaverse takeover",
        content: `The nft space is ours! We own it! Let’s enjoy it together! Your nft will be your pfp online and means of ID in metaverse where you chill and vibe with other holders.`
    },
    {
        title: "More to come",
        content: `So much more utility will be incorporated into the collection as the community grows, more will be added to benefit the community as more advancements in nfts come along the way.`
    },
  ]
  return (
    <div className={`${styles.about}`}>
        <div className={`${styles.mobileNav}`}>
        <Nav />
         </div>
      <div className={`${styles.top}`}>
        <img src={circle} className={`${styles.circle}`} alt="" />
        <div className={`${styles.navCon}`}>
          <span className={`${styles.navItem}`} onClick={() => navigate(`/`)}>
            Home
          </span>
          <span
            className={`${styles.navItem}`}
            onClick={() => navigate(`/about`)}
          >
            About Us.
          </span>
          <span
            className={`${styles.navItem}`}
            onClick={() => navigate(`/meet-the-team`)}
          >
            Meet the Team
          </span>
        </div>
        <div className={`${styles.pageTitleCon}`}>
          <h3 className={`${styles.pageTitle}`}>Roadmap</h3>
        </div>
      </div>
      <div className={`${styles.hero}`}>
            <div className={`${styles.listItemCon}`}>
                    <img className={`${styles.listImg}`} src={star} alt="" />
                    <div className={`${styles.listItem}`}>
                        <small className={`${styles.listTitle}`}>
                            Social platform set-up: 
                        </small>
                        <small className={`${styles.listText}`}>
                        Punk Jackals will grow on Twitter and Discord. 
                        </small>
                    </div>
            </div>
            <div className={`${styles.paragraph}`}>
                    Building a strong and vibrant community is the first step to ensuring the log-term success of our 
                    project, having a powerful community that supports and backs the founding team is essential 
                    in making sure we achieve our set goals. We plan on hosting AMAs, organizing events and maintaining 
                    transparency in our efforts to establishing a strong bond between the founding team and our community.
            </div>
            {items.map((item: any, idx)=>(
                <div key={idx} className={`${styles.listItemCon}`}>
                <img className={`${styles.listImg}`} src={star} alt="" />
                <div className={`${styles.listItem}`}>
                    <small className={`${styles.listTitle}`}>
                        {item.title}: 
                    </small>
                    <small className={`${styles.listText}`}>
                        {item.content}
                    </small>
                </div>
        </div>
            ))}
      </div>
    </div>
  );
};

export default RoadMap;
