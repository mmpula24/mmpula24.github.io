import Vue from "vue";
import VueRouter from "vue-router";
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import About from "../pages/about.vue";
import Home from "../pages/home.vue";
import FishCreek from "../pages/fishCreek.vue";
import Resume from "../pages/resume";
import Pacific from "../pages/pacific";
import BugsGame from "../pages/bugsGame";
import JavaJam from "../pages/javaJam";
import Hangman from "../pages/hangman";
import ParentingBlog from "../pages/parentingBlog";
import FitnessBlog from "../pages/fitnessBlog";
import TrainingSession from "../pages/trainingSession";
import Midterm from "../pages/midterm";
import VeteransHomePage from "../pages/VeteransHomePage";
import FinalPractice from "../pages/finalPractice";
import Final from "../pages/final";
import KidsBook from "../pages/kidsBook";
import Calculator from "../pages/calculator";
import Macbeth from "../pages/macbeth";
import BullsCows from "../pages/bullsCows";
import Sticks from "../pages/sticks";
import Pig from "../pages/pig";
import Turtle from "../pages/turtle";
import Pygame from "../pages/pygame";
import verify from "../pages/verify";
import LibraryHome from "../library-management-system/libraryHome";
import LibraryBooks from "../library-management-system/libraryBooks";
import LibraryCheckouts from "../library-management-system/libraryCheckouts";
import LibraryReturns from "../library-management-system/libraryReturns";
import LibraryUsers from "../library-management-system/libraryUsers"

Vue.use(PerfectScrollbar);

Vue.use(VueRouter);

Vue.use(VueGoodTablePlugin);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/fishcreek",
    name: "FishCreek",
    component: FishCreek
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume
  },
  {
    path: "/pacific",
    name: "Pacific",
    component: Pacific
  },
  {
    path: "/bugsGame",
    name: "BugsGame",
    component: BugsGame
  },
  {
    path: "/javaJam",
    name: "JavaJam",
    component: JavaJam
  },
  {
    path: "/hangman",
    name: "Hangman",
    component: Hangman
  },
  {
    path: "/parentingBlog",
    name: "ParentingBlog",
    component: ParentingBlog
  },
  {
    path: "/fitnessBlog",
    name: "FitnessBlog",
    component: FitnessBlog
  },
  {
    path: "/trainingSession",
    name: "trainingSession",
    component: TrainingSession
  },
  {
    path: "/midterm",
    name: "Midterm",
    component: Midterm
  },
  {
    path: "/VeteransHomePage",
    name: "VeteransHomePage",
    component: VeteransHomePage
  },
  {
    path: "/finalPractice",
    name: "FinalPractice",
    component: FinalPractice
  },
  {
    path: "/final",
    name: "Final",
    component: Final
  },
  {
    path: "/kidsBook",
    name: "KidsBook",
    component: KidsBook
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator
  },
  {
    path: "/macbeth",
    name: "Macbeth",
    component: Macbeth
  },
  {
    path: "/bullsCows",
    name: "BullsCows",
    component: BullsCows
  },
  {
    path: "/sticks",
    name: "Sticks",
    component: Sticks
  },
  {
    path: "/pig",
    name: "Pig",
    component: Pig
  },
  {
    path: "/turtle",
    name: "Turtle",
    component: Turtle
  },
  {
    path: "/pygame",
    name: "Pygame",
    component: Pygame
  },
  {
    path: "/verify",
    name: "verify",
    component: verify
  },
  {
    path: "/libraryhome",
    name: "LibraryHome",
    component: LibraryHome
  },
  {
    path: "/librarybooks",
    name: "LibraryBooks",
    component: LibraryBooks
  },
  {
    path: "/librarycheckouts",
    name: "LibraryCheckouts",
    component: LibraryCheckouts
  },
  {
    path: "/libraryreturns",
    name: "LibraryReturns",
    component: LibraryReturns
  },
  {
    path: "/libraryusers",
    name: "LibraryUsers",
    component: LibraryUsers
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
