// main menu links
export const getMainMenuData = () => [
    { title: "Каталог", url: "/catalog" },
    { title: "Про нас", url: "/about" },
    { title: "Оплата і доставка", url: "/order_and_delivery" },
    { title: "Lookbook", url: "/lookbook" },
    { title: "Контакти", url: "/contact" },
];

// product categories
export const getCategoriesMenuData = () => [
    { title: "Штани", url: "/catalog/trousers" },
    { title: "Сорочки", url: "/catalog/shirts" },
    { title: "Сукні", url: "/catalog/dresses" },
    { title: "Сведри", url: "/catalog/sweaters" },
    { title: "Костюми", url: "/catalog/suits" },
    { title: "Піджаки", url: "/catalog/jackets" },
];
export const getHomePageUrl = () => "/";
export const getFavoritePageUrl = () => "/favorite";
export const getSearchPageUrl = () => "/search";

export const wordPressAPIUrl = "http://64.225.74.130/wordpress/?rest_route=";
