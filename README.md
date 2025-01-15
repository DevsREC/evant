# Ev@nt - College Event Hub 🎯

<div align="center">
  <img src="public/photos/clubs/devs.png" alt="DEVS Logo" width="200"/>
  <p><em>A quality product from DEVS</em></p>
</div>

Ev@nt is a modern, centralized platform built with Next.js that seamlessly connects students with college events. From club activities to department initiatives, all events are easily accessible in one elegant interface.

## ✨ Features

### Core Functionality
- **Centralized Dashboard**: Access all college events in a clean, intuitive interface
- **Smart Categorization**: Filter events by type (Tech, Academic, Cultural, etc.)
- **Real-time Updates**: Stay informed about the latest campus activities
- **Club Integration**: Direct links to organizers' social media and registration pages

### Key Sections
- **Event Calendar**: Comprehensive view of upcoming events
- **Club Activities**: Dedicated space for club-specific events
- **Featured Events**: Highlighting important campus happenings
- **Timely Updates**: Real-time notifications for event changes

## 🎯 Adding Events

### Method 1: Using GitHub Actions (Recommended)

1. **Prepare Your Event Image**
   - Upload your image to [postimages.org](https://postimages.org/)
   - Set validity to 1 Day
   - Copy direct link after uploading image

2. **Submit Event**
   - Go to the repository's "Actions" tab
   - Click "Event Submission" workflow
   - Click "Run workflow"
   - Fill in the event details:

   ```yaml
   Title: Your Event Title
   Date: DD Month YYYY (e.g., 15 January 2025)
   By: Your Club/Department Name
   Registration Link: https://your-registration-link
   Description: |
     <p>Your HTML formatted description</p>
     <p>Can have multiple paragraphs</p>
   Categories: Tech, Workshop, Club (comma-separated)
   Display: 1, 2 (1:Trending, 2:Latest, 3:Department)
   Image: Direct Image URL
   ```

3. **Review Process**
   - Action creates a Pull Request automatically
   - Admins review and merge your submission
   - Event goes live after approval

### Method 2: Direct Pull Request

1. **Prepare Files**
   - Add event image to `/public/photos/events/[clubname]/`
   - Ensure club logo exists at `/public/photos/clubs/[clubname].jpg`

2. **Update Event Data**
   - Edit `/src/data/event.ts`
   - Add new event in the following format:

   ```typescript
   {
     id: [next available number],
     title: "Your Event Title",
     by: "Your Club",
     avatar: "/photos/clubs/yourclub.jpg",
     date: "15 January 2025",
     registrationLink: "https://your-link",
     description: `
       <p>Your HTML formatted description</p>
       <p>Support for multiple paragraphs</p>
     `,
     image: "/photos/events/yourclub/event-image.jpg",
     category: ["Tech", "Workshop", "Club"],
     display: [1, 2]  // 1:Trending, 2:Latest, 3:Department
   }
   ```

3. **Create Pull Request**
   - Push changes to your fork
   - Create PR with event details
   - Wait for review and approval

## 🛠️ Technology Stack

- **Frontend**: Next.js with TypeScript
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Event Management**: GitHub Actions

## 📁 Project Structure

```
event/
├── .github/
│   └── workflows/
│       └── event-submission.yml    # Automated event submission
├── public/
│   └── photos/
│       ├── clubs/                  # Club logos
│       └── events/                 # Event images
├── src/
│   ├── app/
│   │   └── _assets/               # Static assets
│   ├── components/
│   │   ├── custom/                # Custom components
│   │   └── ui/                    # Shadcn UI components
│   └── data/
│       ├── event.ts               # Event data
│       └── interface.ts           # TypeScript interfaces
└── [other project files]
```

## 🚀 Development Setup

1. Clone the repository
```bash
git clone https://github.com/DevsREC/evant.git
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Access the application at `http://localhost:3000`

## 📋 Event Categories

Events can be tagged with categories including:
- Tech
- Academics
- Placement
- Workshops
- Club Activities
- Cultural
- Sports

## 💡 Best Practices

### Event Descriptions
- Use HTML formatting for rich content
- Keep descriptions concise and engaging
- Include all necessary contact information
- Add relevant social media links

### Image Guidelines
- Event images: 1200x630px (recommended)
- Club logos: Square aspect ratio
- Supported formats: JPG, PNG
- Optimize images before uploading
- Use descriptive file names

### Display Categories
1. **Trending Events** (display: [1])
   - Featured and popular events
2. **Latest Events** (display: [2])
   - Most recent additions
3. **Department Events** (display: [3])
   - Academic and department-specific events

## 🌐 Connect with DEVS

- [Facebook](https://www.facebook.com/profile.php?id=100082341643541)
- [Instagram](https://www.instagram.com/recdevs/)
- [Twitter](https://twitter.com/DevsRec)
- [LinkedIn](https://www.linkedin.com/company/devs-rec/)
- [YouTube](https://www.youtube.com/@RECDEVS)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add: amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

---
<div align="center">
  Made with 💖 by DEVS
</div>