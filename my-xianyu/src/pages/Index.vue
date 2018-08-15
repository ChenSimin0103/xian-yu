<template>
  <div class="container">
    <Head style="margin-bottom:1.5rem"/>
    <IndexBanner/>
  </div>
</template>

<script>
import {
  getIconlist,
  getTypelist,
  getSmBanner,
  getIndexNav,
  ERR_OK,
} from '@/api/data';
import Head from '@/components/Head/Head'
import IndexBanner from '@/components/IndexBanner/IndexBanner'


export default {
  name: 'Index',
  components: {
    Head,
    IndexBanner
  },
  data() {
    return {
      iconList: [],
      typeList: [],
      smBanner: [],
      news: [],
      nears: [],
      recoms: [],
    };
  },
  created() {
    getIconlist().then(res => {
      if (res.status === ERR_OK) {
        this.iconList = res.data.iconlist;
      }
    });
    getTypelist().then(res => {
      if(res.status === ERR_OK) {
        this.typeList = res.data.iconList;
      }
    });
    getSmBanner().then(res => {
      if(res.status === ERR_OK){
        this.smBanner = res.data.smBanner;
      }
    });
    getIndexNav().then(res => {
      if(res.status === ERR_OK){
        this.news = res.data.news;
        this.nears = res.data.nears;
        this.recoms = res.data.recoms;
      }
    });
  },
};
</script>

<style lang="stylus" scoped>
</style>
