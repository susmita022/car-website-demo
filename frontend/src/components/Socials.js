import React, { useState } from "react";
import "./Socials.css";
import TwitterCard from "./TwitterCard";
import YoutubeCard from "./YoutubeCard";

const Social = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="card-carousel">
      <h1>SUZUKI ON SOCIAL</h1>
      <div className="tabs">
        <button
          className={activeTab === "All" ? "active" : ""}
          onClick={() => handleTabClick("All")}
          id="opt-btn"
        >
          All
        </button>
        <button
          className={activeTab === "Twitter" ? "active" : ""}
          onClick={() => handleTabClick("Twitter")}
          id="opt-btn"
        >
          Twitter
        </button>
        <button
          className={activeTab === "Facebook" ? "active" : ""}
          onClick={() => handleTabClick("Facebook")}
          id="opt-btn"
        >
          Facebook
        </button>
        <button
          className={activeTab === "Youtube" ? "active" : ""}
          onClick={() => handleTabClick("Youtube")}
          id="opt-btn"
        >
          Youtube
        </button>
      </div>
      <div className="cards">
        {/* Render different cards based on activeTab */}
        {activeTab === "All" && (
          <>
            {
              <div className="card-social-container">
                <div className="card-social-group">
                  <div className="card-social-wrapper">
                    <ul className="cards__item">
                      <TwitterCard
                        src="images/twitter.png"
                        heading="The All-New XL6 "
                        href="https://twitter.com/NexaExperience/status/1531191231971221505?t=9OVIZWzUadSF-2orQunhbA&s=19"
                        hashtag="@NexaExperience"
                        hashtag2="#TimeToIndulge #NexaExperience #NEXA #CreateInspire"
                        content="Find yourself enveloped in indulgence with Ventilated Seats, designed to keep you cool and comfortable, no matter what. 
                        The #AllNewXL6 is as indulgent as it gets. It’s time to indulge."
                      />

                      <TwitterCard
                        src="images/facebook (2).png"
                        heading="The All-New XL6"
                        hashtag="@NexaExperience"
                        content="Indulgent #ContestAlert! It is good to pause for some self indulgence. Play the Time to Indulge Filter game for a chance to win some indulgent prizes! - Find the Time to Indulge filter by simply searching
                         for ‘NEXA’ or ‘TIME TO INDULGE’ on Instagram - Save the filter and indulge away!"
                      />
                      <YoutubeCard
                        src="images/youtube.png"
                        link="images/yt2.png"
                        heading="S-Cross Refined Living"
                        hashtag="@NexaExperience"
                        content="Living out of an SUV. Sounds crazy right? But that's what Kamiya Jani did on her journey to self discovery with her S-Cross! Stay tuned for more"
                      />
                    </ul>
                  </div>
                </div>
              </div>
            }
          </>
        )}
        {activeTab === "Twitter" && (
          <>
            {
              <div className="card-social-container">
                <div className="card-social-group">
                  <div className="card-social-wrapper">
                    <ul className="cards__item">
                      <TwitterCard
                        src="images/twitter.png"
                        heading="The All-New XL6 "
                        href="https://twitter.com/NexaExperience/status/1531191231971221505?t=9OVIZWzUadSF-2orQunhbA&s=19"
                        hashtag="@NexaExperience"
                        hashtag2="#TimeToIndulge #NexaExperience #NEXA #CreateInspire"
                        content="Find yourself enveloped in indulgence with Ventilated Seats, designed to keep you cool and comfortable, no matter what. 
                        The #AllNewXL6 is as indulgent as it gets. It’s time to indulge."
                      />
                      <TwitterCard
                        src="images/twitter.png"
                        heading="Innovation"
                        href="https://twitter.com/NexaExperience/status/1773607451062849762"
                        hashtag="@NexaExperience"
                        hashtag2="#TimeToIndulge #NEXA #NEXAExperience #CreateInspire "
                        content="Innovation meets engineering: Maruti Suzuki's Strong Hybrid Tech combines internal combustion with an electric motor for over 1200km of range and the option to drive in electric only mode."
                      />
                      <TwitterCard
                        src="images/twitter.png"
                        heading="Maruti Suzuki Jimny"
                        href="https://twitter.com/NexaExperience/status/1763547685032784366"
                        hashtag="@NexaExperience"
                        hashtag2="#NeverTurnBack #NEXA #MarutiSuzukiJimny #Jimny4x4 #NEXAExperience #CreateInspire"
                        content="No matter the challenge you're up against. Pause. Breathe. And then, just Jimny.
Tell us your weekend Jimny journey plans in the comments! "
                      />
                    </ul>
                  </div>
                </div>
              </div>
            }
          </>
        )}
        {activeTab === "Facebook" && (
          <>
            {
              <div className="card-social-container">
                <div className="card-social-group">
                  <div className="card-social-wrapper">
                    <ul className="cards__item">
                      <TwitterCard
                        src="images/facebook (2).png"
                        href="https://www.facebook.com/nexaexperience/videos/425950512709363/"
                        heading="The All-New XL6"
                        hashtag="@NexaExperience"
                        content="Indulgent #ContestAlert! It is good to pause for some self indulgence. Play the Time to Indulge Filter game for a chance to win some indulgent prizes! - Find the Time to Indulge filter by simply searching
                         for ‘NEXA’ or ‘TIME TO INDULGE’ on Instagram - Save the filter and indulge away!"
                      />
                      <TwitterCard
                        src="images/facebook (2).png"
                        heading="Ignis Compact Urban SUV"
                        hashtag="@NexaExperience"
                        href="https://www.facebook.com/nexaexperience/videos/725776318623033/"
                        content="Looking for a cool place to hang out with your 5 friends in the city? Look no further. 
                        The Ignis with ample space that seats 5 people comfortably is the coolest place to hangout with your friends."
                      />
                      <TwitterCard
                        src="images/facebook (2).png"
                        heading="The All-New XL6"
                        href="https://www.facebook.com/nexaexperience/videos/696381948310146/"
                        hashtag="@NexaExperience"
                        hashtag2="@NexaExperience"
                        content="E-book your NEXA car today. Not only will you be joining the world of NEXA, but you’ll get 4000 points
                         that will help you personalise your new car through accessories."
                      />
                    </ul>
                  </div>
                </div>
              </div>
            }
          </>
        )}
        {activeTab === "Youtube" && (
          <>
            {
              <div className="card-social-container">
                <div className="card-social-group">
                  <div className="card-social-wrapper">
                    <ul className="cards__item">
                      <YoutubeCard
                        src="images/youtube.png"
                        link="images/yt.png"
                        href="https://www.youtube.com/embed/CwVxmHv-VTQ"
                        heading="S-Cross Refined Living | Breathe"
                        hashtag="@NexaExperience"
                        content="Beautiful mountains & chilly weather. The perfect combination to rejuvenate yourself. Kamiya Jani took her S-Cross to the majestic mountains of Uttarakhand on a journey of self-discovery!"
                      />
                      <YoutubeCard
                        src="images/youtube.png"
                        link="images/yt2.png"
                        href="https://www.youtube.com/embed/vfjvISvB_gc"
                        heading=" Refined Living with S-Cross | Breathe"
                        hashtag="@NexaExperience"
                        content="Living out of an SUV. Sounds crazy right? But that's what Kamiya Jani did on her journey to self discovery with her S-Cross! Stay tuned for more"
                      />
                      <YoutubeCard
                        src="images/youtube.png"
                        link="images/yt3.png"
                        href="https://www.youtube.com/embed/ZZY12dV29S8"
                        heading="NEXA X LFW - What’s Your Style Statement?"
                        hashtag="@NexaExperience"
                        content="Fashion can truly capture your individuality. 
                        What’s your style statement? Hear from our guests as they tell us about their unique style statement."
                      />
                    </ul>
                  </div>
                </div>
              </div>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default Social;
