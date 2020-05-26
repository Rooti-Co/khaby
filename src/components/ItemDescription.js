import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from "./ItemSlider";
import "./ItemDescriptionAssets/ItemDescription.css";


const postAddress = "http://64.225.74.130/wordpress/?rest_route=/wp/v2/posts/"








const Item = (props) => {

    const [content, setContent] = React.useState("");
    const [contentGallery, setContentGallery] = React.useState("");

    fetch(postAddress + props.postID)
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            let data = res.content.rendered;
            let datatGallery = data.slice(data.indexOf("<figure"), data.lastIndexOf("</figure>") + 9);
            data = data.replace(datatGallery, "");

            let Gallery = "";
            let i = 0;
            let iEnd = 0;
            while ((i > -1) && (iEnd > -1)) {
                i = datatGallery.indexOf("<img", i + 1);
                iEnd = 2 + datatGallery.indexOf("/>", i + 1);
                Gallery += datatGallery.slice(i, iEnd);
            }


            setContent('<h1>' + res.title.rendered + '</h1>' + data);
            setContentGallery(Gallery);
        });

    let a = <React.Fragment dangerouslySetInnerHTML={{ __html: contentGallery }} />
    return <div className="item">
        <Gallery content={a} />
        <div>
            <div className="item-description" dangerouslySetInnerHTML={{ __html: content }} />
            <button className="item-description-button">Замовити</button>
        </div>

    </div>


}

export default Item;