// youtube.js

class Youtube {
    constructor(httpClient) {
        this.Youtube = httpClient;
    }

    async mostPopular() {
        const response = await this.Youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            },
        });
        return response.data.items;
        //   const response = await fetch(
        //     `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
        //     this.getRequestOptions
        // );
        // const result_1 = await response.json();
        // return result_1.items; // 비동기적으로 setVideos라는 API를 이용해서 우리 컴포넌트에 데이터를 업데이트 할 것이다.
    }

    async search(query) {
        const response = await this.Youtube.get('search', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
                type: 'video',
                q: query,
            },
        });
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));   
        //   const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&type=video&key=${this.key}`, this.getRequestOptions);
        //   const result_1 = await response.json();
        //   return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;