// app.jsx

import React, {useState, useEffect, useCallback} from 'react';
import styles from './app.module.css';
import SearchHaeder from './components/search_header/search_haeder';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  // 궁금증!!!
  const search = useCallback(
    query => {
      setSelectedVideo(null);
      youtube
      .search(query) //
      .then(videos => 
        setVideos(videos));
      }, [youtube]);

  useEffect(() => {
    youtube
    .mostPopular() //
    .then(videos => setVideos(videos));
  }, [youtube]); // 업데이트가 될 때마다 []여기 안에있는 값들이 한번 호출이된다.
  // fuction component에서 state를 사용할 수 있는 방법은 useState라는 API를 이용하면된다(Postman).
  return (
    <div className={styles.app}>
      <SearchHaeder onSearch={search}/>
      <section className={styles.content}>
      {selectedVideo && (<div className={styles.detail}>
          <VideoDetail video={selectedVideo}/>
        </div>
      )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
  );
}

export default App;
