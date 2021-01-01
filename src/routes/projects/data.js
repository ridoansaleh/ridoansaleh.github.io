import eatburgerIcon from "./assets/eat_burger.png";
import fbauthpagesIcon from "./assets/fb_auth_pages.png";
import checkoutformIcon from "./assets/checkout-form.png";
import spotifyIcon from "./assets/spotify.png";
import katalogbukuIcon from "./assets/katalog-buku.png";
import socmeddashboardIcon from "./assets/socmed-dashboard.png";
import jasakeuanganIcon from "./assets/jasa-keuangan.png";
import mymusicIcon from "./assets/my-music.png";
import learngatsbyIcon from "./assets/learn-gatsby-formik.png";
import belajarreactreduxIcon from "./assets/belajar-react-redux.png";
import vuetodoIcon from "./assets/vue-todo.png";
import doraemonIcon from "./assets/doraemon.png";

const PROJECT_LIST = [
  {
    id: 1,
    name: "Eat Burger",
    image: eatburgerIcon,
    altImage: "Eat Burger Screenshot",
    repository: "https://github.com/ridoansaleh/eat-burger",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/eat-burger",
  },
  {
    id: 2,
    name: "Facebook Authentication Pages",
    image: fbauthpagesIcon,
    altImage: "Facebook Authentication Pages Screenshot",
    repository: "https://github.com/ridoansaleh/fb_auth_pages",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/fb_auth_pages",
  },
  {
    id: 3,
    name: "Checkout Form",
    image: checkoutformIcon,
    altImage: "Checkout Form Screenshot",
    repository: "https://github.com/ridoansaleh/checkout-form",
    deployment_status: "YES",
    template: "CRA TypeScript",
    demo: "https://upbeat-spence-480994.netlify.app",
  },
  {
    id: 4,
    name: "Spotify",
    image: spotifyIcon,
    altImage: "Spotify Screenshot",
    repository: "https://github.com/ridoansaleh/spotify",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/spotify",
  },
  {
    id: 5,
    name: "Katalog Buku",
    image: katalogbukuIcon,
    altImage: "Katalog Buku Screenshot",
    repository: "https://github.com/ridoansaleh/katalog-buku",
    deployment_status: "YES",
    template: "react-csr-template",
    demo: "https://ridoansaleh.github.io/katalog-buku",
  },
  {
    id: 6,
    name: "Socmed Dashboard",
    image: socmeddashboardIcon,
    altImage: "Socmed Dashboard Screenshot",
    repository: "https://github.com/ridoansaleh/socmed_dashboard",
    deployment_status: "YES",
    template: "built from scratch",
    demo: "https://socmed-dashboard.herokuapp.com/",
  },
  {
    id: 7,
    name: "Jasa Keuangan",
    image: jasakeuanganIcon,
    altImage: "Jasa Keuangan Screenshot",
    repository: "https://github.com/ridoansaleh/jasa-keuangan",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/jasa-keuangan/",
  },
  {
    id: 8,
    name: "My Music",
    image: mymusicIcon,
    altImage: "My Music Screenshot",
    repository: "https://github.com/ridoansaleh/MyMusic",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/MyMusic/",
  },
  {
    id: 9,
    name: "Learn Gatsby Formik",
    image: learngatsbyIcon,
    altImage: "Learn Gatsby Formik Screenshot",
    repository: "https://github.com/ridoansaleh/learn-gatsby-formik",
    deployment_status: "YES",
    template: "Gatsby Default Starter",
    demo: "https://ridoansaleh.github.io/learn-gatsby-formik/",
  },
  {
    id: 10,
    name: "Belajar React Redux",
    image: belajarreactreduxIcon,
    altImage: "Belajar React Redux Screenshot",
    repository: "https://github.com/ridoansaleh/belajar-react-redux",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/belajar-react-redux/",
  },
  {
    id: 11,
    name: "Vue Todo",
    image: vuetodoIcon,
    altImage: "Vue Todo Screenshot",
    repository: "https://github.com/ridoansaleh/vue-todo",
    deployment_status: "YES",
    template: "Vue CLI",
    demo: "https://ridoansaleh.github.io/vue-todo/",
  },
  {
    id: 12,
    name: "Doraemon",
    image: doraemonIcon,
    altImage: "Doraemon Screenshot",
    repository: "https://github.com/ridoansaleh/doraemon",
    deployment_status: "YES",
    template: "built from scratch",
    demo: "https://doraemon-rido.herokuapp.com/",
  },
];

export const REACT_LIST = PROJECT_LIST.filter((d) => d.id !== 11);

export const VUE_LIST = PROJECT_LIST.filter((d) => d.id === 11);

export default PROJECT_LIST;
