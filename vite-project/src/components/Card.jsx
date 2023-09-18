function Card({imgRatio, imgSrc, imgAlt, mediaAlign, mediaSize, mediaSrc, mediaAlt, title, subtitle, content, atLinks, tags, postDate}){
    return (
        <div className="card">
            <div className="card-image">
                <figure className={"image " + imgRatio}>
                    <img src={imgSrc} alt={imgAlt} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className={mediaAlign}>
                        <figure className={"image " + mediaSize}>
                            <img src={mediaSrc} alt={mediaAlt} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{subtitle}</p>
                    </div>
                </div>

                <div className="content">
                    {content} 
                    {atLinks.map(({title,href,i})=>(
                        <a key={title + i} href={href} title={title}>{title}&nbsp;</a>
                    ))}
                    {tags.map(({title,href,i})=>(
                        <a key={title + i} href={href} title={title}>{title}&nbsp;</a>
                    ))}
                    <br />
                    <time dateTime={postDate}>{postDate}</time>
                </div>
            </div>
        </div>
    );
}

export default Card;