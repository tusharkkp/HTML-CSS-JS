// Sidebar Toggle Logic
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Dummy Data mimicking an API response
const videoData = [
    {
        thumbnail: "https://picsum.photos/id/1/400/225",
        duration: "12:05",
        title: "Learn Vanilla JavaScript in 2 Hours",
        channelIcon: "https://api.dicebear.com/7.x/avataaars/svg?seed=Code",
        channelName: "Dev Mastery",
        views: "1.2M views",
        uploadTime: "1 year ago"
    },
    {
        thumbnail: "https://picsum.photos/id/2/400/225",
        duration: "8:22",
        title: "Top 10 Mechanical Keyboards for Programming",
        channelIcon: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tech",
        channelName: "Tech Setup",
        views: "450K views",
        uploadTime: "2 months ago"
    },
    {
        thumbnail: "https://picsum.photos/id/3/400/225",
        duration: "24:10",
        title: "LoFi Chill Beats to Code/Study To",
        channelIcon: "https://api.dicebear.com/7.x/avataaars/svg?seed=Music",
        channelName: "ChillVibes",
        views: "12M views",
        uploadTime: "Streamed 3 days ago"
    },
    {
        thumbnail: "https://picsum.photos/id/4/400/225",
        duration: "15:45",
        title: "CSS Grid vs Flexbox - Which should you use?",
        channelIcon: "https://api.dicebear.com/7.x/avataaars/svg?seed=Design",
        channelName: "UI/UX Weekly",
        views: "890K views",
        uploadTime: "5 months ago"
    },
    {
        thumbnail: "https://picsum.photos/id/5/400/225",
        duration: "0:59",
        title: "Fixing a Bug in Production (Gone Wrong)",
        channelIcon: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev",
        channelName: "The Funny Coder",
        views: "2M views",
        uploadTime: "2 weeks ago"
    },
    {
        thumbnail: "https://picsum.photos/id/6/400/225",
        duration: "45:00",
        title: "Full Stack Development Masterclass 2024",
        channelIcon: "https://api.dicebear.com/7.x/avataaars/svg?seed=Academy",
        channelName: "Code Academy",
        views: "5M views",
        uploadTime: "8 months ago"
    }
];

// Function to generate and render video cards
function renderVideos() {
    const videoGrid = document.getElementById('videoGrid');
    let htmlContent = '';

    // Loop through the data and generate HTML strings for each card
    videoData.forEach(video => {
        htmlContent += `
            <div class="video-card">
                <div class="thumbnail-container">
                    <img src="${video.thumbnail}" alt="Thumbnail" class="thumbnail">
                    <span class="duration">${video.duration}</span>
                </div>
                <div class="video-details">
                    <img src="${video.channelIcon}" alt="Channel Icon" class="channel-icon">
                    <div class="video-info">
                        <h3 class="video-title">${video.title}</h3>
                        <span class="channel-name">${video.channelName}</span>
                        <span class="video-stats">${video.views} • ${video.uploadTime}</span>
                    </div>
                </div>
            </div>
        `;
    });

    // We multiply the data to fill out the grid for demonstration purposes
    videoGrid.innerHTML = htmlContent + htmlContent; 
}

// Initialize the rendering on load
window.onload = renderVideos;