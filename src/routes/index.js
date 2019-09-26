import Home from 'pages/home/home.vue';
import CateList from 'pages/cateList/cateList.vue';
import Topic from 'pages/topic/topic.vue';
import Cart from 'pages/cart/cart.vue';
import Profile from 'pages/profile/profile.vue';


export default [
  {path: "/home", component: Home, meta:{showFooter:true}},
  {path: "/cateList", component: CateList, meta:{showFooter:true}},
  {path: "/topic", component: Topic, meta:{showFooter:true}},
  {path: "/cart", component: Cart, meta:{showFooter:true}},
  {path: "/profile", component: Profile},
  {path: "/", redirect: "/home"},
]
