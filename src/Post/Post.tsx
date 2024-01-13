import "./Post.css"

interface PostProps {
    data: {
        image: string;
        title: string;
        description: string;
    };
}

function Post(props: PostProps) {
    return (
        <div className="news-container" >
            <img src="http://www.osinniki.org/uploads/posts/2020-04/1588223707_vazhnaya_inf.png" alt="News Image" className="news-image"/>
                <div className="news-content">
                    <div className="news-title">Заголовок новости</div>
                    <div className="news-description">Краткое описание новости здесь...</div>
                </div>
        </div>
    );
}

export default Post;