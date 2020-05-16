import React from "react";
import "../styles/catalog.css";

function GalleryItem(props) {
    return <div className={props.parentClass + "__item"} >
        <div className={props.parentClass + "__img-b"}>
            <svg
                className="catalog__favicon"
                width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1" fill="white">
                    <path d="M18.7122 1.86352C18.5479 1.67812 18.3716 1.50356 18.1845 1.34095C17.2907 0.562894 16.0798 0.0199997 14.5821 0H14.5504C14.4609 0 14.3706 0.00516119 14.2818 0.0103224C13.3514 0.0522572 10.6661 1.14514 9.99619 3.30285C9.32786 1.14482 6.64194 0.0512895 5.71122 0.0103224C5.62472 0.00516119 5.53304 0 5.4459 0H5.41124C3.91553 0.0196771 2.70458 0.562894 1.81208 1.34095C1.6255 1.50422 1.44916 1.67874 1.28404 1.86352C0.152134 3.15221 -0.386281 4.97605 0.312168 6.63925C0.39672 6.87441 0.493259 7.11763 0.60308 7.36537C2.24813 11.0947 6.72099 16.231 8.93393 18.65C9.40885 19.2413 9.77233 19.6952 9.98906 19.9626V19.9926L9.99165 19.99C9.99165 19.9948 9.99683 19.9974 9.9991 20V19.9806L10.001 19.9777L10.0036 19.9806V20C10.0095 19.9974 10.0121 19.9945 10.0121 19.99L10.0147 19.9926V19.9626C10.2311 19.6952 10.5962 19.2416 11.0698 18.65C13.2817 16.231 17.753 11.0947 19.3974 7.36537C19.503 7.12687 19.5999 6.88467 19.688 6.63925C20.3848 4.97444 19.8509 3.15059 18.7161 1.86062" />
                </mask>
                <path d="M18.1845 1.34095L17.1996 2.47233L17.2005 2.47311L18.1845 1.34095ZM14.5821 0L14.6021 -1.49987L14.5921 -1.5H14.5821V0ZM14.2818 0.0103224L14.3493 1.5088L14.3591 1.50836L14.3689 1.50779L14.2818 0.0103224ZM9.99619 3.30285L8.56332 3.74659L9.99434 8.3674L11.4287 3.74764L9.99619 3.30285ZM5.71122 0.0103224L5.62187 1.50766L5.63356 1.50836L5.64526 1.50887L5.71122 0.0103224ZM5.41124 0V-1.5H5.40137L5.3915 -1.49987L5.41124 0ZM1.81208 1.34095L0.826397 0.21027L0.824257 0.212143L1.81208 1.34095ZM1.28404 1.86352L0.165518 0.863977L0.157036 0.873634L1.28404 1.86352ZM0.312168 6.63925L1.7237 6.13172L1.71039 6.09472L1.69517 6.05847L0.312168 6.63925ZM0.60308 7.36537L1.97549 6.75997L1.97438 6.75747L0.60308 7.36537ZM8.93393 18.65L10.1034 17.7107L10.0732 17.6731L10.0407 17.6375L8.93393 18.65ZM9.98906 19.9626H11.4891V19.4311L11.1544 19.0181L9.98906 19.9626ZM9.98906 19.9926H8.48906V23.6018L11.0472 21.0558L9.98906 19.9926ZM9.99165 19.99H11.4916V16.3808L8.93351 18.9268L9.99165 19.99ZM9.9991 20L8.87233 20.9901L11.4991 23.9794V20H9.9991ZM9.9991 19.9806L8.75259 19.1463L8.4991 19.5249V19.9806H9.9991ZM10.001 19.9777L11.1202 18.979L9.83134 17.5347L8.75453 19.1434L10.001 19.9777ZM10.0036 19.9806H11.5036V19.4087L11.1228 18.9819L10.0036 19.9806ZM10.0036 20H8.50364V22.3041L10.6107 21.3717L10.0036 20ZM10.0121 19.99L11.0705 18.9271L8.51206 16.3796V19.99H10.0121ZM10.0147 19.9926L8.95626 21.0555L11.5147 23.603V19.9926H10.0147ZM10.0147 19.9626L8.84862 19.019L8.51465 19.4317V19.9626H10.0147ZM11.0698 18.65L9.9628 17.6378L9.92958 17.6741L9.8988 17.7126L11.0698 18.65ZM19.3974 7.36537L18.0257 6.75823L18.0249 6.76017L19.3974 7.36537ZM19.688 6.63925L18.3043 6.06009L18.2893 6.09592L18.2762 6.13247L19.688 6.63925ZM19.8347 0.86852C19.6272 0.634417 19.4046 0.414044 19.1685 0.208786L17.2005 2.47311C17.3386 2.59307 17.4686 2.72182 17.5897 2.85852L19.8347 0.86852ZM19.1694 0.209564C18.0211 -0.790007 16.4722 -1.47489 14.6021 -1.49987L14.5621 1.49987C15.6873 1.51489 16.5603 1.9158 17.1996 2.47233L19.1694 0.209564ZM14.5821 -1.5H14.5504V1.5H14.5821V-1.5ZM14.5504 -1.5C14.4106 -1.5 14.2776 -1.49197 14.1947 -1.48715L14.3689 1.50779C14.4636 1.50229 14.5113 1.5 14.5504 1.5V-1.5ZM14.2143 -1.48816C13.4071 -1.45178 12.2512 -1.04103 11.2426 -0.406478C10.2071 0.244929 9.04491 1.30805 8.56365 2.85806L11.4287 3.74764C11.6174 3.13994 12.1328 2.57777 12.8401 2.13282C13.1801 1.91889 13.5264 1.75719 13.8238 1.64972C13.9716 1.59628 14.0985 1.55945 14.198 1.5363C14.3034 1.51177 14.352 1.50868 14.3493 1.5088L14.2143 -1.48816ZM11.429 2.85911C10.9488 1.30836 9.78652 0.244684 8.75093 -0.406909C7.74233 -1.04151 6.5856 -1.45264 5.77718 -1.48823L5.64526 1.50887C5.64225 1.50874 5.69059 1.51173 5.7959 1.53618C5.89522 1.55924 6.02205 1.596 6.16983 1.64938C6.46705 1.75674 6.81331 1.91838 7.15328 2.13228C7.8604 2.57721 8.37525 3.13931 8.56332 3.74659L11.429 2.85911ZM5.80056 -1.48701C5.71752 -1.49197 5.58379 -1.5 5.4459 -1.5V1.5C5.4823 1.5 5.53193 1.50229 5.62187 1.50766L5.80056 -1.48701ZM5.4459 -1.5H5.41124V1.5H5.4459V-1.5ZM5.3915 -1.49987C3.52282 -1.47529 1.97352 -0.789752 0.826399 0.210272L2.79777 2.47162C3.43565 1.91554 4.30824 1.51464 5.43097 1.49987L5.3915 -1.49987ZM0.824257 0.212143C0.59155 0.415787 0.371568 0.633483 0.165559 0.864013L2.40251 2.86302C2.52675 2.724 2.65946 2.59266 2.79991 2.46975L0.824257 0.212143ZM0.157036 0.873634C-1.25014 2.47572 -2.04655 4.89659 -1.07083 7.22003L1.69517 6.05847C1.27398 5.05551 1.5544 3.82869 2.41104 2.8534L0.157036 0.873634ZM-1.09936 7.14677C-1.00327 7.41403 -0.893422 7.69082 -0.768221 7.97326L1.97438 6.75747C1.87994 6.54443 1.79671 6.33478 1.7237 6.13172L-1.09936 7.14677ZM-0.769327 7.97076C0.131485 10.0129 1.75719 12.3496 3.37263 14.4214C5.00644 16.5168 6.70657 18.4375 7.82718 19.6625L10.0407 17.6375C8.94835 16.4435 7.30558 14.5866 5.73846 12.5767C4.15298 10.5433 2.71972 8.44715 1.97549 6.75998L-0.769327 7.97076ZM7.76446 19.5893C8.23646 20.177 8.60423 20.6362 8.82372 20.907L11.1544 19.0181C10.9404 18.7541 10.5812 18.3056 10.1034 17.7107L7.76446 19.5893ZM8.48906 19.9626V19.9926H11.4891V19.9626H8.48906ZM11.0472 21.0558L11.0498 21.0532L8.93351 18.9268L8.93092 18.9294L11.0472 21.0558ZM8.49165 19.99C8.49165 20.5857 8.82842 20.9515 8.93615 21.0588C8.98993 21.1123 9.04469 21.1572 9.02856 21.1435C9.02855 21.1435 9.01 21.128 8.9877 21.1076C8.9654 21.0873 8.92194 21.0466 8.87233 20.9901L11.1259 19.0099C11.0757 18.9528 11.0316 18.9114 11.0086 18.8904C10.9855 18.8694 10.9662 18.8532 10.9654 18.8525C10.9477 18.8375 11.0007 18.8809 11.0529 18.9329C11.1575 19.037 11.4916 19.3991 11.4916 19.99H8.49165ZM11.4991 20V19.9806H8.4991V20H11.4991ZM11.2456 20.815L11.2476 20.8121L8.75453 19.1434L8.75259 19.1463L11.2456 20.815ZM8.88186 20.9765L8.88445 20.9794L11.1228 18.9819L11.1202 18.979L8.88186 20.9765ZM8.50364 19.9806V20H11.5036V19.9806H8.50364ZM10.6107 21.3717C10.7049 21.33 10.9398 21.2168 11.1508 20.9697C11.4035 20.6737 11.5121 20.3182 11.5121 19.99H8.51206C8.51206 19.6663 8.61933 19.3145 8.86925 19.0218C9.07751 18.7778 9.30823 18.6674 9.3966 18.6283L10.6107 21.3717ZM8.95367 21.0529L8.95626 21.0555L11.073 18.9297L11.0705 18.9271L8.95367 21.0529ZM11.5147 19.9926V19.9626H8.51465V19.9926H11.5147ZM11.1807 20.9062C11.3993 20.6361 11.7661 20.1804 12.2407 19.5875L9.8988 17.7126C9.42621 18.3029 9.06285 18.7543 8.84862 19.019L11.1807 20.9062ZM12.1767 19.6623C13.2968 18.4373 14.9963 16.5166 16.6295 14.4212C18.2443 12.3493 19.8694 10.0127 20.7699 7.97056L18.0249 6.76017C17.2809 8.44736 15.8482 10.5435 14.2633 12.5769C12.6968 14.5868 11.0547 16.4437 9.9628 17.6378L12.1767 19.6623ZM20.769 7.9725C20.8892 7.70105 20.9995 7.42538 21.0998 7.14602L18.2762 6.13247C18.2003 6.34397 18.1167 6.55269 18.0257 6.75823L20.769 7.9725ZM21.0717 7.21841C22.0435 4.89661 21.2555 2.47622 19.8423 0.869852L17.5899 2.85138C18.4464 3.82497 18.7261 5.05226 18.3043 6.06009L21.0717 7.21841Z" fill="white" mask="url(#path-1-inside-1)" />
            </svg>

            <img src={props.img} alt="catalog_item" className={props.parentClass + "__img"} />
            {props.sale && <svg
                className="catalog__sub"
                width="36" height="18" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="18" fill="black" />
                <path d="M8.44961 5.73037C8.41361 5.79037 8.37361 5.83637 8.32961 5.86837C8.28961 5.89637 8.23961 5.91037 8.17961 5.91037C8.11161 5.91037 8.03161 5.87637 7.93961 5.80837C7.84761 5.74037 7.73161 5.66637 7.59161 5.58637C7.45561 5.50237 7.28961 5.42637 7.09361 5.35837C6.90161 5.29037 6.66761 5.25637 6.39161 5.25637C6.13161 5.25637 5.90161 5.29237 5.70161 5.36437C5.50561 5.43237 5.33961 5.52637 5.20361 5.64637C5.07161 5.76637 4.97161 5.90837 4.90361 6.07237C4.83561 6.23237 4.80161 6.40637 4.80161 6.59437C4.80161 6.83437 4.85961 7.03437 4.97561 7.19437C5.09561 7.35037 5.25161 7.48437 5.44361 7.59637C5.63961 7.70837 5.85961 7.80637 6.10361 7.89037C6.35161 7.97037 6.60361 8.05437 6.85961 8.14237C7.11961 8.23037 7.37161 8.33037 7.61561 8.44237C7.86361 8.55037 8.08361 8.68837 8.27561 8.85637C8.47161 9.02437 8.62761 9.23037 8.74361 9.47437C8.86361 9.71837 8.92361 10.0184 8.92361 10.3744C8.92361 10.7504 8.85961 11.1044 8.73161 11.4364C8.60361 11.7644 8.41561 12.0504 8.16761 12.2944C7.92361 12.5384 7.62161 12.7304 7.26161 12.8704C6.90561 13.0104 6.49961 13.0804 6.04361 13.0804C5.48361 13.0804 4.97561 12.9804 4.51961 12.7804C4.06361 12.5764 3.67361 12.3024 3.34961 11.9584L3.68561 11.4064C3.71761 11.3624 3.75561 11.3264 3.79961 11.2984C3.84761 11.2664 3.89961 11.2504 3.95561 11.2504C4.00761 11.2504 4.06561 11.2724 4.12961 11.3164C4.19761 11.3564 4.27361 11.4084 4.35761 11.4724C4.44161 11.5364 4.53761 11.6064 4.64561 11.6824C4.75361 11.7584 4.87561 11.8284 5.01161 11.8924C5.15161 11.9564 5.30961 12.0104 5.48561 12.0544C5.66161 12.0944 5.85961 12.1144 6.07961 12.1144C6.35561 12.1144 6.60161 12.0764 6.81761 12.0004C7.03361 11.9244 7.21561 11.8184 7.36361 11.6824C7.51561 11.5424 7.63161 11.3764 7.71161 11.1844C7.79161 10.9924 7.83161 10.7784 7.83161 10.5424C7.83161 10.2824 7.77161 10.0704 7.65161 9.90637C7.53561 9.73837 7.38161 9.59837 7.18961 9.48637C6.99761 9.37437 6.77761 9.28037 6.52961 9.20437C6.28161 9.12437 6.02961 9.04437 5.77361 8.96437C5.51761 8.88037 5.26561 8.78437 5.01761 8.67637C4.76961 8.56837 4.54961 8.42837 4.35761 8.25637C4.16561 8.08437 4.00961 7.87037 3.88961 7.61437C3.77361 7.35437 3.71561 7.03437 3.71561 6.65437C3.71561 6.35037 3.77361 6.05637 3.88961 5.77237C4.00961 5.48837 4.18161 5.23637 4.40561 5.01637C4.63361 4.79637 4.91161 4.62037 5.23961 4.48837C5.57161 4.35637 5.95161 4.29037 6.37961 4.29037C6.85961 4.29037 7.29561 4.36637 7.68761 4.51837C8.08361 4.67037 8.43161 4.89037 8.73161 5.17837L8.44961 5.73037ZM14.9809 9.79237L13.6309 6.29437C13.5909 6.19037 13.5489 6.07037 13.5049 5.93437C13.4609 5.79437 13.4189 5.64637 13.3789 5.49037C13.2949 5.81437 13.2089 6.08437 13.1209 6.30037L11.7709 9.79237H14.9809ZM17.4049 12.9844H16.5049C16.4009 12.9844 16.3169 12.9584 16.2529 12.9064C16.1889 12.8544 16.1409 12.7884 16.1089 12.7084L15.3049 10.6324H11.4469L10.6429 12.7084C10.6189 12.7804 10.5729 12.8444 10.5049 12.9004C10.4369 12.9564 10.3529 12.9844 10.2529 12.9844H9.35289L12.7909 4.38637H13.9669L17.4049 12.9844ZM23.414 12.0064V12.9844H18.536V4.38637H19.694V12.0064H23.414ZM30.0041 12.0364L29.9981 12.9844H24.7001V4.38637H29.9981V5.33437H25.8641V8.19037H29.2121V9.10237H25.8641V12.0364H30.0041Z" fill="white" />
            </svg>}
            {props.new && <img src="Catalog/new.png" className="catalog__sub" alt="catalog_item" />
            }
        </div>
        <p className="catalog__text">{props.text}</p>
        {!props.sale && <p className="catalog__price">{props.price}</p>}
        {props.sale && <div className="catalog__price">
            <span className="catalog__price catalog__price--old">{props.price} </span>
            <span> / </span>
            <span className="catalog__price catalog__price--new">{props.salePrice}</span>
        </div>}
    </div>
}
function CatalogButton() {
    return <button className="catalog__button">показати більше</button>
}
function MainPage(props) {
    let gallery = catalogBase.map((e, index) => {
        if (index >= 9) return null
        else return (
            <GalleryItem parentClass="catalog-main" sale={e.sale} new={e.new} price={e.price} salePrice={e.salePrice} text={e.text} img={e.img} key={e.id} />
        )
    })
    return <div className="catalog-wrapper">
        <div className="catalog-main">
            {gallery}
        </div>
        <CatalogButton />
    </div>
}
function All() {
    let gallery = catalogBase.map((e, index) => {
        if (index >= 8) return null
        else return (
            <GalleryItem parentClass="catalog-all" sale={e.sale} new={e.new} price={e.price} salePrice={e.salePrice} text={e.text} img={e.img} key={e.id} />
        )
    })
    return <div className="catalog-wrapper">
        <div className="catalog-all">
            {gallery}
        </div>
        <CatalogButton />
    </div>
}
function Shirts() {
    let gallery = catalogBase.map((e, index) => {
        if (e.img.includes("shirt")) return (
            <GalleryItem parentClass="catalog-all" sale={e.sale} new={e.new} price={e.price} salePrice={e.salePrice} text={e.text} img={e.img} key={e.id} />
        )
        else return null
    })
    return <div className="catalog-wrapper">
        <div className="catalog-all">
            {gallery}
        </div>
    </div>
}
function Dress() {
    let gallery = catalogBase.map((e, index) => {
        if (e.img.includes("dress")) return (
            <GalleryItem parentClass="catalog-all" sale={e.sale} new={e.new} price={e.price} salePrice={e.salePrice} text={e.text} img={e.img} key={e.id} />
        )
        else return null
    })
    return <div className="catalog-wrapper">
        <div className="catalog-all">
            {gallery}
        </div>
    </div>
}

