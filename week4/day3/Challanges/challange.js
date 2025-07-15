class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.time = time;
        this.uploader = uploader;
    }
    watch(){
        return `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    }

}

const video1 = new Video("Funny Cats", "Alice", 120);
console.log(video1.watch()); 

const video2 = new Video("JavaScript Tutorial", "Bob", 3600);
console.log(video2.watch()); 

const videosData = [
  { title: "Funny Cats", uploader: "Alice", time: 120 },
  { title: "JavaScript Tutorial", uploader: "Bob", time: 3600 },
  { title: "Nature Documentary", uploader: "Charlie", time: 1800 },
  { title: "Football Highlights", uploader: "Dave", time: 600 },
  { title: "Cooking Show", uploader: "Eve", time: 900 }
];

videosData.forEach(element => {
    const videos = new Video(element.title, element.uploader, element.time);
    console.log(videos.watch());
});