import { useEffect, useState } from "react";

const GitHubUserEvents = ({ username }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/events/public`);
        const data = await response.json();

        // Filtering the latest 5 events
        const filteredEvents = data.slice(0, 1).map(event => {
          let eventDetails = {
            id: event.id,
            type: event.type,
            date: new Date(event.created_at).toLocaleDateString(),
            repo: event.repo.name,
            url: `https://github.com/${event.repo.name}`,
          };

          // Customizing event messages
          switch (event.type) {
            case "CreateEvent":
                eventDetails.message = `Created ${event.payload.ref_type}`;
                break;
            case "PushEvent":
                eventDetails.message = `Pushed to ${event.repo.name}`;
                break;
            case "PullRequestEvent":
                eventDetails.message = `Opened PR: ${event.payload.pull_request.title}`;
                break;
            case "WatchEvent":
                eventDetails.message = `Watching: ${event.repo.name}`;
                break;
            case "ForkEvent":
                eventDetails.message = `Forked: ${event.repo.name}`;
                break;
            default:
                eventDetails.message = `Event: ${event.type}`;
          }

          return eventDetails;
        });

        setEvents(filteredEvents);
      } catch (error) {
        console.error("Error fetching user events:", error);
      }
    };

    fetchUserEvents();
  }, [username]);

  return (
    <div className="flex flex-col items-center p-3 rounded-xl gap-1 bg-offwhite drop-shadow-sm">

      {events.length > 0 ? (
        events.map(event => (
          <div key={event.id} className="flex flex-col">
            <div className="flex justify-between">
              <h3 className="text-xs">Latest GitHub Activity</h3>
              <span className="text-xs">{event.date}</span>
            </div>

            <div className="flex gap-1">
              <img
                src="/images/socials/github.svg"
                alt="GitHub"
                className="h-14"
              />
              <div className="flex flex-col">
                <b className="text-sm">{event.message}</b>
                <br />
                <a href={event.url} target="_blank" rel="noopener noreferrer" className="text-xs text-grei">
                  {event.repo}
                </a>
              </div>
            </div>

          </div>
        ))
      ) : (
        <p class="text-sm">Loading latest events...</p>
      )}
    </div>
  );
};

export default GitHubUserEvents;