export default function Catalog(props) {
    if (props.type === "main")
        return <MainPage />
    if (props.type === "all")
        return <All />
    if (props.type === "shirts")
        return <Shirts />
    if (props.type === "dress")
        return <Dress />
}
let catalogBase = [
    { text: "Сукня замшева вишнева", img: "Catalog/dress_cherry.jpg", price: "550₴", sale: false, new: true, id: 1 },
    { text: "Спідниця хакі", img: "Catalog/skirt_haki.jpg", price: "550₴", sale: true, salePrice: "450₴", new: false, id: 2 },
    { text: "Сукня замшева темно-зелена", img: "Catalog/dress_dark-green.jpg", price: "550₴", sale: false, new: false, id: 3 },
    { text: "Сорочка блакитна", img: "Catalog/shirt_blue.jpg", price: "550₴", sale: false, new: false, id: 4 },
    { text: "Сорочка молочна", img: "Catalog/shirt_milk.jpg", price: "550₴", sale: true, salePrice: "333₴", new: false, id: 5 },
    { text: "Спідниця чорна", img: "Catalog/skirt_black.jpg", price: "550₴", sale: false, new: false, id: 6 },
    { text: "Піджак в шотланську клітинку Khaby", img: "Catalog/jacket_khaby.jpg", price: "550₴", sale: false, new: false, id: 7 },
    { text: "Брюки чорні", img: "Catalog/pants_black.jpg", price: "550₴", sale: false, new: false, id: 8 },
    { text: "Світер сірий", img: "Catalog/sweater_gray.jpg", price: "550₴", sale: false, new: false, id: 9 },
]
