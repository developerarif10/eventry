export default function EventSchemaScript({ event }) {
  const eventName = encodeURIComponent(event?.name);

  const formattedData = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: eventName,
    startDate: new Date(),
    endDate: new Date(),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    description: event?.details,
    location: {
      "@type": "Place",
      name: event?.location,
    },
    image: [event?.imageUrl],
    organizer: {
      "@type": "Organization",
      name: "lws",
      url: "https://learnwithsumit.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(formattedData),
        }}
      />
    </>
  );
}
