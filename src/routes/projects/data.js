import eatburgerIcon from "./assets/eat-burger.png";
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
    name: "Spotify",
    image: spotifyIcon,
    altImage: "Spotify Screenshot",
    repository: "https://github.com/ridoansaleh/spotify",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/spotify",
  },
  {
    id: 3,
    name: "Katalog Buku",
    image: katalogbukuIcon,
    altImage: "Katalog Buku Screenshot",
    repository: "https://github.com/ridoansaleh/katalog-buku",
    deployment_status: "YES",
    template: "react-csr-template",
    demo: "https://ridoansaleh.github.io/katalog-buku",
  },
  {
    id: 4,
    name: "Socmed Dashboard",
    image: socmeddashboardIcon,
    altImage: "Socmed Dashboard Screenshot",
    repository: "https://github.com/ridoansaleh/socmed_dashboard",
    deployment_status: "YES",
    template: "built from scratch",
    demo: "https://socmed-dashboard.herokuapp.com/",
  },
  {
    id: 5,
    name: "Jasa Keuangan",
    image: jasakeuanganIcon,
    altImage: "Jasa Keuangan Screenshot",
    repository: "https://github.com/ridoansaleh/jasa-keuangan",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/jasa-keuangan/",
  },
  {
    id: 6,
    name: "My Music",
    image: mymusicIcon,
    altImage: "My Music Screenshot",
    repository: "https://github.com/ridoansaleh/MyMusic",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/MyMusic/",
  },
  {
    id: 7,
    name: "Learn Gatsby Formik",
    image: learngatsbyIcon,
    altImage: "Learn Gatsby Formik Screenshot",
    repository: "https://github.com/ridoansaleh/learn-gatsby-formik",
    deployment_status: "YES",
    template: "Gatsby Default Starter",
    demo: "https://ridoansaleh.github.io/learn-gatsby-formik/",
  },
  {
    id: 8,
    name: "Belajar React Redux",
    image: belajarreactreduxIcon,
    altImage: "Belajar React Redux Screenshot",
    repository: "https://github.com/ridoansaleh/belajar-react-redux",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/belajar-react-redux/",
  },
  {
    id: 9,
    name: "Vue Todo",
    image: vuetodoIcon,
    altImage: "Vue Todo Screenshot",
    repository: "https://github.com/ridoansaleh/vue-todo",
    deployment_status: "YES",
    template: "Vue CLI",
    demo: "https://ridoansaleh.github.io/vue-todo/",
  },
  {
    id: 10,
    name: "Doraemon",
    image: doraemonIcon,
    altImage: "Doraemon Screenshot",
    repository: "https://github.com/ridoansaleh/doraemon",
    deployment_status: "YES",
    template: "built from scratch",
    demo: "https://doraemon-rido.herokuapp.com/",
  },
];

export const REACT_LIST = PROJECT_LIST.filter((d) => d.id !== 9);

export const VUE_LIST = PROJECT_LIST.filter((d) => d.id === 9);

export default PROJECT_LIST;
