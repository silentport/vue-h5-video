## A H5 video component for vue
[![Build Status](https://travis-ci.org/silentport/vue-h5-video.svg?branch=master)](https://travis-ci.org/silentport/vue-h5-video)
<a href="https://www.npmjs.com/package/vue-h5-video"><img alt="undefined" src="https://img.shields.io/npm/v/vue-h5-video.svg?style=flat"><a/>

### feature

> Auto size when playing;  
> Suport custom init width and height;  
> Suport speed and retreat when playing;  
> Suport full screen when playing

### install

```javascript
 npm i vue-h5-video --save
```

### import methods

#### global import

```javascript
import { H5Video } from 'vue-h5-video';
Vue.use(H5Video);
```

#### import in some component

```javascript
import { H5Video } from 'vue-h5-video';

export default {
  components: {
    H5Video,
  },
};
```

### usage

```html
<h5-video
  @play="play"
  initHeight="480px"
  :sources="sources"
  poster="http://img.v.trend.mi.rozbuzz.com/wemedia/cover/89c3cf50ae0911e8988e593b4fd90442/61d6562ed1a7c506d50a8e7c67f949fb.png-290.webp"
  src="http://intl.w.xk.miui.com/451a4b2ff292392e9eb85907904645ce"
>
</h5-video>
```

#### props：

| prop           | type    | default                  | explain                                             |
| -------------- | ------- | ------------------------ | --------------------------------------------------- |
| src            | String  | undefined                | video's source link                                 |
| poster         | String  | undefined                | video's poster                                      |
| title          | String  | ''                       | video's title                                       |
| showControlBar | Boolean | true                     | allow control                                       |
| sources        | Array   | []                       | video's source link                                 |
| autoplay       | Boolean | false                    | autoplay when video is loaded                       |
| loop           | Boolean | false                    | replay when playing is end                          |
| preload        | String  | 'auto'                   | load method ,must be one of 'auto','mete' or 'none' |
| initWidth      | String  | '100%'                   | init video's width                                  |
| initHeight     | String  | 'auto'                   | init video's height                                 |
| iconWidth      | String  | '4%'                     | size of play and pause icon                         |
| playIcon       | String  | default path             | custom playIcon                                     |
| pauseIcon      | String  | default path             | custom pauseIcon                                    |
| hasWatermark   | Boolean | false                    | support watermark                                   |
| watermark      | String  | undefined                | watermark url                                       |
| watermarkWidth | Boolean | 60px                     | size of watermark                                   |
| errMsg         | String  | '加载失败，请检查网络！' | error tip                                           |

#### events

| event name |
| ---------- |
| play       |
| pause      |
| ended      |
| canplay    |
| error      |
| timeupdate |
