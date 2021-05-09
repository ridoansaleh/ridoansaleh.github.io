import eatburgerIcon from "./assets/eat_burger.png";
import fbauthpagesIcon from "./assets/fb_auth_pages.png";
import checkoutformIcon from "./assets/checkout-form.png";
import spotifyIcon from "./assets/spotify.png";
import katalogbukuIcon from "./assets/katalog-buku.png";
import staffListFrontendIcon from "./assets/staff-list-frontend.png";
import kuisSumutIcon from "./assets/kuis-sumut.png";
import socmeddashboardIcon from "./assets/socmed-dashboard.png";
import jasakeuanganIcon from "./assets/jasa-keuangan.png";
import mymusicIcon from "./assets/my-music.png";
import learngatsbyIcon from "./assets/learn-gatsby-formik.png";
import belajarreactreduxIcon from "./assets/belajar-react-redux.png";
import vuetodoIcon from "./assets/vue-todo.png";
import doraemonIcon from "./assets/doraemon.png";
import staffListRestapiIcon from "./assets/staff-list-restapi.png";

const PROJECT_TYPE = {
  REACT: "react",
  VUE: "vue",
  NODEJS: "node.js",
};

const PROJECT_LIST = [
  {
    id: 1,
    name: "Eat Burger",
    type: PROJECT_TYPE.REACT,
    image: eatburgerIcon,
    alt_image: "Eat Burger Screenshot",
    repository: "https://github.com/ridoansaleh/eat-burger",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/eat-burger",
  },
  {
    id: 2,
    name: "Facebook Authentication Pages",
    type: PROJECT_TYPE.REACT,
    image: fbauthpagesIcon,
    alt_image: "Facebook Authentication Pages Screenshot",
    repository: "https://github.com/ridoansaleh/fb_auth_pages",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/fb_auth_pages",
  },
  {
    id: 3,
    name: "Checkout Form",
    type: PROJECT_TYPE.REACT,
    image: checkoutformIcon,
    alt_image: "Checkout Form Screenshot",
    repository: "https://github.com/ridoansaleh/checkout-form",
    deployment_status: "YES",
    template: "CRA TypeScript",
    demo: "https://upbeat-spence-480994.netlify.app",
  },
  {
    id: 4,
    name: "Spotify",
    type: PROJECT_TYPE.REACT,
    image: spotifyIcon,
    alt_image: "Spotify Screenshot",
    repository: "https://github.com/ridoansaleh/spotify",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/spotify",
  },
  {
    id: 5,
    name: "Katalog Buku",
    type: PROJECT_TYPE.REACT,
    image: katalogbukuIcon,
    alt_image: "Katalog Buku Screenshot",
    repository: "https://github.com/ridoansaleh/katalog-buku",
    deployment_status: "YES",
    template: "react-csr-template",
    demo: "https://ridoansaleh.github.io/katalog-buku",
  },
  {
    id: 6,
    name: "Staff List Frontend",
    type: PROJECT_TYPE.REACT,
    image: staffListFrontendIcon,
    alt_image: "Staff List Frontend Screenshot",
    repository: "https://github.com/ridoansaleh/staff_list_frontend",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://stupefied-boyd-354c3d.netlify.app/",
  },
  {
    id: 7,
    name: "Kuis Sumut",
    type: PROJECT_TYPE.REACT,
    image: kuisSumutIcon,
    alt_image: "Kuis Sumut Screenshot",
    repository: "https://github.com/ridoansaleh/north-sumatera-quiz",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://kuis-sumut.netlify.app/",
  },
  {
    id: 8,
    name: "Socmed Dashboard",
    type: PROJECT_TYPE.REACT,
    image: socmeddashboardIcon,
    alt_image: "Socmed Dashboard Screenshot",
    repository: "https://github.com/ridoansaleh/socmed_dashboard",
    deployment_status: "YES",
    template: "built from scratch",
    demo: "https://socmed-dashboard.herokuapp.com/",
  },
  {
    id: 9,
    name: "Jasa Keuangan",
    type: PROJECT_TYPE.REACT,
    image: jasakeuanganIcon,
    alt_image: "Jasa Keuangan Screenshot",
    repository: "https://github.com/ridoansaleh/jasa-keuangan",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/jasa-keuangan/",
  },
  {
    id: 10,
    name: "My Music",
    type: PROJECT_TYPE.REACT,
    image: mymusicIcon,
    alt_image: "My Music Screenshot",
    repository: "https://github.com/ridoansaleh/MyMusic",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/MyMusic/",
  },
  {
    id: 11,
    name: "Learn Gatsby Formik",
    type: PROJECT_TYPE.REACT,
    image: learngatsbyIcon,
    alt_image: "Learn Gatsby Formik Screenshot",
    repository: "https://github.com/ridoansaleh/learn-gatsby-formik",
    deployment_status: "YES",
    template: "Gatsby Default Starter",
    demo: "https://ridoansaleh.github.io/learn-gatsby-formik/",
  },
  {
    id: 12,
    name: "Belajar React Redux",
    type: PROJECT_TYPE.REACT,
    image: belajarreactreduxIcon,
    alt_image: "Belajar React Redux Screenshot",
    repository: "https://github.com/ridoansaleh/belajar-react-redux",
    deployment_status: "YES",
    template: "CRA",
    demo: "https://ridoansaleh.github.io/belajar-react-redux/",
  },
  {
    id: 13,
    name: "Vue Todo",
    type: PROJECT_TYPE.VUE,
    image: vuetodoIcon,
    alt_image: "Vue Todo Screenshot",
    repository: "https://github.com/ridoansaleh/vue-todo",
    deployment_status: "YES",
    template: "Vue CLI",
    demo: "https://ridoansaleh.github.io/vue-todo/",
  },
  {
    id: 14,
    name: "Doraemon",
    type: PROJECT_TYPE.REACT,
    image: doraemonIcon,
    alt_image: "Doraemon Screenshot",
    repository: "https://github.com/ridoansaleh/doraemon",
    deployment_status: "YES",
    template: "built from scratch",
    demo: "https://doraemon-rido.herokuapp.com/",
  },
  {
    id: 15,
    name: "Staff List REST API",
    type: PROJECT_TYPE.NODEJS,
    image: staffListRestapiIcon,
    alt_image: "Staff List REST API Screenshot",
    repository: "https://github.com/ridoansaleh/staff_list_restapi",
    deployment_status: "YES",
    template: "built from scratch",
    demo: "https://blooming-sierra-10191.herokuapp.com",
  },
];

const REACT_LIST = PROJECT_LIST.filter((d) => d.type === PROJECT_TYPE.REACT);

const VUE_LIST = PROJECT_LIST.filter((d) => d.type === PROJECT_TYPE.VUE);

const NODEJS_LIST = PROJECT_LIST.filter((d) => d.type === PROJECT_TYPE.NODEJS);

export { REACT_LIST, VUE_LIST, NODEJS_LIST };

export default PROJECT_LIST;
