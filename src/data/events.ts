import { EventData } from "./interface";

/**
 * Category to display in Home
 * Trending Events - 1
 * Latest Events - 2
 * Department Events - 3
 */

const EventDatas: EventData[] = [
    {
        title: 'Build your portfolio website',
        image: '/photos/events/devs/devs-portfolio-building.jpg',
        registrationLink: '#',
        date: '11 October 2024',
        avatar: '/photos/clubs/devs.jpg',
        by: "DEVS",
        description: `
        <p>
            Looking to attract exciting opportunities? 👀
        </p>
        <p>
            Join our Portfolio Building Webinar and unlock the secrets to creating an eye-catching portfolio that sets you apart from the competition! 💪 Discover tips to showcase your unique talents, tailor your work for any industry, and leave a lasting impression. Plus, walk away with a professional website portfolio ready to showcase your skills to the world! 🌐
        </P>
        <br/>
        <p>
        Don’t miss out on this chance to elevate your game—let’s make your portfolio shine! ✨️
        </p>
        `,
        id: 1,
        category: ['Tech', 'Academics', 'Placement', 'Workshops', 'Club', 'Devs'],
        dispaly: [1, 2]
    },
    {
        title: 'P2P X DevDays',
        image: '/photos/events/devs/devs-p2p-challenge.jpg',
        registrationLink: '#',
        date: '14 October 2024',
        avatar: '/photos/clubs/devs.jpg',
        by: "DEVS",
        description: `
<p>Get ready for DEV DAYS &ndash; a thrilling 20-day journey with DEVS REC, where you&rsquo;ll progress from &ldquo;What does this button do?&rdquo; to &ldquo;Check out what I created!&rdquo; &#55358;&#56595; There will be 4 exciting challenges designed to boost your skills, with a HUGE surprise waiting for the one that conquers them all! &#55356;&#57217; If you&rsquo;re eager to learn, create, and enjoy some fun, join us as the real excitement kicks off! &#55357;&#56490;&#55356;&#57341;</p>

<p>Scan the QR code or check out our bio for the website link.</p>
        `,
        id: 2,
        category: ['Club', 'Devs'],
        dispaly: [2]
    },
    {
        title: 'Curiosity Lab: Let\'s build AI together',
        image: '/photos/events/intellexa/intellexa-build-ai.jpg',
        registrationLink: '#',
        date: '8 January 2025',
        avatar: '/photos/clubs/intellexa.png',
        by: "Intellexa",
        description: `
<p>&#55357;&#56960; Ready to dive into the thrilling world of AI? &#55356;&#57119; Intellexa presents an unparalleled opportunity&#55358;&#56623; for curious minds to master AI with hands-on projects and real-world experience! &#55357;&#56613; Elevate your skills, lead groundbreaking innovations, and become a part of an AI revolution &#55358;&#56617;Don't miss out on this incredible journey&mdash;spaces are limited!</p>

<p>&#55357;&#56524;Click the link in our bio to secure your spot today! &#55357;&#56613;&#55357;&#56538;&#10024;</p>`,
        id: 3,
        category: ['Club', 'Intellexa'],
        dispaly: [1, 2]
    },
]

export {
    EventDatas
}