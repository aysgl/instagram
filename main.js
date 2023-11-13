const container = document.querySelector(".container");
const userName = document.querySelector(".user-name");
const userImg = document.querySelector(".user-img");
const image = document.querySelector(".image");
const progressBar = document.querySelector(".progress-bar");

const db = [
    {
        name: "Aysgl",
        photo: "https://picsum.photos/150/150?random=1",
        stories: [
            "https://picsum.photos/400/800?random=2",
            "https://picsum.photos/400/800?random=3",
            "https://picsum.photos/400/800?random=4"
        ]
    },
    {
        name: "isveckralı",
        photo: "https://picsum.photos/150/150?random=5",
        stories: [
            "https://picsum.photos/400/800?random=6"
        ]
    },
    {
        name: "John Doe",
        photo: "https://picsum.photos/150/150?random=7",
        stories: [
            "https://picsum.photos/400/800?random=8",
            "https://picsum.photos/400/800?random=9"
        ]
    },
    {
        name: "Jane Doe",
        photo: "https://picsum.photos/150/150?random=10",
        stories: [
            "https://picsum.photos/400/800?random=11",
            "https://picsum.photos/400/800?random=12",
            "https://picsum.photos/400/800?random=13"
        ]
    },
    {
        name: "Kein",
        photo: "https://picsum.photos/150/150?random=14",
        stories: [
            "https://picsum.photos/400/800?random=15",
            "https://picsum.photos/400/800?random=16"
        ]
    }
];

let userIndex = 0;
let storyIndex = 0;
let progressInterval;

const updateStory = () => {
    const { name, photo, stories } = db[userIndex];
    userName.innerText = name;
    userImg.src = photo;

    const newImage = new Image();
    newImage.src = stories[storyIndex];

    newImage.classList.add("opacity");

    newImage.addEventListener("load", () => {
        newImage.classList.remove("opacity");
    });

    image.innerHTML = "";
    image.appendChild(newImage);

    progressBar.style.width = "0";

    clearInterval(progressInterval);

    let progress = 0;
    const duration = 6000;
    const interval = 100;

    progressInterval = setInterval(() => {
        progress += (interval / duration) * 100;
        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(progressInterval);
            changeUserAndStory();
        }
    }, interval);
};

const changeUserAndStory = () => {
    storyIndex++;

    if (storyIndex >= db[userIndex].stories.length) {
        storyIndex = 0;
        userIndex++;

        if (userIndex >= db.length) {
            userIndex = 0;
        }
    }

    updateStory();
};

updateStory();