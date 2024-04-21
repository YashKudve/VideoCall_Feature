import React, { useState, useEffect } from "react";

const M1 = () => {
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    // Function to fetch recommendation from Spotify API
    const fetchRecommendation = async () => {
      try {
        // Replace 'YOUR_ACCESS_TOKEN' with your actual access token
        const accessToken =
          "BQChtIjzKgsnPK6Gmg3rnFteRAIlFWs15tyhegDWf9CXjKcdKH9jI1DmyVMzAyjlaobbuhgg0EV5_ez1xrRvtfjEQEbTGUQNhWZIS12Q8nuc3r_C0YVl-iaSAflj_m4xCDqZLUzRNecRNHZHkmsB3xBJvR5FXbDpI086E_IR9w";

        // Fetch a list of soothing tracks using Spotify API
        const response = await fetch(
          "https://api.spotify.com/v1/search?q=soothing&type=track&limit=10",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const data = await response.json();

        // Extract the first track from the response
        if (data.tracks.items.length > 0) {
          const selectedRecommendation =
            data.tracks.items[0].external_urls.spotify;
          setRecommendation(selectedRecommendation);
        } else {
          console.log("No soothing tracks found.");
        }
      } catch (error) {
        console.error("Error fetching recommendation:", error);
      }
    };

    fetchRecommendation();
  }, []);

  return (
    <div>
      <h2>Soothing Music Recommendation</h2>
      {recommendation ? (
        <div>
          <p>Here's a soothing music track for you:</p>
          <iframe
            src={recommendation}
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default M1;
