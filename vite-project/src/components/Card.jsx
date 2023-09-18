function Card({imgRatio, imgSrc, imgAlt, mediaAlign, mediaSize, mediaSrc, mediaAlt, title, subtitle}){
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>
    );
}

export default Card;