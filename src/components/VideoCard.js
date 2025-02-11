const VideoCard = ({info}) => {
    const{channelTitle, viewCount, thumbnails} =info.snippet
    return <div className="mx-8 shadow-xl">
        <img className=" rounded-lg " alt="thumbnails" src={thumbnails.medium.url}/>
        <h2 className="font-bold">{info.snippet.tags?.[0] || "No Tag Available"}</h2>
        <h2>{channelTitle}</h2>
        <h4>{info.statistics.viewCount}</h4>
    </div>
}
export default VideoCard